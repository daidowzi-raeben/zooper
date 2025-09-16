import { ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { QrcodeStream } from "vue-qrcode-reader";
import "./api-D3jlul4Q.js";
import "axios";
const __default__ = {
  components: {
    QrcodeStream: () => import("vue-qrcode-reader").then((m) => m.QrcodeStream)
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const isScanning = ref(false);
    const isScanningTeacher = ref(false);
    const error = ref("");
    ref("");
    const mb_email = ref("");
    const mb_pw = ref("");
    const router = useRouter();
    const onDetect = (detectedCodes) => {
      var _a;
      const url = (_a = detectedCodes[0]) == null ? void 0 : _a.rawValue;
      if (!url)
        return;
      isScanning.value = false;
      router.push("/sign/" + url);
    };
    const onError = (err) => {
      error.value = "카메라 접근 실패";
      console.error(err);
      isScanning.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white px-4" }, _attrs))}><div class="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center"><h1 class="text-2xl font-bold text-gray-800 mb-4">QR 코드 로그인</h1><p class="text-sm text-gray-600 mb-6">QR 코드를 스캔해주세요</p>`);
      if (!isScanning.value && !isScanningTeacher.value) {
        _push(`<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"> QR코드로 로그인 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 mb-6">`);
      if (!isScanning.value && !isScanningTeacher.value) {
        _push(`<button class="text-blue-600 underline text-sm hover:text-blue-800"> 선생님이신가요? </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (isScanning.value) {
        _push(ssrRenderComponent(unref(QrcodeStream), {
          onDetect,
          onError
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isScanning.value) {
        _push(`<button class="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition mt-2">취소</button>`);
      } else {
        _push(`<!---->`);
      }
      if (isScanningTeacher.value) {
        _push(`<div class="mt-6 space-y-4 text-left"><div><label for="userId" class="block text-sm font-medium text-gray-700">이메일</label><input${ssrRenderAttr("value", mb_email.value)} type="text" id="userId" name="userId" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></div><div><label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label><input${ssrRenderAttr("value", mb_pw.value)} type="password" id="password" name="password" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></div><div><button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">로그인</button><button class="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition mt-2">취소</button><div class="text-center mt-4">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/signUp",
          class: "text-sm text-blue-600 underline hover:text-blue-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`가입하기`);
            } else {
              return [
                createTextVNode("가입하기")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<p class="text-red-500 text-sm mt-4">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-CcEUpybS.js.map
