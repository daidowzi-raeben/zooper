<template>
  <div class="fixed bottom-6 left-0 right-0 z-[100] px-6">
    <nav class="mx-auto max-w-lg">
      <ul class="flex items-center justify-around px-4 py-3 bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-2xl shadow-indigo-200/50 border border-white/50 ring-1 ring-black/5">
        <li v-for="item in items" :key="item.path" class="flex-1">
          <ULink
            :to="item.path"
            class="relative flex flex-col items-center justify-center gap-1 transition-all duration-300 py-1"
            :class="[$route.path === item.path ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600']"
            active-class="active-nav-item"
          >
            <!-- 활성화 배경 효과 -->
            <div v-if="$route.path === item.path" class="absolute inset-0 bg-indigo-50 rounded-2xl scale-110 -z-10 animate-pulse"></div>
            
            <div class="relative">
              <Icon :name="item.icon" class="w-7 h-7 transition-transform group-hover:scale-110" />
              <!-- 점 알림 (데코용) -->
              <span v-if="$route.path === item.path" class="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </div>
            
            <span class="text-[10px] font-black tracking-tight uppercase">{{ item.name }}</span>
            
            <!-- 하단 인디케이터 라인 -->
            <span
              v-if="$route.path === item.path"
              class="w-1 h-1 bg-indigo-600 rounded-full mt-0.5"
            ></span>
          </ULink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const student = ref(null)

onMounted(() => {
  const stored = sessionStorage.getItem('student')
  if (stored) {
    student.value = JSON.parse(stored)
  }
})

const items = computed(() => {
  const base = [
    { name: "Home", path: "/", icon: "solar:home-2-bold-duotone" },
    { name: "이체", path: "/transfer", icon: "solar:banknote-2-bold-duotone" },
    { name: "입금", path: "/income", icon: "solar:card-2-bold-duotone" },
    { name: "출금", path: "/expense", icon: "solar:wallet-money-bold-duotone" },
  ]
  
  if (student.value?.roles?.some(r => r.role_code === 'CREDIT_MANAGER')) {
    base.push({ name: "신용관리", path: "/credit", icon: "solar:shield-check-bold-duotone" })
  }
  
  return base
})
</script>

<style scoped>
.active-nav-item {
  transform: translateY(-4px);
}

nav {
  /* 모바일 접근성 고려 가로 모드 대응 */
  max-width: min(100%, 480px);
}
</style>
