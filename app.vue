<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

const checkAuth = () => {
  const idntCode = sessionStorage.getItem('idnt_code')
  const isLoginPage = route.path === '/login'
  const isSignPage = route.path.startsWith('/sign/')
  const isInfomationPage = route.path === '/information'
  const isSignUpPage = route.path === '/signUp'

  if (!idntCode && !isLoginPage && !isSignPage && !isInfomationPage && !isSignUpPage) {
    router.push('/login')
  }
}

onMounted(() => {
  checkAuth()
})

// 경로 변경 시마다 체크
watch(() => route.path, () => {
  checkAuth()
})
</script>

<template>
  <NuxtLoadingIndicator color="#14b8a6" />

  <template v-if="route.path !== '/information'">
    <!-- 로그인/교사인쇄 페이지가 아닐 때만 표시 -->
    <AppNavbar v-if="route.path !== '/login' && route.path !== '/signUp' && !route.path.startsWith('/teacher')" />
    <div class="h-10" v-if="route.path !== '/login' && route.path !== '/signUp' && !route.path.startsWith('/teacher')"></div>

    <UContainer :class="[route.path.startsWith('/teacher') ? 'max-w-none px-4 md:px-8' : 'max-w-2xl']">
      <NuxtPage />
    </UContainer>

    <div class="h-32" v-if="!route.path.startsWith('/teacher')"></div>
    <AppFooter v-if="!route.path.startsWith('/teacher')" />
  </template>
  <template v-else>
    <NuxtPage />
  </template>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
