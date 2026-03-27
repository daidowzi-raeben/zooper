<script setup>
import { onMounted, ref } from 'vue'
import { apiPost, apiPoint } from '@/common/api'

//  QR
import { QrcodeStream } from 'vue-qrcode-reader'

const isScanning = ref(false)
const error = ref('')

const startScan = () => {

  if (amountInput.value < 1) {
    alert('장난 안돼요 ^^')
    return
  }


  if (!amountInput.value) {
    alert('출금액을 입력해주세요')
    return
  }
  if (!selectedStudent.value) {
    alert('이체할 친구를 선택해주세요')
    return
  }

  if (amountInput.value > memberPoint.value) {
    alert('잔액이 부족합니다.')
    return
  }

  isScanning.value = true
  error.value = ''
}

const onDetect = (detectedCodes) => {
  const url = detectedCodes[0]?.rawValue
  if (url === sessionStorage.getItem('idnt_code')) {
    handleDeposit()
  } else {
    isScanning.value = false
    return alert('인증오류')
  }
  if (!url) return

  isScanning.value = false
  //   router.push('/sign/' + url)
}

const onError = (err) => {
  error.value = '카메라 접근 실패'
  console.error(err)
  isScanning.value = false
}


//  QR
const points = ref([])
const page = ref(1)
const isLoading = ref(false)
const hasMore = ref(true)

const studentOptions = ref([])
const selectedStudent = ref(null)
const amountInput = ref(null)

const fetchPoints = async (v) => {
  if (isLoading.value || !hasMore.value) return

  const idnt_code = sessionStorage.getItem('idnt_code')
  if (!idnt_code) return

  isLoading.value = true

  try {
    const res = await apiPost('bank.php', {
      mode: 'history',
      idnt_code,
      page: v || page.value,
      rows: 10,
    })

    if (res.result === 'SUCCESS' && Array.isArray(res.data)) {
      if (res.data.length === 0) {
        hasMore.value = false
      } else {
        points.value.push(...res.data)
        page.value++
      }
    } else {
      hasMore.value = false
    }
  } catch (error) {
    console.error('포인트 조회 실패:', error)
    hasMore.value = false
  } finally {
    isLoading.value = false
  }
}

const fetchStudents = async () => {
  const teacher = JSON.parse(sessionStorage.getItem('student'))?.teacher
  if (!teacher) return

  const res = await apiPost('member.php', {
    mode: 'studentList',
    teacher
  })

  if (res.result === 'SUCCESS') {
    memberPoint.value = await apiPoint()
    const studentInfo = JSON.parse(sessionStorage.getItem('student'))
    const selfIdntCode = studentInfo?.idnt_code

    studentOptions.value = res.data
      .filter(s => String(s.idnt_code).trim() !== String(selfIdntCode).trim())
      .map(s => ({
        label: s.student_name,
        value: s.idnt_code
      }))
  }
}

const dispot = ref(null)
const fetchDispot = async () => {
  const teacher = JSON.parse(sessionStorage.getItem('student'))?.teacher
  if (!teacher) return
  const res = await apiPost('teacher.php', { mode: 'dispot', teacher: teacher })
  if (res.result === 'SUCCESS') dispot.value = res.data
}

onMounted(async () => {
  await fetchDispot()
  fetchPoints()
  fetchStudents()
  window.addEventListener('scroll', handleScroll)

  const point = await apiPoint()
  memberPoint.value = point
})

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight
  const bottomPosition = document.body.offsetHeight - 50
  if (scrollPosition >= bottomPosition) {
    fetchPoints()
  }
}


const memberPoint = ref(0)
const handleDeposit = async () => {
  if (!amountInput.value) {
    alert('출금액을 입력해주세요')
    return
  }
  if (!selectedStudent.value) {
    alert('이체할 친구를 선택해주세요')
    return
  }

  const res = await apiPost('bank.php', {
    mode: 'deposit',
    from_idnt_code: sessionStorage.getItem('idnt_code'),
    to_idnt_code: selectedStudent.value.value,
    point: parseInt(amountInput.value)
  })

  if (res.result === 'SUCCESS') {
    alert('출금 완료')

    // 리스트 초기화 및 다시 조회
    page.value = 1
    points.value = []
    hasMore.value = true
    await fetchPoints(1)

    amountInput.value = null
    selectedStudent.value = null
    memberPoint.value = await apiPoint()
  } else {
    alert(res.message || '출금에 실패했습니다.')
  }
}

</script>

