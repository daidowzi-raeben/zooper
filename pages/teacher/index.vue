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
  if (confirm('로그아웃 하시겠습니까?')) {
    sessionStorage.clear()
    window.location.href = '/login'
  }
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

const isSettingModalOpen = ref(false)
const depositTypes = ref([])

// fetchDepositTypes is now called onMounted

const fetchDepositTypes = async () => {
  const res = await apiPost('teacher.php', {
    mode: 'getDepositTypes',
    teacher_idx: teacherInfo.value.idx
  })
  if (res.result === 'SUCCESS') {
    depositTypes.value = res.data
  }
}

const addNewDepositType = () => {
  depositTypes.value.unshift({
    deposit_name: '',
    deposit_day: 30,
    deposit_interest: 0,
    grade1_deposit_interest: 0,
    deposit_max: 0,
    deposit_min: 0
  })
}

const saveDepositType = async (item) => {
  if (!item.deposit_name) return alert('상품명을 입력해주세요.')
  const res = await apiPost('teacher.php', {
    mode: 'saveDepositType',
    ...item,
    teacher_idx: teacherInfo.value.idx
  })
  if (res.result === 'SUCCESS') {
    alert('저장되었습니다.')
    fetchDepositTypes()
  }
}

const deleteDepositType = async (idx, listIdx) => {
  if (!idx) {
    depositTypes.value.splice(listIdx, 1)
    return
  }
  if (!confirm('정말 삭제하시겠습니까?')) return
  const res = await apiPost('teacher.php', {
    mode: 'deleteDepositType',
    idx,
    teacher_idx: teacherInfo.value.idx
  })
  if (res.result === 'SUCCESS') {
    fetchDepositTypes()
  }
}

const teacherSettings = ref({
  grade1_soulmate_price: 0,
  grade1_hope_price: 0,
  grade1_deposit_interest: 0,
  grade1_deposit_max: 0
})

const handleOpenSettings = () => {
  teacherSettings.value = {
    currency_name: teacherInfo.value.currency_name || '',
    deposit_interest: teacherInfo.value.deposit_interest || 0,
    deposit_max: teacherInfo.value.deposit_max || 0,
    grade1_soulmate_price: teacherInfo.value.grade1_soulmate_price || 0,
    grade1_hope_price: teacherInfo.value.grade1_hope_price || 0,
    grade1_deposit_interest: teacherInfo.value.grade1_deposit_interest || 0,
    grade1_deposit_max: teacherInfo.value.grade1_deposit_max || 0
  }
  isSettingModalOpen.value = true
}

const handleSaveSettings = async () => {
  const res = await apiPost('teacher.php', {
    mode: 'saveTeacherSettings',
    teacher_idx: teacherInfo.value.idx,
    ...teacherSettings.value
  })
  if (res.result === 'SUCCESS') {
    alert('설정이 저장되었습니다.')
    isSettingModalOpen.value = false
    // Refresh teacher info
    const dRes = await apiPost('teacher.php', { mode: 'dispot', teacher: teacherInfo.value.idx })
    if (dRes.result === 'SUCCESS') {
      teacherInfo.value = { ...teacherInfo.value, ...dRes.data }
    }
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

  teacherInfo.value = await apiTeacher()
  await fetchDepositTypes()

  // Fetch Jobs
  await fetchJobs()

  // Fetch Banker Role Idx
  const roleRes = await apiPost('teacher.php', {
    mode: 'teacherInfo',
    idnt_code: sessionStorage.getItem('t_idnt_code')
  })

  const rRes = await apiPost('teacher.php', {
    mode: 'updateStudentRole',
    action: 'get_banker_role',
    teacher_idx: JSON.parse(sessionStorage.getItem('teacher'))?.idx
  })
  if (rRes.result === 'SUCCESS') {
    bankerRoleIdx.value = rRes.role_idx
  }
  await fetchDevNotes()
})

const hasNewDevNote = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return devNotes.value.some(note => note.c_datetime.startsWith(today))
})

const isAdmin = computed(() => teacherInfo.value?.mb_email === 'admin@korea.kr')
const devNotes = ref([])
const isDevNoteWriteModalOpen = ref(false)
const newDevNote = ref({ category: '개발자노트', content: '' })

const fetchDevNotes = async () => {
  const res = await apiPost('teacher.php', { mode: 'getDevNotes' })
  if (res.result === 'SUCCESS') {
    devNotes.value = res.data
  }
}

const saveDevNote = async () => {
  if (!newDevNote.value.content) return alert('내용을 입력해주세요.')
  const res = await apiPost('teacher.php', {
    mode: 'saveDevNote',
    ...newDevNote.value
  })
  if (res.result === 'SUCCESS') {
    alert('저장되었습니다.')
    await fetchDevNotes()
    isDevNoteWriteModalOpen.value = false
    newDevNote.value = { category: '개발자노트', content: '' }
  }
}

const handleNoteImageUpload = async (e) => {
  const file = e.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('file', file)
  formData.append('mode', 'uploadImage')

  const res = await apiPost('teacher.php', formData)
  if (res.result === 'SUCCESS') {
    const imageUrl = `${hostUrl}${res.url}`
    newDevNote.value.content += `\n![이미지](${imageUrl})\n`
  } else {
    alert('이미지 업로드에 실패했습니다.')
  }
}


const renderMarkdown = (text) => {
  if (!text) return ''
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="max-w-full rounded-2xl my-4 shadow-lg" />')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-purple-600 underline">$1</a>')
    .replace(/\n/g, '<br>')
}

const jobs = ref([])
const isDevNoteModalOpen = ref(false)
const isJobModalOpen = ref(false)
const newJobName = ref('')

const fetchJobs = async () => {
  const teacher = JSON.parse(sessionStorage.getItem('teacher'))?.idx
  const res = await apiPost('teacher.php', {
    mode: 'getJobList',
    teacher_idx: teacher
  })
  if (res.result === 'SUCCESS') {
    jobs.value = res.data
  }
}

const saveJob = async () => {
  if (!newJobName.value) return
  const teacher = JSON.parse(sessionStorage.getItem('teacher'))?.idx
  const res = await apiPost('teacher.php', {
    mode: 'saveJob',
    teacher_idx: teacher,
    role_name: newJobName.value
  })
  if (res.result === 'SUCCESS') {
    newJobName.value = ''
    await fetchJobs()
  } else {
    alert(res.message || '저장 실패')
  }
}

const deleteJob = async (role_idx) => {
  if (!confirm('정말 삭제하시겠습니까? 해당 직업을 가진 학생들의 직업이 해제됩니다.')) return
  const teacher = JSON.parse(sessionStorage.getItem('teacher'))?.idx
  const res = await apiPost('teacher.php', {
    mode: 'deleteJob',
    teacher_idx: teacher,
    role_idx
  })
  if (res.result === 'SUCCESS') {
    await fetchJobs()
  } else {
    alert(res.message || '삭제 실패')
  }
}

