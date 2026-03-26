<script setup>

import { apiPost, apiPoint, hostUrl } from '@/common/api'
import logo from '@/common/img/sunny_logo.png'
import { allergyMap } from '@/common/allergy'
const logout = () => {
  if (confirm('로그아웃 하시겠습니까?')) {
    sessionStorage.clear()
    window.location.href = '/login'
  }
}

const student = ref({});
const isGrade1 = computed(() => Number(student.value?.credit_score) === 1)
const memberPoint = ref(0)

const storeItems = ref([])
const teacher = ref(null)

const dispot = ref(null)
const dispotTotal = ref(0)

const deposit = ref(null)
const isEndDeposit = ref(false)

function isMatured(endDateStr) {
  if (!endDateStr) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0) // 오늘 00시 기준

  const endDate = new Date(endDateStr)
  endDate.setHours(0, 0, 0, 0)

  return today >= endDate   // true면 만기일 지남
}


function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
const isDepositApi = async () => {
  const res = await apiPost('member.php', {
    mode: 'deposit_status',
    idnt_code: student.value?.idnt_code
  })

  if (res.result === 'SUCCESS') {
    deposit.value = res.data

    if (isMatured(deposit.value?.end_date)) {
      isEndDeposit.value = true
    } else {
      isEndDeposit.value = false
    }
  }
}


const fetchStoreItems = async () => {
  const res = await apiPost('store.php', {
    mode: 'storeList',
    teacher: teacher,
  })

  if (res.result === 'SUCCESS') {
    storeItems.value = res.data
  }
}


const maturityDate = ref(null)

const selectedDepositIdx = ref(0)
const selectedDeposit = computed(() => dispot.value?.deposit_types?.[selectedDepositIdx.value] || null)

const isDispotApi = async () => {
  const res = await apiPost('teacher.php', {
    mode: 'dispot',
    teacher: teacher?.value,
  })

  if (res.result === 'SUCCESS') {
    dispot.value = res.data
    updateMaturityDate()
  }
}

const updateMaturityDate = () => {
  const days = Number(selectedDeposit.value?.deposit_day) || 30
  const today = new Date()
  const date = new Date(today)
  date.setDate(today.getDate() + days)
  maturityDate.value = date.toISOString().split('T')[0]
}

watch(selectedDepositIdx, () => {
  updateMaturityDate()
})


const fetchStudentInfo = async () => {
  const res = await apiPost('member.php', {
    mode: 'studentInfo',
    idnt_code: student.value?.idnt_code || sessionStorage.getItem('idnt_code')
  })
  if (res.result === 'SUCCESS') {
    student.value = res.data
    sessionStorage.setItem('student', JSON.stringify(res.data))
  }
}

onMounted(async () => {
  student.value = JSON.parse(sessionStorage.getItem('student')) || {}
  teacher.value = student.value?.teacher
  await fetchStudentInfo()
  memberPoint.value = await apiPoint()
  fetchStoreItems()
  await isHope()
  await isFriend()
  await isDispotApi()
  await isDepositApi()
  await fetchPoints()
})


useSeoMeta({
  title: "Jelly School-OS",
  description:
    "젤리에서 경제,화폐 경험을 누려보세요.",
});

const isMoney = ref(false)

const meals = ref([])

const fetchMeals = async () => {
  const res = await apiPost('meal.php', {
    idx: student.value?.teacher
  })

  if (res.result === 'SUCCESS' || res.result === 'CACHED') {
    meals.value = res.data || []
  }
}

const points = ref([])
const page = ref(1)
const hasMore = ref(true)
const isLoading = ref(false)

const fetchPoints = async () => {
  if (isLoading.value || (!hasMore.value && page.value > 1)) return
  isLoading.value = true
  try {
    const res = await apiPost('member.php', {
      mode: 'pointList',
      idnt_code: student.value?.idnt_code || sessionStorage.getItem('idnt_code'),
      page: page.value
    })

    if (res.result === 'SUCCESS' && Array.isArray(res.data)) {
      if (res.data.length < 10) {
        hasMore.value = false
      }
      points.value = [...points.value, ...res.data]
      page.value++
    } else {
      hasMore.value = false
    }
  } catch (e) {
    console.error(e)
    hasMore.value = false
  } finally {
    isLoading.value = false
  }
}

