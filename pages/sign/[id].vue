<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { apiPost } from '@/common/api'

const route = useRoute()
const id = route.params.id
const student = ref(null)

onMounted(async () => {
  try {
    if (sessionStorage.getItem('idnt_code')) {
      sessionStorage.removeItem('idnt_code')
    }

    // idnt_code 세션 저장
    
    // 학생 정보 조회
    const res = await apiPost('member.php', {
      mode: 'studentInfo',
      idnt_code: id,
    })
    
    if (res.result === 'SUCCESS' && res.data) {
      student.value = res.data
      
      sessionStorage.setItem('idnt_code', id)
      sessionStorage.setItem('student', JSON.stringify(student.value))
      window.location.href = '/'

    } else {
      alert('학생정보가 없습니다.')
      console.error(res.message || '학생 정보 없음')
      sessionStorage.removeItem('idnt_code')
      sessionStorage.removeItem('student')
      window.location.href = '/login'
    }
  } catch (err) {
    console.error('에러:', err)
    alert('에러가 발생했습니다.')
    sessionStorage.removeItem('idnt_code')
    sessionStorage.removeItem('student')
    window.location.href = '/login'
  }
})
</script>

<template>
  <main class="min-h-screen p-4">
    <!-- <div v-if="student">
      <h1 class="text-xl font-bold">학생 정보</h1>
      <p>이름: {{ student.student_name }}</p>
      <p>학년: {{ student.student_grade }}</p>
      <p>반: {{ student.student_class }}</p>
      <p>번호: {{ student.student_number }}</p>
      <p>성별: {{ student.gender }}</p>
      <p>보호자 이름: {{ student.guardian_name }}</p>
      <p>보호자 연락처: {{ student.guardian_phone }}</p>
    </div>
    <div v-else>
      <p>학생 정보를 불러오는 중입니다...</p>
    </div> -->
  </main>
</template>