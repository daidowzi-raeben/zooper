<template>
  <div class="min-h-screen relative flex items-center justify-center bg-gray-50 overflow-hidden font-sans">
    <!-- 🌸 Elegant Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50/50"></div>
    <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px] animate-pulse" style="animation-delay: 2s"></div>
    
    <div class="relative z-10 w-full max-w-md px-6">
      <!-- 💎 Premium Card Container -->
      <div class="bg-white/80 backdrop-blur-3xl border border-white rounded-[40px] shadow-2xl shadow-indigo-100/50 p-10 overflow-hidden">
        
        <!-- Header -->
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-200 mb-6 transform rotate-3 hover:rotate-6 transition-transform">
            <span class="i-heroicons-sparkles-solid w-10 h-10 text-white" />
          </div>
          <h1 class="text-4xl font-black text-gray-900 tracking-tight mb-2">Jelly <span class="text-indigo-600">OS</span></h1>
          <p class="text-gray-400 text-[10px] font-black tracking-[0.3em] uppercase">Economy Ecosystem</p>
        </div>

        <!-- Student Login (QR) Section -->
        <div v-if="!isScanning && !isScanningTeacher" class="space-y-6">
          <button 
            @click="startScan"
            class="group w-full relative h-20 bg-indigo-600 hover:bg-indigo-700 rounded-3xl flex items-center justify-between px-8 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-indigo-200"
          >
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                <span class="i-heroicons-qr-code-solid w-6 h-6" />
              </div>
              <span class="text-lg font-black text-white">QR 로그인</span>
            </div>
            <span class="i-heroicons-chevron-right-solid w-5 h-5 text-white/50 group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            @click="startScanTeacher"
            class="w-full h-16 bg-white hover:bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center gap-2 transition-all text-gray-400 hover:text-gray-600 font-bold shadow-sm"
          >
            <span class="i-heroicons-user-solid w-5 h-5" />
            선생님 로그인
          </button>
        </div>

        <!-- QR Scanner View -->
        <div v-else-if="isScanning" class="space-y-6">
          <div class="relative rounded-[32px] overflow-hidden border-4 border-white bg-gray-100 aspect-square shadow-2xl">
            <qrcode-stream @detect="onDetect" @error="onError" />
            <div class="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
              <div class="w-48 h-48 border-2 border-indigo-600 rounded-3xl animate-pulse opacity-50"></div>
              <p class="mt-4 text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">Scanning QR Code...</p>
            </div>
          </div>
          
          <button 
            @click="isScanning = false"
            class="w-full py-4 text-gray-400 hover:text-gray-900 font-black text-xs uppercase tracking-[0.2em] transition-colors"
          >
            Cancel Scanning
          </button>
        </div>

        <!-- Teacher Login Form -->
        <div v-else-if="isScanningTeacher" class="space-y-6">
          <div class="space-y-3">
            <div class="relative">
              <label class="absolute left-6 top-3 text-[9px] font-black text-indigo-400 uppercase tracking-widest">Email Address</label>
              <input 
                v-model="mb_email" 
                type="text" 
                class="w-full bg-gray-50 border border-gray-100 rounded-2xl pt-7 pb-3 px-6 text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:bg-white transition-all"
              />
            </div>
            <div class="relative">
              <label class="absolute left-6 top-3 text-[9px] font-black text-indigo-400 uppercase tracking-widest">Security Password</label>
              <input 
                v-model="mb_pw" 
                type="password" 
                @keyup.enter="onClickLogin"
                class="w-full bg-gray-50 border border-gray-100 rounded-2xl pt-7 pb-3 px-6 text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <button 
              @click="onClickLogin"
              class="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1 active:scale-95"
            >
              선생님 로그인
            </button>
            <button 
              @click="isScanningTeacher = false"
              class="w-full py-4 text-gray-400 hover:text-gray-900 font-black text-xs uppercase tracking-[0.2em] transition-colors"
            >
              Go Back
            </button>
          </div>

          <div class="text-center pt-4 border-t border-gray-50">
            <router-link to="/signUp" class="text-[10px] font-black text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-[0.2em]">
              Create New School Account
            </router-link>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-8 pt-8 border-t border-gray-50 text-center">
          <router-link to="/information" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-2xl text-[10px] font-black text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all group tracking-widest uppercase">
            <span class="i-heroicons-presentation-chart-line-solid w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            Learn More
          </router-link>
        </div>
      </div>

      <!-- App Status / Legal -->
      <p class="mt-8 text-center text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
        © 2024 JELLY SCHOOL-OS • Ver 2.0.4
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { QrcodeStream } from 'vue-qrcode-reader'
import { apiPost } from '@/common/api';

const isScanning = ref(false)
const isScanningTeacher = ref(false)
const error = ref('')
const errorTeacher = ref('')
const mb_email = ref('')
const mb_pw = ref('')
const router = useRouter()

const startScan = () => {
  isScanning.value = true
  error.value = ''
}
const startScanTeacher = () => {
  isScanningTeacher.value = true
  errorTeacher.value = ''
}

const onDetect = (detectedCodes) => {
  const url = detectedCodes[0]?.rawValue
  if (!url) return

  isScanning.value = false
  router.push('/sign/' + url)
}

const onError = (err) => {
  error.value = '카메라 접근 실패'
  console.error(err)
  isScanning.value = false
}


const onDetectTeacher = (detectedCodes) => {
  const url = detectedCodes[0]?.rawValue
  if (!url) return

  isScanning.value = false
  router.push('/teacher/' + url)
}

const onErrorTeacher = (err) => {
  errorTeacher.value = '카메라 접근 실패'
  console.error(err)
  isScanningTeacher.value = false
}

const onClickLogin = async () => {
  if (!mb_email.value || !mb_pw.value) return alert('이메일과 비밀번호를 모두 입력해 주세요.')
  try {
    const res = await apiPost('teacher.php', {
      mode: 'login',
      mb_email: mb_email.value,
      mb_pw: mb_pw.value,
    });
    console.log(res?.data)
    if (res?.result == 'SUCCESS') {

      sessionStorage.setItem('t_idnt_code', res?.data?.idnt_code)
      sessionStorage.setItem('idnt_code', 'teacher')
      sessionStorage.setItem('teacher', JSON.stringify(res?.data))
      window.location.href = '/teacher'

    } else {
      if (res?.result == 'NOT_APPROVED') {
        return alert('승인되지 않은 계정입니다. 관리자에게 문의하세요.')
      }

      return alert('로그인에 실패했습니다.')
    }

  } catch (err) {
    console.error(err);
  }

}
</script>

<script>
export default {
  components: {
    QrcodeStream: () => import('vue-qrcode-reader').then(m => m.QrcodeStream)
  }
}
</script>