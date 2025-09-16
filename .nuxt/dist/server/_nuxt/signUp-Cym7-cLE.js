import { reactive, ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import "./api-D3jlul4Q.js";
import "axios";
const _sfc_main = {
  __name: "signUp",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      mb_name: "",
      mb_id: "",
      mb_email: "",
      mb_pw: "",
      mb_pw_check: "",
      mb_school: "",
      mb_school_idx: null
    });
    const emailStatus = ref("");
    const isValidEmail = ref(false);
    const isSchoolSelected = ref(false);
    const searchKeyword = ref("");
    const searchResults = ref([]);
    const showResults = ref(false);
    const isFormValid = computed(() => {
      return form.mb_name && form.mb_id && form.mb_pw && form.mb_pw_check && form.mb_pw === form.mb_pw_check && isValidEmail.value && form.mb_school_idx;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto mt-10 p-6 bg-white rounded shadow" }, _attrs))}><h2 class="text-2xl font-bold mb-4">교사 회원가입</h2><form class="space-y-4"><div><label for="mb_name" class="block mb-1 font-medium">이름</label><input${ssrRenderAttr("value", form.mb_name)} id="mb_name" type="text" class="w-full border rounded px-3 py-2" required></div><div><label for="mb_id" class="block mb-1 font-medium">이메일</label><div class="flex items-center space-x-2"><input${ssrRenderAttr("value", form.mb_id)} id="mb_id" type="text" class="flex-grow border rounded px-3 py-2" placeholder="아이디 입력" required><span class="text-gray-700">@korea.kr</span></div><p class="${ssrRenderClass([isValidEmail.value ? "text-green-600" : "text-red-600", "text-sm mt-1"])}">${ssrInterpolate(emailStatus.value)}</p></div><div><label for="mb_pw" class="block mb-1 font-medium">비밀번호</label><input${ssrRenderAttr("value", form.mb_pw)} id="mb_pw" type="password" class="w-full border rounded px-3 py-2" required></div><div><label for="mb_pw_check" class="block mb-1 font-medium">비밀번호 확인</label><input${ssrRenderAttr("value", form.mb_pw_check)} id="mb_pw_check" type="password" class="w-full border rounded px-3 py-2" required></div><div><label for="mb_school" class="block mb-1 font-medium"> 학교명 <span class="text-sm text-gray-500">(키워드 입력 후 엔터로 검색할 수 있습니다.)</span></label><div class="relative"><input${ssrRenderAttr("value", searchKeyword.value)} id="mb_school" type="search" placeholder="학교명을 검색하세요" class="w-full border rounded px-3 py-2 pr-10"${ssrIncludeBooleanAttr(isSchoolSelected.value) ? " disabled" : ""}>`);
      if (!isSchoolSelected.value) {
        _push(`<button type="button" class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"><i class="fas fa-search"></i></button>`);
      } else {
        _push(`<!---->`);
      }
      if (showResults.value) {
        _push(`<ul class="absolute z-10 w-full bg-white border mt-1 max-h-40 overflow-auto shadow rounded"><!--[-->`);
        ssrRenderList(searchResults.value, (school) => {
          _push(`<li class="px-3 py-2 hover:bg-gray-100 cursor-pointer">${ssrInterpolate(school.school)} <span class="text-sm text-gray-500">(${ssrInterpolate(school.addr)})</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (isSchoolSelected.value) {
        _push(`<div class="mt-1 text-sm text-blue-600 underline cursor-pointer"> 다시 검색 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-6 mb-4 text-sm text-gray-600 leading-relaxed"><p class="text-red-600 font-semibold mb-2"> ※ 선생님이 아닌 학생이 장난으로 가입할 경우, 해당 선생님에게 즉시 보고됩니다. </p><p class="mb-2">회원가입은 선생님 인증 후에 사용이 가능합니다.</p><p class="mb-1">- 이용약관: 본 서비스는 교육 목적으로만 제공되며, 무단 사용 시 제재를 받을 수 있습니다.</p><p>- 개인정보처리방침: 수집된 정보는 수업 및 교육 운영 이외의 용도로 사용되지 않습니다.</p></div></div><button type="button"${ssrIncludeBooleanAttr(!isFormValid.value) ? " disabled" : ""} class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"> 가입하기 </button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=signUp-Cym7-cLE.js.map
