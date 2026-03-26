<script setup>
import { onMounted, ref } from 'vue'
import { apiPost } from '@/common/api'

const students = ref([])
const isLoading = ref(true)
const studentInfo = ref(null)

onMounted(async () => {
  const storedStudent = sessionStorage.getItem('student')
  if (!storedStudent) {
    window.location.href = '/login'
    return
  }
  studentInfo.value = JSON.parse(storedStudent)
  
  if (studentInfo.value.role_code_str !== 'CREDIT_MANAGER') {
    alert('신용관리사 권한이 없습니다.')
    window.location.href = '/'
    return
  }
  
  await fetchStudents()
})

const fetchStudents = async () => {
  isLoading.value = true
  try {
    const res = await apiPost('teacher.php', {
      mode: 'getCreditStudentList',
      teacher_idx: studentInfo.value.teacher,
      idnt_code: studentInfo.value.idnt_code
    })
    if (res.result === 'SUCCESS') {
      students.value = res.data
    }
  } catch (error) {
    console.error('학생 목록 조회 실패:', error)
  } finally {
    isLoading.value = false
  }
}

const setCreditGrade = async (student, grade) => {
  if (student.credit_score == grade) return

  if (!confirm(`${student.student_name} 학생의 신용등급을 ${grade}등급으로 변경하시겠습니까?`)) return

  try {
    const res = await apiPost('teacher.php', {
      mode: 'updateCreditScore',
      student_idx: student.idx,
      credit_score: grade
    })
    if (res.result === 'SUCCESS') {
      student.credit_score = grade
    } else {
      alert(res.message || '업데이트 실패')
    }
  } catch (err) {
    alert('에러가 발생했습니다.')
  }
}
</script>

<template>
  <div class="px-4 py-8 pb-32">
    <div class="mb-10">
      <h1 class="text-3xl font-black text-gray-800 mb-2 flex items-center gap-3">
        <div class="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
          <Icon name="solar:shield-star-bold-duotone" class="text-indigo-600 w-8 h-8" />
        </div>
        <span>Credit <span class="text-indigo-600">Center</span></span>
      </h1>
      <p class="text-sm text-gray-400 font-medium opacity-80">성실하고 정직한 학급 신용 문화를 함께 만들어가요!</p>
    </div>

    <!-- 📊 관리자 요약 -->
    <div class="mb-10 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[40px] p-8 text-white shadow-2xl shadow-indigo-100 relative overflow-hidden">
      <div class="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      <div class="relative z-10 flex items-center gap-6">
        <div class="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">
          <Icon name="solar:user-speak-bold-duotone" class="w-10 h-10" />
        </div>
        <div class="space-y-1">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Authorized Manager</p>
          <h2 class="text-2xl font-black">{{ studentInfo?.student_name }} 신용관리사</h2>
        </div>
      </div>
    </div>

    <!-- 👥 학생 리스트 (개선된 카드 UI) -->
    <div v-if="isLoading" class="flex flex-col items-center py-32 gap-6 text-center">
      <div class="relative">
        <div class="absolute inset-0 bg-indigo-100 rounded-full blur-2xl animate-pulse"></div>
        <Icon name="solar:refresh-square-bold-duotone" class="w-16 h-16 text-indigo-500 animate-spin relative" />
      </div>
      <p class="text-sm font-black text-gray-300 uppercase tracking-widest">Accessing Student Register...</p>
    </div>
    
    <div v-else class="space-y-6">
      <div v-for="student in students" :key="student.idx" 
        class="bg-white p-6 rounded-[35px] shadow-sm border border-gray-100 flex flex-col gap-6 transition-all hover:shadow-xl hover:translate-y-[-4px] hover:border-indigo-100 group">
        
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 text-indigo-600 text-xl font-black group-hover:bg-indigo-50 transition-colors">
              {{ student.student_number || '?' }}
            </div>
            <div>
              <h3 class="text-lg font-black text-gray-800 leading-tight">{{ student.student_name }}</h3>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-[9px] font-black uppercase tracking-widest text-gray-300">Grade Status</span>
                <span :class="['text-xs font-black px-2 py-0.5 rounded-full', 
                  Number(student.credit_score) <= 3 ? 'bg-emerald-50 text-emerald-600' : 
                  Number(student.credit_score) <= 7 ? 'bg-indigo-50 text-indigo-600' : 'bg-rose-50 text-rose-600']">
                  {{ student.credit_score || 5 }}등급
                </span>
              </div>
            </div>
          </div>
          
          <!-- 신용 점수 라벨 (원형) -->
          <div :class="['w-12 h-12 rounded-full flex items-center justify-center text-sm font-black border-4',
            Number(student.credit_score) <= 3 ? 'border-emerald-100 text-emerald-600' : 
            Number(student.credit_score) <= 7 ? 'border-indigo-100 text-indigo-600' : 'border-rose-100 text-rose-600']">
            {{ student.credit_score || 5 }}
          </div>
        </div>

        <!-- 1~10 등급 선택기 -->
        <div class="grid grid-cols-5 sm:grid-cols-10 gap-2 p-2 bg-gray-50/50 rounded-2xl border border-gray-50">
          <button v-for="grade in 10" :key="grade"
            @click="setCreditGrade(student, grade)"
            :class="['h-10 rounded-xl text-xs font-black transition-all border flex items-center justify-center', 
            student.credit_score == grade 
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100 scale-110 z-10' 
              : 'bg-white text-gray-400 border-gray-100 hover:border-indigo-200 hover:text-indigo-400']">
            {{ grade }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