const handleRoleToggle = async (role_idx, actionParam) => {
  if (!selectedStudentData.value) return

  const teacher = JSON.parse(sessionStorage.getItem('teacher'))?.idx
  const action = actionParam || 'set'

  const res = await apiPost('teacher.php', {
    mode: 'updateStudentRole',
    student_idx: selectedStudentData.value.idx,
    teacher_idx: teacher,
    role_idx: role_idx,
    action: action
  })

  if (res.result === 'SUCCESS') {
    alert('직업이 변경되었습니다.')
    await fetchStudents()
    selectedStudentData.value = studentOptions.value.find(s => s.value === selectedStudent.value)
  } else {
    alert(res.message || '업데이트 실패')
  }
}

const handleUseBadge = async (badge, bIdx) => {
  if (!selectedStudentData.value) return

  if (confirm(`'${badge}' 뱃지를 사용(삭제)하시겠습니까?`)) {
    const res = await apiPost('teacher.php', {
      mode: 'useBadge',
      student_idx: selectedStudentData.value.idx,
      badge_index: bIdx
    })

    if (res.result === 'SUCCESS') {
      alert('뱃지가 사용되었습니다.')
      await fetchStudents()
      selectedStudentData.value = studentOptions.value.find(s => s.value === selectedStudent.value)
    } else {
      alert(res.message || '사용 실패')
    }
  }
}

const handleGiveStamp = async () => {
  if (!selectedStudentData.value) return
  const res = await apiPost('teacher.php', {
    mode: 'giveStamp',
    student_idx: selectedStudentData.value.idx
  })
  if (res.result === 'SUCCESS') {
    alert(res.message)
    await fetchStudents()
    selectedStudentData.value = studentOptions.value.find(s => s.value === selectedStudent.value)
  }
}

const handleTakeStamp = async () => {
  if (!selectedStudentData.value) return
  if (confirm('스템프 1개를 회수하시겠습니까?')) {
    const res = await apiPost('teacher.php', {
      mode: 'takeStamp',
      student_idx: selectedStudentData.value.idx
    })
    if (res.result === 'SUCCESS') {
      alert(res.message)
      await fetchStudents()
      selectedStudentData.value = studentOptions.value.find(s => s.value === selectedStudent.value)
    }
  }
}

const handleCreditUpdate = async (val) => {
  if (!selectedStudentData.value) return
  const res = await apiPost('teacher.php', {
    mode: 'updateCreditScore',
    student_idx: selectedStudentData.value.idx,
    credit_score: val
  })
  if (res.result === 'SUCCESS') {
    alert('신용등급이 변경되었습니다.')
    await fetchStudents()
    selectedStudentData.value = studentOptions.value.find(s => s.value === selectedStudent.value)
  } else {
    alert(res.message || '업데이트 실패')
  }
}

const isTreasuryModalOpen = ref(false)
const treasuryForm = ref({ amount: 0 })
const onClickEditTreasury = () => {
  treasuryForm.value.amount = Number(teacherInfo.value?.mb_point || 0)
  isTreasuryModalOpen.value = true
}

const submitTreasuryEdit = async () => {
  const res = await apiPost('teacher.php', {
    mode: 'updateTreasury',
    teacher_idx: teacherInfo.value.idx,
    amount: treasuryForm.value.amount
  })

  if (res.result === 'SUCCESS') {
    alert('국고 잔액이 수정되었습니다.')
    teacherInfo.value.mb_point = treasuryForm.value.amount
    isTreasuryModalOpen.value = false
  }
}

const isFeatureRequestModalOpen = ref(false)
const featureRequestForm = ref({ content: '' })

const submitFeatureRequest = async () => {
  if (!featureRequestForm.value.content.trim()) return alert('내용을 입력해주세요.')

  const res = await apiPost('teacher.php', {
    mode: 'featureRequest',
    teacher_name: teacherInfo.value.mb_name,
    school_name: teacherInfo.value.mb_school,
    content: featureRequestForm.value.content
  })

  if (res.result === 'SUCCESS') {
    alert('소중한 의견 감사합니다! 개발진에게 전달되었습니다.')
    featureRequestForm.value.content = ''
    isFeatureRequestModalOpen.value = false
  } else {
    alert(res.message || '전송에 실패했습니다.')
  }
}

const isPasswordModalOpen = ref(false)
const passwordForm = ref({ newPassword: '', confirmPassword: '' })

const submitChangePassword = async () => {
  if (!passwordForm.value.newPassword) return alert('새 비밀번호를 입력해주세요.')
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) return alert('비밀번호가 일치하지 않습니다.')

  const res = await apiPost('teacher.php', {
    mode: 'changePassword',
    teacher_idx: teacherInfo.value.idx,
    new_pw: passwordForm.value.newPassword
  })

  if (res.result === 'SUCCESS') {
    alert('비밀번호가 변경되었습니다.')
    passwordForm.value = { newPassword: '', confirmPassword: '' }
    isPasswordModalOpen.value = false
  } else {
    alert(res.message || '변경 실패')
  }
}

const isTransferModalOpen = ref(false)
const transferForm = ref({ amount: '', memo: '국고 지원금' })
const handleTreasuryTransfer = () => {
  transferForm.value.amount = ''
  transferForm.value.memo = '국고 지원금'
  isTransferModalOpen.value = true
}

