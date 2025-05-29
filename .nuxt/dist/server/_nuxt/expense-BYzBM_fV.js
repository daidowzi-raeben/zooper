import { _ as __nuxt_component_1 } from "./Input-h0eT_qab.js";
import { _ as __nuxt_component_0 } from "./Button-DRBuhPYJ.js";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { a as apiPost, b as apiPoint } from "./api-D3jlul4Q.js";
import { QrcodeStream } from "vue-qrcode-reader";
import "./Icon-DV0qDH3E.js";
import "../server.mjs";
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
import "vue-use-fixed-header";
import "axios";
const __default__ = {
  components: {
    QrcodeStream: () => import("vue-qrcode-reader").then((m) => m.QrcodeStream)
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "expense",
  __ssrInlineRender: true,
  setup(__props) {
    const isScanning = ref(false);
    const error = ref("");
    const startScan = () => {
      if (!amountInput.value) {
        alert("출금액을 입력해주세요");
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
      if (!url)
        return;
      if (studentRoleIdntCode.value.includes(url)) {
        handleDeposit();
      } else {
        alert("인증오류");
      }
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
    ref([]);
    ref([]);
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
        console.error("포인트 조회 실패:", error2);
        hasMore.value = false;
      } finally {
        isLoading.value = false;
      }
    };
    const memberPoint = ref(0);
    const handleDeposit = async () => {
      if (!amountInput.value) {
        alert("출금액을 입력해주세요");
        return;
      }
      const res = await apiPost("bank.php", {
        mode: "expense",
        idnt_code: sessionStorage.getItem("idnt_code"),
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
        memberPoint.value = await apiPoint();
      } else {
        alert(res.message || "출금에 실패했습니다.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="mb-3 font-bold">출금하기</h2><div><div class="mb-6 flex items-center gap-3"><div class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"><div class="h-1.5 w-1.5 rounded-full bg-current"></div></div><h2 class="uppercase text-xs font-semibold text-gray-400"> 나의 잔액 ${ssrInterpolate(memberPoint.value)}</h2></div><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> 출금을 하기 위해선 <span style="${ssrRenderStyle({ "font-weight": "bold", "color": "red" })}">은행원의 승인</span>이 필요합니다. <br> 은행원 친구와 함께 오세요. </p><div class="flex items-center gap-3 mt-6">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: amountInput.value,
        "onUpdate:modelValue": ($event) => amountInput.value = $event,
        placeholder: "출금액을 입력하세요",
        icon: "i-heroicons-currency-dollar",
        class: "flex-1 text-right",
        "input-class": "text-right",
        type: "tel",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "출금하기",
        size: "lg",
        color: "black",
        onClick: ($event) => startScan()
      }, null, _parent));
      _push(`</div>`);
      if (isScanning.value) {
        _push(`<div><div style="${ssrRenderStyle({ "background-color": "#000", "position": "fixed", "top": "0", "left": "0", "width": "100%", "height": "100%", "z-index": "99", "opacity": "0.6" })}"></div><div style="${ssrRenderStyle({ "z-index": "100", "top": "50%", "left": "50%", "color": "#fff", "font-size": "30px", "position": "fixed", "transform": "translate(-50%,-50%)", "margin-top": "-250px" })}">${ssrInterpolate(amountInput.value)} <span style="${ssrRenderStyle({ "font-size": "16px" })}">돌맹이 출금!</span></div>`);
        _push(ssrRenderComponent(unref(QrcodeStream), {
          style: { "top": "50%", "left": "50%", "z-index": "99", "position": "fixed", "transform": "translate(-50%,-50%)", "max-width": "400px", "max-height": "400px" },
          onDetect,
          onError
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-10"><h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">최근 입출금내역</h2><div class="space-y-5"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/expense.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=expense-BYzBM_fV.js.map
