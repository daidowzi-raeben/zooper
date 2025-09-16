<script setup>
import { onMounted, ref } from 'vue'
import { apiPost, apiPoint, apiTeacher } from '@/common/api'
import * as XLSX from 'xlsx/dist/xlsx.full.min.js'
//  QR
import { QrcodeStream } from 'vue-qrcode-reader'


const GenerateUUID = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < 10; i++) {
    const r = Math.floor(Math.random() * chars.length)
    result += chars[r]
  }
  return result
}
const isScanning = ref(false)
const error = ref('')
const teacherInfo = ref({})

const logout = () => {
  sessionStorage.removeItem('idnt_code')
  sessionStorage.removeItem('student')
  sessionStorage.removeItem('t_idnt_code')
  sessionStorage.removeItem('teacher')
  window.location.href = '/login'
}

const startScan = () => {

  if (!amountInput.value) {
    alert('출금액을 입력해주세요')
    return
  }
  if (!selectedStudent.value) {
    alert('출금할 학생을 선택해주세요')
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
  if (url === sessionStorage.getItem('t_idnt_code')) {
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
const selectedStudentName = ref(null)
const amountInput = ref(null)

const fetchPoints = async (v) => {
  if (isLoading.value || !hasMore.value) return

  const idnt_code = selectedStudent.value
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
  const teacher = JSON.parse(sessionStorage.getItem('teacher'))?.idx
  if (!teacher) return

  const res = await apiPost('member.php', {
    mode: 'studentList',
    teacher
  })

  if (res.result === 'SUCCESS') {
    memberPoint.value = await apiPoint()
    studentOptions.value = res.data.map(s => ({
      label: s.student_name,
      value: s.idnt_code,
      mb_point: s.mb_point
    }))
  }
}

onMounted(async () => {
  if (!sessionStorage.getItem('t_idnt_code')) {
    alert('비정상 접근입니다.')
    logout()
    return;
  }
  // fetchPoints()
  fetchStudents()
  window.addEventListener('scroll', handleScroll)

  const point = await apiPoint()
  memberPoint.value = point
  console.log('내 포인트:', point)

  teacherInfo.value = await apiTeacher()
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
    alert('출금할 학생을 선택해주세요')
    return
  }

  const res = await apiPost('bank.php', {
    mode: 'deposit',
    from_idnt_code: sessionStorage.getItem('t_idnt_code'),
    to_idnt_code: selectedStudent.value,
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
  } else {
    alert(res.message || '출금에 실패했습니다.')
  }
}
const handleStudentClick = (idnt_code, mb_name) => {
  selectedStudent.value = idnt_code;
  selectedStudentName.value = mb_name;
  fetchPoints()
  // console.log('선택된 학생:', idnt_code);
  // window.open('/sign/' + idnt_code)
};

// 우리반 설정 저장 함수
const saveClassSettings = async () => {
  const res = await apiPost('teacher.php', {
    mode: 'updateInfo',
    idnt_code: sessionStorage.getItem('t_idnt_code'),
    class_name: teacherInfo.value.class_name || '',
    currency_name: teacherInfo.value.currency_name || '',
    deposit_cycle: teacherInfo.value.deposit_cycle || '',
    deposit_interest: teacherInfo.value.deposit_interest || 0,
    deposit_amount: teacherInfo.value.deposit_amount || 0,
    // 🔽 여기에 추가
    deposit_min: teacherInfo.value.deposit_min || 0,
    deposit_max: teacherInfo.value.deposit_max || 0
  })

  if (res.result === 'SUCCESS') {
    alert('저장되었습니다.');
  } else {
    alert('저장에 실패했습니다.');
  }
}

const onClickDownload = () => {
  window.open('http://api.school-os.net/jelly/data/class.xlsx')

}

const printStudentQR = () => {

  if (!teacherInfo.value.class_name || !teacherInfo.value.currency_name) return alert('우리반 설정 완료 후 가능합니다.')
  window.open('https://api.school-os.net/jelly/qr.php?idnt_code=' + sessionStorage.getItem('t_idnt_code'))
}

const onClickLogin = () => {

  window.open('/teacher/login?id=' + selectedStudent.value)
}


const isUploadModalOpen = ref(false)
const uploadedFile = ref(null)

const handleFileUpload = async (e) => {
  const file = uploadedFile.value
  if (!file) {
    alert('파일을 선택해주세요')
    return
  }

  const reader = new FileReader()
  reader.onload = async (evt) => {
    const data = new Uint8Array(evt.target.result)
    const workbook = XLSX.read(data, { type: 'array' })
    const firstSheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[firstSheetName]

    // 엑셀 -> JSON 변환
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' })

    // 여기서 필요한 컬럼명 매핑 (엑셀 헤더에 따라 다름)
    const students = jsonData.map(row => ({
      idnt_code: GenerateUUID(), // JS에서 UUID 생성하거나 서버에서 처리
      student_name: row['이름'],
      student_grade: row['학년'],
      student_class: row['반'],
      mb_point: row['포인트'] || 0,
      student_number: row['학번'],
      birth_date: row['생년월일'], // YYYY-MM-DD 형식
      gender: row['성별'],
      guardian_name: row['보호자'],
      guardian_phone: row['연락처'],
      address: row['주소'],
      teacher: JSON.parse(sessionStorage.getItem('teacher'))?.idx,
      pay_name: row['화폐이름'],
      role_code: null
    })).concat([
      {
        idnt_code: GenerateUUID(),
        student_name: '선생님',
        student_grade: null,
        student_class: null,
        mb_point: 0,
        student_number: 0,
        birth_date: null,
        gender: null,
        guardian_name: null,
        guardian_phone: null,
        address: null,
        teacher: JSON.parse(sessionStorage.getItem('teacher'))?.idx,
        pay_name: null,
        role_code: '1'
      },
      {
        idnt_code: GenerateUUID(),
        student_name: '관리자',
        student_grade: null,
        student_class: null,
        mb_point: 0,
        student_number: 0,
        birth_date: null,
        gender: null,
        guardian_name: null,
        guardian_phone: null,
        address: null,
        teacher: JSON.parse(sessionStorage.getItem('teacher'))?.idx,
        pay_name: null,
        role_code: '1'
      }
    ])

    console.log(students)


    // API 호출
    try {
      const res = await apiPost('teacher.php', {
        mode: 'studentInsert',
        data: students
      })

      if (res.result === 'SUCCESS') {
        alert('업로드 성공')
        window.location.reload()
      } else {
        alert(res.message || '업로드 실패')
      }
    } catch (error) {
      alert('서버 오류 발생')
      console.error(error)
    }
  }

  reader.readAsArrayBuffer(file)
}


const onClickUpload = () => {
  isUploadModalOpen.value = true
}
const onFileChange = (e) => {
  uploadedFile.value = e.target.files[0]
}

// 세금/벌금 내역 모달 관련
const isHistoryModalOpen = ref(false)
const historyTitle = ref('')
const historyList = ref([])

const openHistoryModal = async (type) => {
  historyTitle.value = type === 'tax' ? '세금 내역' : '벌금 내역'
  const res = await apiPost('bank.php', {
    mode: 'historyByType',
    idnt_code: sessionStorage.getItem('t_idnt_code'),
    type // 'tax' or 'penalty'
  })
  historyList.value = res.data || []
  isHistoryModalOpen.value = true
}


</script>

<template>
  <div class="mt-4">

    <UModal v-model="isUploadModalOpen">
      <div class="p-4 space-y-4">
        <h2 class="text-lg font-bold">엑셀 업로드</h2>
        <UInput type="file" accept=".xls,.xlsx" @change="onFileChange" />
        <div class="flex justify-end gap-2">
          <UButton label="취소" color="gray" @click="isUploadModalOpen = false" />
          <UButton label="업로드" color="blue" @click="handleFileUpload" />
        </div>
      </div>
    </UModal>
    <div class="space-y-4">
      <!-- 환영 메시지 -->
      <div class="flex gap-2">
        <UButton label="엑셀샘플 다운로드" color="gray" @click="onClickDownload" />
        <UButton label="엑셀업로드" color="gray" @click="onClickUpload" />
        <UButton label="학생 QR카드 인쇄하기" color="gray" @click="printStudentQR" />
        <UButton label="초기화" color="red" @click="printStudentQR" style="margin-left:auto;" />
      </div>
      <div class="flex justify-between items-center">
        <p class="text-lg font-semibold text-gray-700">
          {{ teacherInfo?.mb_name }}
          선생님, 환영합니다 👋</p>
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
          <p class="text-sm opacity-80">국고 잔액</p>
          <p class="text-2xl font-bold">
            <span>
              💰 {{ Number(teacherInfo?.mb_point || 0).toLocaleString() }} <span
                class="text-sm font-normal align-middle">{{ teacherInfo?.currency_name }}</span>
            </span>
          </p>
        </div>
        <!-- <UButton label="이체하기" color="white" class="text-blue-800 bg-white bg-opacity-90 hover:bg-opacity-100"
          @click="$router.push('/transfer')" /> -->
      </div>
      <!-- 추가 카드 영역: 누적 세금 + 누적 벌금 -->
      <div class="flex gap-4 mt-4">
        <!-- 카드 1: 누적 세금 -->
        <div
          class="flex-1 rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex justify-between items-center">
          <div class="flex flex-col justify-center">
            <p class="text-sm opacity-80">누적 세금</p>
            <p class="text-2xl font-bold">
              🧾 {{ Number(teacherInfo?.tax || 0).toLocaleString() }} <span class="text-sm font-normal align-middle">{{
                teacherInfo?.currency_name }}</span>
            </p>
          </div>
          <UButton label="내역" color="white" class="text-orange-800 bg-white bg-opacity-90 hover:bg-opacity-100"
            @click="openHistoryModal('tax')" />
        </div>

        <!-- 카드 2: 누적 벌금 -->
        <div
          class="flex-1 rounded-2xl shadow-md p-4 bg-gradient-to-r from-red-400 to-rose-500 text-white flex justify-between items-center">
          <div class="flex flex-col justify-center">
            <p class="text-sm opacity-80">누적 벌금</p>
            <p class="text-2xl font-bold">
              🚨 {{ Number(teacherInfo?.penalty || 0).toLocaleString() }} <span
                class="text-sm font-normal align-middle">
                {{ teacherInfo?.currency_name }}</span>
            </p>
          </div>
          <UButton label="내역" color="white" class="text-rose-800 bg-white bg-opacity-90 hover:bg-opacity-100"
            @click="openHistoryModal('penalty')" />
        </div>
      </div>
      <div v-if="false" class="flex gap-4 mt-4">
        <!-- 카드 3: 누적 기부 -->
        <div
          class="flex-1 rounded-2xl shadow-md p-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white flex justify-between items-center">
          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-2">
              <p class="text-sm opacity-80">2주 적금</p>
              <div class="relative group">
                <span
                  class="cursor-pointer text-white bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full px-2 py-0.5 text-xs font-bold">?</span>
                <div
                  class="absolute z-10 hidden group-hover:block bg-white text-gray-800 text-xs p-2 rounded shadow-lg top-full left-0 mt-1 w-48">
                  매 2주마다 자동 적금되는 금액입니다. 출금 없이 유지하면 지급됩니다.
                </div>
              </div>
            </div>
            <p class="text-2xl font-bold">
              🎁 0 <span class="text-sm font-normal align-middle">{{ teacherInfo?.currency_name }}</span>
            </p>
          </div>
          <UButton label="활성화 하기" color="white" class="text-teal-800 bg-white bg-opacity-90 hover:bg-opacity-100" />
        </div>

        <!-- 카드 4: 누적 상벌점 -->
        <div
          class="flex-1 rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white flex justify-between items-center">
          <div class="flex flex-col justify-center">
            <p class="text-sm opacity-80">4주 적금</p>
            <p class="text-2xl font-bold">
              ⭐ 0 <span class="text-sm font-normal align-middle">{{ teacherInfo?.currency_name }}</span>
            </p>
          </div>
          <UButton label="활성화 하기" color="white" class="text-purple-800 bg-white bg-opacity-90 hover:bg-opacity-100" />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <!-- 우리반 설정 -->
      <div class="space-y-2 mb-10">
        <p class="text-lg font-semibold text-gray-700">우리반 설정</p>
        <div class="flex gap-4 items-center">
          <UInput v-model="teacherInfo.class_name" placeholder="학급명 (예: 젤리)" class="flex-1" size="lg" />
          <UInput v-model="teacherInfo.currency_name" placeholder="화폐이름 (예: 젤리코인)" class="flex-1" size="lg" />
          <UButton label="저장" color="blue" @click="saveClassSettings" size="lg" />
        </div>
      </div>
      <!-- <div class="space-y-2 mb-10">
        <p class="text-lg font-semibold text-gray-700">적금 설정</p>
        <div class="flex gap-4 items-center">
          <USelect v-model="selectedStudent" :options="studentOptions" placeholder="적금 사용여부" class="w-40" size="lg" />
          <UInput v-model="teacherInfo.class_name" placeholder="학급명 (예: 젤리)" class="flex-1" size="lg" />
          <UInput v-model="teacherInfo.currency_name" placeholder="화폐이름 (예: 젤리코인)" class="flex-1" size="lg" />
          <UButton label="저장" color="blue" @click="saveClassSettings" size="lg" />
        </div>
      </div> -->
      <div class="space-y-2 mb-10">
        <div class="flex items-center gap-2">
          <p class="text-lg font-semibold text-gray-700">적금 설정</p>
          <div class="relative group">
            <span
              class="cursor-pointer text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-0.5 text-xs font-bold">?</span>
            <div
              class="absolute z-10 hidden group-hover:block bg-white text-gray-800 text-xs p-2 rounded shadow-lg top-full left-0 mt-1 w-64">
              2주 또는 4주 만기의 적금을 설정할 수 있습니다. 설정한 금액은 1회만 입금되며, 만기 시 설정한 이율에 따라 원금과 이자가 함께 지급됩니다.
            </div>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <USelect v-model="teacherInfo.deposit_cycle" :options="[
            { label: '사용안함', value: '' },
            { label: '2주 적금', value: '2' },
            { label: '4주 적금', value: '4' }
          ]" placeholder="적금 주기 선택" class="w-40" size="lg" />

          <UInput v-model="teacherInfo.deposit_interest" placeholder="이율 (%)" class="w-40" type="number" size="lg" />

          <UInput v-model="teacherInfo.deposit_min" placeholder="최소 금액" type="number" class="w-40" size="lg" />

          <!-- 최대 금액 -->
          <UInput v-model="teacherInfo.deposit_max" placeholder="최대 금액" type="number" class="w-40" size="lg"
            :min="teacherInfo.deposit_min || 0" />

          <UButton label="저장" color="blue" @click="saveClassSettings" size="lg" />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-lg font-semibold text-gray-700">
          우리반 학생
        </p>
        <!-- http://api.school-os.net/jelly/data/class.xlsx -->

      </div>
      <div class="mb-6 flex items-center gap-3">
        <!-- studentOptions 출력: 해시태그 스타일 -->
        <div class="flex flex-wrap gap-2 mt-4">

          <div v-for="student in studentOptions" :key="student.value"
            @click="handleStudentClick(student.value, student.label)"
            class="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm cursor-pointer transition">
            {{ student.label }}({{ student?.mb_point }})
          </div>
        </div>
      </div>
      <div style="height:30px;">

        <UButton v-if="selectedStudentName" :label="`${selectedStudentName} 학생으로 로그인 하기`" color="blue"
          class="w-full justify-center text-center" @click="onClickLogin" />
      </div>
      <!-- <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        입금 할 친구를 선택하고 금액을 입력하세요
      </p>
      <div class="flex items-center gap-3 mt-6">
        <USelect v-model="selectedStudent" :options="studentOptions" placeholder="학생 선택" class="w-40" size="lg" />
        <UInput v-model="amountInput" placeholder="입금액을 입력하세요" icon="i-heroicons-currency-dollar"
          class="flex-1 text-right" input-class="text-right" type="tel" size="lg" />
        <UButton label="이체하기" size="lg" color="black" @click="startScan()" />
      </div>
      <div v-if="isScanning">
        <div
          style="background-color: #000; position: fixed; top:0; left:0; width:100%; height:100%; z-index:99; opacity: 0.6;">
        </div>
        <qrcode-stream
          style="top:50%; left:50%; z-index:99; position: fixed; transform: translate(-50%,-50%); max-width:400px; max-height:400px;"
          @detect="onDetect" @error="onError" />
      </div> -->
    </div>
    <div class="mt-10">
      <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">최근 입출금내역</h2>
      <div class="space-y-5">
        <div v-for="item in points" :key="item.idx" class="flex items-center gap-4 dark:hover:text-gray-300 group">
          <span class="text-sm leading-none">
            {{ item.description }} ({{ item.point_type === 'save' ? '+' : '-' }}{{ item.point.toLocaleString() }}P)
          </span>
          <div
            class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700 mt-1.5">
          </div>
          <span class="text-xs text-gray-500 leading-none">
            {{ item.c_datetime }}
          </span>
        </div>
      </div>
    </div>
    <!-- 세금/벌금 내역 모달 -->
    <UModal v-model="isHistoryModalOpen">
      <div class="p-4 space-y-4">
        <h2 class="text-lg font-bold">{{ historyTitle }}</h2>
        <div v-if="historyList.length === 0" class="text-gray-500 text-sm">내역이 없습니다.</div>
        <ul v-else class="space-y-2 max-h-60 overflow-auto text-sm">
          <li v-for="item in historyList" :key="item.idx" class="flex justify-between border-b pb-1">
            <span>{{ item.description }}</span>
            <span>{{ item.point.toLocaleString() }}P</span>
          </li>
        </ul>
        <div class="flex justify-end">
          <UButton label="닫기" color="gray" @click="isHistoryModalOpen = false" />
        </div>
      </div>
    </UModal>
  </div>
</template>

<script>
export default {
  components: {
    QrcodeStream: () => import('vue-qrcode-reader').then(m => m.QrcodeStream)
  }
}
</script>

<!-- const printStudentQR = () => {
  alert('학생 QR카드를 인쇄합니다.');
  // 실제 인쇄 구현은 추후 추가
}; -->
