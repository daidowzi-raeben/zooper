import { e as __nuxt_component_0 } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./SelectMenu-DqIV9qnj.js";
import { _ as __nuxt_component_2 } from "./Input-OFElHbVA.js";
import { _ as __nuxt_component_0$1 } from "./Button-BkeWMuC1.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { a as apiPost } from "./api-DKaA_XRh.js";
import { QrcodeStream } from "vue-qrcode-reader";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "tailwind-merge";
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./Icon-DWHer77Q.js";
import "./Avatar-C3pGi2x7.js";
import "./disposables-ze0J46BC.js";
import "axios";
const __default__ = {
  components: {
    QrcodeStream: () => import("vue-qrcode-reader").then((m) => m.QrcodeStream)
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
        alert("장난 안돼요 ^^");
        return;
      }
      if (!amountInput.value) {
        alert("출금액을 입력해주세요");
        return;
      }
      if (!selectedStudent.value) {
        alert("출금할 학생을 선택해주세요");
        return;
      }
      if (amountInput.value > memberPoint.value) {
        alert("잔액이 부족합니다.");
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
        return alert("인증오류");
      }
      if (!url)
        return;
      isScanning.value = false;
    };
    const onError = (err) => {
      error.value = "카메라 접근 실패";
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
        console.error("포인트 조회 실패:", error2);
        hasMore.value = false;
      } finally {
        isLoading.value = false;
      }
    };
    const dispot = ref(null);
    const memberPoint = ref(0);
    const handleDeposit = async () => {
      if (!amountInput.value) {
        alert("출금액을 입력해주세요");
        return;
      }
      if (!selectedStudent.value) {
        alert("출금할 학생을 선택해주세요");
        return;
      }
      const res = await apiPost("bank.php", {
        mode: "deposit",
        from_idnt_code: sessionStorage.getItem("idnt_code"),
        to_idnt_code: selectedStudent.value,
        point: parseInt(amountInput.value)
      });
      if (res.result === "SUCCESS") {
        alert("출금 완료");
        page.value = 1;
        points.value = [];
        hasMore.value = true;
        await fetchPoints(1);
        amountInput.value = null;
        selectedStudent.value = null;
      } else {
        alert(res.message || "출금에 실패했습니다.");
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
      _push(`</div><div class="space-y-1"><p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">My Wallet Balance</p><div class="flex items-baseline gap-2"><h2 class="text-4xl font-black tabular-nums">${ssrInterpolate(Number(memberPoint.value).toLocaleString())}</h2><span class="text-lg font-bold opacity-70">${ssrInterpolate(((_a = dispot.value) == null ? void 0 : _a.currency_name) || "돌멩이")}</span></div></div></div></div><div class="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl space-y-8"><div class="space-y-2"><h3 class="text-xl font-black text-gray-800">누구에게 보낼까요?</h3><p class="text-sm text-gray-400 font-medium font-bold">친구에게 소중한 마음을 전달해보세요!</p></div><div class="space-y-6"><div class="space-y-2"><label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Select Student</label>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: selectedStudent.value,
        "onUpdate:modelValue": ($event) => selectedStudent.value = $event,
        options: studentOptions.value,
        placeholder: "친구를 선택해주세요",
        size: "xl",
        class: "rounded-2xl",
        "value-attribute": "value",
        "option-attribute": "label"
      }, null, _parent));
      _push(`</div><div class="space-y-2"><label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Amount</label><div class="relative group">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: amountInput.value,
        "onUpdate:modelValue": ($event) => amountInput.value = $event,
        placeholder: "보낼 금액 입력",
        size: "xl",
        type: "tel",
        "input-class": "h-20 font-black text-2xl pl-16 rounded-[28px] border-2 border-gray-50 focus:border-violet-400 bg-gray-50/50 transition-all text-right pr-8"
      }, null, _parent));
      _push(`<span class="absolute left-6 top-1/2 -translate-y-1/2 i-heroicons-paper-airplane w-7 h-7 text-gray-300 group-focus-within:text-violet-500 transition-colors"></span></div></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "친구에게 송금하기",
        size: "xl",
        block: "",
        class: "h-20 rounded-[28px] font-black text-lg bg-violet-600 hover:bg-violet-700 shadow-xl shadow-violet-100 transition-all active:scale-95 border-0",
        onClick: ($event) => startScan()
      }, null, _parent));
      _push(`</div></div>`);
      if (isScanning.value) {
        _push(`<div class="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-10"><div class="absolute top-10 text-white text-center space-y-2"><p class="text-[10px] font-black tracking-widest uppercase opacity-60">Security Check</p><h3 class="text-3xl font-black text-white">송금 본인 인증</h3><p class="text-sm font-medium text-white/50">나의 QR코드를 스캔해서 이체를 승인하세요</p></div><div class="relative w-full max-w-sm aspect-square rounded-[40px] overflow-hidden border-4 border-violet-500/30 shadow-2xl">`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=transfer-CaHjUYJq.js.map
