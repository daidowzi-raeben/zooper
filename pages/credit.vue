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

const updateCredit = async (student, delta) => {
  // Now using as Grades (1-10). delta -1 means better grade (e.g. 2->1), +1 means worse (e.g. 1->2)
  const currentGrade = Number(student.credit_score) || 5
  const newGrade = Math.min(10, Math.max(1, currentGrade + delta))
  
  if (currentGrade === newGrade) return

  try {
    const res = await apiPost('teacher.php', {
      mode: 'updateCreditScore',
      student_idx: student.idx,
      credit_score: newGrade
    })
    if (res.result === 'SUCCESS') {
      student.credit_score = newGrade
    } else {
      alert(res.message || '업데이트 실패')
    }
  } catch (err) {
    alert('에러가 발생했습니다.')
  }
}
</script>

<template>
  <div class="px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-black text-gray-800 mb-2 flex items-center gap-2">
        <span class="text-3xl">🛡️</span>
        신용관리 <span class="text-blue-600 text-lg font-bold">센터</span>
      </h1>
      <p class="text-sm text-gray-400 font-medium ml-10">우리반 친구들의 신용도를 공정하게 관리해주세요.</p>
    </div>

    <!-- 📊 통계/요약 (데코용) -->
    <div class="mb-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-6 text-white shadow-xl">
      <div class="flex items-center gap-4">
        <div class="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
          <Icon name="solar:shield-check-bold-duotone" class="w-8 h-8" />
        </div>
        <div>
          <h2 class="text-lg font-bold">신용관리사: {{ studentInfo?.student_name }}</h2>
          <p class="text-sm opacity-80">성실하고 정직한 신용 문화를 만들어가요!</p>
        </div>
      </div>
    </div>

    <!-- 👥 학생 리스트 -->
    <div v-if="isLoading" class="flex flex-col items-center py-20 gap-4">
      <Icon name="solar:re-search-line-duotone" class="w-12 h-12 text-blue-500 animate-spin" />
      <p class="text-sm font-bold text-gray-400">명부를 확인하는 중입니다...</p>
    </div>
    
    <div v-else class="space-y-4">
      <div v-for="student in students" :key="student.idx" 
        class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group transition-all hover:shadow-md hover:border-blue-100">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-blue-600 text-lg font-black group-hover:bg-blue-50">
            {{ student.student_number || '?' }}
          </div>
          <div>
            <h3 class="text-sm font-black text-gray-800">{{ student.student_name }}</h3>
            <div class="flex items-center gap-1 mt-1">
              <span class="text-[10px] uppercase tracking-wider font-bold text-gray-400">Credit Grade</span>
              <span :class="['text-xs font-black', 
                Number(student.credit_score) <= 3 ? 'text-emerald-500' : 
                Number(student.credit_score) <= 7 ? 'text-blue-500' : 'text-rose-500']">
                {{ student.credit_score || 5 }}등급
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <UButton 
            color="rose" 
            variant="soft" 
            icon="i-heroicons-arrow-trending-down" 
            @click="updateCredit(student, 1)" 
            class="rounded-xl shadow-sm px-2 text-[10px] font-bold"
            label="하향"
          />
          <UButton 
            color="emerald" 
            variant="soft" 
            icon="i-heroicons-arrow-trending-up" 
            @click="updateCredit(student, -1)" 
            class="rounded-xl shadow-sm px-2 text-[10px] font-bold"
            label="상향"
          />
        </div>
      </div>
    </div>
  </div>
</template>