const refreshPoints = async () => {
  points.value = []
  page.value = 1
  hasMore.value = true
  await fetchPoints()
}



// 문자열에서 알레르기 번호만 추출
const extractAllergyNames = (text) => {
  const match = text.match(/\(([\d.,\s]+)\)/)
  if (!match) return []

  return match[1]
    .split(/[.,\s]+/)
    .map(Number)
    .filter(n => allergyMap[n])
    .map(n => allergyMap[n])
}



const isOpenHopeModal = ref(false);
const hopeToday = ref({ result: "FAIL" });

const isHope = async () => {
  const res = await apiPost('member.php', {
    mode: 'studentHope',
    idnt_code: student.value?.idnt_code
  })

  hopeToday.value = res
}

const isOpenFriendModal = ref(false);
const friendToday = ref({ result: "FAIL" });
const isFriend = async () => {
  const res = await apiPost('member.php', {
    mode: 'studentFriend',
    idnt_code: student.value?.idnt_code
  })

  friendToday.value = res
}






const onClickHope = async () => {
  if (hopeToday.value?.result === 'SUCCESS') {
    isOpenHopeModal.value = true
    return;
  }

  const cost = Number(student.value?.credit_score) === 1 ? (Number(dispot.value?.grade1_hope_price) || 0) : 10;
  if (memberPoint.value < cost) {
    alert('금액이 부족합니다.')
    return;
  }

  if (confirm(`${cost}${dispot.value?.currency_name || '돌멩이'}로 오늘의 운세를 확인할까요?`)) {
    const res = await apiPost('member.php', {
      mode: 'studentHopeInsert',
      idnt_code: sessionStorage.getItem('idnt_code'),
      point: cost
    })

    if (res.result === 'SUCCESS') {
      await isHope()
      memberPoint.value = await apiPoint()
      await refreshPoints()
      isOpenHopeModal.value = true
    }
  }
}


const handleBankerToggle = async () => {
  // This is teacher page logic
}

