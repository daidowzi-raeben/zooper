<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  const idntCode = sessionStorage.getItem('idnt_code')
  if (!idntCode && route.path !== '/login') {
    router.push('/login')
  }
})
</script>

<template>
  <NuxtLoadingIndicator color="#14b8a6" />

  <!-- 로그인 페이지가 아닐 때만 표시 -->
  <AppNavbar v-if="route.path !== '/login' && route.path !== '/signUp' && route.path !== '/teacher'" />
  <div class="h-32" v-if="route.path !== '/login' && route.path !== '/signUp' && route.path !== '/teacher'"></div>

  <UContainer>
    <NuxtPage />
  </UContainer>

  <div class="h-32"></div>
  <AppFooter />
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
