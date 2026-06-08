<template>
  <div class="min-h-screen bg-[#F8FAFC] text-[#1E293B] selection:bg-blue-100 font-outfit overflow-x-hidden">
    <!-- 1. Navigation -->
    <nav class="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div
            class="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <UIcon name="i-heroicons-building-library-solid" class="w-7 h-7" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-[900] tracking-tighter text-gray-900 leading-none">JELLY</span>
            <span class="text-[10px] font-black uppercase tracking-widest text-blue-600">Economy System</span>
          </div>
        </div>
        <div class="hidden md:flex items-center gap-10 text-sm font-bold text-gray-500">
          <a href="#philosophy" class="hover:text-blue-600 transition">경제 교육</a>
          <a href="#features" class="hover:text-blue-600 transition">주요 기능</a>
          <a href="#roles" class="hover:text-blue-600 transition">직업 시스템</a>
          <a href="#kiosk" class="hover:text-blue-600 transition">키오스크</a>
        </div>
        <UButton to="/guide" label="사용 가이드" color="black" variant="solid"
          class="rounded-full px-8 py-3 font-black shadow-xl hover:scale-105 transition active:scale-95" />
      </div>
    </nav>

    <!-- 2. Hero Section -->
    <header class="relative pt-40 pb-32 px-6 overflow-hidden">
      <!-- Background elements -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div class="absolute top-40 left-10 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 blur-[100px] rounded-full animate-pulse"
          style="animation-delay: 2s"></div>
      </div>

      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
        <div class="flex-1 space-y-8 text-left">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
            <span class="text-xs font-black uppercase tracking-widest">Digital Classroom Economy</span>
          </div>
          <h1 class="text-6xl md:text-7xl font-[950] text-gray-900 leading-[1.1] tracking-tight">
            교실을 살아있는<br />
            <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">경제
              도시</span>로
          </h1>
          <p class="text-xl text-gray-500 font-medium leading-relaxed">
            QR 실물 카드 한 장으로 시작하는 우리 반 경제 자치 시스템.<br />
            아이들이 직접 돈을 벌고, 저축하며 꿈을 키우는 경제 습관을 기릅니다.
          </p>
          <div class="flex flex-col sm:flex-row justify-start items-center gap-4 pt-6">
            <UButton to="/login" size="xl" label="지금 무료로 시작하기" icon="i-heroicons-sparkles"
              class="rounded-[24px] px-10 py-5 bg-blue-600 hover:bg-blue-700 text-lg font-black shadow-2xl shadow-blue-200" />
            <UButton label="서비스 소개 보기" variant="ghost" icon="i-heroicons-chevron-down" @click="scrollToFeatures"
              class="text-gray-600 font-bold px-8" />
          </div>
        </div>
        <div class="flex-1 w-full max-w-2xl">
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-blue-500/20 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000">
            </div>
            <img
              src="/preview.jpg"
              alt="Jelly Economy Hero" class="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </div>
    </header>

    <!-- 3. Philosophy Section (Why Jelly?) -->
    <section id="philosophy" class="py-24 px-6 bg-white border-y border-gray-100">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div class="flex-1 space-y-8">
          <div
            class="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-black uppercase tracking-widest">
            Philosophy</div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            왜 교실에 <span class="text-indigo-600">경제학</span>이<br />필요할까요?
          </h2>
          <div class="space-y-6">
            <div
              class="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
              <div
                class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <UIcon name="i-heroicons-rocket-launch-solid" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-xl font-black text-gray-800 mb-2">계획적인 소비와 저축</h4>
                <p class="text-gray-500 font-medium">단순히 돈을 모으는 것이 아니라, 여러 적금 상품 중 무엇이 유리할지 고민하며 미래를 계획하는 법을 배웁니다.</p>
              </div>
            </div>
            <div
              class="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
              <div
                class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <UIcon name="i-heroicons-academic-cap-solid" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-xl font-black text-gray-800 mb-2">사회적 책임과 보상</h4>
                <p class="text-gray-500 font-medium">직업을 통해 임금을 받고 세금을 내며, 신용 등급을 관리하는 과정을 통해 건강한 시민 의식을 체득합니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 relative">
          <div class="relative rounded-[48px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group">
            <img
              src="/preview.jpg"
              alt="Learning Economics"
              class="w-full h-auto object-cover transform group-hover:scale-110 transition duration-[2s]" />
            <div
              class="absolute inset-x-8 bottom-8 p-8 bg-black/30 backdrop-blur-md rounded-3xl border border-white/20 text-center text-white">
              <p class="text-lg font-bold">"돈의 가치를 아는 아이들은<br />더 넓은 세상을 설계합니다."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Features Section (Grid) -->
    <section id="features" class="py-32 px-6">
      <div class="max-w-7xl mx-auto space-y-20">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-blue-600 text-sm font-black uppercase tracking-[0.3em]">Core Values</span>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900">젤리가 선물하는 핵심 기능</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="group p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 transition-all">
            <div
              class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <UIcon name="i-heroicons-qr-code-solid" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-black mb-4">QR 코드로 통합된 경험</h3>
            <p class="text-gray-500 font-medium leading-relaxed">
              가입부터 이체, 출금, 적금까지 모든 것을 QR 실물 카드로 해결합니다. 번거로운 아이디/비밀번호 없이 즉시 거래하세요.
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="group p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-2 transition-all">
            <div
              class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <UIcon name="i-heroicons-banknotes-solid" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-black mb-4">멀티 적금 시스템</h3>
            <p class="text-gray-500 font-medium leading-relaxed">
              금리와 조건이 다른 다양한 적금 상품들. 아이들은 자신의 저축 목표에 맞는 상품을 직접 선택하며 '계획적 저축'을 시작합니다.
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="group p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 transition-all overflow-hidden relative">
            <div class="relative z-10">
              <div
                class="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <UIcon name="i-heroicons-credit-card-solid" class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-black mb-4">내 맘대로 QR 카드 디자인</h3>
              <p class="text-gray-500 font-medium leading-relaxed">
                아이들이 직접 설계하고 디자인하는 나만의 카드. 실제 체크카드를 사용하는 것 같은 설렘이 경제 교육의 몰입도를 높입니다.
              </p>
            </div>
            <img
              src="/avatar.png"
              alt="Jelly Card Design"
              class="absolute -right-20 -bottom-20 w-64 h-auto opacity-10 group-hover:opacity-30 group-hover:-translate-y-10 group-hover:-translate-x-10 transition duration-1000 rotate-12" />
          </div>

          <!-- Feature 4 -->
          <div
            class="group p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-amber-100 hover:-translate-y-2 transition-all">
            <div
              class="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <UIcon name="i-heroicons-gift-solid" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-black mb-4">스템프 & 뱃지 리워드</h3>
            <p class="text-gray-500 font-medium leading-relaxed">
              학급 활동의 보상을 스템프로! 스템프가 모이면 특별한 이모지 뱃지를 획득하며 아이들의 성취감을 극대화합니다.
            </p>
          </div>

          <!-- Feature 5 -->
          <div
            class="group p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 transition-all">
            <div
              class="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <UIcon name="i-heroicons-sparkles-solid" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-black mb-4">재미있는 운세와 단짝</h3>
            <p class="text-gray-500 font-medium leading-relaxed">
              오늘의 운세 확인과 랜덤 단짝 친구 뽑기. 경제 활동 속에 숨어있는 소소한 재미 요소들이 학급 분위기를 부드럽게 합니다.
            </p>
          </div>

          <!-- Feature 6 -->
          <div
            class="group p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 transition-all">
            <div
              class="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <UIcon name="i-heroicons-chat-bubble-left-right-solid" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-black mb-4">자유로운 학생간 이체</h3>
            <p class="text-gray-500 font-medium leading-relaxed">
              QR 코드로 친구들끼리 더 빠르고 안전하게! 용돈을 주고받거나 협업에 대한 대가를 이체하며 실질적인 경제 상호작용을 경험합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Job & Credit System (The Ecosystem) -->
    <section id="roles" class="py-32 px-6 bg-[#0F172A] text-white relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent">
        </div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex flex-col lg:flex-row gap-20">
          <div class="lg:w-1/3 space-y-8">
            <span class="text-blue-400 text-sm font-black uppercase tracking-widest">Job Ecosystem</span>
            <h2 class="text-4xl md:text-6xl font-[950] leading-none tracking-tight">
              아이들이<br />경찰이 되고<br /><span class="text-blue-500">은행원</span>이 되는 곳
            </h2>
            <p class="text-lg text-gray-400 font-medium">
              모든 학생이 각자의 역할(직업)을 가집니다. 활동을 수행하고 받은 보상을 저축하며 사회의 작동 원리를 배웁니다.
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                <span
                  class="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-bold">1</span>
                <p class="text-sm font-bold text-gray-300">직업별 역할 부여 및 자치 활동</p>
              </div>
              <div class="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                <span
                  class="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center font-bold">2</span>
                <p class="text-sm font-bold text-gray-300">신용 등급 기반 혜택 (이율/한도 우대)</p>
              </div>
              <div class="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                <span
                  class="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center font-bold">3</span>
                <p class="text-sm font-bold text-gray-300">국고 관리로 배우는 거시 경제</p>
              </div>
            </div>
          </div>

          <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Job Card 1 -->
            <div class="p-8 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <UIcon name="i-heroicons-lock-closed-solid" class="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 class="text-xl font-black">은행원 (Banker)</h4>
                  <p class="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Active Approval</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                학생들의 입/출금을 관리하고 승인합니다. 학급 내 화폐 순환의 핵심적인 역할을 수행하며 금융의 기초를 다집니다.
              </p>
              <div class="text-[10px] bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full inline-block font-black">
                현실 화폐 연동 가능</div>
            </div>

            <!-- Job Card 2 -->
            <div class="p-8 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <UIcon name="i-heroicons-shield-check-solid" class="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 class="text-xl font-black">신용관리사</h4>
                  <p class="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Credit Specialist</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                친구들의 상벌점과 연계하여 신용 점수를 직접 관리합니다. 1등급 학생은 더 높은 적금 금리와 한도 혜택을 받습니다.
              </p>
              <div
                class="text-[10px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full inline-block font-black">신용
                등급 기반 차등 혜택</div>
            </div>

            <!-- Job Card 3 -->
            <div class="p-8 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <UIcon name="i-heroicons-calculator-solid" class="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 class="text-xl font-black">세무사 (Tax Agent)</h4>
                  <p class="text-[10px] text-orange-400 font-bold uppercase tracking-widest">Revenue Service</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                아이들의 소득에서 세금을 공제하고 국고 예산을 관리합니다. 공적인 돈이 어떻게 사용되는지 체험하는 살아있는 사회 교육입니다.
              </p>
              <div class="text-[10px] bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full inline-block font-black">
                세금 징수 및 국고 자동화</div>
            </div>

            <!-- Job Card 4 -->
            <div class="p-8 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <UIcon name="i-heroicons-user-group-solid" class="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 class="text-xl font-black">선생님 (Controller)</h4>
                  <p class="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Master Admin</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                대시보드 하나로 국고 관리, 대출(국고지원금), 모든 활동 내역 조회 및 자유로운 조정이 가능합니다. 완벽한 컨트롤러가 되세요.
              </p>
              <div class="text-[10px] bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full inline-block font-black">강력한
                국고 제어 및 감시</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Kiosk Feature (Hardware Focus) -->
    <section id="kiosk" class="py-32 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div class="flex-1">
          <div class="relative max-w-[400px] mx-auto group">
            <div
              class="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-[60px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000">
            </div>
            <!-- Mockup of Chromebook/Tablet as Kiosk -->
            <div class="relative bg-gray-900 rounded-[48px] p-4 border-[12px] border-gray-800 shadow-2xl">
              <div
                class="aspect-[4/3] bg-gradient-to-b from-blue-600 to-indigo-800 rounded-[32px] overflow-hidden flex flex-col items-center justify-center p-8 text-white relative">
                <div
                  class="absolute inset-0 bg-[url('https://api.3alliance.co.kr/kworld/data/pattern.png')] opacity-10">
                </div>
                <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 animate-pulse">
                  <UIcon name="i-heroicons-qr-code-solid" class="w-14 h-14" />
                </div>
                <h4 class="text-2xl font-black mb-2">SCAN QR</h4>
                <p class="text-white/60 text-sm">QR 카드를 카메라에 보여주세요</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 space-y-10">
          <div class="space-y-4">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              교실에 <span class="text-blue-600">경제 키오스크</span>를<br />단 한대면 충분합니다.
            </h2>
            <p class="text-xl text-gray-500 leading-relaxed font-medium">
              아이들이 직접 자신의 폰으로 거래하면 통제가 어렵습니다. <br />
              <span class="text-gray-900 font-black">공동 크롬북 한 대</span>를 키오스크로 활용하세요. 실물 QR 카드를 들고 친구들과 줄을 서는 과정이 진짜 '경제
              경험'이 됩니다.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-2">
              <h5 class="text-lg font-black text-gray-800">질서 있는 관리</h5>
              <p class="text-sm text-gray-500">지정된 장소에서만 이루어지는 거래로 교실 환경을 정돈합니다.</p>
            </div>
            <div class="space-y-2">
              <h5 class="text-lg font-black text-gray-800">디지털 리터러시</h5>
              <p class="text-sm text-gray-500">실물 카드와 디지털 인터페이스의 결합은 가장 확실한 IT 교육입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Benefit & Real Cases -->
    <section class="py-24 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
      <div class="max-w-4xl mx-auto space-y-12">
        <h2 class="text-4xl font-black text-gray-900">현직 선생님들이 젤리를 사랑하는 이유</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div class="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between">
            <p class="text-gray-600 italic font-medium leading-loose mb-6">
              "화폐 분실 위험이 사라졌어요. 학급 화폐와 고리로 연동해서 은행원이 입출금을 도와주는데, 아이들이 월급을 받으면 분실 걱정 없이 즉시 저축합니다. 나중에 큰 목돈을 찾아 소비하는 재미에
              아이들이 푹 빠졌어요."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-indigo-100 rounded-full"></div>
              <div>
                <h6 class="font-black text-gray-800 text-sm">초등학교 5학년 담임 선생님</h6>
                <p class="text-xs text-gray-400">학급 화폐 3년차 운영 중</p>
              </div>
            </div>
          </div>
          <div class="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between">
            <p class="text-gray-600 italic font-medium leading-loose mb-6">
              "국고 지원금 시스템이 정말 편리해요. 학급 활동 지원이 필요할 때 '대출' 개념으로 국고를 활용하고, 나중에 번 돈으로 갚게 하며 돈의 흐름을 가르칩니다. 선생님의 자유로운 컨트롤이 가장
              큰 장관이죠."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-emerald-100 rounded-full"></div>
              <div>
                <h6 class="font-black text-gray-800 text-sm">초등학교 6학년 담임 선생님</h6>
                <p class="text-xs text-gray-400">교실 내 무인 키오스크 도입</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Footer / CTA -->
    <footer class="bg-gray-900 py-32 px-6 text-white overflow-hidden relative">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent -skew-x-12">
      </div>
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-20">
        <div class="space-y-8 max-w-xl">
          <div class="flex items-center gap-3">
            <div
              class="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-900/40">
              <UIcon name="i-heroicons-building-library-solid" class="w-8 h-8" />
            </div>
            <span class="text-3xl font-[950] tracking-tighter">JELLY ECONOMY</span>
          </div>
          <h2 class="text-5xl font-black leading-tight">선생님만 아는 비밀,<br />놀이가 되는 경제 수업.</h2>
          <p class="text-gray-400 font-medium">지금 시작하고 우리 반의 놀라운 변화를 확인하세요.</p>
          <div class="flex flex-col sm:flex-row items-center gap-4">
            <UButton to="/login" size="xl" label="지금 가입하기" color="blue"
              class="rounded-2xl px-12 py-5 font-black text-lg bg-blue-600 shadow-2xl shadow-blue-500/20" />
            <div class="text-gray-400 text-xs font-medium space-y-1">
              <p>Contact Us</p>
              <a href="mailto:cs@school-os.net"
                class="text-white hover:text-blue-400 transition underline">cs@school-os.net</a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-12 text-sm text-gray-400">
          <div class="space-y-4">
            <h5 class="font-black text-white uppercase tracking-widest text-xs">Platform</h5>
            <ul class="space-y-3 font-bold">
              <li><a href="#" class="hover:text-blue-400 transition">서비스 소개</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">이용 약관</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">개인정보 취급방침</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h5 class="font-black text-white uppercase tracking-widest text-xs">Resources</h5>
            <ul class="space-y-3 font-bold">
              <li><router-link to="/guide" class="hover:text-blue-400 transition">운영 가이드</router-link></li>
              <li><a href="#" class="hover:text-blue-400 transition">학급 통화 연동법</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">문의하기</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/10 flex flex-col sm:flex-row justify-between text-[11px] font-black uppercase tracking-widest text-gray-500 gap-4">
        <span>© 2026 JELLY ECONOMY. All rights reserved.</span>
        <div class="flex gap-6">
          <span>MADE WITH PASSION BY SCHOOL OS</span>
        </div>
      </div>
    </footer>

    <!-- Floating Kakao Button -->
    <a href="https://open.kakao.com/o/sf8I8jxe" target="_blank"
      class="fixed bottom-10 right-10 z-[200] group flex items-center gap-3">
      <div
        class="bg-white px-6 py-3 rounded-2xl shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all font-black text-sm text-gray-800 whitespace-nowrap">
        카카오톡 문의하기
      </div>
      <div
        class="w-16 h-16 bg-[#FEE500] rounded-[24px] shadow-2xl shadow-amber-200/50 flex items-center justify-center text-[#191919] hover:scale-110 active:scale-95 transition-all">
        <UIcon name="i-heroicons-chat-bubble-oval-left-ellipsis-solid" class="w-8 h-8" />
      </div>
    </a>
  </div>
