<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white px-4">
    <div class="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">QR 코드 로그인</h1>
      <p class="text-sm text-gray-600 mb-6">QR 코드를 스캔해주세요</p>

      <button
        v-if="!isScanning"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        @click="startScan"
      >
        QR코드로 로그인
      </button>

      <div class="mt-6 mb-6">
        <button 
        v-if="!isScanningTeacher"
        @click="startScanTeacher" class="text-blue-600 underline text-sm hover:text-blue-800">
            선생님이신가요?
        </button>
        </div>

      <qrcode-stream
        v-if="isScanning"
        @detect="onDetect"
        @error="onError"
      />
      <qrcode-stream
        v-if="isScanningTeacher"
        @detect="onDetectTeacher"
        @error="onErrorTeacher"
      />

      <p v-if="error" class="text-red-500 text-sm mt-4">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { QrcodeStream } from 'vue-qrcode-reader'

const isScanning = ref(false)
const isScanningTeacher = ref(false)
const error = ref('')
const errorTeacher = ref('')
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
</script>

<script>
export default {
  components: {
    QrcodeStream: () => import('vue-qrcode-reader').then(m => m.QrcodeStream)
  }
}
</script>