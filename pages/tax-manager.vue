<script setup>
import { onMounted, ref, computed } from 'vue'
import { apiPost } from '@/common/api'

const students = ref([])
const isLoading = ref(true)
const studentInfo = ref(null)
const batchAmount = ref(null)

onMounted(async () => {
  const storedStudent = sessionStorage.getItem('student')
  if (!storedStudent) {
    window.location.href = '/login'
    return
  }
  studentInfo.value = JSON.parse(storedStudent)
  
  const hasTaxRole = studentInfo.value.roles?.some(r => r.role_code === 'TAX_MANAGER')
  const isTaxActive = studentInfo.value.is_tax_active === 'Y'

  if (!hasTaxRole || !isTaxActive) {
    alert('세금관리사 권한이 없거나 세금 기능이 비활성화 상태입니다.')
    window.location.href = '/'
    return
  }
  
  await fetchStudents()
})

const fetchStudents = async () => {
  isLoading.value = true
  try {
    const res = await apiPost('bank.php', {
      mode: 'getTaxStudentList',
      teacher_idx: studentInfo.value.teacher,
      idnt_code: studentInfo.value.idnt_code
    })
    if (res.result === 'SUCCESS') {
      students.value = res.data
    } else {
      alert(res.message || '학생 목록 조회 실패')
    }
  } catch (error) {
    console.error('학생 목록 조회 실패:', error)
  } finally {
    isLoading.value = false
  }
}

// 미납 세금이 있는 학생 필터링
const unpaidStudents = computed(() => {
  return students.value.filter(s => Number(s.unpaid_tax) > 0)
})

// 일괄 징수
const handleBatchCollect = async () => {
  const amount = parseInt(batchAmount.value)
  if (isNaN(amount) || amount <= 0) {
    alert('징수할 세금 금액을 올바르게 입력해주세요.')
    return
  }

  if (!confirm(`우리 반 전체 학생에게 ${amount.toLocaleString()} 젤리씩 세금을 일괄 징수하시겠습니까?\n(잔액이 부족한 학생은 미납 세금으로 누적됩니다.)`)) {
    return
  }

  isLoading.value = true
  try {
    const res = await apiPost('bank.php', {
      mode: 'taxBatchCollect',
      teacher_idx: studentInfo.value.teacher,
      idnt_code: studentInfo.value.idnt_code,
      amount: amount
    })
    
    if (res.result === 'SUCCESS') {
      alert(res.message || '세금 일괄 징수가 완료되었습니다.')
      batchAmount.value = null
      await fetchStudents()
    } else {
      alert(res.message || '징수 중 오류가 발생했습니다.')
    }
  } catch (err) {
    alert('에러가 발생했습니다.')
  } finally {
    isLoading.value = false
  }
}

