<template>
  <div class="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-outfit selection:bg-blue-100">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <router-link to="/information" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <UIcon name="i-heroicons-building-library-solid" class="w-6 h-6" />
          </div>
          <div class="flex flex-col text-left">
            <span class="text-lg font-[900] tracking-tighter text-gray-900 leading-none">JELLY</span>
            <span class="text-[8px] font-black uppercase tracking-widest text-blue-600">Guide</span>
          </div>
        </router-link>
        <UButton to="/information" label="홈으로 돌아가기" variant="ghost" icon="i-heroicons-arrow-left" class="font-bold text-gray-600" />
      </div>
    </nav>

    <header class="pt-32 pb-16 px-6 text-center">
      <div class="max-w-4xl mx-auto space-y-4">
        <h1 class="text-5xl font-[950] text-gray-900 leading-tight tracking-tight">
          젤리 서비스 <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">기능 가이드</span>
        </h1>
        <p class="text-lg text-gray-500 font-medium">우리 반 경제 도시의 시작, 젤리 사용법을 안내합니다.</p>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 pb-24">
      <!-- Tab Switcher -->
      <div class="flex justify-center mb-12">
        <div class="bg-white p-2 rounded-[24px] shadow-xl shadow-blue-100 border border-gray-100 inline-flex gap-2">
          <button 
            @click="activeTab = 'teacher'"
            :class="['px-10 py-4 rounded-[20px] font-black transition-all text-lg', 
              activeTab === 'teacher' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-400 hover:text-gray-600']">
            선생님용 가이드
          </button>
          <button 
            @click="activeTab = 'student'"
            :class="['px-10 py-4 rounded-[20px] font-black transition-all text-lg', 
              activeTab === 'student' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-gray-400 hover:text-gray-600']">
            학생용 가이드
          </button>
        </div>
      </div>

      <!-- Tab Content: Teacher -->
      <Transition name="fade-slide" mode="out-in">
        <div v-if="activeTab === 'teacher'" class="space-y-16" key="teacher">
          <section v-for="(section, idx) in teacherGuide" :key="idx" class="bg-white rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
              <div class="flex-1 space-y-6">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {{ idx + 1 }}
                  </div>
                  <h3 class="text-3xl font-[950] text-gray-900">{{ section.title }}</h3>
                </div>
                <p class="text-lg text-gray-500 font-medium leading-relaxed">{{ section.description }}</p>
                
                <div class="bg-blue-50/50 rounded-3xl p-6 space-y-3 border border-blue-50">
                  <h4 class="font-black text-blue-900 text-sm flex items-center gap-2">
                    <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" /> 주요 체크 포인트
                  </h4>
                  <ul class="space-y-2">
                    <li v-for="point in section.points" :key="point" class="flex items-center gap-2 text-gray-600 font-bold text-sm">
                      <UIcon name="i-heroicons-check-circle-solid" class="w-4 h-4 text-blue-500 shrink-0" />
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="flex-1 w-full relative">
                <!-- Screenshot Area/Image -->
                <div v-if="section.imgUrl" class="relative group/screen overflow-hidden rounded-[32px] shadow-2xl border border-gray-100">
                  <img :src="section.imgUrl" class="w-full h-auto object-cover transform scale-100 group-hover/screen:scale-105 transition duration-700" :alt="section.title" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/screen:opacity-100 transition-opacity"></div>
                </div>
                <div v-else class="screenshot-area bg-gray-100 rounded-[32px] border-4 border-dashed border-gray-200 aspect-[16/10] flex flex-col items-center justify-center text-center p-8 transition-all hover:bg-white hover:border-blue-400 group/screen relative overflow-hidden">
                  <!-- User will place screenshot here -->
                  <div class="space-y-4 relative z-10">
                    <UIcon name="i-heroicons-photo-solid" class="w-16 h-16 text-gray-300 group-hover/screen:text-blue-400 transition-colors" />
                    <p class="font-black text-gray-400 group-hover/screen:text-blue-600 transition-colors">이곳에 스크린샷 이미지를 넣어주세요.</p>
                    <p class="text-xs text-gray-400 font-bold tracking-tight px-10">{{ section.screenshotDesc }}</p>
                  </div>
                  <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/screen:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Tab Content: Student -->
        <div v-else class="space-y-16" key="student">
          <section v-for="(section, idx) in studentGuide" :key="idx" class="bg-white rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
            <div class="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div class="flex-1 space-y-6">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {{ idx + 1 }}
                  </div>
                  <h3 class="text-3xl font-[950] text-gray-900">{{ section.title }}</h3>
                </div>
                <p class="text-lg text-gray-500 font-medium leading-relaxed">{{ section.description }}</p>
                
                <div class="bg-indigo-50/50 rounded-3xl p-6 space-y-3 border border-indigo-50">
                  <h4 class="font-black text-indigo-900 text-sm flex items-center gap-2">
                    <UIcon name="i-heroicons-sparkles" class="w-5 h-5" /> 꿀팁 & 활용법
                  </h4>
                  <ul class="space-y-2">
                    <li v-for="point in section.points" :key="point" class="flex items-center gap-2 text-gray-600 font-bold text-sm">
                      <UIcon name="i-heroicons-check-circle-solid" class="w-4 h-4 text-indigo-500 shrink-0" />
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="flex-1 w-full relative">
                <!-- Screenshot Area/Image -->
                <div v-if="section.imgUrl" class="relative group/screen overflow-hidden rounded-[32px] shadow-2xl border border-gray-100">
                  <img :src="section.imgUrl" class="w-full h-auto object-cover transform scale-100 group-hover/screen:scale-105 transition duration-700" :alt="section.title" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/screen:opacity-100 transition-opacity"></div>
                </div>
                <div v-else class="screenshot-area bg-gray-100 rounded-[32px] border-4 border-dashed border-gray-200 aspect-[16/10] flex flex-col items-center justify-center text-center p-8 transition-all hover:bg-white hover:border-indigo-400 group/screen relative overflow-hidden">
                  <div class="space-y-4 relative z-10">
                    <UIcon name="i-heroicons-photo-solid" class="w-16 h-16 text-gray-300 group-hover/screen:text-indigo-400 transition-colors" />
                    <p class="font-black text-gray-400 group-hover/screen:text-indigo-600 transition-colors">이곳에 스크린샷 이미지를 넣어주세요.</p>
                    <p class="text-xs text-gray-400 font-bold tracking-tight px-10">{{ section.screenshotDesc }}</p>
                  </div>
                  <div class="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover/screen:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Transition>
    </main>

    <!-- Bottom CTA -->
    <footer class="py-24 px-6 bg-gray-900 text-white text-center">
      <div class="max-w-4xl mx-auto space-y-8">
        <h2 class="text-4xl font-black">아이들과 함께 시작해볼까요?</h2>
        <p class="text-gray-400 font-medium">지금 바로 우리 반만의 경제 도시를 건설하세요.</p>
        <UButton to="/login" label="무료 체험하러 가기" size="xl" color="blue" class="rounded-2xl px-12 py-5 font-[950] text-lg bg-blue-600 shadow-2xl shadow-blue-500/20" />
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('teacher')

