<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { apiPost, hostUrl } from '@/common/api'

const route = useRoute()
const idnt_code = route.query.idnt_code

const students = ref([])
const teacherInfo = ref(null)
const isLoading = ref(true)

const fetchPrintData = async () => {
  try {
    const tRes = await apiPost('teacher.php', {
      mode: 'teacherInfo',
      idnt_code: idnt_code
    })

    if (tRes.result === 'SUCCESS') {
      teacherInfo.value = tRes.data
    }

    if (teacherInfo.value) {
      const sRes = await apiPost('member.php', {
        mode: 'studentList',
        teacher: teacherInfo.value.idx
      })
      if (sRes.result === 'SUCCESS') {
        students.value = sRes.data
      }
    }
  } catch (error) {
    console.error('Fetch error:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if (!idnt_code) {
    alert('잘못된 접근입니다.')
    return
  }
  fetchPrintData()
})

const handlePrint = () => {
  window.print()
}

const handleClose = () => {
  window.close()
}
</script>

<template>
  <div
    class="fixed inset-0 z-[99999] bg-gray-100 overflow-y-auto print:static print:z-auto print:bg-white print:overflow-visible font-pretendard print-content">

    <div v-if="isLoading" class="flex flex-col items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p class="font-bold text-gray-500 text-lg">인쇄 데이터를 불러오는 중...</p>
    </div>

    <div v-else-if="!teacherInfo" class="text-center py-20 font-bold text-red-500 bg-white min-h-screen">
      정보를 불러오지 못했습니다.
    </div>

    <div v-else class="p-8 print:p-0">
      <!-- 안내 메시지 (인쇄 시 숨김) -->
      <div class="fixed top-24 left-1/2 -translate-x-1/2 z-[100001] print:hidden">
        <div class="bg-amber-50 border border-amber-200 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3">
          <span class="i-heroicons-exclamation-triangle-solid w-5 h-5 text-amber-500" />
          <p class="text-sm font-bold text-amber-900">인쇄 설정에서 <span class="text-red-600 underline">"배경 그래픽"</span>을 반드시
            체크해야 디자인이 보입니다!</p>
        </div>
      </div>

      <!-- 상단 컨트롤 (인쇄 시 숨김) -->
      <div class="fixed top-6 right-6 z-[100000] print:hidden">
        <div
          class="flex items-center gap-3 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white">
          <div class="mr-4 text-left">
            <h1 class="text-sm font-black text-gray-800">{{ teacherInfo.class_name }} QR 카드</h1>
            <p class="text-[10px] text-gray-400 font-bold">총 {{ students.length }}명 / 2열 배치</p>
          </div>
          <UButton label="창 닫기" color="gray" variant="ghost" icon="i-heroicons-x-mark" @click="handleClose" />
          <UButton label="인쇄하기" color="blue" icon="i-heroicons-printer"
            class="rounded-2xl font-black px-6 shadow-lg shadow-blue-100" @click="handlePrint" />
        </div>
      </div>

      <!-- QR 카드 격자 -->
      <div class="print-grid mx-auto max-w-[210mm] grid grid-cols-2 gap-4 print:gap-[8mm]">
        <div v-for="student in students" :key="student.idnt_code"
          class="qr-card relative overflow-hidden print:border-0" :style="{
            backgroundColor: teacherInfo.qr_color || '#ffffff',
            color: teacherInfo.qr_text_color || '#000000'
          }">
          <!-- 배경 이미지 (절대 경로 보장) -->
          <img v-if="teacherInfo.qr_bg"
            :src="teacherInfo.qr_bg.startsWith('http') ? teacherInfo.qr_bg : hostUrl + teacherInfo.qr_bg"
            class="absolute pointer-events-none object-contain" :style="{
              top: (teacherInfo.qr_top) + 'px',
              left: (teacherInfo.qr_left) + 'px',
              width: teacherInfo.qr_width + '%',
              zIndex: 0
            }" />

          <!-- 카드 레이아웃 -->
          <div class="relative z-10 h-full p-[24px] flex flex-col justify-between">
            <!-- 상단: 학교/반 정보 & 학생 번호/이름 -->
            <div class="flex justify-between items-start">
              <div class="space-y-1 text-left">
                <div class="h-4 w-16 bg-current opacity-20 rounded"></div>
                <div class="text-[10px] font-black uppercase tracking-widest opacity-60">{{ teacherInfo.class_name }}
                </div>
              </div>
              <div class="text-right">
                <div class="text-xl font-black leading-tight">{{ student.student_number }}번 {{ student.student_name }}
                </div>
                <div class="text-[8px] font-bold opacity-30 tracking-widest mt-0.5 uppercase">Student Card</div>
              </div>
            </div>

            <!-- 하단: 안내 문구 & QR 코드 -->
            <div class="flex justify-between items-end gap-2">
              <div class="space-y-1.5 text-left flex-1">
                <div class="text-[9px] leading-relaxed font-bold opacity-60">
                  입출금은 은행원 승인이 필요합니다.<br>이체는 개인 QR코드로 가능합니다.<br>QR코드를 타인에게 노출하지 마세요.
                </div>
                <div
                  class="px-2 py-0.5 rounded border border-current opacity-20 text-[7px] font-black italic inline-block mt-2">
                  {{ teacherInfo.class_name }}</div>
              </div>

              <!-- QR 코드 영역 -->
              <div class="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 shrink-0">
                <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${student.idnt_code}`"
                  class="w-16 h-16" alt="QR Code" />
              </div>
            </div>
          </div>

          <!-- 자름선 안내 (인쇄 시만 살짝 보임) -->
          <div class="absolute inset-0 border border-black/5 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

.font-pretendard {
  font-family: 'Pretendard', sans-serif;
}

.qr-card {
  width: 86mm;
  height: 54mm;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  -webkit-print-color-adjust: exact !important;
  color-adjust: exact !important;
  print-color-adjust: exact !important;
  position: relative;
  overflow: hidden;
}

@media print {
  @page {
    size: A4;
    margin: 15mm;
  }

  .print-content {
    background: white !important;
    padding: 0 !important;
    position: static !important;
    overflow: visible !important;
  }

  .print-grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10mm !important;
    max-width: none !important;
    width: 100% !important;
  }

  .qr-card {
    page-break-inside: avoid;
    break-inside: avoid;
    border: 1px solid #eee !important;
    border-radius: 20px !important;
    box-shadow: none !important;
    width: 86mm !important;
    height: 54mm !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  img {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
</style>
