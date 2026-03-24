<script setup>
import { onMounted, ref } from 'vue'
import api, { apiPost, apiPoint, apiTeacher, hostUrl } from '@/common/api'
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
const deposits = ref([])
const page = ref(1)
const isLoading = ref(false)
const hasMore = ref(true)

const studentOptions = ref([])
const selectedStudent = ref(null)
const selectedStudentName = ref(null)
const selectedStudentData = ref(null)
const bankerRoleIdx = ref(null)
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



const depositsApi = async (v) => {
  const teacher = JSON.parse(sessionStorage.getItem('teacher'))?.idx
  const res = await apiPost('bank.php', {
    mode: 'interestList',
    teacher
  })

  if (res.result === 'SUCCESS') {
    deposits.value = res.data
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
      ...s,
      label: s.student_name,
      value: s.idnt_code,
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
  depositsApi()
  window.addEventListener('scroll', handleScroll)

  const point = await apiPoint()
  memberPoint.value = point
  console.log('내 포인트:', point)

  teacherInfo.value = await apiTeacher()
  
  // Fetch Banker Role Idx
  const roleRes = await apiPost('teacher.php', {
    mode: 'teacherInfo',
    idnt_code: sessionStorage.getItem('t_idnt_code')
  })
  // Let's add a quick helper in teacher.php to get role_idx or just fetch all roles
  const rolesRes = await apiPost('teacher.php', {
    mode: 'dispot',
    teacher: teacherInfo.value.idx
  })
  // I'll just use the dispot mode which returns teacher row, 
  // but I need the role idx. I'll add a new mode 'getBankerRole' or similar.
  // Actually, I'll just use a direct query for now or update teacherInfo to include it.
  const rRes = await apiPost('teacher.php', {
    mode: 'updateStudentRole', // I can reuse this or add a new one
    action: 'get_banker_role',
    teacher_idx: JSON.parse(sessionStorage.getItem('teacher'))?.idx
  })
  if (rRes.result === 'SUCCESS') {
    bankerRoleIdx.value = rRes.role_idx
  }
})

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight
  const bottomPosition = document.body.offsetHeight - 100
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
  points.value = []
  isLoading.value = false
  hasMore.value = true
  page.value = 1
  selectedStudent.value = idnt_code;
  selectedStudentName.value = mb_name;
  selectedStudentData.value = studentOptions.value.find(s => s.value === idnt_code)
  fetchPoints()
};

const handleBankerToggle = async () => {
  if (!selectedStudentData.value) return
  
  const teacher = JSON.parse(sessionStorage.getItem('teacher'))?.idx
  const isCurrentlyBanker = Number(selectedStudentData.value.role_code) === Number(bankerRoleIdx.value)
  
  const res = await apiPost('teacher.php', {
    mode: 'updateStudentRole',
    student_idx: selectedStudentData.value.idx,
    teacher_idx: teacher,
    action: isCurrentlyBanker ? 'unset' : 'set'
  })

  if (res.result === 'SUCCESS') {
    alert(isCurrentlyBanker ? '은행원 권한이 해제되었습니다.' : '은행원으로 등록되었습니다.')
    await fetchStudents()
    selectedStudentData.value = studentOptions.value.find(s => s.value === selectedStudent.value)
  } else {
    alert(res.message || '업데이트 실패')
  }
}

// 우리반 설정 저장 함수
const saveClassSettings = async () => {
  const res = await apiPost('teacher.php', {
    mode: 'updateInfo',
    idnt_code: sessionStorage.getItem('t_idnt_code'),
    class_name: teacherInfo.value.class_name || '',
    currency_name: teacherInfo.value.currency_name || '',
    deposit_name: teacherInfo.value.deposit_name || '',
    deposit_cycle: teacherInfo.value.deposit_cycle || '',
    deposit_interest: teacherInfo.value.deposit_interest || 0,
    deposit_amount: teacherInfo.value.deposit_amount || 0,
    deposit_min: teacherInfo.value.deposit_min || 0,
    deposit_max: teacherInfo.value.deposit_max || 0,
    mb_grade: teacherInfo.value.mb_grade || '',
    mb_class: teacherInfo.value.mb_class || '',
    mb_school: teacherInfo.value.mb_school || '',
    mb_school_code: teacherInfo.value.mb_school_code || '',
    mb_tel: teacherInfo.value.mb_tel || '',
    qr_bg: teacherInfo.value.qr_bg || '',
    qr_top: qrTop.value,
    qr_left: qrLeft.value,
    qr_width: qrWidth.value
  })


  if (res.result === 'SUCCESS') {
    alert('저장되었습니다.');
  } else {
    alert('저장에 실패했습니다.');
  }
}

