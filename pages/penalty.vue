import { definePageMeta } from '#imports';

definePageMeta({
  prerender: false
})
<script setup>
import { onMounted, ref } from 'vue'
import { apiPost,apiPoint } from '@/common/api'

//  QR
import { QrcodeStream } from 'vue-qrcode-reader'

const isScanning = ref(false)
const error = ref('')

const startScan = () => {

if (!amountInput.value) {
    alert('입금액을 입력해주세요')
    return
  }

  if(amountInput.value > memberPoint.value) {
    alert('잔액이 부족합니다.')
    return
}

  isScanning.value = true
  error.value = ''
}

const onDetect = (detectedCodes) => {
  const url = detectedCodes[0]?.rawValue
if(url === sessionStorage.getItem('idnt_code')) {
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
const studentRole = ref([])
const studentRoleIdntCode = ref([])
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
    studentOptions.value = res.data.map(s => ({
      label: s.student_name,
      value: s.idnt_code
    }))
  }
}



const roleStudent = async () => {
  const teacher = JSON.parse(sessionStorage.getItem('student'))?.teacher
  if (!teacher) return

  const res = await apiPost('member.php', {
    mode: 'studentRoleList',
    teacher
  })


  if (res.result === 'SUCCESS') {
    // 이름만 추출해서 문자열로 변환
    studentRole.value = res.data.map(s => s.student_name).join(', ')
    studentRoleIdntCode.value = res.data.map(s => s.idnt_code)
  }
}

onMounted(async () => {

  fetchPoints()
  fetchStudents()
  roleStudent()
  window.addEventListener('scroll', handleScroll)

  const point = await apiPoint()
  memberPoint.value = point
  console.log('내 포인트:', point)
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
    alert('입금액을 입력해주세요')
    return
  }
  const res = await apiPost('bank.php', {
    mode: 'penalty',
    idnt_code: sessionStorage.getItem('idnt_code'),
    point: parseInt(amountInput.value)
  })

  if (res.result === 'SUCCESS') {
    alert('벌금 납부 완료')

    // 리스트 초기화 및 다시 조회
    page.value = 1
    points.value = []
    hasMore.value = true
    await fetchPoints(1)

    amountInput.value = null
    selectedStudent.value = null
    memberPoint.value = await apiPoint()
  } else {
    alert(res.message || '입금에 실패했습니다.')
  }
}

</script>

<template>
  <div>
    <h2 class="mb-3 font-bold">벌금 납부 하기</h2>
      <div>
        <div class="mb-6 flex items-center gap-3">
        <div
            class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
        >
            <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
        </div>
        <h2 class="uppercase text-xs font-semibold text-gray-400">
            나의 잔액 {{ memberPoint }}
        </h2>
        </div>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        납부할 벌금을 입력 후 QR코드로 인증 해 주세요
        </p>
        <div class="flex items-center gap-3 mt-6">
       <!-- <USelect
          v-model="selectedStudent"
          :options="studentOptions"
          placeholder="학생 선택"
          class="w-40"
          size="lg"
        /> -->
        <UInput
            v-model="amountInput"
            placeholder="입금액을 입력하세요"
            icon="i-heroicons-currency-dollar"
            class="flex-1 text-right"
            input-class="text-right"
            type="tel"
            size="lg"
        />
        <UButton label="납부하기" size="lg" color="black" @click="startScan()"/>
        </div>
        <div v-if="isScanning">
            <div style="background-color: #000; position: fixed; top:0; left:0; width:100%; height:100%; z-index:99; opacity: 0.6;"></div>
             <qrcode-stream
             style="top:50%; left:50%; z-index:99; position: fixed; transform: translate(-50%,-50%); max-width:400px; max-height:400px;"
            @detect="onDetect"
            @error="onError"
        />
        </div>
    </div>
    <div class="mt-10">
      <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">최근 입출금내역</h2>
      <div class="space-y-5">
        <div
        v-for="item in points"
        :key="item.idx"
        class="flex items-center gap-4 dark:hover:text-gray-300 group"
        >
        <span class="text-sm leading-none">
            {{ item.description }} ({{ item.point_type === 'save' ? '+' : '-' }}{{ item.point.toLocaleString() }}P)
        </span>
        <div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700 mt-1.5"></div>
        <span class="text-xs text-gray-500 leading-none">
            {{ item.c_datetime }}
        </span>
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