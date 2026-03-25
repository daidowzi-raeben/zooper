<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 text-gray-900 selection:bg-blue-200">
    <!-- Fixed Navbar -->
    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md">
            <Icon name="solar:bank-bold-duotone" class="w-6 h-6" />
          </div>
          <span class="text-xl font-black tracking-tight">JELLY ECONOMY</span>
        </div>
        <UButton to="/" label="시작하기" color="black" variant="solid" class="rounded-full px-6 py-2.5 font-bold" />
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl"></div>
      <div class="relative z-10 max-w-4xl mx-auto space-y-6">
        <h1 class="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          교실을 위한 <span class="text-blue-600">학생 경제 프로그램</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          QR 실물 카드를 활용해 Chromebook/브라우저에서 즉시 이체·출금·적금을 체험하고, 체크카드 같은 디자인으로 학습 효과를 높입니다.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <UButton to="/" size="xl" label="무료 체험 시작" color="blue" class="rounded-xl shadow-lg hover:scale-105 transition" />
          <UButton label="자세히 보기" variant="ghost" icon="i-heroicons-chevron-down" @click="scrollToFeatures" class="text-gray-600 font-medium" />
        </div>
      </div>
    </section>

    <!-- Feature Grid -->
    <section id="features" class="py-20 px-6">
      <div class="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        <!-- Feature 1: QR 실물 카드 거래 -->
        <div class="group p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300">
          <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4">
            <Icon name="solar:qr-code-bold-duotone" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black text-gray-800 mb-2">QR 실물 카드 거래</h3>
          <p class="text-gray-600 leading-relaxed">
            Chromebook 혹은 브라우저 기반 키오스크에서 QR 카드를 스캔해 <span class="text-blue-600 font-bold">실시간 이체·출금·적금</span>을 할 수 있습니다. 학생들은 직접 디자인한 카드를 체크카드처럼 사용합니다.
          </p>
        </div>
        <!-- Feature 2: 금융 습관 형성 -->
        <div class="group p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-transparent hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
          <div class="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4">
            <Icon name="solar:graph-up-bold-duotone" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black text-gray-800 mb-2">금융 습관 형성</h3>
          <p class="text-gray-600 leading-relaxed">
            정기 적금과 이자 시스템을 통해 <span class="font-bold">복리의 마법</span>을 체험하고, 돈이 일하게 하는 원리를 배웁니다.
          </p>
        </div>
        <!-- Feature 3: 학급 운영 자동화 -->
        <div class="group p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-transparent hover:border-purple-200 hover:shadow-xl transition-all duration-300">
          <div class="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4">
            <Icon name="solar:users-group-rounded-bold-duotone" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black text-gray-800 mb-2">학급 운영 자동화</h3>
          <p class="text-gray-600 leading-relaxed">
            선생님은 대시보드 하나로 세금징수·벌금부여·국고 관리까지 자동화하고, 학생이 은행원 역할을 맡아 협업합니다.
          </p>
        </div>
      </div>
    </section>

    <!-- QR Kiosk Showcase -->
    <section class="py-24 px-6 bg-blue-50/30">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 space-y-6">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900">
            무인 <span class="text-blue-600">키오스크</span>로 바로 거래
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            교실 한 켠에 배치된 키오스크(Chromebook/브라우저)에서 QR 실물 카드를 스캔하면, 즉시 이체·출금·적금이 완료됩니다.
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div class="group p-8 bg-white/80 rounded-2xl border border-transparent hover:border-blue-200 transition">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3">
                <Icon name="solar:laptop-bold-duotone" class="w-6 h-6" />
              </div>
              <h4 class="font-black text-gray-800">Chromebook/브라우저</h4>
              <p class="text-gray-600 text-sm">키오스크에서 QR 카드 스캔</p>
            </div>
            <div class="group p-8 bg-white/80 rounded-2xl border border-transparent hover:border-blue-200 transition">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3">
                <Icon name="solar:scanner-bold-duotone" class="w-6 h-6" />
              </div>
              <h4 class="font-black text-gray-800">키오스크 스캔</h4>
              <p class="text-gray-600 text-sm">실물 QR 카드 인식 → 즉시 거래</p>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="relative w-full max-w-[350px] mx-auto aspect-[9/16] bg-gray-900 rounded-2xl border-8 border-gray-800 shadow-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-blue-600 to-indigo-800 flex flex-col items-center justify-center p-8 text-white">
              <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 animate-bounce">
                <Icon name="solar:qr-code-bold" class="w-12 h-12" />
              </div>
              <h4 class="text-xl font-black mb-2">QR 카드를 스캔하세요</h4>
              <p class="text-sm opacity-70">키오스크 경제 모드 작동 중</p>
              <div class="w-full h-1 bg-white/20 rounded-full mt-8 overflow-hidden">
                <div class="h-full bg-blue-400 w-1/2 animate-[progress_3s_infinite_linear]"></div>
              </div>
            </div>
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-white border-t border-gray-200 text-center">
      <p class="text-gray-600 mb-4">© 2026 JELLY ECONOMY. All rights reserved.</p>
      <div class="flex justify-center gap-6 text-sm text-gray-500">
        <a href="#" class="hover:text-gray-800">Terms</a>
        <a href="#" class="hover:text-gray-800">Privacy</a>
        <a href="#" class="hover:text-gray-800">Contact</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()

const scrollToFeatures = () => {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@keyframes progress {
  0% { width: 0% }
  100% { width: 100% }
}
.animate-[progress_3s_infinite_linear] {
  animation: progress 3s infinite linear;
}
</style>
