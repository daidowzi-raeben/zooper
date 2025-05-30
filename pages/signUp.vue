<script setup>
import { ref, reactive, computed } from 'vue';
import { apiPost } from '@/common/api';
import { nextTick } from 'vue';

const form = reactive({
  mb_name: '',
  mb_id: '',
  mb_email: '',
  mb_pw: '',
  mb_pw_check: '',
  mb_school: '',
  mb_school_idx: null,
});

const emailStatus = ref('');
const isValidEmail = ref(false);
const isSchoolSelected = ref(false);
const searchKeyword = ref('');
const searchResults = ref([]);
const showResults = ref(false);

const resetSchool = () => {
  form.mb_school = '';
  form.mb_school_idx = null;
  searchKeyword.value = '';
  searchResults.value = [];
  isSchoolSelected.value = false;
};

const searchSchool = async () => {
  if (searchKeyword.value.length > 1) {
    try {
      const res = await apiPost('teacher.php', {
        mode: 'schoolList',
        school: searchKeyword.value,
      });
      searchResults.value = res.data || [];
      showResults.value = true;
    } catch (err) {
      console.error(err);
    }
  } else {
    showResults.value = false;
  }
};

const selectSchool = (school) => {
  form.mb_school = school.school;
  form.mb_school_idx = school.idx;
  searchKeyword.value = school.school;
  showResults.value = false;
  isSchoolSelected.value = true;
};

const checkEmail = async () => {
  await nextTick(); // form.mb_id 최신값 반영 보장

  const emailFull = `${form.mb_id}@korea.kr`;
  form.mb_email = emailFull;

  if (form.mb_id.length > 1) {
    try {
      const res = await apiPost('teacher.php', {
        mode: 'checkEmail',
        email: emailFull,
      });
      console.log(res.result)
      if (res?.result === 'DUPLICATE') {
        emailStatus.value = '이미 사용 중인 이메일입니다.';
        isValidEmail.value = false;
      } else {
        emailStatus.value = '사용 가능한 이메일입니다.';
        isValidEmail.value = true;
      }
    } catch (e) {
      console.error(e);
      emailStatus.value = '오류가 발생했습니다.';
      isValidEmail.value = false;
    }
  } else {
    emailStatus.value = '아이디를 입력해주세요';
    isValidEmail.value = false;
  }
};

const isFormValid = computed(() => {
  return (
    form.mb_name &&
    form.mb_id &&
    form.mb_pw &&
    form.mb_pw_check &&
    form.mb_pw === form.mb_pw_check &&
    isValidEmail.value &&
    form.mb_school_idx
  );
});

const submit = async () => {
  if (form.mb_pw !== form.mb_pw_check) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  try {
    const res = await apiPost('teacher.php', {
      mode: 'insert',
      ...form
    });

    if (res.result === 'SUCCESS') {
      alert('가입이 완료되었습니다.');
      location.href = '/login';
    } else if (res.result === 'DUPLICATE') {
      alert('이미 등록된 이메일입니다.');
    } else {
      alert('가입에 실패했습니다.');
    }
  } catch (e) {
    console.error(e);
    alert('오류가 발생했습니다.');
  }
};
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
    <h2 class="text-2xl font-bold mb-4">교사 회원가입</h2>
    <form @submit.prevent="submit" class="space-y-4">
      <div>
        <label for="mb_name" class="block mb-1 font-medium">이름</label>
        <input v-model="form.mb_name" id="mb_name" type="text" class="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label for="mb_id" class="block mb-1 font-medium">이메일</label>
        <div class="flex items-center space-x-2">
          <input v-model="form.mb_id" @blur="checkEmail" id="mb_id" type="text"
            class="flex-grow border rounded px-3 py-2" placeholder="아이디 입력" required />
          <span class="text-gray-700">@korea.kr</span>
        </div>
        <p class="text-sm mt-1" :class="isValidEmail ? 'text-green-600' : 'text-red-600'">
          {{ emailStatus }}
        </p>
      </div>
      <div>
        <label for="mb_pw" class="block mb-1 font-medium">비밀번호</label>
        <input v-model="form.mb_pw" id="mb_pw" type="password" class="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label for="mb_pw_check" class="block mb-1 font-medium">비밀번호 확인</label>
        <input v-model="form.mb_pw_check" id="mb_pw_check" type="password" class="w-full border rounded px-3 py-2"
          required />
      </div>
      <div>
        <label for="mb_school" class="block mb-1 font-medium">
          학교명 <span class="text-sm text-gray-500">(키워드 입력 후 엔터로 검색할 수 있습니다.)</span>
        </label>
        <div class="relative">
          <input v-model="searchKeyword" id="mb_school" type="search" placeholder="학교명을 검색하세요"
            class="w-full border rounded px-3 py-2 pr-10" :disabled="isSchoolSelected" @keyup.enter="searchSchool" />
          <button type="button" class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
            @click="searchSchool" v-if="!isSchoolSelected">
            <i class="fas fa-search"></i>
          </button>
          <ul v-if="showResults"
            class="absolute z-10 w-full bg-white border mt-1 max-h-40 overflow-auto shadow rounded">
            <li v-for="school in searchResults" :key="school.idx" @click="selectSchool(school)"
              class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              {{ school.school }} <span class="text-sm text-gray-500">({{ school.addr }})</span>
            </li>
          </ul>
          <div v-if="isSchoolSelected" class="mt-1 text-sm text-blue-600 underline cursor-pointer" @click="resetSchool">
            다시 검색
          </div>
        </div>
        <div class="mt-6 mb-4 text-sm text-gray-600 leading-relaxed">
          <p class="text-red-600 font-semibold mb-2">
            ※ 선생님이 아닌 학생이 장난으로 가입할 경우, 해당 선생님에게 즉시 보고됩니다.
          </p>
          <p class="mb-2">회원가입은 선생님 인증 후에 사용이 가능합니다.</p>
          <p class="mb-1">- 이용약관: 본 서비스는 교육 목적으로만 제공되며, 무단 사용 시 제재를 받을 수 있습니다.</p>
          <p>- 개인정보처리방침: 수집된 정보는 수업 및 교육 운영 이외의 용도로 사용되지 않습니다.</p>
        </div>
      </div>
      <button type="button" @click="submit" :disabled="!isFormValid"
        class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50">
        가입하기
      </button>
    </form>
  </div>
</template>