// 미납 세금 없애기 (탕감)
const handleClearUnpaidTax = async (student) => {
  const unpaid = Number(student.unpaid_tax)
  if (unpaid <= 0) return

  if (!confirm(`정말로 ${student.student_name} 학생의 미납 세금 ${unpaid.toLocaleString()} 젤리를 없애겠습니까?\n(이 작업은 취소할 수 없습니다.)`)) {
    return
  }

  isLoading.value = true
  try {
    const res = await apiPost('bank.php', {
      mode: 'clearUnpaidTax',
      teacher_idx: studentInfo.value.teacher,
      idnt_code: studentInfo.value.idnt_code,
      student_idx: student.idx
    })

    if (res.result === 'SUCCESS') {
      alert(res.message || '미납 세금이 탕감되었습니다.')
      await fetchStudents()
    } else {
      alert(res.message || '탕감 중 오류가 발생했습니다.')
    }
  } catch (err) {
    alert('에러가 발생했습니다.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="px-4 py-8 pb-32">
    <!-- 📌 타이틀 영역 -->
    <div class="mb-8">
      <h1 class="text-3xl font-black text-gray-800 mb-2 flex items-center gap-3">
        <div class="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
          <Icon name="solar:bill-list-bold-duotone" class="text-rose-500 w-8 h-8" />
        </div>
        <span>Tax <span class="text-rose-500">Center</span></span>
      </h1>
      <p class="text-sm text-gray-400 font-medium opacity-80">공정하고 투명한 교실 세금 문화를 함께 만들어요!</p>
    </div>

    <!-- 📊 관리자 요약 카드 -->
    <div class="mb-8 bg-gradient-to-br from-rose-500 to-orange-600 rounded-[40px] p-8 text-white shadow-2xl shadow-rose-100 relative overflow-hidden">
      <div class="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      <div class="relative z-10 flex items-center gap-6">
        <div class="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">
          <Icon name="solar:user-speak-bold-duotone" class="w-10 h-10" />
        </div>
        <div class="space-y-1">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Authorized Tax Collector</p>
          <h2 class="text-2xl font-black">{{ studentInfo?.student_name }} 세금관리사</h2>
        </div>
      </div>
    </div>

    <!-- 💰 세금 일괄 징수 패널 -->
    <div class="mb-8 bg-white p-6 rounded-[35px] border border-gray-100 shadow-sm">
      <h3 class="text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
        <Icon name="solar:hand-money-bold-duotone" class="w-6 h-6 text-rose-500" />
        세금 일괄 징수
      </h3>
      <p class="text-xs text-gray-400 font-medium mb-4">우리 반 전체 학생에게 동시에 세금을 징수합니다. 잔액이 모자란 학생은 미납세금으로 누적됩니다.</p>
      
      <div class="flex items-center gap-3">
        <UInput
          v-model="batchAmount"
          placeholder="징수할 세금(젤리)"
          icon="i-heroicons-currency-dollar"
          class="flex-1"
          type="number"
          size="lg"
        />
        <UButton 
          label="일괄 징수" 
          size="lg" 
          color="rose" 
          @click="handleBatchCollect"
          :loading="isLoading"
          class="font-bold px-6"
        />
      </div>
    </div>

    <!-- ⚠️ 미납 세금 현황 및 탕감 목록 -->
    <div v-if="unpaidStudents.length > 0" class="mb-8">
      <h3 class="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
        <Icon name="solar:danger-bold-duotone" class="w-6 h-6 text-amber-500 animate-pulse" />
        미납 세금 현황 ({{ unpaidStudents.length }}명)
      </h3>
      
      <div class="space-y-3">
        <div v-for="student in unpaidStudents" :key="student.idx"
          class="bg-amber-50/50 p-5 rounded-3xl border border-amber-100 flex items-center justify-between transition-all hover:bg-amber-50">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm">
              {{ student.student_number || '?' }}
            </div>
            <div>
              <h4 class="font-black text-gray-800 text-sm">{{ student.student_name }}</h4>
              <p class="text-xs text-rose-500 font-bold mt-0.5">미납 세금: {{ Number(student.unpaid_tax).toLocaleString() }} 젤리</p>
            </div>
          </div>
          
          <UButton
            label="면제하기"
            size="xs"
            color="amber"
            variant="soft"
            class="font-bold rounded-xl px-4"
            @click="handleClearUnpaidTax(student)"
            :loading="isLoading"
          />
        </div>
      </div>
    </div>

    <!-- 👥 학생 전체 목록 -->
    <div>
      <h3 class="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
        <Icon name="solar:users-group-two-round-bold-duotone" class="w-6 h-6 text-gray-500" />
        우리 반 학생 세금 상태
      </h3>

      <div v-if="isLoading && students.length === 0" class="flex flex-col items-center py-24 gap-6 text-center">
        <div class="relative">
          <div class="absolute inset-0 bg-rose-100 rounded-full blur-2xl animate-pulse"></div>
          <Icon name="solar:refresh-square-bold-duotone" class="w-16 h-16 text-rose-500 animate-spin relative" />
        </div>
        <p class="text-sm font-black text-gray-300 uppercase tracking-widest">Loading Tax Register...</p>
      </div>

      <div v-else class="space-y-4">
        <div v-for="student in students" :key="student.idx"
          class="bg-white p-5 rounded-[30px] border border-gray-100 shadow-xs flex items-center justify-between transition-all hover:shadow-md hover:border-rose-100">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center font-black text-sm">
              {{ student.student_number || '?' }}
            </div>
            <div>
              <h4 class="font-black text-gray-800 leading-tight">{{ student.student_name }}</h4>
              <p class="text-xs text-gray-400 font-medium mt-1">보유 잔액: {{ Number(student.mb_point).toLocaleString() }} 젤리</p>
            </div>
          </div>

          <div class="text-right">
            <span v-if="Number(student.unpaid_tax) > 0" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-50 text-rose-600 border border-rose-100">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
              미납 {{ Number(student.unpaid_tax).toLocaleString() }} 젤리
            </span>
            <span v-else class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-600 border border-emerald-100">
              납부 완료
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
