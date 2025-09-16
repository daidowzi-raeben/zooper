import { ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-router/dist/vue-router.node.mjs';
import { QrcodeStream } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-qrcode-reader/dist/vue-qrcode-reader.js';

const __default__ = {
  components: {
    QrcodeStream: () => import('file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-qrcode-reader/dist/vue-qrcode-reader.js').then((m) => m.QrcodeStream)
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
      error.value = "\uCE74\uBA54\uB77C \uC811\uADFC \uC2E4\uD328";
      console.error(err);
      isScanning.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white px-4" }, _attrs))}><div class="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center"><h1 class="text-2xl font-bold text-gray-800 mb-4">QR \uCF54\uB4DC \uB85C\uADF8\uC778</h1><p class="text-sm text-gray-600 mb-6">QR \uCF54\uB4DC\uB97C \uC2A4\uCE94\uD574\uC8FC\uC138\uC694</p>`);
      if (!isScanning.value && !isScanningTeacher.value) {
        _push(`<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"> QR\uCF54\uB4DC\uB85C \uB85C\uADF8\uC778 </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 mb-6">`);
      if (!isScanning.value && !isScanningTeacher.value) {
        _push(`<button class="text-blue-600 underline text-sm hover:text-blue-800"> \uC120\uC0DD\uB2D8\uC774\uC2E0\uAC00\uC694? </button>`);
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
        _push(`<button class="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition mt-2">\uCDE8\uC18C</button>`);
      } else {
        _push(`<!---->`);
      }
      if (isScanningTeacher.value) {
        _push(`<div class="mt-6 space-y-4 text-left"><div><label for="userId" class="block text-sm font-medium text-gray-700">\uC774\uBA54\uC77C</label><input${ssrRenderAttr("value", mb_email.value)} type="text" id="userId" name="userId" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></div><div><label for="password" class="block text-sm font-medium text-gray-700">\uBE44\uBC00\uBC88\uD638</label><input${ssrRenderAttr("value", mb_pw.value)} type="password" id="password" name="password" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></div><div><button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">\uB85C\uADF8\uC778</button><button class="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition mt-2">\uCDE8\uC18C</button><div class="text-center mt-4">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/signUp",
          class: "text-sm text-blue-600 underline hover:text-blue-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uAC00\uC785\uD558\uAE30`);
            } else {
              return [
                createTextVNode("\uAC00\uC785\uD558\uAE30")
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

export { _sfc_main as default };
//# sourceMappingURL=login-CcEUpybS.mjs.map
