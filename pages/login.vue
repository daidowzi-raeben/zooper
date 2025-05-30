<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white px-4">
    <div class="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">QR 코드 로그인</h1>
      <p class="text-sm text-gray-600 mb-6">QR 코드를 스캔해주세요</p>

      <button v-if="!isScanning && !isScanningTeacher"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        @click="startScan">
        QR코드로 로그인
      </button>

      <div class="mt-6 mb-6">
        <button v-if="!isScanning && !isScanningTeacher" @click="startScanTeacher"
          class="text-blue-600 underline text-sm hover:text-blue-800">
          선생님이신가요?
        </button>
      </div>

      <qrcode-stream v-if="isScanning" @detect="onDetect" @error="onError" />
      <button v-if="isScanning"
        class="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition mt-2"
        @click="isScanning = false">취소</button>
      <div v-if="isScanningTeacher" class="mt-6 space-y-4 text-left">
        <div>
          <label for="userId" class="block text-sm font-medium text-gray-700">이메일</label>
          <input v-model="mb_email" type="text" id="userId" name="userId"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
          <input v-model="mb_pw" type="password" id="password" name="password"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            @click="onClickLogin">로그인</button>
          <button
            class="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition mt-2"
            @click="isScanningTeacher = false">취소</button>
          <div class="text-center mt-4">
            <router-link to="/signUp" class="text-sm text-blue-600 underline hover:text-blue-800">가입하기</router-link>
          </div>
        </div>
      </div>
      <!-- <qrcode-stream
        v-if="isScanningTeacher"
        @detect="onDetectTeacher"
        @error="onErrorTeacher"
      /> -->

      <p v-if="error" class="text-red-500 text-sm mt-4">{{ error }}</p>
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