</template>

<script setup>
useHead({
  title: '젤리 경제 - 우리 교실의 완벽한 경제 자치 시스템 (JELLY)',
  meta: [
    { 
      name: 'description', 
      content: 'QR 실물 카드로 즐기는 프리미엄 교실 경제 자치 시스템 젤리(JELLY). 학급 화폐, 저축, 직업, 신용 관리까지 한 번에! 초등학교 경제 교육을 가장 재미있고 혁신적으로 운영하는 비결.' 
    },
    {
      name: 'keywords',
      content: '학급경제, 교실경제, 학급화폐, 경제교육, 젤리경쟁, 학교경제, 초등경제교육, 직업교육, 신용관리, 선생님로그, 에듀테크, 꿀팁, 교실자치'
    },
    { property: 'og:title', content: '젤리 경제 - 우리 교실의 완벽한 경제 자치 시스템' },
    { property: 'og:description', content: 'QR 카드 한 장으로 시작하는 새로운 교실 경제 경험. 아이들이 꿈을 키우는 경제 습관을 기릅니다.' },
    { property: 'og:image', content: '/preview.jpg' },
    { property: 'og:url', content: 'https://school-os.net/information' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '젤리 경제(JELLY)' },
    { name: 'twitter:description', content: 'QR로 완성하는 똑똑한 교실 경제 시스템' }
  ],
  link: [
    { rel: 'canonical', href: 'https://school-os.net/information' }
  ]
})
const scrollToFeatures = () => {
  const el = document.getElementById('features')
  if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700;900&display=swap');

.font-outfit {
  font-family: 'Outfit', 'Pretendard', sans-serif;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