<template>
  <div class="pb-32 space-y-10 min-h-screen">
    <!-- 💸 이체 헤더 (Transfer Header) -->
    <div
      class="relative bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[40px] p-8 text-white shadow-2xl shadow-indigo-100 overflow-hidden">
      <div class="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 flex flex-col items-center text-center space-y-6">
        <div
          class="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">
          <Icon name="solar:banknote-2-bold-duotone" class="w-12 h-12 text-white" />
        </div>

        <div class="space-y-1">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">My Wallet Balance</p>
          <div class="flex items-baseline gap-2">
            <h2 class="text-4xl font-black tabular-nums">{{ Number(memberPoint).toLocaleString() }}</h2>
            <span class="text-lg font-bold opacity-70">{{ dispot?.currency_name || '돌멩이' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 🏦 이체 폼 (Transfer Form) -->
    <div class="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl space-y-8">
      <div class="space-y-2">
        <h3 class="text-xl font-black text-gray-800">누구에게 보낼까요?</h3>
        <p class="text-sm text-gray-400 font-medium font-bold">친구에게 소중한 마음을 전달해보세요!</p>
      </div>

      <div class="space-y-6">
        <div class="space-y-2">
          <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Select Student</label>
          <USelectMenu v-model="selectedStudent" :options="studentOptions" placeholder="친구를 선택해주세요" size="xl"
            class="rounded-2xl" />
        </div>

        <div class="space-y-2">
          <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Amount</label>
          <div class="relative group">
            <UInput v-model="amountInput" placeholder="보낼 금액 입력" size="xl" type="tel"
              input-class="h-20 font-black text-2xl pl-16 rounded-[28px] border-2 border-gray-50 focus:border-violet-400 bg-gray-50/50 transition-all text-right pr-8" />
            <span
              class="absolute left-6 top-1/2 -translate-y-1/2 i-heroicons-paper-airplane w-7 h-7 text-gray-300 group-focus-within:text-violet-500 transition-colors" />
          </div>
        </div>

        <UButton label="친구에게 송금하기" size="xl" block
          class="h-20 rounded-[28px] font-black text-lg bg-violet-600 hover:bg-violet-700 shadow-xl shadow-violet-100 transition-all active:scale-95 border-0"
          @click="startScan()" />
      </div>
    </div>

    <!-- 📱 본인 인증 QR 스캐너 (Security) -->
    <div v-if="isScanning"
      class="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-10">
      <div class="absolute top-10 text-white text-center space-y-2">
        <p class="text-[10px] font-black tracking-widest uppercase opacity-60">Security Check</p>
        <h3 class="text-3xl font-black text-white">송금 본인 인증</h3>
        <p class="text-sm font-medium text-white/50">나의 QR코드를 스캔해서 이체를 승인하세요</p>
      </div>

      <div
        class="relative w-full max-w-sm aspect-square rounded-[40px] overflow-hidden border-4 border-violet-500/30 shadow-2xl">
        <qrcode-stream @detect="onDetect" @error="onError" />
        <div class="absolute inset-0 border-[40px] border-black/20 pointer-events-none"></div>
        <div
          class="absolute top-1/2 left-0 right-0 h-0.5 bg-violet-400/50 shadow-[0_0_20px_rgba(167,139,250,1)] animate-scan">
        </div>
      </div>

      <button @click="isScanning = false"
        class="mt-12 text-white/50 hover:text-white font-black text-sm p-4 tracking-widest uppercase">Go Back</button>
    </div>

    <!-- 📝 거래 내역 (History) -->
    <div class="space-y-6">
      <div class="flex items-center gap-2 px-2 text-gray-800">
        <span class="i-heroicons-list-bullet-solid w-5 h-5 text-gray-400" />
        <h3 class="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Recent Transactions</h3>
      </div>

      <div
        class="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50/50 text-gray-800">
        <div v-if="points.length > 0">
          <div v-for="item in points" :key="item.idx"
            class="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-all group">
            <div class="flex items-center gap-4">
              <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all group-hover:scale-110',
                item.point_type === 'save' ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600']">
                <Icon :name="item.point_type === 'save' ? 'solar:arrow-down-bold' : 'solar:arrow-up-bold'"
                  class="w-6 h-6" />
              </div>
              <div>
                <p class="text-sm font-black text-gray-800 leading-tight">{{ item.description }}</p>
                <p class="text-[9px] text-gray-400 font-bold tracking-tighter mt-1">{{ item.c_datetime }}</p>
              </div>
            </div>
            <div class="text-right">
              <p
                :class="['text-base font-black tabular-nums', item.point_type === 'save' ? 'text-blue-600' : 'text-rose-600']">
                {{ item.point_type === 'save' ? '+' : '-' }}{{ Number(item.point).toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    QrcodeStream: () => import('vue-qrcode-reader').then(m => m.QrcodeStream)
  }
}
</script>