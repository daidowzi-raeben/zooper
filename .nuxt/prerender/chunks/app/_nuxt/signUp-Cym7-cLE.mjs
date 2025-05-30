import { reactive, ref, computed, mergeProps, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto mt-10 p-6 bg-white rounded shadow" }, _attrs))}><h2 class="text-2xl font-bold mb-4">\uAD50\uC0AC \uD68C\uC6D0\uAC00\uC785</h2><form class="space-y-4"><div><label for="mb_name" class="block mb-1 font-medium">\uC774\uB984</label><input${ssrRenderAttr("value", form.mb_name)} id="mb_name" type="text" class="w-full border rounded px-3 py-2" required></div><div><label for="mb_id" class="block mb-1 font-medium">\uC774\uBA54\uC77C</label><div class="flex items-center space-x-2"><input${ssrRenderAttr("value", form.mb_id)} id="mb_id" type="text" class="flex-grow border rounded px-3 py-2" placeholder="\uC544\uC774\uB514 \uC785\uB825" required><span class="text-gray-700">@korea.kr</span></div><p class="${ssrRenderClass([isValidEmail.value ? "text-green-600" : "text-red-600", "text-sm mt-1"])}">${ssrInterpolate(emailStatus.value)}</p></div><div><label for="mb_pw" class="block mb-1 font-medium">\uBE44\uBC00\uBC88\uD638</label><input${ssrRenderAttr("value", form.mb_pw)} id="mb_pw" type="password" class="w-full border rounded px-3 py-2" required></div><div><label for="mb_pw_check" class="block mb-1 font-medium">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label><input${ssrRenderAttr("value", form.mb_pw_check)} id="mb_pw_check" type="password" class="w-full border rounded px-3 py-2" required></div><div><label for="mb_school" class="block mb-1 font-medium"> \uD559\uAD50\uBA85 <span class="text-sm text-gray-500">(\uD0A4\uC6CC\uB4DC \uC785\uB825 \uD6C4 \uC5D4\uD130\uB85C \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.)</span></label><div class="relative"><input${ssrRenderAttr("value", searchKeyword.value)} id="mb_school" type="search" placeholder="\uD559\uAD50\uBA85\uC744 \uAC80\uC0C9\uD558\uC138\uC694" class="w-full border rounded px-3 py-2 pr-10"${ssrIncludeBooleanAttr(isSchoolSelected.value) ? " disabled" : ""}>`);
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
        _push(`<div class="mt-1 text-sm text-blue-600 underline cursor-pointer"> \uB2E4\uC2DC \uAC80\uC0C9 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-6 mb-4 text-sm text-gray-600 leading-relaxed"><p class="text-red-600 font-semibold mb-2"> \u203B \uC120\uC0DD\uB2D8\uC774 \uC544\uB2CC \uD559\uC0DD\uC774 \uC7A5\uB09C\uC73C\uB85C \uAC00\uC785\uD560 \uACBD\uC6B0, \uD574\uB2F9 \uC120\uC0DD\uB2D8\uC5D0\uAC8C \uC989\uC2DC \uBCF4\uACE0\uB429\uB2C8\uB2E4. </p><p class="mb-2">\uD68C\uC6D0\uAC00\uC785\uC740 \uC120\uC0DD\uB2D8 \uC778\uC99D \uD6C4\uC5D0 \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><p class="mb-1">- \uC774\uC6A9\uC57D\uAD00: \uBCF8 \uC11C\uBE44\uC2A4\uB294 \uAD50\uC721 \uBAA9\uC801\uC73C\uB85C\uB9CC \uC81C\uACF5\uB418\uBA70, \uBB34\uB2E8 \uC0AC\uC6A9 \uC2DC \uC81C\uC7AC\uB97C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>- \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68: \uC218\uC9D1\uB41C \uC815\uBCF4\uB294 \uC218\uC5C5 \uBC0F \uAD50\uC721 \uC6B4\uC601 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div></div><button type="button"${ssrIncludeBooleanAttr(!isFormValid.value) ? " disabled" : ""} class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"> \uAC00\uC785\uD558\uAE30 </button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signUp-Cym7-cLE.mjs.map
