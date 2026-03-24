import { e as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './SelectMenu-DqIV9qnj.mjs';
import { _ as __nuxt_component_2, a as apiPost } from './api-DKaA_XRh.mjs';
import { _ as __nuxt_component_0$1 } from './Button-BkeWMuC1.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { QrcodeStream } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-qrcode-reader/dist/vue-qrcode-reader.js';
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
import './Icon-DWHer77Q.mjs';
import './Avatar-C3pGi2x7.mjs';
import './disposables-ze0J46BC.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/axios/index.js';

const __default__ = {
  components: {
    QrcodeStream: () => import('file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-qrcode-reader/dist/vue-qrcode-reader.js').then((m) => m.QrcodeStream)
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "transfer",
  __ssrInlineRender: true,
  setup(__props) {
    const isScanning = ref(false);
    const error = ref("");
    const startScan = () => {
      if (amountInput.value < 1) {
        alert("\uC7A5\uB09C \uC548\uB3FC\uC694 ^^");
        return;
      }
      if (!amountInput.value) {
        alert("\uCD9C\uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694");
        return;
      }
      if (!selectedStudent.value) {
        alert("\uCD9C\uAE08\uD560 \uD559\uC0DD\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694");
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
    const studentOptions = ref([]);
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
    const dispot = ref(null);
    const memberPoint = ref(0);
    const handleDeposit = async () => {
      if (!amountInput.value) {
        alert("\uCD9C\uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694");
        return;
      }
      if (!selectedStudent.value) {
        alert("\uCD9C\uAE08\uD560 \uD559\uC0DD\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694");
        return;
      }
      const res = await apiPost("bank.php", {
        mode: "deposit",
        from_idnt_code: sessionStorage.getItem("idnt_code"),
        to_idnt_code: selectedStudent.value,
        point: parseInt(amountInput.value)
      });
      if (res.result === "SUCCESS") {
        alert("\uCD9C\uAE08 \uC644\uB8CC");
        page.value = 1;
        points.value = [];
        hasMore.value = true;
        await fetchPoints(1);
        amountInput.value = null;
        selectedStudent.value = null;
      } else {
        alert(res.message || "\uCD9C\uAE08\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_0;
      const _component_USelectMenu = __nuxt_component_1;
      const _component_UInput = __nuxt_component_2;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-32 space-y-10 min-h-screen" }, _attrs))}><div class="relative bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[40px] p-8 text-white shadow-2xl shadow-indigo-100 overflow-hidden"><div class="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div><div class="relative z-10 flex flex-col items-center text-center space-y-6"><div class="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "solar:banknote-2-bold-duotone",
        class: "w-12 h-12 text-white"
      }, null, _parent));
      _push(`</div><div class="space-y-1"><p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">My Wallet Balance</p><div class="flex items-baseline gap-2"><h2 class="text-4xl font-black tabular-nums">${ssrInterpolate(Number(memberPoint.value).toLocaleString())}</h2><span class="text-lg font-bold opacity-70">${ssrInterpolate(((_a = dispot.value) == null ? void 0 : _a.currency_name) || "\uB3CC\uBA69\uC774")}</span></div></div></div></div><div class="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl space-y-8"><div class="space-y-2"><h3 class="text-xl font-black text-gray-800">\uB204\uAD6C\uC5D0\uAC8C \uBCF4\uB0BC\uAE4C\uC694?</h3><p class="text-sm text-gray-400 font-medium font-bold">\uCE5C\uAD6C\uC5D0\uAC8C \uC18C\uC911\uD55C \uB9C8\uC74C\uC744 \uC804\uB2EC\uD574\uBCF4\uC138\uC694!</p></div><div class="space-y-6"><div class="space-y-2"><label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Select Student</label>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: selectedStudent.value,
        "onUpdate:modelValue": ($event) => selectedStudent.value = $event,
        options: studentOptions.value,
        placeholder: "\uCE5C\uAD6C\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694",
        size: "xl",
        class: "rounded-2xl",
        "value-attribute": "value",
        "option-attribute": "label"
      }, null, _parent));
      _push(`</div><div class="space-y-2"><label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Amount</label><div class="relative group">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: amountInput.value,
        "onUpdate:modelValue": ($event) => amountInput.value = $event,
        placeholder: "\uBCF4\uB0BC \uAE08\uC561 \uC785\uB825",
        size: "xl",
        type: "tel",
        "input-class": "h-20 font-black text-2xl pl-16 rounded-[28px] border-2 border-gray-50 focus:border-violet-400 bg-gray-50/50 transition-all text-right pr-8"
      }, null, _parent));
      _push(`<span class="absolute left-6 top-1/2 -translate-y-1/2 i-heroicons-paper-airplane w-7 h-7 text-gray-300 group-focus-within:text-violet-500 transition-colors"></span></div></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "\uCE5C\uAD6C\uC5D0\uAC8C \uC1A1\uAE08\uD558\uAE30",
        size: "xl",
        block: "",
        class: "h-20 rounded-[28px] font-black text-lg bg-violet-600 hover:bg-violet-700 shadow-xl shadow-violet-100 transition-all active:scale-95 border-0",
        onClick: ($event) => startScan()
      }, null, _parent));
      _push(`</div></div>`);
      if (isScanning.value) {
        _push(`<div class="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-10"><div class="absolute top-10 text-white text-center space-y-2"><p class="text-[10px] font-black tracking-widest uppercase opacity-60">Security Check</p><h3 class="text-3xl font-black text-white">\uC1A1\uAE08 \uBCF8\uC778 \uC778\uC99D</h3><p class="text-sm font-medium text-white/50">\uB098\uC758 QR\uCF54\uB4DC\uB97C \uC2A4\uCE94\uD574\uC11C \uC774\uCCB4\uB97C \uC2B9\uC778\uD558\uC138\uC694</p></div><div class="relative w-full max-w-sm aspect-square rounded-[40px] overflow-hidden border-4 border-violet-500/30 shadow-2xl">`);
        _push(ssrRenderComponent(unref(QrcodeStream), {
          onDetect,
          onError
        }, null, _parent));
        _push(`<div class="absolute inset-0 border-[40px] border-black/20 pointer-events-none"></div><div class="absolute top-1/2 left-0 right-0 h-0.5 bg-violet-400/50 shadow-[0_0_20px_rgba(167,139,250,1)] animate-scan"></div></div><button class="mt-12 text-white/50 hover:text-white font-black text-sm p-4 tracking-widest uppercase">Go Back</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-6"><div class="flex items-center gap-2 px-2 text-gray-800"><span class="i-heroicons-list-bullet-solid w-5 h-5 text-gray-400"></span><h3 class="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Recent Transactions</h3></div><div class="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50/50 text-gray-800">`);
      if (points.value.length > 0) {
        _push(`<div><!--[-->`);
        ssrRenderList(points.value, (item) => {
          _push(`<div class="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-all group"><div class="flex items-center gap-4"><div class="${ssrRenderClass([
            "w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all group-hover:scale-110",
            item.point_type === "save" ? "bg-blue-50 text-blue-600" : "bg-rose-50 text-rose-600"
          ])}">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: item.point_type === "save" ? "solar:arrow-down-bold" : "solar:arrow-up-bold",
            class: "w-6 h-6"
          }, null, _parent));
          _push(`</div><div><p class="text-sm font-black text-gray-800 leading-tight">${ssrInterpolate(item.description)}</p><p class="text-[9px] text-gray-400 font-bold tracking-tighter mt-1">${ssrInterpolate(item.c_datetime)}</p></div></div><div class="text-right"><p class="${ssrRenderClass(["text-base font-black tabular-nums", item.point_type === "save" ? "text-blue-600" : "text-rose-600"])}">${ssrInterpolate(item.point_type === "save" ? "+" : "-")}${ssrInterpolate(Number(item.point).toLocaleString())}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/transfer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=transfer-CaHjUYJq.mjs.map