const teacherGuide = [
  {
    title: "우리반 설정 및 명단 업로드",
    description: "젤리 시스템의 심장을 만드는 첫 단계입니다. 화폐 이름부터 학생 명단까지 한 번에 세팅하세요.",
    points: [
      "엑셀 샘플 양식을 다운로드하여 학생 정보를 작성하세요.",
      "번거로운 수동 입력 대신 클릭 한 번으로 수십 명의 학생을 등록할 수 있습니다.",
      "화폐 단위(예: 젤리, 돌멩이)는 학급 분위기에 맞춰 자유롭게 정하세요."
    ],
    imgUrl: "/guide/teacher/1.png",
    screenshotDesc: "설정 메뉴 내 '우리반 설정' 영역과 '엑셀 업로드' 모달 클릭 화면을 캡처하여 넣어주세요."
  },
  {
    title: "QR 학생카드 디자인 & 인쇄",
    description: "아이들에게 소속감과 설렘을 주는 실물 카드를 만듭니다. 카드에 우리 학교 이름이나 이미지를 넣어보세요.",
    points: [
      "관리자 대시보드의 QR 디자인 메뉴에서 카드 색상과 로고를 설정합니다.",
      "배경 이미지를 추가하여 우리 반만의 시그니처 카드를 만들 수 있습니다.",
      "설정 완료 후 '인쇄하기' 버튼을 눌러 라벨지나 카드 용지에 출력하면 끝!"
    ],
    imgUrl: "/guide/teacher/2.png",
    screenshotDesc: "QR 카드 디자인 미리보기 화면과 여러 카드가 정렬된 '인쇄 페이지' 전체 캡처를 추천합니다."
  },
  {
    title: "금융 상품 및 직업 설계",
    description: "아이들이 노동의 가치와 저축의 즐거움을 깨닫는 시간입니다. 다양한 적금 시스템과 역할을 만들어보세요.",
    points: [
      "직업 관리 메뉴에서 학급에 필요한 다양한 직업들을 생성하고 이름을 정할 수 있습니다.",
      "금리와 만기일이 다른 여러 적금 상품을 만들어 아이들이 스마트한 저축을 고민하게 합니다.",
      "은행원, 통계 전문가 등 학생들의 성향에 맞는 역할을 부여하여 자치 활동을 유도하세요."
    ],
    imgUrl: "/guide/teacher/3.png",
    screenshotDesc: "적금 목록이 보이는 '저축 관리' 섹션과 학생에게 직업을 부여하는 '학생 상세 정보' 팝업을 캡처하세요."
  },
  {
    title: "신용 등급 및 국고 관리",
    description: "학급의 대장으로서 전체 경제 흐름을 조율합니다. 국고를 이용해 보상을 주거나 세금을 징수하세요.",
    points: [
      "상벌점과 연계된 신용 점수를 관리하여 1등급 학생들에게 이율 혜택을 줍니다.",
      "활동 내역을 실시간으로 모니터링하며 필요한 학생에게 '국고 지원금'을 이체할 수 있습니다.",
      "세무사 직업의 학생이 승인 한 번으로 학급 전체 세금을 징수하는 자동화 시스템을 경험하세요."
    ],
    imgUrl: "/guide/teacher/4.png",
    screenshotDesc: "관리 하단의 '국고 관리' 대시보드와 '전체 활동 내역' 타임라인 화면을 캡처하세요."
  }
]

