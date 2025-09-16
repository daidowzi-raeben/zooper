<script setup>

import { apiPost, apiPoint } from '@/common/api'
import logo from '@/common/img/sunny_logo.png'
import { allergyMap } from '@/common/allergy'
const logout = () => {
  sessionStorage.removeItem('idnt_code')
  sessionStorage.removeItem('student')
  sessionStorage.removeItem('t_idnt_code')
  sessionStorage.removeItem('teacher')
  window.location.href = '/login'
}

const student = ref({});
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

const isDispotApi = async () => {
  const res = await apiPost('teacher.php', {
    mode: 'dispot',
    teacher: teacher?.value,
  })

  if (res.result === 'SUCCESS') {
    dispot.value = res.data

    // ref 안의 값에서 꺼내야 함
    const weeks = dispot.value?.deposit_cycle || 2  // 기본값 2주
    const today = new Date()
    const date = new Date(today)
    date.setDate(today.getDate() + weeks * 7)

    // YYYY-MM-DD 포맷
    maturityDate.value = date.toISOString().split('T')[0]
  }
}


onMounted(async () => {
  if (sessionStorage.getItem('student')) {
    student.value = JSON.parse(sessionStorage.getItem('student'))
  }
  memberPoint.value = await apiPoint()
  teacher.value = JSON.parse(sessionStorage.getItem('student'))?.teacher
  fetchStoreItems()
  await fetchMeals()
  await isHope()
  await isFriend()
  await isDispotApi()
  await isDepositApi()

})