const fireConfetti = async () => {
  if (typeof window === 'undefined') return

  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js'
  script.onload = () => {
    // Initial big burst
    window.confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#fbbf24', '#ffffff']
    });

    const end = Date.now() + (3 * 1000);
    const colors = ['#3b82f6', '#fbbf24', '#ffffff'];

    (function frame() {
      window.confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      window.confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
  document.body.appendChild(script)
}

const onClickFriend = async () => {
  if (friendToday.value?.result === 'SUCCESS') {
    isOpenFriendModal.value = true
    if (friendToday.value.data.is_soulmate) fireConfetti()
    return;
  }

  const cost = Number(student.value?.credit_score) === 1 ? (Number(dispot.value?.grade1_soulmate_price) || 0) : 10;

  if (memberPoint.value < cost) {
    alert('금액이 부족합니다.')
    return;
  }
  if (confirm(`${cost}${dispot.value?.currency_name || '돌멩이'}로 오늘의 친구를 확인할까요?`)) {

    const res = await apiPost('member.php', {
      mode: 'studentFriendInsert',
      idnt_code: sessionStorage.getItem('idnt_code'),
      point: cost
    })

    if (res.result === 'SUCCESS') {
      await isFriend()
      memberPoint.value = await apiPoint()
      await refreshPoints()
      isOpenFriendModal.value = true
      if (friendToday.value.data.is_soulmate) fireConfetti()
    }

  }
}



const onClickEndDeposit = async () => {

  if (confirm("적금을 만기해지하시겠습니까?")) {

    const res = await apiPost('member.php', {
      mode: 'depositEnd',
      idnt_code: sessionStorage.getItem('idnt_code'),
    })

    if (res.result === 'SUCCESS') {
      await fireConfetti()
      alert(`🎉 축하합니다! 적금이 만기되어 원금과 이자가 지갑에 듬뿍 들어왔어요!`)
      
      memberPoint.value = await apiPoint()
      await isDispotApi()
      await isDepositApi()
      await refreshPoints()
    }

  } else {
    // 취소 버튼 클릭 시 실행
    console.log("삭제 취소");
  }
}



const router = useRouter()
const amount = ref('')
const submitting = ref(false)

function parseAmount(raw) {
  const n = Number(String(raw ?? '').replace(/[^\d]/g, ''))
  return Number.isFinite(n) ? n : 0
}
async function createSavings() {
  const n = parseAmount(amount.value)
  if (!n || n < 1) {
    alert('적금 금액을 입력해 주세요.')
    return
  }
  const product = selectedDeposit.value
  if (!product) return alert('상품을 선택해주세요.')

  const isGrade1 = Number(student.value?.credit_score) === 1
  const baseMax = Number(product.deposit_max) || 0
  const bonusMax = isGrade1 ? (Number(dispot.value?.grade1_deposit_max) || 0) : 0
  const maxLimit = baseMax + bonusMax
  const minLimit = Number(product.deposit_min) || 0

  if (minLimit > 0 && n < minLimit) {
    alert(`최소 ${minLimit.toLocaleString()} ${dispot.value?.currency_name} 이상 납입해야 합니다.`)
    return
  }

  if (maxLimit > 0 && maxLimit < n) {
    alert(`최대 ${maxLimit.toLocaleString()} ${dispot.value?.currency_name} 까지만 납입 가능합니다.`)
    return;
  }

  if (memberPoint.value < n) {
    alert('금액이 부족합니다.')
    return;
  }

  if (submitting.value) return;


  const ok = confirm(
    `적금 금액 ${n.toLocaleString()} ${dispot.value?.currency_name} 예치하기.\n` +
    `만기일 ${maturityDate.value} 전에는 출금할 수 없습니다. 진행할까요?`
  )
  if (!ok) return

  try {
    submitting.value = true
    // TODO: 백엔드 연동 시 이 부분에서 API 호출
    // await $fetch('/api/savings', { method:'POST', body: { amount: n, termDays: 14, rate: 5 } })

    const baseRate = Number(selectedDeposit.value?.deposit_interest) || 0
    const prodBonus = isGrade1 ? (Number(selectedDeposit.value?.grade1_deposit_interest) || 0) : 0
    const globBonus = isGrade1 ? (Number(dispot.value?.grade1_deposit_interest) || 0) : 0
    const totalRate = baseRate + prodBonus + globBonus

    const res = await apiPost('member.php', {
      mode: 'interest',
      idnt_code: sessionStorage.getItem('idnt_code'),
      amount: n,
      teacher: teacher?.value,
      amount_interest: dispotTotal?.value,
      interest_rate: totalRate,
      deposit_type_idx: selectedDeposit.value?.idx,
      deposit_name: selectedDeposit.value?.deposit_name || "적금통장",
      end_date: maturityDate.value
    })

    if (res.result === 'SUCCESS') {
      // await isFriend()
      // memberPoint.value = await apiPoint()
      memberPoint.value = await apiPoint()
      await isDispotApi()
      await isDepositApi()
      await refreshPoints()
    }


  } finally {
    submitting.value = false
  }
}


watch([amount, selectedDepositIdx], () => {
  const n = parseAmount(amount.value)
  const isGrade1 = Number(student.value?.credit_score) === 1
  const product = selectedDeposit.value
  if (!product) return

  const baseRate = Number(product.deposit_interest) || 0
  const productBonus = isGrade1 ? (Number(product.grade1_deposit_interest) || 0) : 0
  const globalBonus = isGrade1 ? (Number(dispot.value?.grade1_deposit_interest) || 0) : 0
  const rate = baseRate + productBonus + globalBonus

  dispotTotal.value = Math.floor(n * rate / 100)
})
</script>


<template>
  <div class="pb-12 space-y-10">
    <!-- 👑 프리미엄 스마트 지갑 (Header) -->
    <div
      class="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-[40px] shadow-2xl shadow-blue-200 overflow-hidden transition-all hover:scale-[1.01]">
      <!-- 배경 장식 -->
      <div class="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>

      <div class="relative z-10 p-8 flex flex-col items-center">
        <!-- 프로필 섹션 -->
        <div class="mb-6 relative group">
          <div
            class="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
          <img :src="dispot?.qr_bg ? (dispot.qr_bg.startsWith('http') ? dispot.qr_bg : hostUrl + dispot.qr_bg) : logo"
            alt="Class Logo"
            class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl bg-white p-1 relative z-10">
        </div>

        <div class="text-center space-y-1 mb-8">
          <p class="text-white/60 text-[10px] font-black tracking-[0.3em] uppercase">{{ dispot?.mb_school ||
            'JellySchool' }} {{ dispot?.mb_grade }}-{{ dispot?.mb_class }}</p>
          <h2 class="text-white text-3xl font-black tracking-tight">{{ student?.student_name }}<span
              class="text-blue-200 text-xl ml-1">친구</span></h2>
          <div v-if="student?.badges" class="flex flex-wrap gap-1 mt-1 justify-center">
            <span v-for="(badge, bIdx) in student.badges.split(',')" :key="bIdx"
              class="text-2xl drop-shadow-lg animate-bounce" :style="{ animationDelay: (bIdx * 0.1) + 's' }">{{ badge
              }}</span>
          </div>
        </div>

        <!-- 잔액 카드 -->
        <div @click="isMoney = !isMoney"
          class="cursor-pointer group bg-white/10 backdrop-blur-xl rounded-[32px] p-8 w-full max-w-sm border border-white/20 shadow-inner flex flex-col items-center transition-all hover:bg-white/15 active:scale-95">
          <p class="text-white/60 text-[9px] font-bold uppercase tracking-[0.2em] mb-3">내 {{ dispot?.currency_name ||
            '지갑' }} 총 잔액</p>
          <div v-if="isMoney" class="flex items-baseline gap-2 transform transition-all">
            <span class="text-white text-5xl font-black tabular-nums">{{ Number(memberPoint || 0).toLocaleString()
              }}</span>
            <span class="text-white/70 text-lg font-bold">{{ dispot?.currency_name }}</span>
          </div>
          <div v-else class="flex items-center gap-3 py-2 opacity-80">
            <span class="i-heroicons-eye-solid w-6 h-6 text-white/50" />
            <span class="text-white text-xl font-black">잔액 확인하기</span>
          </div>
        </div>
      </div>

      <!-- 로그아웃 (우상단) -->
      <button @click="logout" style="position:absolute; z-index:99999;"
        class="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-all shadow-lg backdrop-blur-md">
        <span class="i-heroicons-arrow-right-on-rectangle w-5 h-5" />
      </button>
    </div>

    <!-- 🏦 적금 센터 (Savings) -->
    <div class="space-y-8">
      <!-- 적금 가입 안했을 때 -->
      <section v-if="!deposit?.deposit_exists" class="space-y-6">
        <div class="flex items-center justify-between px-2">
          <div class="flex items-center gap-2">
            <span class="i-heroicons-banknotes-solid w-6 h-6 text-emerald-500" />
            <h3 class="text-lg font-black text-gray-800">우리반 적금 상품</h3>
          </div>
          <p class="text-[11px] font-bold text-gray-400">하나를 선택하여 가입하세요.</p>
        </div>

        <!-- 상품 리스트 -->
        <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1">
          <div v-for="(type, idx) in dispot?.deposit_types" :key="idx" 
            @click="selectedDepositIdx = idx"
            :class="['min-w-[200px] p-6 rounded-[32px] border-2 transition-all cursor-pointer relative',
              selectedDepositIdx === idx ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-100' : 'bg-white border-gray-100 hover:border-emerald-200 shadow-sm']">
            
            <div v-if="selectedDepositIdx === idx" class="absolute right-4 top-4">
              <span class="i-heroicons-check-circle-solid w-8 h-8 text-emerald-500" />
            </div>

            <div class="space-y-4">
              <p class="text-xs font-black text-emerald-600 uppercase tracking-widest">{{ type.deposit_day }}일 만기</p>
              <div>
                <h4 class="text-lg font-black text-gray-800 truncate">{{ type.deposit_name }}</h4>
                <p class="text-[10px] text-gray-400 font-bold mt-1 tracking-tighter">
                  이율 {{ type.deposit_interest }}% + 우대 {{ type.grade1_deposit_interest }}%
                  <span v-if="dispot?.grade1_deposit_interest > 0" class="text-indigo-500 font-black">
                    (+1등급 {{ dispot.grade1_deposit_interest }}%)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 가입 입력 섹션 -->
        <Transition name="fade-slide">
          <div v-if="selectedDeposit" class="p-8 rounded-[40px] bg-white border border-gray-100 shadow-2xl shadow-emerald-50 space-y-6">
            <div class="flex justify-between items-center bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
              <div>
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">선택된 상품</p>
                <p class="text-base font-black text-gray-800">{{ selectedDeposit.deposit_name }}</p>
              </div>
              <div class="text-right">
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">만기 예정일</p>
                <p class="text-base font-black text-emerald-600">{{ formatDate(maturityDate) }}</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1 relative">
                <UInput v-model="amount" placeholder="저금할 금액 입력" size="xl" type="number"
                  input-class="h-16 font-black text-xl pl-12 rounded-[24px] border-2 border-gray-50 focus:border-emerald-400 bg-gray-100/30" />
                <span class="absolute left-5 top-1/2 -translate-y-1/2 i-heroicons-banknotes-solid w-6 h-6 text-gray-300" />
              </div>
              <UButton label="적금 가입하기" size="xl" color="emerald"
                class="px-10 rounded-[24px] h-16 font-black text-lg shadow-xl shadow-emerald-100 transition-all hover:-translate-y-1 active:scale-95"
                :loading="submitting" @click="createSavings" />
            </div>

            <div class="flex items-center justify-between text-[11px] font-black text-gray-400 px-2 tracking-widest uppercase">
              <span class="flex items-center gap-1.5">
                <span v-if="Number(selectedDeposit.deposit_min) > 0">최소 {{ Number(selectedDeposit.deposit_min).toLocaleString() }}{{ dispot?.currency_name }} ~ </span>
                최대 {{ (Number(selectedDeposit.deposit_max) + (isGrade1 ? (Number(selectedDeposit.grade1_deposit_max || 0) + Number(dispot?.grade1_deposit_max || 0)) : 0)).toLocaleString() }}{{ dispot?.currency_name }}
              </span>
              <span v-if="dispotTotal > 0" class="text-emerald-500 flex items-center gap-1.5 animate-pulse">
                <span class="i-heroicons-check-badge w-4 h-4" />예상 이자 +{{ Number(dispotTotal).toLocaleString() }}{{ dispot?.currency_name }}
              </span>
            </div>
          </div>
        </Transition>
      </section>

      <!-- 적금 가입 중일 때 -->
      <section v-else
        class="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-[40px] text-white shadow-2xl shadow-emerald-100">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div class="relative z-10">
          <div class="flex justify-between items-start mb-10">
            <div>
              <h3 class="text-2xl font-black flex items-center gap-2">
                {{ deposit?.deposit_name || '진행 중인 적금' }}
                <span
                  class="text-[10px] bg-white/20 px-3 py-1 rounded-full font-black uppercase tracking-widest backdrop-blur-sm">Active</span>
              </h3>
              <p class="text-sm text-white/70 font-medium">목표를 위해 열심히 모으는 중! 대단해요 👍</p>
            </div>
            <div class="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <span class="i-heroicons-rocket-launch-solid w-7 h-7" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-8 bg-black/10 rounded-[32px] p-8 border border-white/10 shadow-inner">
            <div class="space-y-1">
              <p class="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">모은 원금</p>
              <p class="text-3xl font-black tabular-nums">{{ Number(deposit?.amount || 0).toLocaleString() }}<span
                  class="text-sm ml-1 opacity-70">{{ dispot?.currency_name }}</span></p>
            </div>
            <div class="space-y-1 text-right border-l border-white/10 pl-8">
              <p class="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">이자 혜택</p>
              <p class="text-3xl font-black text-yellow-300 tabular-nums">+{{
                (Math.floor(Number(deposit?.amount || 0) * (Number(dispot?.deposit_interest || 0) + (isGrade1 ?
                  Number(dispot?.grade1_deposit_interest || 0) : 0)) / 100)).toLocaleString()
              }}<span class="text-sm ml-1 opacity-70">{{ dispot?.currency_name }}</span></p>
            </div>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div class="text-xs font-bold text-white/70 space-y-1">
              <p class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-300"></span>{{
                formatDate(deposit?.start_date) }} 가입됨</p>
              <p class="flex items-center gap-2 text-white"><span
                  class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>{{ formatDate(deposit?.end_date) }} 만기</p>
            </div>
            <UButton label="원금 + 이자 모두 받기" :disabled="!isEndDeposit" color="white" size="xl"
              class="px-12 rounded-[24px] font-black text-emerald-600 shadow-2xl transition-transform hover:-translate-y-1 active:scale-95 disabled:opacity-40"
              @click="onClickEndDeposit()" />
          </div>
        </div>
      </section>
    </div>

    <!-- ⚡️ 빠른 메뉴 (Quick Menu) -->
    <div class="grid grid-cols-2 gap-4">
      <router-link to="/income"
        class="group relative overflow-hidden bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2">
        <div
          class="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform">
        </div>
        <div
          class="w-14 h-14 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-12 transition-transform">
          <span class="i-heroicons-plus-circle-solid w-8 h-8" />
        </div>
        <p class="text-xl font-black text-gray-800">{{ dispot?.currency_name || '지갑' }} 채우기</p>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Income History</p>
      </router-link>

      <router-link to="/expense"
        class="group relative overflow-hidden bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2">
        <div
          class="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-50 rounded-full opacity-50 group-hover:scale-150 transition-transform">
        </div>
        <div
          class="w-14 h-14 bg-rose-100 rounded-3xl flex items-center justify-center text-rose-600 mb-6 group-hover:rotate-12 transition-transform">
          <span class="i-heroicons-minus-circle-solid w-8 h-8" />
        </div>
        <p class="text-xl font-black text-gray-800">{{ dispot?.currency_name || '지갑' }} 쓰기</p>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Expense Plan</p>
      </router-link>
    </div>

    <!-- 🍱 오늘의 소식 (Daily Highlights) -->
    <section class="space-y-6">
      <div class="flex items-center gap-2 px-2">
        <span class="i-heroicons-sparkles-solid w-5 h-5 text-yellow-500 animate-pulse" />
        <h3 class="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Today's Special News</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- 스템프 보드 -->
        <div class="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-xs font-black text-gray-400 uppercase tracking-widest">My Stamp Board</span>
            <div class="flex items-center gap-1">
              <span class="text-xs font-black text-orange-500">{{ student?.stamp_count || 0 }}</span>
              <span class="text-[10px] text-gray-300">/ 10</span>
            </div>
          </div>

          <div class="grid grid-cols-5 gap-2 pb-2">
            <div v-for="i in 10" :key="i"
              :class="['aspect-square rounded-xl flex items-center justify-center border-2 transition-all',
                i <= (student?.stamp_count || 0) ? 'bg-orange-50 border-orange-200 text-orange-500 shadow-inner' : 'bg-gray-50/50 border-gray-100 text-gray-200']">
              <span
                :class="[i <= (student?.stamp_count || 0) ? 'i-heroicons-hand-raised-solid' : 'i-heroicons-hand-raised', 'w-6 h-6']"></span>
            </div>
          </div>
          <p class="text-[11px] text-gray-400 font-bold text-center">스템프 10개를 모으면 <span class="text-indigo-500">랜덤
              뱃지</span>가 지급됩니다!</p>
        </div>

        <!-- 단짝 친구 -->
        <div @click="onClickFriend"
          :class="['p-6 rounded-[32px] border shadow-sm transition-all cursor-pointer flex flex-col justify-between h-full',
            friendToday?.result === 'FAIL' ? 'bg-gray-50 border-gray-100 hover:bg-blue-50' : 'bg-blue-500 border-blue-400 text-white shadow-blue-100']">
          <div class="flex justify-between items-center">
            <span
              :class="['text-[10px] font-black uppercase tracking-widest', friendToday?.result === 'FAIL' ? 'text-gray-400' : 'text-blue-200']">Today's
              Friend</span>
            <span
              :class="['i-heroicons-sparkles-solid w-5 h-5', friendToday?.result === 'FAIL' ? 'text-gray-200' : (friendToday?.data?.is_soulmate ? 'text-yellow-300 animate-pulse' : 'text-white animate-ping')]" />
          </div>
          <div class="py-4">
            <p v-if="friendToday?.result === 'FAIL'" class="text-base font-black text-gray-400">오늘의 단짝을<br>확인해보세요!</p>
            <div v-else class="space-y-1">
              <p class="text-xs font-bold opacity-80">오늘 최고의 파트너는</p>
              <p class="text-2xl font-black">{{ friendToday?.data?.mb_name }}</p>
            </div>
          </div>
          <div v-if="friendToday?.result === 'FAIL'" class="text-xs font-bold text-blue-500 flex items-center gap-1">
            탭하여 확인 ({{ isGrade1 ? (Number(dispot?.grade1_soulmate_price) || 0) : 10 }}{{ dispot?.currency_name || '원'
            }})
            <span class="i-heroicons-chevron-right w-3 h-3" />
          </div>
        </div>

        <!-- 행운의 운세 -->
        <div @click="onClickHope"
          :class="['p-6 rounded-[32px] border shadow-sm transition-all cursor-pointer flex flex-col justify-between h-full',
            hopeToday?.result === 'FAIL' ? 'bg-gray-50 border-gray-100 hover:bg-purple-50' : 'bg-purple-600 border-purple-400 text-white shadow-purple-100']">
          <div class="flex justify-between items-center">
            <span
              :class="['text-[10px] font-black uppercase tracking-widest', hopeToday?.result === 'FAIL' ? 'text-gray-400' : 'text-purple-200']">Today's
              Fortune</span>
            <span
              :class="['i-heroicons-moon-solid w-5 h-5', hopeToday?.result === 'FAIL' ? 'text-gray-200' : 'text-yellow-300 animate-pulse']" />
          </div>
          <div class="py-4">
            <p v-if="hopeToday?.result === 'FAIL'" class="text-base font-black text-gray-400">오늘의 운세는<br>과연 어떨까요?</p>
            <p v-else class="text-sm font-bold leading-relaxed line-clamp-3">{{ hopeToday?.data?.result_text }}</p>
          </div>
          <div v-if="hopeToday?.result === 'FAIL'" class="text-xs font-bold text-purple-500 flex items-center gap-1">
            탭하여 확인 ({{ isGrade1 ? (Number(dispot?.grade1_hope_price) || 0) : 10 }}{{ dispot?.currency_name || '원' }})
            <span class="i-heroicons-chevron-right w-3 h-3" />
          </div>
        </div>
      </div>
    </section>

    <!-- 📝 지갑 히스토리 (History) -->
    <section>
      <div class="flex items-center justify-between mb-4 px-3">
        <h3 class="text-xs font-black text-gray-400 flex items-center gap-2 uppercase tracking-[0.3em]">
          <span class="i-heroicons-list-bullet-solid w-5 h-5 text-blue-500" />
          Realtime History
        </h3>
      </div>

      <div class="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50/50">
        <div v-if="points?.length > 0">
          <div v-for="item in points" :key="item.idx"
            class="flex items-center justify-between p-8 hover:bg-gray-50/50 transition-all group">
            <div class="flex items-center gap-5">
              <div :class="['w-14 h-14 rounded-3xl flex items-center justify-center font-black transition-all group-hover:scale-110',
                item.point_type === 'save' ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600']">
                <span v-if="item.point_type === 'save'" class="i-heroicons-plus-circle-solid w-8 h-8" />
                <span v-else class="i-heroicons-minus-circle-solid w-8 h-8" />
              </div>
              <div>
                <p class="text-base font-black text-gray-800 leading-tight">{{ item.description }}</p>
                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1">{{ item.c_datetime }}</p>
              </div>
            </div>
            <div class="text-right">
              <p
                :class="['text-xl font-black tabular-nums', item.point_type === 'save' ? 'text-blue-600' : 'text-rose-600']">
                {{ item.point_type === 'save' ? '+' : '-' }}{{ Number(item.point).toLocaleString() }}
              </p>
              <p class="text-[9px] text-gray-300 font-black uppercase tracking-widest mt-0.5">{{ item.point_type ===
                'save' ? 'Received' : 'Paid Out' }}</p>
            </div>
          </div>

          <div v-if="hasMore" class="p-10 text-center bg-gray-50/20">
            <UButton label="과거 활동 내역 더 불러오기" color="gray" variant="ghost" icon="i-heroicons-chevron-down"
              class="rounded-[24px] px-12 h-14 font-black transition-all hover:bg-white border border-gray-100"
              @click="fetchPoints" :loading="isLoading" />
          </div>
        </div>
        <div v-else class="py-32 text-center">
          <div
            class="w-24 h-24 bg-gray-50 rounded-[40px] flex items-center justify-center mx-auto mb-6 border border-dashed border-gray-200 shadow-inner">
            <span class="i-heroicons-clipboard-document-check-solid w-12 h-12 text-gray-200" />
          </div>
          <p class="text-base font-black text-gray-300">내역이 깨끗합니다!</p>
        </div>
      </div>
    </section>

    <!-- ✨ 오늘의 운세 프리미엄 모달 -->
    <UModal v-model="isOpenHopeModal"
      :ui="{ width: 'max-w-md', rounded: 'rounded-[40px]', padding: 'p-0', background: 'bg-transparent' }">
      <div
        class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-8 text-center min-h-[400px] flex flex-col justify-center border border-white/10 shadow-2xl">
        <!-- 배경 우주 애니메이션 효과 (단순) -->
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.15),transparent)] animate-pulse">
        </div>

        <div class="relative z-10 space-y-8">
          <div class="flex flex-col items-center">
            <div
              class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-white/20 shadow-xl animate-bounce">
              <span class="i-heroicons-moon-solid w-12 h-12 text-yellow-300" />
            </div>
            <p class="text-xs font-black text-purple-300 uppercase tracking-[0.4em] mb-2">Today's Prophecy</p>
            <h3 class="text-white text-2xl font-black">오늘의 운세가 도달했습니다</h3>
          </div>

          <div class="bg-white/5 backdrop-blur-lg rounded-[32px] p-8 border border-white/10 shadow-inner">
            <p class="text-lg font-bold text-white leading-relaxed animate-typing overflow-hidden whitespace-normal">
              {{ hopeToday?.data?.result_text }}
            </p>
          </div>

          <UButton label="확인했습니다" size="xl" color="white" variant="solid"
            class="w-full rounded-[24px] h-14 font-black text-indigo-900 shadow-xl shadow-purple-900/50 hover:bg-gray-100 transition-all active:scale-95"
            @click="isOpenHopeModal = false" />
        </div>
      </div>
    </UModal>
    <!-- 🌈 오늘의 친구 모달 (Friend Modal) -->
    <UModal v-model="isOpenFriendModal">
      <div
        class="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[40px] shadow-2xl">
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -left-20 -bottom-20 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>

        <div class="relative z-10 space-y-8 text-center pt-10">
          <div class="relative inline-block mb-4">
            <div v-if="friendToday?.data?.is_soulmate"
              class="absolute inset-0 bg-pink-500/20 blur-3xl animate-pulse rounded-full"></div>
            <div
              class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl mx-auto animate-bounce overflow-hidden relative">
              <Icon name="solar:users-group-rounded-bold-duotone" class="w-16 h-16 text-white" />
            </div>
            <div
              class="absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-lg border-2 border-white animate-pulse">
              <span class="i-heroicons-sparkles-solid w-5 h-5 text-white" />
            </div>
          </div>

          <div class="space-y-2">
            <p class="text-xs font-black text-blue-200 uppercase tracking-[0.4em]">
              {{ friendToday?.data?.is_soulmate ? 'Legendary Partners' : 'The Chosen Partner' }}
            </p>
            <div v-if="friendToday?.data?.is_soulmate"
              class="inline-flex items-center gap-2 bg-blue-500/30 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-2">
              <span class="i-heroicons-hand-thumb-up-solid w-3 h-3 text-blue-300" />
              서로 통했다! 찐친 인증
            </div>
            <h3 class="text-white text-3xl font-black">
              {{ friendToday?.data?.is_soulmate ? '와! 서로가 서로를 선택했어요!' : '오늘의 최고 단짝은?' }}
            </h3>
          </div>

          <div class="bg-white/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/10 shadow-inner group">
            <h2 class="text-5xl font-black text-white tracking-widest animate-typing">
              {{ friendToday?.data?.mb_name }}
            </h2>
            <p class="text-blue-100 text-sm mt-4 font-bold opacity-60">오늘은 이 친구와 함께하면 <br>더 즐거운 일이 생길 거예요! ✨</p>
          </div>

          <!-- <UButton label="함께 모험 떠나기" size="xl" color="white" variant="solid"
            class="w-full rounded-[24px] h-16 font-black text-blue-900 shadow-xl shadow-indigo-900/50 hover:bg-white transition-all active:scale-95"
            @click="isOpenFriendModal = false" /> -->
        </div>
      </div>
    </UModal>
  </div>
</template>

<style scoped>
@keyframes typing {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-typing {
  animation: typing 1s ease-out forwards;
}
</style>