const studentGuide = [
  {
    title: "QR 카드로 쉽고 빠른 로그인",
    description: "어려운 아이디와 비밀번호는 잊으세요. 내 카드만 카메라에 보여주면 내 지갑이 열립니다.",
    points: [
      "크롬북이나 공용 태블릿(키오스크) 앞에서 카드를 스캔하세요.",
      "즉시 내 이름과 현재 잔액, 내가 가진 뱃지들이 나타납니다.",
      "로그인 즉시 '잔액 숨기기' 버튼을 눌러 내 자산을 비밀로 유지할 수 있어요."
    ],
    imgUrl: "/guide/student/1.png",
    screenshotDesc: "카메라 스캔 대기 화면과 스캔 직후 나타나는 학생 메인 지갑 인터페이스를 캡처하세요."
  },
  {
    title: "스마트한 저축, 적금 가입하기",
    description: "단순히 지갑에 돈을 두는 것보다 적금에 넣는 것이 훨씬 유리합니다. 부자가 되는 길을 선택하세요.",
    points: [
      "가장 높은 이자를 주는 상품이 무엇인지 곰곰이 생각해보세요.",
      "원하는 상품을 선택하고 저축할 금액을 입력하면 가입 완료!",
      "만기 날짜가 되면 축하 메시지와 함께 보너스 이자가 내 지갑으로 쏙 들어옵니다."
    ],
    imgUrl: "/guide/student/2.png",
    screenshotDesc: "적금 상품 선택 영역과 '만기 보너스'를 받는 축하 폭죽 애니메이션 순간을 캡처하세요."
  },
  {
    title: "오늘의 행운 확인 (포춘 & 단짝)",
    description: "젤리 지갑엔 돈만 있는 게 아니에요! 소량의 화폐로 오늘의 운을 확인해보세요.",
    points: [
      "적은 비용을 내고 '오늘의 단짝'을 소환할 수 있습니다.",
      "나를 위한 맞춤형 운세 메시지를 읽으며 즐거운 하루를 시작하세요.",
      "결과가 마음에 들면 친구들과 함께 공유해 보세요!"
    ],
    imgUrl: "/guide/student/3.png",
    screenshotDesc: "단짝 소환 결과와 귀여운 이모지가 담긴 '오늘의 운세' 팝업을 캡처하세요."
  },
  {
    title: "스템프 모으기와 랜덤 뱃지",
    description: "우리 반 생활을 열심히 하면 선생님께 스템프를 받을 수 있어요. 10개를 모아보세요!",
    points: [
      "선생님이 찍어주시는 스템프가 10개가 되면 신비로운 '이모지 뱃지'가 나타납니다.",
      "내 프로필에 획득한 뱃지들이 하나씩 늘어날수록 내 신용 등급도 쑥쑥 올라가요.",
      "뱃지마다 각각 다른 의미를 담아 나만의 특별한 지갑을 꾸며보세요!"
    ],
    imgUrl: "/guide/student/4.png",
    screenshotDesc: "스템프가 꽉 찬 보드 사진과 프로필 하단에 반짝이는 뱃지 리스트 부분을 캡처하세요."
  }
]

useHead({
  title: '젤리 사용 가이드 - 선생님 & 학생 매뉴얼',
  meta: [
    { name: 'description', content: '젤리(JELLY) 경제 자치 시스템의 상세 사용법을 안내합니다. 선생님과 학생 모두를 위한 맞춤형 가이드를 확인하세요.' }
  ]
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700;900&display=swap');

.font-outfit {
  font-family: 'Outfit', 'Pretendard', sans-serif;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.screenshot-area {
  cursor: pointer;
}
</style>
