<script setup>

import { apiPost, apiPoint } from '@/common/api'
import { allergyMap } from '@/common/allergy'
const logout = () => {
  sessionStorage.removeItem('idnt_code')
  sessionStorage.removeItem('student')
  sessionStorage.removeItem('t_idnt_code')
  sessionStorage.removeItem('teacher')
  window.location.href = '/login'
}

const student = ref({});
const memberPoint = ref(0)

const storeItems = ref([])
const teacher = ref(null)

const fetchStoreItems = async () => {
  const res = await apiPost('store.php', {
    mode: 'storeList',
    teacher: teacher,
  })

  if (res.result === 'SUCCESS') {
    storeItems.value = res.data
  }
}


onMounted(async () => {
  if (sessionStorage.getItem('student')) {
    student.value = JSON.parse(sessionStorage.getItem('student'))
  }
  memberPoint.value = await apiPoint()
  teacher.value = JSON.parse(sessionStorage.getItem('student'))?.teacher
  fetchStoreItems()
  await fetchMeals()
  await isHope()
  await isFriend()

})

useSeoMeta({
  title: "Fayaz Ahmed",
  description:
    "I'm Fayaz, your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});

const isMoney = ref(false)

const meals = ref([])

const fetchMeals = async () => {
  const res = await apiPost('meal.php', {
    idx: student.value?.teacher
  })

  if (res.result === 'SUCCESS' || res.result === 'CACHED') {
    meals.value = res.data
  }
}



// 문자열에서 알레르기 번호만 추출
const extractAllergyNames = (text) => {
  const match = text.match(/\(([\d.,\s]+)\)/)
  if (!match) return []

  return match[1]
    .split(/[.,\s]+/)
    .map(Number)
    .filter(n => allergyMap[n])
    .map(n => allergyMap[n])
}



const hopeToday = ref({ result: "FAIL" });
const isHope = async () => {
  const res = await apiPost('member.php', {
    mode: 'studentHope',
    idnt_code: student.value?.idnt_code
  })

  hopeToday.value = res
}

const friendToday = ref({ result: "FAIL" });
const isFriend = async () => {
  const res = await apiPost('member.php', {
    mode: 'studentFriend',
    idnt_code: student.value?.idnt_code
  })

  friendToday.value = res
}






const onClickHope = async () => {
  if (memberPoint.value < 10) {
    alert('포인트가 부족합니다.')
    return;
  }
  if (confirm("10돌맹이로 오늘의 운세를 확인할까요?")) {

    const res = await apiPost('member.php', {
      mode: 'studentHopeInsert',
      idnt_code: sessionStorage.getItem('idnt_code'),
      point: 10
    })

    if (res.result === 'SUCCESS') {
      await isHope()
      memberPoint.value = await apiPoint()
    }

  } else {
    // 취소 버튼 클릭 시 실행
    console.log("삭제 취소");
  }
}


const onClickFriend = async () => {
  if (memberPoint.value < 10) {
    alert('포인트가 부족합니다.')
    return;
  }
  if (confirm("10돌맹이로 오늘의 친구를 확인할까요?")) {

    const res = await apiPost('member.php', {
      mode: 'studentFriendInsert',
      idnt_code: sessionStorage.getItem('idnt_code'),
      point: 10
    })

    if (res.result === 'SUCCESS') {
      await isFriend()
      memberPoint.value = await apiPoint()
    }

  } else {
    // 취소 버튼 클릭 시 실행
    console.log("삭제 취소");
  }
}
</script>


<template>
  <div>
    <div class="space-y-4">
      <!-- 환영 메시지 -->
      <div class="flex justify-between items-center">
        <p class="text-lg font-semibold text-gray-700">{{ student?.student_name }}친구, 환영합니다 👋</p>
        <button
          class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"
          @click="logout">
          <span class="i-heroicons-arrow-right-on-rectangle w-4 h-4" />
          로그아웃
        </button>
      </div>

      <!-- 내 잔액 -->
      <div
        class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center">
        <div class="flex flex-col justify-center">
          <p class="text-sm opacity-80">내 잔액</p>
          <p class="text-2xl font-bold">
            <span v-if="isMoney" @click="isMoney = false">
              💰 {{ Number(memberPoint || 0).toLocaleString() }} <span
                class="text-sm font-normal align-middle">돌멩이</span>
            </span>
            <span v-if="!isMoney" @click="isMoney = true">
              나의 잔액 확인하기
            </span>
          </p>
        </div>
        <UButton label="이체하기" color="white" class="text-blue-800 bg-white bg-opacity-90 hover:bg-opacity-100"
          @click="$router.push('/transfer')" />
      </div>

      <!-- 버튼 8개 -->
      <div class="grid grid-cols-2 gap-4">
        <router-link to="/income">
          <div
            class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-center text-lg font-bold cursor-pointer">
            💰 입금
          </div>
        </router-link>
        <router-link to="/expense">
          <div
            class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-300 to-orange-400 text-white text-center text-lg font-bold cursor-pointer">
            💸 출금
          </div>
        </router-link>
        <!-- <router-link to="/tax">
        <div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer">
          💼 세금
        </div>
      </router-link>
      <router-link to="/penalty">
        <div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer">
          ⚠️ 벌금
        </div>
      </router-link> -->


      </div>
    </div>

    <!-- 오늘의 급식 -->
    <div class="mt-8 rounded-2xl shadow-md p-4 bg-white border">
      <p class="text-base font-semibold text-gray-800 mb-2">🍱 오늘의 급식</p>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li v-for="(meal, index) in meals" :key="index">
          <span>{{ meal }}</span>
          <div v-if="extractAllergyNames(meal).length" class="text-xs text-gray-500 ml-4 mt-1">
            ⚠️ 알레르기 유발 식품: {{ extractAllergyNames(meal).join(', ') }}
          </div>
        </li>
      </ul>
    </div>

    <div class="mt-8 rounded-2xl shadow-md  border">
      <div v-if="friendToday?.result === 'FAIL'" @click="onClickFriend" class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg
      font-bold cursor-pointer">
        오늘 함께하면 좋을 것 같은 친구는?
      </div>
      <div v-else class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg
      font-bold cursor-pointer">
        ❤️❤️ {{ friendToday?.data?.mb_name }} ❤️❤️
      </div>
    </div>

    <div class="mt-8 rounded-2xl shadow-md  border">
      <div v-if="hopeToday?.result === 'FAIL'" @click="onClickHope"
        class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer">
        오늘의 운세 보기
      </div>
      <div v-else
        class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer">
        {{ hopeToday?.data?.result_text }}
      </div>
    </div>

    <!-- <div class="mt-10">
          <div class="">
            <h1 class="text-2xl font-bold mb-4">상점 아이템 목록</h1>

            <div v-if="storeItems.length > 0">
              <ul>
                <li
                  v-for="(item, index) in storeItems"
                  :key="index"
                  class="mb-4 p-4 border rounded-lg"
                >
                  <div class="text-lg font-semibold">{{ item.item_name }}</div>
                  <div class="text-sm text-gray-600">{{ item.item_desc }}</div>
                  <div class="text-right font-bold text-blue-600">
                    {{ item.price.toLocaleString() }} 포인트
                  </div>
                </li>
              </ul>
            </div>

            <div v-else class="text-gray-500">불러올 아이템이 없습니다.</div>
          </div>
      </div> -->
  </div>
</template>