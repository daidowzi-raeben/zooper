import { _ as __nuxt_component_1, a as apiPost, b as apiPoint } from './api-D3jlul4Q.mjs';
import { _ as __nuxt_component_0 } from './Button-DRBuhPYJ.mjs';
import { ref, unref, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { QrcodeStream } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-qrcode-reader/dist/vue-qrcode-reader.js';
import './Icon-DV0qDH3E.mjs';
import '../server.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/h3/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/klona/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-use-fixed-header/dist/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/destr/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/scule/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/pathe/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ipx/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/axios/index.js';

const __default__ = {
  components: {
    QrcodeStream: () => import('file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-qrcode-reader/dist/vue-qrcode-reader.js').then((m) => m.QrcodeStream)
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "penalty",
  __ssrInlineRender: true,
  setup(__props) {
    const isScanning = ref(false);
    const error = ref("");
    const startScan = () => {
      if (!amountInput.value) {
        alert("\uC785\uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694");
        return;
      }
      if (amountInput.value > memberPoint.value) {
        alert("\uC794\uC561\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4.");
        return;
      }
      isScanning.value = true;
      error.value = "";
    };
    const onDetect = (detectedCodes) => {
      var _a;
      const url = (_a = detectedCodes[0]) == null ? void 0 : _a.rawValue;
      if (url === sessionStorage.getItem("idnt_code")) {
        handleDeposit();
      } else {
        isScanning.value = false;
        return alert("\uC778\uC99D\uC624\uB958");
      }
      if (!url)
        return;
      isScanning.value = false;
    };
    const onError = (err) => {
      error.value = "\uCE74\uBA54\uB77C \uC811\uADFC \uC2E4\uD328";
      console.error(err);
      isScanning.value = false;
    };
    const points = ref([]);
    const page = ref(1);
    const isLoading = ref(false);
    const hasMore = ref(true);
    ref([]);
    ref([]);
    ref([]);
    const selectedStudent = ref(null);
    const amountInput = ref(null);
    const fetchPoints = async (v) => {
      if (isLoading.value || !hasMore.value)
        return;
      const idnt_code = sessionStorage.getItem("idnt_code");
      if (!idnt_code)
        return;
      isLoading.value = true;
      try {
        const res = await apiPost("bank.php", {
          mode: "history",
          idnt_code,
          page: v || page.value,
          rows: 10
        });
        if (res.result === "SUCCESS" && Array.isArray(res.data)) {
          if (res.data.length === 0) {
            hasMore.value = false;
          } else {
            points.value.push(...res.data);
            page.value++;
          }
        } else {
          hasMore.value = false;
        }
      } catch (error2) {
        console.error("\uD3EC\uC778\uD2B8 \uC870\uD68C \uC2E4\uD328:", error2);
        hasMore.value = false;
      } finally {
        isLoading.value = false;
      }
    };
    const memberPoint = ref(0);
    const handleDeposit = async () => {
      if (!amountInput.value) {
        alert("\uC785\uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694");
        return;
      }
      const res = await apiPost("bank.php", {
        mode: "penalty",
        idnt_code: sessionStorage.getItem("idnt_code"),
        point: parseInt(amountInput.value)
      });
      if (res.result === "SUCCESS") {
        alert("\uBC8C\uAE08 \uB0A9\uBD80 \uC644\uB8CC");
        page.value = 1;
        points.value = [];
        hasMore.value = true;
        await fetchPoints(1);
        amountInput.value = null;
        selectedStudent.value = null;
        memberPoint.value = await apiPoint();
      } else {
        alert(res.message || "\uC785\uAE08\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="mb-3 font-bold">\uBC8C\uAE08 \uB0A9\uBD80 \uD558\uAE30</h2><div><div class="mb-6 flex items-center gap-3"><div class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"><div class="h-1.5 w-1.5 rounded-full bg-current"></div></div><h2 class="uppercase text-xs font-semibold text-gray-400"> \uB098\uC758 \uC794\uC561 ${ssrInterpolate(memberPoint.value)}</h2></div><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> \uB0A9\uBD80\uD560 \uBC8C\uAE08\uC744 \uC785\uB825 \uD6C4 QR\uCF54\uB4DC\uB85C \uC778\uC99D \uD574 \uC8FC\uC138\uC694 </p><div class="flex items-center gap-3 mt-6">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: amountInput.value,
        "onUpdate:modelValue": ($event) => amountInput.value = $event,
        placeholder: "\uC785\uAE08\uC561\uC744 \uC785\uB825\uD558\uC138\uC694",
        icon: "i-heroicons-currency-dollar",
        class: "flex-1 text-right",
        "input-class": "text-right",
        type: "tel",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "\uB0A9\uBD80\uD558\uAE30",
        size: "lg",
        color: "black",
        onClick: ($event) => startScan()
      }, null, _parent));
      _push(`</div>`);
      if (isScanning.value) {
        _push(`<div><div style="${ssrRenderStyle({ "background-color": "#000", "position": "fixed", "top": "0", "left": "0", "width": "100%", "height": "100%", "z-index": "99", "opacity": "0.6" })}"></div>`);
        _push(ssrRenderComponent(unref(QrcodeStream), {
          style: { "top": "50%", "left": "50%", "z-index": "99", "position": "fixed", "transform": "translate(-50%,-50%)", "max-width": "400px", "max-height": "400px" },
          onDetect,
          onError
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-10"><h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">\uCD5C\uADFC \uC785\uCD9C\uAE08\uB0B4\uC5ED</h2><div class="space-y-5"><!--[-->`);
      ssrRenderList(points.value, (item) => {
        _push(`<div class="flex items-center gap-4 dark:hover:text-gray-300 group"><span class="text-sm leading-none">${ssrInterpolate(item.description)} (${ssrInterpolate(item.point_type === "save" ? "+" : "-")}${ssrInterpolate(item.point.toLocaleString())}P) </span><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700 mt-1.5"></div><span class="text-xs text-gray-500 leading-none">${ssrInterpolate(item.c_datetime)}</span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/penalty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=penalty-Csn2LBc1.mjs.map