useSeoMeta({
  title: "Fayaz Ahmed",
  description:
    "I'm Fayaz, your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});

const isMoney = ref(false)

const meals = ref([])

const fetchMeals = async () => {
  const res = await apiPost('meal.php', {
    idx: student.value?.teacher
  })

  if (res.result === 'SUCCESS' || res.result === 'CACHED') {
    meals.value = res.data
  }
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



const hopeToday = ref({ result: "FAIL" });
const isHope = async () => {
  const res = await apiPost('member.php', {
    mode: 'studentHope',
    idnt_code: student.value?.idnt_code
  })

  hopeToday.value = res
}

const friendToday = ref({ result: "FAIL" });
const isFriend = async () => {
  const res = await apiPost('member.php', {
    mode: 'studentFriend',
    idnt_code: student.value?.idnt_code
  })

  friendToday.value = res
}






const onClickHope = async () => {
  if (memberPoint.value < 10) {
    alert('금액이 부족합니다.')
    return;
  }
  if (confirm("10돌맹이로 오늘의 운세를 확인할까요?")) {

    const res = await apiPost('member.php', {
      mode: 'studentHopeInsert',
      idnt_code: sessionStorage.getItem('idnt_code'),
      point: 10
    })

    if (res.result === 'SUCCESS') {
      await isHope()
      memberPoint.value = await apiPoint()
    }

  } else {
    // 취소 버튼 클릭 시 실행
    console.log("삭제 취소");
  }
}


const onClickFriend = async () => {
  if (memberPoint.value < 10) {
    alert('금액이 부족합니다.')
    return;
  }
  if (confirm("10돌맹이로 오늘의 친구를 확인할까요?")) {

    const res = await apiPost('member.php', {
      mode: 'studentFriendInsert',
      idnt_code: sessionStorage.getItem('idnt_code'),
      point: 10
    })

    if (res.result === 'SUCCESS') {
      await isFriend()
      memberPoint.value = await apiPoint()
    }

  } else {
    // 취소 버튼 클릭 시 실행
    console.log("삭제 취소");
  }
}



const onClickEndDeposit = async () => {

  if (confirm("적금을 만기해지하시겠습니까?")) {

    const res = await apiPost('member.php', {
      mode: 'depositEnd',
      idnt_code: sessionStorage.getItem('idnt_code'),
    })

    if (res.result === 'SUCCESS') {
      memberPoint.value = await apiPoint()
      await isDispotApi()
      await isDepositApi()
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
  if (dispot.value?.deposit_min > n) {
    alert(`${dispot.value?.deposit_min} ${dispot.value?.currency_name} ~ ${dispot.value?.deposit_max} ${dispot.value?.currency_name} 의 금액만 가능합니다.`)
    return;
  }
  if (dispot.value?.deposit_max < n) {
    alert(`${dispot.value?.deposit_min} ${dispot.value?.currency_name} ~ ${dispot.value?.deposit_max} ${dispot.value?.currency_name} 의 금액만 가능합니다.`)
    return;
  }

  if (memberPoint.value < n) {
    alert('금액이 부족합니다.')
    return;
  }


  const ok = confirm(
    `적금 금액 ${n.toLocaleString()}원을 예치합니다.\n` +
    `만기일 ${maturityDate.value} 전에는 출금할 수 없습니다. 진행할까요?`
  )
  if (!ok) return

  try {
    submitting.value = true
    // TODO: 백엔드 연동 시 이 부분에서 API 호출
    // await $fetch('/api/savings', { method:'POST', body: { amount: n, termDays: 14, rate: 5 } })

    const res = await apiPost('member.php', {
      mode: 'interest',
      idnt_code: sessionStorage.getItem('idnt_code'),
      amount: n,
      teacher: teacher?.value,
      amount_interest: dispotTotal?.value,
      interest_rate: dispot.value?.deposit_interest,
      deposit_name: "적금통장",
      end_date: maturityDate.value
    })

    if (res.result === 'SUCCESS') {
      // await isFriend()
      // memberPoint.value = await apiPoint()
      memberPoint.value = await apiPoint()
      await isDispotApi()
      await isDepositApi()
    }


  } finally {
    submitting.value = false
  }
}


watch(amount, (val) => {
  const n = Number(String(val).replace(/[^\d]/g, '')) || 0
  const rate = dispot.value?.deposit_interest || 0
  // 원금 + 이자 (단순 % 계산)
  dispotTotal.value = Math.floor(0 + (n * rate / 100))
})
</script>


<template>
  <div>
    <div class="text-center">
      <img :src="logo" width="150" style="position: absolute; margin-top: -61px;">
    </div>
    <div class="space-y-4">
      <!-- 환영 메시지 -->
      <div class="flex justify-between items-center">
        <p class="text-lg font-semibold text-gray-700">{{ student?.student_name }}친구, 환영합니다 👋</p>
        <button
          class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"
          @click="logout">
          <span class="i-heroicons-arrow-right-on-rectangle w-4 h-4" />
          로그아웃
        </button>
      </div>

      <!-- 내 잔액 -->
      <div
        class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center">
        <div class="flex flex-col justify-center">
          <p class="text-sm opacity-80">내 잔액</p>
          <p class="text-2xl font-bold">
            <span v-if="isMoney" @click="isMoney = false">
              💰 {{ Number(memberPoint || 0).toLocaleString() }} <span class="text-sm font-normal align-middle">{{
                dispot?.currency_name }}</span>
            </span>
            <span v-if="!isMoney" @click="isMoney = true">
              나의 잔액 확인하기
            </span>
          </p>
        </div>
        <UButton label="이체하기" color="white" class="text-blue-800 bg-white bg-opacity-90 hover:bg-opacity-100"
          @click="$router.push('/transfer')" />
      </div>

      <div v-if="!deposit?.amount_interest"
        class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <!-- 좌측: 타이틀/설명 -->
        <div class="flex flex-col justify-center">
          <p class="text-sm opacity-80">단기 적금</p>
          <p class="text-2xl font-bold"> {{ dispot?.deposit_cycle }}주 적금통장 만들기</p>
          <p class="text-xs opacity-90 mt-1">{{ dispot?.deposit_interest }}% 이자받기 · {{ maturityDate }}일 만기 ·
            중도해지 불가 · 최소 {{
              dispot?.deposit_min }} ~ 최대 {{ dispot?.deposit_max }} </p>
        </div>
        <!-- 우측: 입력/버튼 -->
        <div v-if="!deposit?.amount_interest" class="flex items-center gap-2 w-full md:w-auto">
          <UInput v-model="amount" type="tel" inputmode="numeric" placeholder="얼마를 적금할까요? (원)"
            :ui="{ base: 'text-blue-900' }" class="bg-white/90 text-blue-900 rounded-xl w-full md:w-56"
            @keyup.enter="createSavings" />
          <UButton label="만들기" color="secondary" class="rounded-xl" :loading="submitting" @click="createSavings" />
        </div>
        <div>예상이자 : {{ dispotTotal }} {{ dispot?.currency_name }} </div>
      </div>


      <div
        class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex justify-between items-center">
        <!-- 적금 있음 -->
        <div v-if="deposit?.deposit_exists">
          <p class="text-sm opacity-80">내 적금통장</p>
          <p class="text-xl font-bold">
            {{ Number(deposit?.amount).toLocaleString() }}<span class="text-sm font-normal">(원금)</span> + {{
              Number(deposit?.amount_interest).toLocaleString()
            }}<span class="text-sm font-normal">(이자)</span>
            = {{ Number(deposit?.amount + deposit?.amount_interest).toLocaleString() }}
            <span class="text-sm font-normal">{{ dispot?.currency_name }}</span>
          </p>
          <p class="text-sm mt-1">만기일 : {{ formatDate(deposit?.end_date) }}</p>
        </div>

        <!-- 적금 없음 -->
        <div v-else>
          <p class="text-sm opacity-80">내 적금통장</p>
          <p class="text-lg font-bold">아직 개설된 적금이 없습니다</p>
        </div>

        <!-- 버튼 -->

        <UButton label="원금+이자 받기" :disabled="!isEndDeposit" color="secondary"
          class="rounded-xl bg-white text-purple-600" @click="onClickEndDeposit()" />
      </div>

      <!-- 버튼 8개 -->
      <div class="grid grid-cols-2 gap-4">
        <router-link to="/income">
          <div
            class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-center text-lg font-bold cursor-pointer">
            💰 입금
          </div>
        </router-link>
        <router-link to="/expense">
          <div
            class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-300 to-orange-400 text-white text-center text-lg font-bold cursor-pointer">
            💸 출금
          </div>
        </router-link>
        <!-- <router-link to="/tax">
        <div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer">
          💼 세금
        </div>
      </router-link>
      <router-link to="/penalty">
        <div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer">
          ⚠️ 벌금
        </div>
      </router-link> -->


      </div>
    </div>

    <!-- 오늘의 급식 -->
    <div class="mt-8 rounded-2xl shadow-md p-4 bg-white border">
      <p class="text-base font-semibold text-gray-800 mb-2">🍱 오늘의 급식</p>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li v-for="(meal, index) in meals" :key="index">
          <span>{{ meal }}</span>
          <div v-if="extractAllergyNames(meal).length" class="text-xs text-gray-500 ml-4 mt-1">
            ⚠️ 알레르기 유발 식품: {{ extractAllergyNames(meal).join(', ') }}
          </div>
        </li>
      </ul>
    </div>

    <div class="mt-8 rounded-2xl shadow-md  border">
      <div v-if="friendToday?.result === 'FAIL'" @click="onClickFriend" class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg
      font-bold cursor-pointer">
        오늘 함께하면 좋을 것 같은 친구는?
      </div>
      <div v-else class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg
      font-bold cursor-pointer">
        ❤️❤️ {{ friendToday?.data?.mb_name }} ❤️❤️
      </div>
    </div>

    <div class="mt-8 rounded-2xl shadow-md  border">
      <div v-if="hopeToday?.result === 'FAIL'" @click="onClickHope"
        class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer">
        오늘의 운세 보기
      </div>
      <div v-else
        class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer">
        {{ hopeToday?.data?.result_text }}
      </div>
    </div>

    <!-- <div class="mt-10">
          <div class="">
            <h1 class="text-2xl font-bold mb-4">상점 아이템 목록</h1>

            <div v-if="storeItems.length > 0">
              <ul>
                <li
                  v-for="(item, index) in storeItems"
                  :key="index"
                  class="mb-4 p-4 border rounded-lg"
                >
                  <div class="text-lg font-semibold">{{ item.item_name }}</div>
                  <div class="text-sm text-gray-600">{{ item.item_desc }}</div>
                  <div class="text-right font-bold text-blue-600">
                    {{ item.price.toLocaleString() }} 포인트
                  </div>
                </li>
              </ul>
            </div>

            <div v-else class="text-gray-500">불러올 아이템이 없습니다.</div>
          </div>
      </div> -->
  </div>
</template>