const submitTreasuryTransfer = async () => {
  if (!selectedStudentData.value) return
  const n = Number(transferForm.value.amount)
  if (isNaN(n) || n <= 0) return alert('올바른 금액을 입력하세요.')

  const res = await apiPost('teacher.php', {
    mode: 'transferToStudent',
    teacher_idx: teacherInfo.value.idx,
    student_idnt: selectedStudentData.value.idnt_code,
    amount: n,
    memo: transferForm.value.memo
  })

  if (res.result === 'SUCCESS') {
    alert('지급되었습니다.')
    teacherInfo.value.mb_point -= n
    await fetchStudents()
    selectedStudentData.value = studentOptions.value.find(s => s.value === selectedStudent.value)

    // Reset and Refresh Points (Timeline)
    page.value = 1
    points.value = []
    hasMore.value = true
    await fetchPoints(1)

    isTransferModalOpen.value = false
  }
}

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
    soulmate_price: teacherInfo.value.soulmate_price || 10,
    hope_price: teacherInfo.value.hope_price || 10,
    qr_bg: teacherInfo.value.qr_bg || '',
    qr_top: qrTop.value,
    qr_left: qrLeft.value,
    qr_width: qrWidth.value,
    qr_mode: qrMode.value || 'IMAGE',
    qr_color: qrColor.value || '#ffffff',
    qr_text_color: qrTextColor.value || '#000000'
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
  const downloadUrl = `${hostUrl}data/class.xlsx`
  const link = document.createElement('a')
  link.href = downloadUrl
  link.setAttribute('download', '학생명단_샘플.xlsx')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const printStudentQR = () => {

  if (!teacherInfo.value.class_name || !teacherInfo.value.currency_name) return alert('우리반 설정 완료 후 가능합니다.')
  window.open('/teacher/print?idnt_code=' + sessionStorage.getItem('t_idnt_code'))
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

    // 컬럼명 유연하게 매핑 (트림 처리 및 동의어 대응)
    const normalizeKey = (obj, keyVariants) => {
      const keys = Object.keys(obj);
      for (const variant of keyVariants) {
        const found = keys.find(k => k.trim() === variant);
        if (found) return obj[found];
      }
      return null;
    };

    const students = jsonData
      .map((row, index) => {
        const name = normalizeKey(row, ['이름', '성명', '학생명']);
        if (!name) {
          console.warn(`Row ${index} skipped: Name not found`, row);
          return null;
        }

        return {
          idnt_code: GenerateUUID(),
          student_name: String(name).trim(),
          student_grade: normalizeKey(row, ['학년']),
          student_class: normalizeKey(row, ['반', '학급']),
          mb_point: parseInt(normalizeKey(row, ['포인트', '잔액']) || 0),
          student_number: normalizeKey(row, ['학번', '번호', '번호 ']),
          birth_date: normalizeKey(row, ['생년월일', '생일', '생년']),
          gender: normalizeKey(row, ['성별', '성']),
          guardian_name: normalizeKey(row, ['보호자', '부모님']),
          guardian_phone: normalizeKey(row, ['연락처', '보호자연락처', '전화번호']),
          address: normalizeKey(row, ['주소']),
          teacher: JSON.parse(sessionStorage.getItem('teacher'))?.idx,
          pay_name: normalizeKey(row, ['화폐이름', '단위', '화폐']),
          role_code: null
        };
      })
      .filter(s => s !== null);

    // 선생님/관리자 계정은 이미 있을 수 있으므로, 
    // 필요시 별도로 처리하거나 중복 체크가 되어야 함. 
    // 여기서는 일단 기존 로직 유지하되 빈 데이터면 업로드 중단
    if (students.length === 0) {
      alert('유효한 학생 데이터를 찾을 수 없습니다. 엑셀 파일의 헤더(이름, 학년, 반 등)를 확인해주세요.');
      return;
    }

    // 관리 계정 추가 (선택 사항: 이미 있으면 추가 안하게 서버에서 처리하는 게 좋음)
    // 현재는 단순 연동을 위해 유지
    students.push({
      idnt_code: GenerateUUID(),
      student_name: '선생님',
      teacher: JSON.parse(sessionStorage.getItem('teacher'))?.idx,
      role_code: '1'
    }, {
      idnt_code: GenerateUUID(),
      student_name: '관리자',
      teacher: JSON.parse(sessionStorage.getItem('teacher'))?.idx,
      role_code: '1'
    });

    console.log('업로드 시도 데이터:', students)

    // API 호출
    try {
      const res = await apiPost('teacher.php', {
        mode: 'studentInsert',
        data: students
      })

      if (res.result === 'SUCCESS') {
        alert(`${res.count}명의 데이터가 성공적으로 업로드되었습니다.`);
        window.location.reload()
      } else {
        let msg = res.message || '업로드 실패';
        if (res.errors && res.errors.length > 0) {
          msg += '\n\n오류 상세:\n' + res.errors.join('\n');
        }
        alert(msg)
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

const deleteQRBg = () => {
  teacherInfo.value.qr_bg = ''
  previewQRBg.value = null
  uploadedQRBg.value = null
}

const onQRBgChange = (e) => {
  const file = e.target.files[0]
  if (!file) return
  uploadedQRBg.value = file
  previewQRBg.value = URL.createObjectURL(file)
}



const qrTop = ref(0)
const qrLeft = ref(0)
const qrWidth = ref(100)
const qrMode = ref('IMAGE')
const qrColor = ref('#ffffff')
const qrTextColor = ref('#000000')

watch(teacherInfo, (newVal) => {
  if (newVal) {
    qrTop.value = newVal.qr_top || 0
    qrLeft.value = newVal.qr_left || 0
    qrWidth.value = newVal.qr_width || 100
    qrMode.value = newVal.qr_mode || 'IMAGE'
    qrColor.value = newVal.qr_color || '#ffffff'
    qrTextColor.value = newVal.qr_text_color || '#000000'
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
  formData.append('qr_mode', qrMode.value)
  formData.append('qr_color', qrColor.value)
  formData.append('qr_text_color', qrTextColor.value)

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
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 class="text-2xl font-black text-gray-800 flex flex-wrap items-center gap-2">
            <span class="text-3xl">👋</span>
            {{ teacherInfo?.mb_name }} <span class="text-blue-500 text-lg font-bold">선생님</span>
            <UButton label="패스워드 변경" size="xs" color="gray" variant="soft" class="ml-2 rounded-lg font-bold"
              @click="isPasswordModalOpen = true" />
          </h1>
          <p class="text-sm text-gray-400 font-medium ml-10">귀염둥이 친구들과 함께하는 경제 교실</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <UChip :show="hasNewDevNote" text="NEW" size="md" color="red">
            <UButton label="개발자노트 & TIP" color="purple" variant="soft" icon="i-heroicons-document-text"
              @click="isDevNoteModalOpen = true" class="rounded-xl font-bold" />
          </UChip>
          <UButton label="가이드" color="blue" variant="soft" icon="i-heroicons-book-open" to="/guide" target="_blank"
            class="rounded-xl font-bold" />
          <UButton label="기능개선요청" color="yellow" variant="soft" icon="i-heroicons-light-bulb"
            @click="isFeatureRequestModalOpen = true" class="rounded-xl font-bold" />
          <UButton label="이용방법문의" color="emerald" variant="soft" icon="i-heroicons-chat-bubble-left-right"
            to="https://open.kakao.com/o/sf8I8jxe" target="_blank" class="rounded-xl font-bold" />
          <UButton label="로그아웃" color="gray" variant="ghost" icon="i-heroicons-arrow-right-on-rectangle"
            @click="logout" />
          <UButton label="초기화" color="red" variant="soft" icon="i-heroicons-trash" @click="onClickReset" />
        </div>
      </div>

      <!-- 🛠️ 퀵 액션 바 -->
      <div class="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <UButton label="1등급 혜택 설정" icon="i-heroicons-cog-6-tooth" color="blue" @click="handleOpenSettings"
          class="rounded-xl px-6 py-2 shadow-md shadow-blue-100 font-bold" />
        <UButton label="학생 업로드 엑셀 샘플" icon="i-heroicons-document-arrow-down" color="white" variant="solid"
          @click="onClickDownload" class="rounded-xl px-4 py-2 shadow-sm border-gray-200" />
        <UButton label="학생 엑셀 업로드" icon="i-heroicons-cloud-arrow-up" color="white" variant="solid"
          @click="onClickUpload" class="rounded-xl px-4 py-2 shadow-sm border-gray-200" />
        <UButton label="직업 관리" icon="i-heroicons-briefcase" color="indigo" @click="isJobModalOpen = true"
          class="rounded-xl px-6 py-2 shadow-md shadow-indigo-100 font-bold" />
        <UButton label="QR 카드 디자인" icon="i-heroicons-paint-brush" color="purple" @click="isQRDesignModalOpen = true"
          class="rounded-xl px-6 py-2 shadow-md shadow-purple-100 font-bold" />
        <UButton label="학생 QR 전체 인쇄" icon="i-heroicons-printer" color="white" variant="solid" @click="printStudentQR"
          class="rounded-xl px-4 py-2 shadow-sm border-gray-200" />
      </div>

      <!-- 📊 핵심 대시보드 카드 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 국고 잔액 -->
        <div
          class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-700 p-7 text-white shadow-xl shadow-blue-100 transition-all hover:-translate-y-1">
          <!-- Background Decoration -->
          <div
            class="absolute right-0 top-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
            <span class="i-heroicons-building-library-solid w-32 h-32" />
          </div>

          <div class="relative z-10 flex flex-col h-full justify-between gap-8">
            <div class="flex justify-between items-start">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-black tracking-widest uppercase opacity-50">National Treasury</span>
                  <div class="w-1 h-1 rounded-full bg-white/30" />
                  <span class="text-[9px] font-bold opacity-40">우리반 국고</span>
                </div>
                <h4 class="text-sm font-bold opacity-80">현재 국고 잔액</h4>
              </div>
              <UButton icon="i-heroicons-pencil-square-solid" size="2xs" color="white" variant="soft"
                class="bg-white/10 hover:bg-white/20 border-0 rounded-lg backdrop-blur-md"
                @click="onClickEditTreasury" />
            </div>

            <div>
              <div class="flex items-baseline gap-2 mb-2">
                <span class="text-4xl font-black tracking-tight">{{ Number(teacherInfo?.mb_point || 0).toLocaleString()
                  }}</span>
                <span class="text-lg font-bold opacity-60">{{ teacherInfo?.currency_name }}</span>
              </div>
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 bg-black/10 rounded-xl backdrop-blur-sm border border-white/5">
                <span class="text-[10px] font-black text-white/50 uppercase">Student Assets</span>
                <span class="text-[11px] font-bold text-white/80">
                  {{ Number(teacherInfo?.student_mb_point || 0).toLocaleString() }}{{ teacherInfo?.currency_name }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 누적 세금 -->
        <div
          class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 p-6 text-white shadow-xl shadow-orange-200 transition-all hover:-translate-y-1">
          <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
            <span class="i-heroicons-document-text-solid w-32 h-32" />
          </div>
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <span class="i-heroicons-receipt-percent-solid w-6 h-6" />
            </div>
            <UButton label="내역 확인" size="2xs" color="white" variant="soft"
              class="bg-white/10 hover:bg-white/20 border-0" @click="openHistoryModal('tax')" />
          </div>
          <p class="text-sm font-medium opacity-80 mb-1">우리반 누적 세금</p>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black">{{ Number(teacherInfo?.tax || 0).toLocaleString() }}</span>
            <span class="text-sm font-bold opacity-70">{{ teacherInfo?.currency_name }}</span>
          </div>
        </div>

        <!-- 누적 벌금 -->
        <div
          class="relative overflow-hidden group rounded-3xl bg-gradient-to-br from-rose-400 via-red-500 to-red-600 p-6 text-white shadow-xl shadow-red-200 transition-all hover:-translate-y-1">
          <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
            <span class="i-heroicons-exclamation-triangle-solid w-32 h-32" />
          </div>
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <span class="i-heroicons-shield-exclamation-solid w-6 h-6" />
            </div>
            <UButton label="벌금 관리" size="2xs" color="white" variant="soft"
              class="bg-white/10 hover:bg-white/20 border-0" @click="openHistoryModal('penalty')" />
          </div>
          <p class="text-sm font-medium opacity-80 mb-1">우리반 누적 벌금</p>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-black">{{ Number(teacherInfo?.penalty || 0).toLocaleString() }}</span>
            <span class="text-sm font-bold opacity-70">{{ teacherInfo?.currency_name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-start">
      <!-- 🏠 우리반 설정 레이아웃 -->
      <div class="space-y-6 lg:sticky lg:top-24">
        <section class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
          <h2 class="text-lg font-black text-gray-800 mb-6 flex items-center gap-2">
            <div class="p-1.5 bg-blue-100 rounded-lg">
              <span class="i-heroicons-home-solid w-5 h-5 text-blue-600 outline-none" />
            </div>
            우리반 기본 정보 설정
          </h2>

          <div class="flex-1 space-y-6">
            <div class="space-y-1">
              <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">소속 학교</label>
              <USelectMenu v-model="teacherInfo.mb_school" :searchable="fetchSchools" placeholder="학교를 검색하세요..."
                size="lg" class="rounded-xl" @update:modelValue="onSelectSchool" />
            </div>

            <!-- 학년/반 필드 제거됨 (NULL 유지) -->

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

            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">단짝 친구 확인 비용</label>
                <UInput v-model="teacherInfo.soulmate_price" type="number" size="xl" />
              </div>
              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wider">오늘의 운세 확인 비용</label>
                <UInput v-model="teacherInfo.hope_price" type="number" size="xl" />
              </div>
            </div>

            <UButton label="위 정보 모두 저장하기" color="blue" size="xl" block
              class="mt-8 font-black rounded-2xl py-4 shadow-lg shadow-blue-100" @click="saveClassSettings" />
        </section>
      </div>

      <!-- 💰 적금 상품 관리 (Multiple) -->
      <div class="space-y-6">
        <section class="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col">
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-xl font-black text-gray-800 flex items-center gap-2">
              <div class="p-1.5 bg-emerald-100 rounded-lg">
                <span class="i-heroicons-banknotes-solid w-5 h-5 text-emerald-600 outline-none" />
              </div>
              적금 상품 관리
            </h2>
            <UButton icon="i-heroicons-plus" label="새 상품" color="emerald" variant="soft" @click="addNewDepositType"
              class="rounded-xl font-black px-3 py-1.5" />
          </div>
          <p class="text-xs text-gray-400 mb-6 ml-10">다양한 적금 상품을 만들어 아이들의 저축을 유도하세요.</p>

          <div class="flex-1 space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
            <div v-if="depositTypes.length === 0"
              class="text-center py-12 bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200">
              <p class="text-xs text-gray-400 font-bold">아직 등록된 상품이 없습니다.</p>
            </div>

            <div v-for="(item, idx) in depositTypes" :key="idx"
              class="p-5 bg-gray-50/50 border border-gray-100 rounded-2xl space-y-4 hover:border-emerald-200 transition-all">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="text-[10px] font-black text-gray-400 uppercase">상품명</label>
                  <UInput v-model="item.deposit_name" placeholder="상품명" size="lg" class="bg-white" />
                </div>
                <div class="space-y-1">
                  <label class="text-[10px] font-black text-gray-400 uppercase">기간 (일)</label>
                  <UInput v-model="item.deposit_day" type="number" size="lg" trailing-icon="i-heroicons-calendar"
                    class="bg-white" />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 pb-2">
                <div class="space-y-1">
                  <label class="text-[10px] font-black text-gray-400 uppercase">이자율 (%)</label>
                  <UInput v-model="item.deposit_interest" type="number" size="md" class="bg-white" />
                </div>
                <!-- <div class="space-y-1">
                  <label class="text-[10px] font-black text-gray-400 uppercase">1등급 우대 (+%)</label>
                  <UInput v-model="item.grade1_deposit_interest" type="number" size="md" class="bg-white" />
                </div> -->

                <div class="space-y-1">
                  <label class="text-[10px] font-black text-gray-400 uppercase">최소 금액</label>
                  <UInput v-model="item.deposit_min" type="number" size="md" class="bg-white" />
                </div>
                <div class="space-y-1">
                  <label class="text-[10px] font-black text-gray-400 uppercase">최대 한도</label>
                  <UInput v-model="item.deposit_max" type="number" size="md" class="bg-white" />
                </div>
              </div>

              <div class="flex gap-2">
                <UButton label="저장" color="emerald" class="flex-1 rounded-xl font-bold"
                  @click="saveDepositType(item)" />
                <UButton icon="i-heroicons-trash" color="red" variant="soft" class="rounded-xl"
                  @click="deleteDepositType(item.idx, idx)" />
              </div>
            </div>
          </div>

          <!-- 실시간 신청 현황 요약 -->
          <div class="mt-6 pt-6 border-t border-gray-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xs font-black text-gray-400 uppercase tracking-widest">실시간 신청 현황</h3>
              <span class="text-[10px] font-bold bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">{{
                deposits.length }}건</span>
            </div>
            <div v-if="deposits.length > 0" class="max-h-[120px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
              <div v-for="dep in deposits" :key="dep.idx"
                class="flex items-center justify-between p-2.5 bg-white rounded-xl border border-gray-100">
                <div class="flex items-center gap-2">
                  <div
                    class="w-7 h-7 bg-emerald-50 rounded-full flex items-center justify-center text-[10px] font-black text-emerald-600">
                    {{ dep.student_name.charAt(0) }}
                  </div>
                  <span class="text-xs font-bold text-gray-700">{{ dep.student_name }}</span>
                </div>
                <div class="text-right">
                  <p class="text-xs font-black text-gray-800">{{ Number(dep.amount).toLocaleString() }} {{
                    teacherInfo.currency_name }}</p>
                </div>
              </div>
            </div>
            <p v-else class="text-center py-4 text-[10px] text-gray-400 font-bold">진행 중인 적금이 없습니다.</p>
          </div>
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
              <span class="text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{{ studentOptions.length
                }}명</span>
            </h2>
            <p class="text-sm text-gray-400 mt-1">학생을 클릭하여 상세 정보를 보거나 해당 계정으로 대리 로그인할 수 있습니다.</p>
          </div>
        </div>

        <!-- 학생 태그 그리드 -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          <div v-for="student in studentOptions" :key="student.value"
            @click="handleStudentClick(student.value, student.label)" :class="[
              'group relative flex flex-col items-center justify-center p-4 rounded-3xl cursor-pointer transition-all duration-300 border-2',
              selectedStudent === student.value ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200 -translate-y-1' : 'bg-white border-gray-50 hover:border-blue-200 hover:bg-blue-50/30'
            ]">
            <div
              :class="['w-12 h-12 flex items-center justify-center rounded-2xl mb-2 text-lg font-black transition-colors',
                selectedStudent === student.value ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-500']">
              {{ student.label.substring(0, 1) }}
            </div>
            <p
              :class="['text-xs font-black truncate w-full text-center', selectedStudent === student.value ? 'text-white' : 'text-gray-700']">
              {{ student.label }}
            </p>
            <p
              :class="['text-[10px] mt-0.5 font-bold', selectedStudent === student.value ? 'text-white/70' : 'text-gray-400']">
              {{ Number(student?.mb_point).toLocaleString() }}P
            </p>

            <!-- 로그인 가이드 뱃지 -->
            <div v-if="selectedStudent === student.value"
              class="absolute -top-2 -right-2 bg-yellow-400 text-white p-1 rounded-full shadow-md animate-bounce">
              <span class="i-heroicons-key-solid w-3 h-3" />
            </div>
          </div>
        </div>

        <!-- 선택된 학생 상세 액션 -->
        <Transition name="fade-slide">
          <div v-if="selectedStudentName"
            class="mt-8 p-10 bg-white rounded-[40px] border border-gray-100 shadow-2xl shadow-blue-50/50">
            <!-- 학생 프로필 정보 -->
            <div
              class="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-10 pb-10 border-b border-gray-100">
              <div class="relative">
                <div
                  class="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center rounded-[32px] text-3xl font-black shadow-2xl shadow-blue-200">
                  {{ selectedStudentName.substring(0, 1) }}
                </div>
              </div>

              <div class="flex-1 text-center lg:text-left space-y-4">
                <div>
                  <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-1">
                    <h3 class="text-3xl font-black text-gray-800">{{ selectedStudentName }}</h3>
                    
                    <!-- 직업 라벨 (Roles) -->
                    <div v-if="selectedStudentData?.roles?.length > 0" class="flex flex-wrap gap-1.5">
                      <span v-for="role in selectedStudentData.roles" :key="role.idx" 
                        class="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black rounded-full border border-gray-200 uppercase tracking-wider">
                        {{ role.role_name }}
                      </span>
                    </div>
                    <div v-else class="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full">
                      <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">일반 학생</span>
                    </div>
                  </div>
                  <p class="text-sm text-gray-400 font-medium">학생의 지갑 및 활동 내역을 관리하고 대리 로그인을 수행할 수 있습니다.</p>
                </div>

                <div v-if="selectedStudentData?.badges" class="flex flex-wrap justify-center lg:justify-start gap-3">
                  <div v-for="(badge, bIdx) in selectedStudentData.badges.split(',')" :key="bIdx"
                    @click="handleUseBadge(badge, bIdx)" class="group relative cursor-pointer">
                    <span class="text-3xl hover:scale-125 transition-transform inline-block drop-shadow-sm">{{ badge
                      }}</span>
                    <div
                      class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      사용 확인
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-3 min-w-[280px]">
                <UButton :label="`${selectedStudentName} 학생으로 로그인`" color="black" variant="solid" size="xl"
                  icon="i-heroicons-arrow-right-on-rectangle"
                  class="rounded-[24px] h-14 font-black text-base shadow-xl transition-all hover:-translate-y-1 active:scale-95 px-8"
                  @click="onClickLogin" />
                <UButton label="국고 지원금 보내기" color="emerald" variant="solid" size="xl" icon="i-heroicons-banknotes"
                  class="rounded-[24px] h-14 font-black text-base shadow-xl transition-all hover:-translate-y-1 active:scale-95 px-8"
                  @click="handleTreasuryTransfer" />
              </div>
            </div>

            <!-- 관리 컨트롤러 그리드 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- 직업 관리 -->
              <div class="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4">
                <div class="flex items-center gap-2">
                  <span class="i-heroicons-briefcase-solid w-4 h-4 text-indigo-500" />
                  <span class="text-xs font-black text-gray-400 uppercase tracking-widest">직업 설정</span>
                </div>
                <div class="space-y-3">
                  <div class="flex flex-wrap gap-2 min-h-[32px]">
                    <UBadge v-for="role in selectedStudentData.roles" :key="role.idx" color="indigo" variant="soft"
                      class="rounded-lg py-1 pl-3 pr-1 flex items-center gap-1 font-bold text-sm">
                      {{ role.role_name }}
                      <UButton icon="i-heroicons-x-mark" color="gray" variant="ghost" size="xs"
                        class="text-gray-400 hover:text-red-500 rounded-lg p-0.5"
                        @click.stop="handleRoleToggle(role.idx, 'unset')" />
                    </UBadge>
                    <div v-if="!selectedStudentData.roles?.length" class="text-xs text-gray-400 font-bold py-1">직업 없음
                    </div>
                  </div>
                  <USelectMenu :options="jobs" value-attribute="idx" option-attribute="role_name" placeholder="직업 추가하기"
                    class="w-full" size="xl" @update:model-value="(val) => handleRoleToggle(val, 'set')">
                    <template #label>
                      <span class="text-gray-400 font-bold">직업 추가하기...</span>
                    </template>
                  </USelectMenu>
                </div>
              </div>

              <!-- 신용 정보 -->
              <div class="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4">
                <div class="flex items-center gap-2">
                  <span class="i-heroicons-shield-check-solid w-4 h-4 text-emerald-500" />
                  <span class="text-xs font-black text-gray-400 uppercase tracking-widest">신용 상태</span>
                </div>
                <USelectMenu v-model="selectedStudentData.credit_score" :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  placeholder="등급 선택" class="w-full font-bold" size="xl" @update:model-value="handleCreditUpdate">
                  <template #label>
                    <span class="font-bold">{{ selectedStudentData?.credit_score || 5 }}등급</span>
                  </template>
                </USelectMenu>
              </div>

              <!-- 보상 & 스템프 -->
              <div class="bg-orange-50/30 p-6 rounded-3xl border border-orange-100/50 space-y-4">
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <span class="i-heroicons-hand-raised-solid w-4 h-4 text-orange-500" />
                    <span class="text-xs font-black text-gray-400 uppercase tracking-widest">스템프 현황</span>
                  </div>
                  <span class="text-xs font-black text-orange-600 bg-orange-100 px-2 py-0.5 rounded-lg">{{
                    selectedStudentData?.stamp_count || 0 }}개</span>
                </div>
                <div class="flex gap-2">
                  <UButton label="칭찬" color="orange" variant="soft" block size="xl" icon="i-heroicons-plus-circle"
                    class="flex-1 rounded-2xl font-black h-[52px]" @click="handleGiveStamp" />
                  <UButton label="회수" color="gray" variant="soft" block size="xl" icon="i-heroicons-minus-circle"
                    class="flex-1 rounded-2xl font-black h-[52px]" :disabled="!(selectedStudentData?.stamp_count > 0)"
                    @click="handleTakeStamp" />
                </div>
              </div>
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
              <div v-for="item in points" :key="item.idx"
                class="flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors">
                <div class="flex items-center gap-4">
                  <div :class="['p-2 rounded-2xl flex items-center justify-center',
                    item.point_type === 'save' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600']">
                    <span
                      :class="item.point_type === 'save' ? 'i-heroicons-plus-circle-solid' : 'i-heroicons-minus-circle-solid'"
                      class="w-6 h-6" />
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

        <div class="space-y-4">
          <!-- 카드 미리보기 레이아웃 -->
          <div
            class="mt-4 relative mx-auto w-[86mm] aspect-[1.6/1] border border-gray-200 rounded-[28px] overflow-hidden bg-white shadow-2xl transition-all scale-110 origin-center mb-6"
            :style="{ backgroundColor: qrColor }">
            <!-- 커스텀 배경 미리보기 -->
            <img v-if="previewQRBg || teacherInfo.qr_bg"
              :src="previewQRBg || (teacherInfo.qr_bg.startsWith('http') ? teacherInfo.qr_bg : hostUrl + teacherInfo.qr_bg)"
              :style="{
                position: 'absolute',
                top: qrTop + 'px',
                left: qrLeft + 'px',
                width: (Number(qrWidth) + 4) + '%',
                zIndex: 0
              }" />

            <!-- 기본 레이아웃 가이드 (비투과 오버레이) -->
            <div class="absolute inset-0 z-10 pointer-events-none p-6 flex flex-col justify-between"
              :style="{ color: qrTextColor }">
              <div class="flex justify-between items-start">
                <div class="space-y-1">
                  <div class="w-20 h-5 bg-current opacity-20 rounded"></div>
                  <div class="text-[10px] font-black uppercase tracking-widest opacity-50">{{ teacherInfo.class_name ||
                    '우리반 이름' }}</div>
                </div>
                <div class="text-right">
                  <div class="text-[11px] font-black opacity-80">1번 홍길동</div>
                  <div class="text-[9px] font-bold opacity-40 uppercase">Student Card</div>
                </div>
              </div>

              <div class="flex justify-between items-end">
                <div class="text-[9px] leading-relaxed font-bold opacity-60">
                  입출금은 은행원 승인이 필요합니다.<br>이체는 개인 QR코드로 가능합니다.<br>QR코드를 타인에게 노출하지 마세요.
                </div>
                <div
                  class="w-14 h-14 border-2 border-current opacity-20 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span class="i-heroicons-qr-code w-10 h-10" />
                </div>
              </div>
            </div>

            <input type="file" @change="onQRBgChange" class="absolute inset-0 opacity-0 cursor-pointer z-20"
              accept="image/*" />
          </div>

          <!-- 상세 컨트롤 -->
          <div class="mt-6 space-y-6 bg-gray-50/50 p-6 rounded-[32px] border border-gray-100">
            <!-- 공통 컨트롤 -->
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">카드 텍스트 색상</label>
                <div class="flex items-center gap-2 bg-white p-2.5 rounded-2xl border border-gray-200">
                  <input type="color" v-model="qrTextColor" class="w-8 h-8 rounded-lg cursor-pointer bg-transparent" />
                  <span class="text-xs font-bold text-gray-600 tabular-nums uppercase">{{ qrTextColor }}</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">배경 바탕색</label>
                <div class="flex items-center gap-2 bg-white p-2.5 rounded-2xl border border-gray-200">
                  <input type="color" v-model="qrColor" class="w-8 h-8 rounded-lg cursor-pointer bg-transparent" />
                  <span class="text-xs font-bold text-gray-600 tabular-nums uppercase">{{ qrColor }}</span>
                </div>
              </div>
            </div>

            <div class="divider h-px bg-gray-200/50"></div>

            <!-- 이미지 전용 컨트롤 -->
            <div class="space-y-6">
              <div class="flex justify-between items-center mb-2 px-1">
                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">배경 이미지 설정</label>
                <UButton v-if="teacherInfo.qr_bg || previewQRBg" label="이미지 삭제" color="red" variant="soft" size="xs"
                  icon="i-heroicons-trash" class="rounded-lg font-bold" @click="deleteQRBg" />
              </div>

              <div class="space-y-2">
                <div class="flex justify-between text-[11px] font-black text-gray-600 px-1">
                  <span class="flex items-center gap-1.5"><span class="i-heroicons-arrows-up-down w-3.5 h-3.5" />상단
                    위치</span>
                  <span class="bg-white px-2 py-0.5 rounded-lg border border-gray-200 shadow-sm">{{ qrTop }}px</span>
                </div>
                <input type="range" v-model="qrTop" min="-400" max="400" class="w-full accent-purple-600" />
              </div>

              <div class="space-y-2">
                <div class="flex justify-between text-[11px] font-black text-gray-600 px-1">
                  <span class="flex items-center gap-1.5"><span class="i-heroicons-arrows-right-left w-3.5 h-3.5" />좌측
                    위치</span>
                  <span class="bg-white px-2 py-0.5 rounded-lg border border-gray-200 shadow-sm">{{ qrLeft }}px</span>
                </div>
                <input type="range" v-model="qrLeft" min="-400" max="400" class="w-full accent-purple-600" />
              </div>

              <div class="space-y-2">
                <div class="flex justify-between text-[11px] font-black text-gray-600 px-1">
                  <span class="flex items-center gap-1.5"><span
                      class="i-heroicons-arrows-pointing-out w-3.5 h-3.5" />이미지
                    너비</span>
                  <span class="bg-white px-2 py-0.5 rounded-lg border border-gray-200 shadow-sm">{{ qrWidth }}%</span>
                </div>
                <input type="range" v-model="qrWidth" min="10" max="500" class="w-full accent-purple-600" />
              </div>

              <div class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                <p class="text-[10px] text-blue-600 font-bold leading-relaxed flex gap-2">
                  <span class="i-heroicons-information-circle-solid w-4 h-4" />
                  미리보기 카드를 클릭하면 새 이미지를 업로드할 수 있습니다.
                </p>
              </div>
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

    <!-- 직업 관리 모달 -->
    <UModal v-model="isJobModalOpen">
      <div class="p-6 space-y-6">
        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span class="i-heroicons-briefcase w-6 h-6 text-indigo-500" />
          우리반 직업 관리
        </h2>

        <div class="space-y-4">
          <div class="flex gap-2">
            <UInput v-model="newJobName" placeholder="새로운 직업 이름 입력" class="flex-1" @keyup.enter="saveJob" />
            <UButton label="추가" color="indigo" @click="saveJob" />
          </div>

          <div class="bg-gray-50 rounded-2xl p-4 space-y-2 max-h-[400px] overflow-y-auto">
            <div v-for="job in jobs" :key="job.idx"
              class="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div class="flex items-center gap-2">
                <span :class="['w-2 h-2 rounded-full', job.role_code ? 'bg-blue-500' : 'bg-indigo-300']"></span>
                <span class="font-bold text-gray-700">{{ job.role_name }}</span>
                <span v-if="job.role_code"
                  class="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-black">DEFAULT</span>
              </div>
              <UButton v-if="!job.role_code" icon="i-heroicons-trash" color="rose" variant="ghost" size="xs"
                @click="deleteJob(job.idx)" />
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <UButton label="닫기" color="gray" variant="soft" @click="isJobModalOpen = false" />
        </div>
      </div>
    </UModal>
    <!-- 1등급 신용등급 특별 혜택 모달 -->
    <UModal v-model="isSettingModalOpen" :ui="{ width: 'max-w-xl' }">
      <div class="p-8 space-y-8">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-black text-gray-800 flex items-center gap-2">
            <span class="i-heroicons-sparkles-solid w-6 h-6 text-blue-500" />
            1등급 혜택 설정
          </h3>
          <UButton icon="i-heroicons-x-mark" color="gray" variant="ghost" circular
            @click="isSettingModalOpen = false" />
        </div>

        <div class="space-y-6">
          <div class="p-8 bg-blue-50/50 rounded-[40px] space-y-8 border border-blue-100 shadow-xl shadow-blue-50/50">
            <div class="grid grid-cols-2 gap-8">
              <div class="space-y-3">
                <label class="text-[11px] font-black text-blue-600/60 uppercase tracking-widest ml-1">단짝친구 확인 비용</label>
                <UInput v-model="teacherSettings.grade1_soulmate_price" type="number" size="xl" class="rounded-2xl" />
              </div>
              <div class="space-y-3">
                <label class="text-[11px] font-black text-blue-600/60 uppercase tracking-widest ml-1">오늘의 운세 확인
                  비용</label>
                <UInput v-model="teacherSettings.grade1_hope_price" type="number" size="xl" class="rounded-2xl" />
              </div>
            </div>




            <div class="grid grid-cols-2 gap-8">
              <div class="space-y-3">
                <label class="text-[11px] font-black text-blue-600/60 uppercase tracking-widest ml-1">적금 추가 이율
                  (+%)</label>
                <UInput v-model="teacherSettings.grade1_deposit_interest" type="number" size="xl" class="rounded-2xl" />
              </div>
              <div class="space-y-3">
                <label class="text-[11px] font-black text-blue-600/60 uppercase tracking-widest ml-1">적금 추가 한도
                  (+금액)</label>
                <UInput v-model="teacherSettings.grade1_deposit_max" type="number" size="xl" class="rounded-2xl" />
              </div>
            </div>

            <div class="bg-blue-600 text-white p-5 rounded-[24px] text-[11px] font-black leading-relaxed flex gap-4">
              <span class="i-heroicons-information-circle w-6 h-6 shrink-0" />
              이 설정은 신용등급이 1등급인 학생들에게 자동으로 적용되는 특별 우대 혜택입니다.
            </div>
          </div>

          <UButton label="혜택 저장하기" block color="blue" size="xl"
            class="h-16 rounded-[24px] font-black text-lg shadow-xl shadow-blue-100" @click="handleSaveSettings" />
        </div>
      </div>
    </UModal>

    <!-- Modals are closed or removed -->
    <!-- 국고 잔액 수정 모달 -->
    <UModal v-model="isTreasuryModalOpen">
      <div class="p-8">
        <h3 class="text-xl font-black mb-6 flex items-center gap-2">
          <span class="i-heroicons-banknotes-solid w-6 h-6 text-blue-600" />
          국고 잔액 수정
        </h3>
        <div class="space-y-6">
          <UFormGroup label="수정할 금액 (입력한 금액으로 변경됩니다)">
            <UInput v-model="treasuryForm.amount" type="number" size="xl" autocomplete="off"
              class="w-full text-center font-black" />
          </UFormGroup>
          <div class="flex gap-4">
            <UButton label="취소" color="gray" variant="ghost" class="flex-1" size="xl"
              @click="isTreasuryModalOpen = false" />
            <UButton label="저장하기" color="blue" class="flex-1" size="xl" @click="submitTreasuryEdit" />
          </div>
        </div>
      </div>
    </UModal>

    <!-- 국고 지원금 이체 모달 -->
    <UModal v-model="isTransferModalOpen">
      <div class="p-8">
        <h3 class="text-xl font-black mb-6 flex items-center gap-2">
          <span class="i-heroicons-paper-airplane-solid w-6 h-6 text-emerald-600" />
          '{{ selectedStudentName }}' 학생에게 송금
        </h3>
        <div class="space-y-6">
          <UFormGroup label="보낼 금액 (국고에서 차감)">
            <UInput v-model="transferForm.amount" type="number" size="xl" placeholder="예: 50" autocomplete="off"
              class="w-full text-center font-black" />
          </UFormGroup>
          <UFormGroup label="지급 메모 (통장 내역)">
            <UInput v-model="transferForm.memo" size="xl" placeholder="국고 지원금, 대회 우승 상금 등" autocomplete="off" />
          </UFormGroup>
          <div class="flex gap-4">
            <UButton label="취소" color="gray" variant="ghost" class="flex-1" size="xl"
              @click="isTransferModalOpen = false" />
            <UButton label="보내기" color="emerald" class="flex-1 font-black" size="xl" @click="submitTreasuryTransfer" />
          </div>
        </div>
      </div>
    </UModal>
    <!-- 기능 개선 요청 모달 -->
    <UModal v-model="isFeatureRequestModalOpen">
      <div class="p-8 space-y-6">
        <div class="space-y-2">
          <h2 class="text-2xl font-black text-gray-800 flex items-center gap-2">
            <span class="i-heroicons-light-bulb-solid w-7 h-7 text-yellow-500" />
            기능 개선 요청
          </h2>
          <p class="text-sm font-medium text-gray-400">
            사용 중 불편한 점이나 추가되었으면 하는 기능이 있다면 자유롭게 적어주세요! 선생님의 소중한 의견을 텔레그램으로 즉시 전달합니다.
          </p>
        </div>

        <div class="space-y-4">
          <UTextarea v-model="featureRequestForm.content" placeholder="이곳에 의견을 작성해 주세요." :rows="6" autoresize
            class="w-full text-lg font-medium p-4 rounded-3xl border-2 border-gray-50 focus:border-yellow-400 transition-all bg-gray-50/50" />

          <div class="flex gap-3">
            <UButton label="취소" color="gray" variant="soft" block size="xl" class="flex-1 rounded-2xl font-black h-16"
              @click="isFeatureRequestModalOpen = false" />
            <UButton label="의견 보내기" color="yellow" variant="solid" block size="xl"
              class="flex-1 rounded-2xl font-black h-16 shadow-xl shadow-yellow-100" @click="submitFeatureRequest" />
          </div>
        </div>
      </div>
    </UModal>
    <!-- 패스워드 변경 모달 -->
    <UModal v-model="isPasswordModalOpen">
      <div class="p-8 space-y-6">
        <div class="space-y-2">
          <h2 class="text-2xl font-black text-gray-800 flex items-center gap-2">
            <span class="i-heroicons-lock-closed-solid w-7 h-7 text-gray-400" />
            선생님 비밀번호 변경
          </h2>
          <p class="text-sm font-medium text-gray-400">보안을 위해 강력한 비밀번호를 사용해 주세요.</p>
        </div>

        <div class="space-y-4">
          <div class="space-y-1">
            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">New Password</label>
            <UInput v-model="passwordForm.newPassword" type="password" placeholder="새 비밀번호 입력" size="xl"
              class="rounded-2xl" icon="i-heroicons-key" />
          </div>
          <div class="space-y-1">
            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Confirm Password</label>
            <UInput v-model="passwordForm.confirmPassword" type="password" placeholder="비밀번호 확인" size="xl"
              class="rounded-2xl" icon="i-heroicons-shield-check" />
          </div>

          <div class="flex gap-3 pt-2">
            <UButton label="취소" color="gray" variant="soft" block size="xl" class="flex-1 rounded-2xl font-black h-16"
              @click="isPasswordModalOpen = false" />
            <UButton label="비밀번호 변경" color="black" variant="solid" block size="xl"
              class="flex-1 rounded-2xl font-black h-16 shadow-xl" @click="submitChangePassword" />
          </div>
        </div>
      </div>
    </UModal>
    <!-- 개발자노트 & TIP 모달 -->
    <UModal v-model="isDevNoteModalOpen" :ui="{ width: 'max-w-4xl' }">
      <div class="p-8 space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-black flex items-center gap-2">
            <span class="i-heroicons-document-text-solid w-6 h-6 text-purple-600" />
            개발자 노트 & TIP
          </h3>
          <UButton v-if="isAdmin" label="새 글 작성" color="purple" icon="i-heroicons-plus"
            @click="isDevNoteWriteModalOpen = true" />
        </div>

        <div class="space-y-6 max-h-[600px] overflow-y-auto pr-2">
          <div v-if="devNotes.length === 0" class="text-center py-20 text-gray-400">
            등록된 데이터가 없습니다.
          </div>
          <div v-for="note in devNotes" :key="note.idx"
            class="p-6 bg-gray-50 rounded-3xl border border-gray-100 space-y-4 shadow-sm hover:shadow-md transition">
            <div class="flex items-center justify-between">
              <span
                class="text-[10px] bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-black uppercase tracking-widest">{{
                  note.category }}</span>
              <span class="text-[10px] text-gray-400 font-bold tabular-nums">{{ note.c_datetime }}</span>
            </div>
            <div class="text-sm font-medium text-gray-700 leading-relaxed html-content"
              v-html="renderMarkdown(note.content)">
            </div>
          </div>
        </div>
        <UButton label="확인했습니다" block color="purple" size="xl" class="h-16 rounded-[24px] font-black"
          @click="isDevNoteModalOpen = false" />
      </div>
    </UModal>

    <!-- 글 작성 모달 (admin 전용) -->
    <UModal v-model="isDevNoteWriteModalOpen" :ui="{ width: 'max-w-3xl' }">
      <div class="p-8 space-y-6">
        <h3 class="text-xl font-black flex items-center gap-2">
          <span class="i-heroicons-pencil-square-solid w-6 h-6 text-purple-600" />
          노트 작성
        </h3>

        <div class="space-y-4">
          <div class="flex gap-4">
            <USelect v-model="newDevNote.category" :options="['개발자노트', '팁']" size="xl" class="flex-1" />
            <input type="file" id="note-img-upload" hidden @change="handleNoteImageUpload" accept="image/*" />
            <UButton icon="i-heroicons-photo" label="이미지 첨부" color="gray" variant="soft" size="xl"
              @click="() => document.getElementById('note-img-upload').click()" />
          </div>

          <div class="relative group">
            <UTextarea v-model="newDevNote.content" placeholder="내용을 입력하세요 (마크다운 지원)" :rows="12"
              class="font-medium p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-200" />
          </div>

          <div class="text-[10px] text-gray-400 font-bold bg-gray-50 p-3 rounded-xl border border-dotted border-gray-200">
            💡 팁: 마크다운 문법을 사용하여 글을 작성할 수 있습니다. 이미지는 위 버튼을 통해 첨부 가능합니다.
          </div>
        </div>

        <div class="flex gap-4">
          <UButton label="취소" color="gray" variant="soft" block class="h-14 font-black flex-1 rounded-2xl"
            @click="isDevNoteWriteModalOpen = false" />
          <UButton label="저장하기" color="purple" block class="h-14 font-black flex-1 rounded-2xl shadow-xl shadow-purple-100"
            @click="saveDevNote" />
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
