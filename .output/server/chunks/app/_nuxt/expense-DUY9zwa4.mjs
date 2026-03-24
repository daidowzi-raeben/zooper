import { e as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_2, a as apiPost, b as apiPoint } from './api-DKaA_XRh.mjs';
import { _ as __nuxt_component_0$1 } from './Button-BkeWMuC1.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { QrcodeStream } from 'vue-qrcode-reader';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Icon-DWHer77Q.mjs';
import 'axios';

const __default__ = {
  components: {
    QrcodeStream: () => import('vue-qrcode-reader').then((m) => m.QrcodeStream)
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "expense",
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
      if (!url)
        return;
      if (studentRoleIdntCode.value.includes(url)) {
        handleDeposit();
      } else {
        alert("\uC778\uC99D\uC624\uB958");
      }
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
    const studentRole = ref([]);
    const studentRoleIdntCode = ref([]);
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
      const res = await apiPost("bank.php", {
        mode: "expense",
        idnt_code: sessionStorage.getItem("idnt_code"),
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
        memberPoint.value = await apiPoint();
      } else {
        alert(res.message || "\uCD9C\uAE08\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_0;
      const _component_UInput = __nuxt_component_2;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-32 space-y-10 min-h-screen" }, _attrs))}><div class="relative bg-gradient-to-br from-rose-500 to-orange-600 rounded-[40px] p-8 text-white shadow-2xl shadow-rose-100 overflow-hidden"><div class="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div><div class="relative z-10 flex flex-col items-center text-center space-y-6"><div class="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "solar:wallet-money-bold-duotone",
        class: "w-12 h-12 text-white"
      }, null, _parent));
      _push(`</div><div class="space-y-1"><p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">My Wallet Balance</p><div class="flex items-baseline gap-2"><h2 class="text-4xl font-black tabular-nums">${ssrInterpolate(Number(memberPoint.value).toLocaleString())}</h2><span class="text-lg font-bold opacity-70">${ssrInterpolate(((_a = dispot.value) == null ? void 0 : _a.currency_name) || "\uB3CC\uBA69\uC774")}</span></div></div></div></div><div class="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl space-y-8"><div class="space-y-2"><h3 class="text-xl font-black text-gray-800">\uC5BC\uB9C8\uB97C \uC0AC\uC6A9\uD560\uAE4C\uC694?</h3><p class="text-sm text-gray-400 font-medium font-bold">\uC740\uD589\uC6D0 \uCE5C\uAD6C( <span class="text-rose-500">${ssrInterpolate(studentRole.value || "\uC5C6\uC74C")}</span> )\uC640 \uD568\uAED8 \uC2B9\uC778\uC774 \uD544\uC694\uD574\uC694!</p></div><div class="space-y-6"><div class="relative group">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: amountInput.value,
        "onUpdate:modelValue": ($event) => amountInput.value = $event,
        placeholder: "\uC0AC\uC6A9\uD560 \uAE08\uC561 \uC785\uB825",
        size: "xl",
        type: "tel",
        "input-class": "h-20 font-black text-2xl pl-16 rounded-[28px] border-2 border-gray-50 focus:border-rose-400 bg-gray-50/50 transition-all text-right pr-8"
      }, null, _parent));
      _push(`<span class="absolute left-6 top-1/2 -translate-y-1/2 i-heroicons-shopping-cart-solid w-7 h-7 text-gray-300 group-focus-within:text-rose-500 transition-colors"></span></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "\uCD9C\uAE08 \uC2B9\uC778 \uC694\uCCAD\uD558\uAE30",
        size: "xl",
        block: "",
        class: "h-20 rounded-[28px] font-black text-lg bg-rose-600 hover:bg-rose-700 shadow-xl shadow-rose-100 transition-all active:scale-95 border-0",
        onClick: ($event) => startScan()
      }, null, _parent));
      _push(`</div></div>`);
      if (isScanning.value) {
        _push(`<div class="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-10"><div class="absolute top-10 text-white text-center space-y-2"><p class="text-[10px] font-black tracking-widest uppercase opacity-60">Authorize Transaction</p><h3 class="text-3xl font-black text-rose-400">${ssrInterpolate(Number(amountInput.value).toLocaleString())} ${ssrInterpolate(((_b = dispot.value) == null ? void 0 : _b.currency_name) || "\uB3CC\uBA69\uC774")}</h3><p class="text-sm font-medium text-white/50 text-rose-200">\uC740\uD589\uC6D0\uC758 QR\uCF54\uB4DC\uB97C \uC2A4\uCE94\uD574\uC8FC\uC138\uC694</p></div><div class="relative w-full max-w-sm aspect-square rounded-[40px] overflow-hidden border-4 border-rose-500/30 shadow-2xl">`);
        _push(ssrRenderComponent(unref(QrcodeStream), {
          onDetect,
          onError
        }, null, _parent));
        _push(`<div class="absolute inset-0 border-[40px] border-black/20 pointer-events-none"></div><div class="absolute top-1/2 left-0 right-0 h-0.5 bg-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,1)] animate-scan"></div></div><button class="mt-12 text-white/50 hover:text-white font-black text-sm p-4 tracking-widest uppercase">Go Back</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-6"><div class="flex items-center gap-2 px-2"><span class="i-heroicons-list-bullet-solid w-5 h-5 text-gray-400"></span><h3 class="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Recent Transactions</h3></div><div class="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50/50 text-gray-800">`);
      if (points.value.length > 0) {
        _push(`<div><!--[-->`);
        ssrRenderList(points.value, (item) => {
          _push(`<div class="flex items-center justify-between p-6 hover:bg-rose-50/30 transition-all group"><div class="flex items-center gap-4"><div class="${ssrRenderClass([
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/expense.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=expense-DUY9zwa4.mjs.map