const onClickReset = async () => {
  if (confirm("정말로 초기화 하시겠습니까?\n선생님 데이터를 제외하고 모든 데이터(학생, 포인트 등)가 삭제됩니다.\n(삭제 전 백업이 생성됩니다.)")) {
    const res = await apiPost('teacher.php', {
      mode: 'resetAllData',
      idnt_code: sessionStorage.getItem('t_idnt_code')
    })


    if (res.result === 'SUCCESS') {
      alert('초기화가 완료되었습니다.')
      window.location.reload()
    } else {
      alert('초기화 실패: ' + (res.message || '알 수 없는 오류'))
    }
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

const isQRDesignModalOpen = ref(false)
const uploadedQRBg = ref(null)
const previewQRBg = ref(null)

const onQRBgChange = (e) => {
  const file = e.target.files[0]
  if (!file) return
  uploadedQRBg.value = file
  previewQRBg.value = URL.createObjectURL(file)
}



const qrTop = ref(0)
const qrLeft = ref(0)
const qrWidth = ref(100)

watch(teacherInfo, (newVal) => {
  if (newVal) {
    qrTop.value = newVal.qr_top || 0
    qrLeft.value = newVal.qr_left || 0
    qrWidth.value = newVal.qr_width || 100
  }
}, { immediate: true })

const handleQRBgUpload = async () => {
  if (!uploadedQRBg.value && !teacherInfo.value.qr_bg) return alert('이미지를 선택해주세요.')
  
  const formData = new FormData()
  if (uploadedQRBg.value) formData.append('file', uploadedQRBg.value)
  formData.append('mode', 'uploadQRBg')
  formData.append('idnt_code', sessionStorage.getItem('t_idnt_code'))
  formData.append('qr_top', qrTop.value)
  formData.append('qr_left', qrLeft.value)
  formData.append('qr_width', qrWidth.value)

  try {
    const res = await api.post('teacher.php', formData)

    if (res.result === 'SUCCESS') {
      if (res.url) teacherInfo.value.qr_bg = res.url
      alert('저장되었습니다.')
      isQRDesignModalOpen.value = false
    } else {

      alert('업로드 실패: ' + (res.message || '알 수 없는 오류'))
    }
  } catch (e) {
    console.error('QR배경 업로드 실패:', e)
    alert('업로드 오류 발생: ' + (e.message || '네트워크 상태를 확인해주세요.'))
  }
}

const fetchSchools = async (q) => {
  if (!q) return []
  const res = await apiPost('teacher.php', {
    mode: 'schoolList',
    school: q
  })
  if (res.result === 'SUCCESS') {
    return res.data.map(item => ({
      label: item.school,
      value: item.idx
    }))
  }
  return []
}

const onSelectSchool = (school) => {
  if (school) {
     teacherInfo.value.mb_school = school.label
     teacherInfo.value.mb_school_code = school.value
  }
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
    <div class="space-y-6">
      <!-- 👑 상단 헤더 & 컨트롤 -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 class="text-2xl font-black text-gray-800 flex items-center gap-2">
            <span class="text-3xl">👋</span>
            {{ teacherInfo?.mb_name }} <span class="text-blue-500 text-lg font-bold">선생님</span>
          </h1>
          <p class="text-sm text-gray-400 font-medium ml-10">귀염둥이 6학년 친구들과 함께하는 경제 교실</p>
        </div>
        <div class="flex items-center gap-2">
          <UButton label="로그아웃" color="gray" variant="ghost" icon="i-heroicons-arrow-right-on-rectangle" @click="logout" />
          <UButton label="DB 초기화" color="red" variant="soft" icon="i-heroicons-trash" @click="onClickReset" />
        </div>
      </div>

      <!-- 🛠️ 퀵 액션 바 -->
      <div class="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <UButton label="엑셀 샘플" icon="i-heroicons-document-arrow-down" color="white" variant="solid" @click="onClickDownload" class="rounded-xl px-4 py-2 shadow-sm border-gray-200" />
        <UButton label="엑셀 업로드" icon="i-heroicons-cloud-arrow-up" color="white" variant="solid" @click="onClickUpload" class="rounded-xl px-4 py-2 shadow-sm border-gray-200" />
        <UButton label="학생 QR 전체 인쇄" icon="i-heroicons-printer" color="white" variant="solid" @click="printStudentQR" class="rounded-xl px-4 py-2 shadow-sm border-gray-200" />
        <UButton label="QR 카드 디자인" icon="i-heroicons-paint-brush" color="purple" @click="isQRDesignModalOpen = true" class="rounded-xl px-6 py-2 shadow-md shadow-purple-100 font-bold" />
      </div>

      <!-- 📊 핵심 대시보드 카드 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 국고 잔액 -->
        <div class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-700 p-6 text-white shadow-xl shadow-blue-200 transition-all hover:-translate-y-1">
          <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
            <span class="i-heroicons-banknotes w-32 h-32" />
          </div>
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <span class="i-heroicons-building-library-solid w-6 h-6" />
            </div>
            <span class="text-[10px] font-bold tracking-widest uppercase opacity-60">National Treasury</span>
          </div>
          <p class="text-sm font-medium opacity-80 mb-1">현재 국고 잔액</p>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black">{{ Number(teacherInfo?.mb_point || 0).toLocaleString() }}</span>
            <span class="text-sm font-bold opacity-70">{{ teacherInfo?.currency_name }}</span>
          </div>
        </div>

        <!-- 누적 세금 -->
        <div class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 p-6 text-white shadow-xl shadow-orange-200 transition-all hover:-translate-y-1">
          <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
            <span class="i-heroicons-document-text-solid w-32 h-32" />
          </div>
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <span class="i-heroicons-receipt-percent-solid w-6 h-6" />
            </div>
            <UButton label="내역 확인" size="2xs" color="white" variant="soft" class="bg-white/10 hover:bg-white/20 border-0" @click="openHistoryModal('tax')" />
          </div>
          <p class="text-sm font-medium opacity-80 mb-1">우리반 누적 세금</p>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black">{{ Number(teacherInfo?.tax || 0).toLocaleString() }}</span>
            <span class="text-sm font-bold opacity-70">{{ teacherInfo?.currency_name }}</span>
          </div>
        </div>

        <!-- 누적 벌금 -->
        <div class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-rose-400 via-red-500 to-red-600 p-6 text-white shadow-xl shadow-red-200 transition-all hover:-translate-y-1">
          <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
            <span class="i-heroicons-exclamation-triangle-solid w-32 h-32" />
          </div>
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <span class="i-heroicons-shield-exclamation-solid w-6 h-6" />
            </div>
            <UButton label="벌금 관리" size="2xs" color="white" variant="soft" class="bg-white/10 hover:bg-white/20 border-0" @click="openHistoryModal('penalty')" />
          </div>
          <p class="text-sm font-medium opacity-80 mb-1">우리반 누적 벌금</p>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black">{{ Number(teacherInfo?.penalty || 0).toLocaleString() }}</span>
            <span class="text-sm font-bold opacity-70">{{ teacherInfo?.currency_name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
      <!-- 🏠 우리반 설정 레이아웃 -->
      <div class="space-y-6">
        <section class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
          <h2 class="text-lg font-black text-gray-800 mb-6 flex items-center gap-2">
            <div class="p-1.5 bg-blue-100 rounded-lg">
               <span class="i-heroicons-home-solid w-5 h-5 text-blue-600 outline-none" />
            </div>
            우리반 기본 정보 설정
          </h2>
          
          <div class="flex-1 space-y-6">
            <div class="space-y-1">
              <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">소속 학교</label>
              <USelectMenu 
                v-model="teacherInfo.mb_school" 
                :searchable="fetchSchools" 
                placeholder="학교를 검색하세요..." 
                size="lg"
                class="rounded-xl"
                @update:modelValue="onSelectSchool"
              />
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">학년</label>
                <UInput v-model="teacherInfo.mb_grade" placeholder="학년" type="number" size="xl" />
              </div>
              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">반</label>
                <UInput v-model="teacherInfo.mb_class" placeholder="반" type="number" size="xl" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">학급명</label>
                <UInput v-model="teacherInfo.class_name" placeholder="학급명 (예: 6-1 젤리반)" size="xl" />
              </div>
              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">우리반 화폐단위</label>
                <UInput v-model="teacherInfo.currency_name" placeholder="단위 (예: 젤리)" size="xl" />
              </div>
            </div>
          </div>
          
          <UButton label="위 정보 모두 저장하기" color="blue" size="xl" block class="mt-8 font-black rounded-2xl py-4 shadow-lg shadow-blue-100" @click="saveClassSettings" />
        </section>
      </div>

      <!-- 💰 적금 마스터 설정 -->
      <div class="space-y-6">
        <section class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
          <h2 class="text-lg font-black text-gray-800 mb-2 flex items-center gap-2">
            <div class="p-1.5 bg-emerald-100 rounded-lg">
               <span class="i-heroicons-banknotes-solid w-5 h-5 text-emerald-600 outline-none" />
            </div>
            적금 예금 상품 관리
          </h2>
          <p class="text-xs text-gray-400 mb-6 ml-10">아이들이 목돈을 모을 수 있는 적금 상품을 설정하세요.</p>
          
          <div class="flex-1 space-y-4">
            <div class="space-y-1">
              <label class="text-[10px] font-bold text-gray-400 ml-1 uppercase tracking-wider">적금 상품명</label>
              <UInput v-model="teacherInfo.deposit_name" placeholder="예: 2주 단기 적금" size="lg" />
            </div>
            <div class="bg-gray-50 p-4 rounded-2xl space-y-4">
               <div class="flex justify-between items-center">
                 <span class="text-sm font-bold text-gray-600">적금 주기</span>
                 <USelect v-model="teacherInfo.deposit_cycle" :options="[
                    { label: '사용안함', value: '' },
                    { label: '2주 단기 적금', value: '2' },
                    { label: '4주 장기 적금', value: '4' }
                  ]" size="lg" class="w-48" />
               </div>
               <div class="flex justify-between items-center">
                 <span class="text-sm font-bold text-gray-600">이자율 (%)</span>
                 <div class="flex items-center gap-2">
                    <UInput v-model="teacherInfo.deposit_interest" type="number" size="lg" class="w-24 text-right" />
                    <span class="text-sm font-bold text-gray-500">%</span>
                 </div>
               </div>
               <div class="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                  <div class="space-y-1">
                    <label class="text-[10px] font-bold text-gray-400 uppercase">최소 입금액</label>
                    <UInput v-model="teacherInfo.deposit_min" type="number" size="lg" />
                  </div>
                  <div class="space-y-1">
                    <label class="text-[10px] font-bold text-gray-400 uppercase">최대 입금액</label>
                    <UInput v-model="teacherInfo.deposit_max" type="number" size="lg" />
                  </div>
               </div>
            </div>

            <!-- 적금 내역 (스크롤) -->
            <div class="p-2">
              <h3 class="text-xs font-black text-gray-400 mb-3 ml-1 uppercase tracking-widest">실시간 신청 현황</h3>
              <div v-if="deposits.length > 0" class="max-h-[160px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                <div v-for="item in deposits" :key="item.idx" class="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <div class="flex items-center gap-3">
                    <div class="bg-white p-1 rounded-full text-xs font-bold text-emerald-600 shadow-sm border border-emerald-100">
                      {{ item?.student_name.substring(0,1) }}
                    </div>
                    <div>
                      <p class="text-xs font-black text-gray-800">{{ item?.student_name }}</p>
                      <p class="text-[9px] text-gray-500 font-medium">{{ item?.start_date }} 가입</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-xs font-black text-emerald-600">{{ Number(item?.amount).toLocaleString() }}원금</p>
                    <p class="text-[9px] text-gray-400">+{{ Number(item?.amount_interest).toLocaleString() }}이자 예정</p>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p class="text-xs text-gray-400">신청된 적금 상품이 없습니다.</p>
              </div>
            </div>
          </div>
          
          <UButton label="적금 설정 업데이트" color="emerald" size="xl" block class="mt-6 font-black rounded-2xl py-4 shadow-lg shadow-emerald-100" @click="saveClassSettings" />
        </section>
      </div>
    </div>

    <!-- 👥 우리반 학생 관리 & 실시간 로그 -->
    <div class="grid grid-cols-1 gap-8 mt-8">
      <section class="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 class="text-2xl font-black text-gray-800 flex items-center gap-2">
              우리반 <span class="text-blue-600">경제 전사들</span>
              <span class="text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{{ studentOptions.length }}명</span>
            </h2>
            <p class="text-sm text-gray-400 mt-1">학생을 클릭하여 상세 정보를 보거나 해당 계정으로 대리 로그인할 수 있습니다.</p>
          </div>
        </div>

        <!-- 학생 태그 그리드 -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          <div v-for="student in studentOptions" :key="student.value"
            @click="handleStudentClick(student.value, student.label)"
            :class="[
              'group relative flex flex-col items-center justify-center p-4 rounded-3xl cursor-pointer transition-all duration-300 border-2',
              selectedStudent === student.value ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200 -translate-y-1' : 'bg-white border-gray-50 hover:border-blue-200 hover:bg-blue-50/30'
            ]">
            <div :class="['w-12 h-12 flex items-center justify-center rounded-2xl mb-2 text-lg font-black transition-colors', 
                 selectedStudent === student.value ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-500']">
              {{ student.label.substring(0, 1) }}
            </div>
            <p :class="['text-xs font-black truncate w-full text-center', selectedStudent === student.value ? 'text-white' : 'text-gray-700']">
              {{ student.label }}
            </p>
            <p :class="['text-[10px] mt-0.5 font-bold', selectedStudent === student.value ? 'text-white/70' : 'text-gray-400']">
              {{ Number(student?.mb_point).toLocaleString() }}P
            </p>
            
            <!-- 로그인 가이드 뱃지 -->
            <div v-if="selectedStudent === student.value" class="absolute -top-2 -right-2 bg-yellow-400 text-white p-1 rounded-full shadow-md animate-bounce">
              <span class="i-heroicons-key-solid w-3 h-3" />
            </div>
          </div>
        </div>

        <!-- 선택된 학생 상세 액션 -->
        <Transition name="fade-slide">
          <div v-if="selectedStudentName" class="mt-10 p-6 bg-gray-50 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-3xl text-2xl font-black shadow-xl shadow-blue-200">
                {{ selectedStudentName.substring(0,1) }}
              </div>
              <div>
                <h3 class="text-xl font-black text-gray-800">{{ selectedStudentName }} <span class="text-sm font-bold text-gray-400 italic">Student Session</span></h3>
                <p class="text-sm text-gray-500">학생의 지갑을 직접 관리하거나 활동 내역을 감시할 수 있습니다.</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <UButton 
                :label="Number(selectedStudentData?.role_code) === Number(bankerRoleIdx) ? '은행원 해제' : '은행원 등록'" 
                size="xl" 
                :color="Number(selectedStudentData?.role_code) === Number(bankerRoleIdx) ? 'rose' : 'blue'" 
                variant="soft"
                class="rounded-2xl px-8 font-black transition-all hover:scale-105" 
                @click="handleBankerToggle" 
              />
              <UButton :label="`${selectedStudentName} 친구로 로그인하기`" size="xl" color="black" class="rounded-2xl px-10 font-bold hover:scale-105 active:scale-95 transition-transform" @click="onClickLogin" />
            </div>
          </div>
        </Transition>

        <!-- 활동 피드 (테이블형) -->
        <div class="mt-12">
          <div class="flex items-center justify-between mb-4 px-2">
            <h3 class="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span class="i-heroicons-list-bullet w-5 h-5" />
              최근 활동 타임라인
            </h3>
            <span v-if="points.length > 0" class="text-xs font-bold text-gray-300">{{ selectedStudentName }}의 기록</span>
          </div>
          
          <div class="overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div v-if="points.length > 0" class="divide-y divide-gray-50">
              <div v-for="item in points" :key="item.idx" class="flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors">
                <div class="flex items-center gap-4">
                   <div :class="['p-2 rounded-2xl flex items-center justify-center', 
                        item.point_type === 'save' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600']">
                     <span :class="item.point_type === 'save' ? 'i-heroicons-plus-circle-solid' : 'i-heroicons-minus-circle-solid'" class="w-6 h-6" />
                   </div>
                   <div>
                     <p class="text-sm font-black text-gray-800">{{ item.description }}</p>
                     <p class="text-xs text-gray-400 font-medium">{{ item.c_datetime }}</p>
                   </div>
                </div>
                <div class="text-right">
                   <p :class="['text-sm font-black', item.point_type === 'save' ? 'text-blue-600' : 'text-red-600']">
                     {{ item.point_type === 'save' ? '+' : '-' }}{{ Number(item.point).toLocaleString() }} 
                     <span class="text-[10px]">P</span>
                   </p>
                </div>
              </div>
              <div v-if="isLoading" class="p-10 text-center text-gray-400">
                <span class="i-heroicons-arrow-path w-6 h-6 animate-spin mx-auto block mb-2" />
                로딩 중...
              </div>
            </div>
            <div v-else class="py-20 text-center">
               <div class="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span class="i-heroicons-clipboard-document-list w-10 h-10 text-gray-300" />
               </div>
               <p class="text-sm font-bold text-gray-400">학생을 선택하면 최근 활동 내역이 표시됩니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- 세금/벌금 내역 모달 -->
    <!-- 세금/벌금 내역 모달 -->
    <UModal v-model="isHistoryModalOpen">
      ... (no changes)
    </UModal>

    <!-- QR 카드 디자인 모달 -->
    <UModal v-model="isQRDesignModalOpen">
      <div class="p-6 space-y-6">
        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span class="i-heroicons-swatch w-6 h-6 text-purple-500" />
          QR 카드 디자인 설정
        </h2>
        
        <div class="space-y-2">
          <p class="text-sm font-semibold text-gray-700">배경 이미지 등록</p>
          <p class="text-xs text-gray-500">인쇄용 QR 카드의 배경 이미지를 업로드하고 위치를 조정하세요.</p>
          
          <!-- 카드 미리보기 레이아웃 -->
          <div class="mt-4 relative mx-auto w-full max-w-[350px] aspect-[1.6/1] border border-gray-200 rounded-lg overflow-hidden bg-white shadow-inner">
             <!-- 커스텀 배경 미리보기 -->
             <img v-if="previewQRBg || teacherInfo.qr_bg" 
                  :src="previewQRBg || (teacherInfo.qr_bg.startsWith('http') ? teacherInfo.qr_bg : hostUrl + teacherInfo.qr_bg)" 
                  :style="{ 
                    position: 'absolute', 
                    top: qrTop + 'px', 
                    left: qrLeft + 'px', 
                    width: qrWidth + '%',
                    zIndex: 0
                  }" />
             
             <!-- 기본 레이아웃 가이드 (비투과 오버레이) -->
             <div class="absolute inset-0 z-10 pointer-events-none p-4 flex flex-col justify-between border border-gray-100">
               <div class="flex justify-between items-start">
                  <div class="w-16 h-4 bg-gray-200/50 rounded animate-pulse"></div>
                  <div class="text-[10px] font-bold text-gray-400">1번 홍길동</div>
               </div>
               <div class="text-[8px] text-gray-300 leading-tight">
                 입출금은 은행원 승인이 필요합니다.<br>이체는 개인 QR코드로 가능합니다.
               </div>
               <div class="absolute bottom-2 right-2 w-12 h-12 border border-gray-200 bg-white/80 flex items-center justify-center">
                 <span class="i-heroicons-qr-code w-8 h-8 text-gray-300" />
               </div>
             </div>

             <input type="file" @change="onQRBgChange" class="absolute inset-0 opacity-0 cursor-pointer z-20" accept="image/*" />
          </div>

          <!-- 위치 컨트롤 슬라이더 -->
          <div class="mt-6 space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div class="space-y-1">
              <div class="flex justify-between text-xs font-bold text-gray-600">
                <span>상단 위치 (Top Offset)</span>
                <span>{{ qrTop }}px</span>
              </div>
              <input type="range" v-model="qrTop" min="-200" max="200" class="w-full accent-purple-600" />
            </div>
            
            <div class="space-y-1">
              <div class="flex justify-between text-xs font-bold text-gray-600">
                <span>좌측 위치 (Left Offset)</span>
                <span>{{ qrLeft }}px</span>
              </div>
              <input type="range" v-model="qrLeft" min="-200" max="200" class="w-full accent-purple-600" />
            </div>

            <div class="space-y-1">
              <div class="flex justify-between text-xs font-bold text-gray-600">
                <span>이미지 너비 (Width)</span>
                <span>{{ qrWidth }}%</span>
              </div>
              <input type="range" v-model="qrWidth" min="10" max="300" class="w-full accent-purple-600" />
            </div>
          </div>
        </div>

        <div v-if="teacherInfo.qr_bg" class="bg-purple-50 p-3 rounded-xl border border-purple-100 text-center">
          <p class="text-[10px] text-purple-700 font-medium">현재 등록된 배경이 있습니다. 파일을 새로 선택하지 않으면 위치 설정만 저장됩니다.</p>
        </div>


        <div class="flex justify-end gap-2">
          <UButton label="취소" color="gray" variant="ghost" @click="isQRDesignModalOpen = false" />
          <UButton label="배경으로 등록하고 저장" color="purple" class="px-6" @click="handleQRBgUpload" />
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
