import { _ as __nuxt_component_0 } from "./Button-qjGOVKpX.js";
import { _ as __nuxt_component_1 } from "./Input-W9wZoJKK.js";
import { ref, watch, resolveComponent, unref, isRef, withCtx, createVNode, useSSRContext, mergeProps } from "vue";
import { d as useSeoMeta, e as useRouter, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { a as apiPost, b as apiPoint } from "./api-D3jlul4Q.js";
import "./Icon-DgNtEB-L.js";
import "tailwind-merge";
import "defu";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "klona";
import "devalue";
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "vue-use-fixed-header";
import "axios";
const logo = "" + __buildAssetsURL("sunny_logo.B3qlKvYv.png");
const allergyMap = {
  1: "난류 (계란 등)",
  2: "우유",
  3: "메밀",
  4: "땅콩",
  5: "대두 (콩)",
  6: "밀",
  7: "고등어",
  8: "게",
  9: "새우",
  10: "돼지고기",
  11: "복숭아",
  12: "토마토",
  13: "아황산류",
  14: "호두",
  15: "닭고기",
  16: "쇠고기",
  17: "오징어",
  18: "조개류 (굴, 전복, 홍합 등)"
};
const _sfc_main$1 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    const student = ref({});
    const memberPoint = ref(0);
    ref([]);
    const teacher = ref(null);
    const dispot = ref(null);
    const dispotTotal = ref(0);
    const deposit = ref(null);
    const isEndDeposit = ref(false);
    function isMatured(endDateStr) {
      if (!endDateStr)
        return false;
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const endDate = new Date(endDateStr);
      endDate.setHours(0, 0, 0, 0);
      return today >= endDate;
    }
    function formatDate(dateStr) {
      if (!dateStr)
        return "";
      const d = new Date(dateStr);
      return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
    }
    const isDepositApi = async () => {
      var _a, _b;
      const res = await apiPost("member.php", {
        mode: "deposit_status",
        idnt_code: (_a = student.value) == null ? void 0 : _a.idnt_code
      });
      if (res.result === "SUCCESS") {
        deposit.value = res.data;
        if (isMatured((_b = deposit.value) == null ? void 0 : _b.end_date)) {
          isEndDeposit.value = true;
        } else {
          isEndDeposit.value = false;
        }
      }
    };
    const maturityDate = ref(null);
    const isDispotApi = async () => {
      var _a;
      const res = await apiPost("teacher.php", {
        mode: "dispot",
        teacher: teacher == null ? void 0 : teacher.value
      });
      if (res.result === "SUCCESS") {
        dispot.value = res.data;
        const weeks = ((_a = dispot.value) == null ? void 0 : _a.deposit_cycle) || 2;
        const today = /* @__PURE__ */ new Date();
        const date = new Date(today);
        date.setDate(today.getDate() + weeks * 7);
        maturityDate.value = date.toISOString().split("T")[0];
      }
    };
    useSeoMeta({
      title: "Fayaz Ahmed",
      description: "I'm Fayaz, your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node."
    });
    const isMoney = ref(false);
    const meals = ref([]);
    const extractAllergyNames = (text) => {
      const match = text.match(/\(([\d.,\s]+)\)/);
      if (!match)
        return [];
      return match[1].split(/[.,\s]+/).map(Number).filter((n) => allergyMap[n]).map((n) => allergyMap[n]);
    };
    const hopeToday = ref({ result: "FAIL" });
    const friendToday = ref({ result: "FAIL" });
    const onClickEndDeposit = async () => {
      if (confirm("적금을 만기해지하시겠습니까?")) {
        const res = await apiPost("member.php", {
          mode: "depositEnd",
          idnt_code: sessionStorage.getItem("idnt_code")
        });
        if (res.result === "SUCCESS") {
          memberPoint.value = await apiPoint();
          await isDispotApi();
          await isDepositApi();
        }
      } else {
        console.log("삭제 취소");
      }
    };
    useRouter();
    const amount = ref("");
    const submitting = ref(false);
    function parseAmount(raw) {
      const n = Number(String(raw ?? "").replace(/[^\d]/g, ""));
      return Number.isFinite(n) ? n : 0;
    }
    async function createSavings() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const n = parseAmount(amount.value);
      if (!n || n < 1) {
        alert("적금 금액을 입력해 주세요.");
        return;
      }
      if (((_a = dispot.value) == null ? void 0 : _a.deposit_min) > n) {
        alert(`${(_b = dispot.value) == null ? void 0 : _b.deposit_min} ${(_c = dispot.value) == null ? void 0 : _c.currency_name} ~ ${(_d = dispot.value) == null ? void 0 : _d.deposit_max} ${(_e = dispot.value) == null ? void 0 : _e.currency_name} 의 금액만 가능합니다.`);
        return;
      }
      if (((_f = dispot.value) == null ? void 0 : _f.deposit_max) < n) {
        alert(`${(_g = dispot.value) == null ? void 0 : _g.deposit_min} ${(_h = dispot.value) == null ? void 0 : _h.currency_name} ~ ${(_i = dispot.value) == null ? void 0 : _i.deposit_max} ${(_j = dispot.value) == null ? void 0 : _j.currency_name} 의 금액만 가능합니다.`);
        return;
      }
      if (memberPoint.value < n) {
        alert("금액이 부족합니다.");
        return;
      }
      const ok = confirm(
        `적금 금액 ${n.toLocaleString()} ${(_k = dispot.value) == null ? void 0 : _k.currency_name} 예치하기.
만기일 ${maturityDate.value} 전에는 출금할 수 없습니다. 진행할까요?`
      );
      if (!ok)
        return;
      try {
        submitting.value = true;
        const res = await apiPost("member.php", {
          mode: "interest",
          idnt_code: sessionStorage.getItem("idnt_code"),
          amount: n,
          teacher: teacher == null ? void 0 : teacher.value,
          amount_interest: dispotTotal == null ? void 0 : dispotTotal.value,
          interest_rate: (_l = dispot.value) == null ? void 0 : _l.deposit_interest,
          deposit_name: "적금통장",
          end_date: maturityDate.value
        });
        if (res.result === "SUCCESS") {
          memberPoint.value = await apiPoint();
          await isDispotApi();
          await isDepositApi();
        }
      } finally {
        submitting.value = false;
      }
    }
    watch(amount, (val) => {
      var _a;
      const n = Number(String(val).replace(/[^\d]/g, "")) || 0;
      const rate = ((_a = dispot.value) == null ? void 0 : _a.deposit_interest) || 0;
      dispotTotal.value = Math.floor(0 + n * rate / 100);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
      const _component_UButton = __nuxt_component_0;
      const _component_UInput = __nuxt_component_1;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center"><img${ssrRenderAttr("src", unref(logo))} width="150" style="${ssrRenderStyle({ "position": "absolute", "margin-top": "-61px" })}"></div><div class="space-y-4"><div class="flex justify-between items-center"><p class="text-lg font-semibold text-gray-700">${ssrInterpolate((_a = unref(student)) == null ? void 0 : _a.student_name)}친구, 환영합니다 👋</p><button class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"><span class="i-heroicons-arrow-right-on-rectangle w-4 h-4"></span> 로그아웃 </button></div><div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">내 잔액</p><p class="text-2xl font-bold">`);
      if (unref(isMoney)) {
        _push(`<span> 💰 ${ssrInterpolate(Number(unref(memberPoint) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">${ssrInterpolate((_b = unref(dispot)) == null ? void 0 : _b.currency_name)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isMoney)) {
        _push(`<span> 나의 잔액 확인하기 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "이체하기",
        color: "white",
        class: "text-blue-800 bg-white bg-opacity-90 hover:bg-opacity-100",
        onClick: ($event) => _ctx.$router.push("/transfer")
      }, null, _parent));
      _push(`</div>`);
      if (!((_c = unref(deposit)) == null ? void 0 : _c.amount_interest)) {
        _push(`<div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col md:flex-row md:justify-between md:items-center gap-3"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">단기 적금</p><p class="text-2xl font-bold">${ssrInterpolate((_d = unref(dispot)) == null ? void 0 : _d.deposit_cycle)}주 적금통장 만들기</p><p class="text-xs opacity-90 mt-1">${ssrInterpolate((_e = unref(dispot)) == null ? void 0 : _e.deposit_interest)}% 이자받기 · ${ssrInterpolate(unref(maturityDate))}일 만기 · 중도해지 불가 · 최소 ${ssrInterpolate((_f = unref(dispot)) == null ? void 0 : _f.deposit_min)} ~ 최대 ${ssrInterpolate((_g = unref(dispot)) == null ? void 0 : _g.deposit_max)}</p></div>`);
        if (!((_h = unref(deposit)) == null ? void 0 : _h.amount_interest)) {
          _push(`<div class="flex items-center gap-2 w-full md:w-auto">`);
          _push(ssrRenderComponent(_component_UInput, {
            modelValue: unref(amount),
            "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
            type: "tel",
            inputmode: "numeric",
            placeholder: "얼마를 적금할까요? (원)",
            ui: { base: "text-blue-900" },
            class: "bg-white/90 text-blue-900 rounded-xl w-full md:w-56",
            onKeyup: createSavings
          }, null, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            label: "만들기",
            color: "secondary",
            class: "rounded-xl",
            loading: unref(submitting),
            onClick: createSavings
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div>예상이자 : ${ssrInterpolate(unref(dispotTotal))} ${ssrInterpolate((_i = unref(dispot)) == null ? void 0 : _i.currency_name)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex justify-between items-center">`);
      if ((_j = unref(deposit)) == null ? void 0 : _j.deposit_exists) {
        _push(`<div><p class="text-sm opacity-80">내 적금통장</p><p class="text-xl font-bold">${ssrInterpolate(Number((_k = unref(deposit)) == null ? void 0 : _k.amount).toLocaleString())}<span class="text-sm font-normal">(원금)</span> + ${ssrInterpolate(Number((_l = unref(deposit)) == null ? void 0 : _l.amount_interest).toLocaleString())}<span class="text-sm font-normal">(이자)</span> = ${ssrInterpolate(Number(((_m = unref(deposit)) == null ? void 0 : _m.amount) + ((_n = unref(deposit)) == null ? void 0 : _n.amount_interest)).toLocaleString())} <span class="text-sm font-normal">${ssrInterpolate((_o = unref(dispot)) == null ? void 0 : _o.currency_name)}</span></p><p class="text-sm mt-1">만기일 : ${ssrInterpolate(formatDate((_p = unref(deposit)) == null ? void 0 : _p.end_date))}</p></div>`);
      } else {
        _push(`<div><p class="text-sm opacity-80">내 적금통장</p><p class="text-lg font-bold">아직 개설된 적금이 없습니다</p></div>`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        label: "원금+이자 받기",
        disabled: !unref(isEndDeposit),
        color: "secondary",
        class: "rounded-xl bg-white text-purple-600",
        onClick: ($event) => onClickEndDeposit()
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/income" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> 💰 입금 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-center text-lg font-bold cursor-pointer" }, " 💰 입금 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/expense" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-300 to-orange-400 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> 💸 출금 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-300 to-orange-400 text-white text-center text-lg font-bold cursor-pointer" }, " 💸 출금 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-8 rounded-2xl shadow-md p-4 bg-white border"><p class="text-base font-semibold text-gray-800 mb-2">🍱 오늘의 급식</p><ul class="list-disc list-inside text-gray-700 space-y-1"><!--[-->`);
      ssrRenderList(unref(meals), (meal, index2) => {
        _push(`<li><span>${ssrInterpolate(meal)}</span>`);
        if (extractAllergyNames(meal).length) {
          _push(`<div class="text-xs text-gray-500 ml-4 mt-1"> ⚠️ 알레르기 유발 식품: ${ssrInterpolate(extractAllergyNames(meal).join(", "))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-8 rounded-2xl shadow-md border">`);
      if (((_q = unref(friendToday)) == null ? void 0 : _q.result) === "FAIL") {
        _push(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer"> 오늘 함께하면 좋을 것 같은 친구는? </div>`);
      } else {
        _push(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer"> ❤️❤️ ${ssrInterpolate((_s = (_r = unref(friendToday)) == null ? void 0 : _r.data) == null ? void 0 : _s.mb_name)} ❤️❤️ </div>`);
      }
      _push(`</div><div class="mt-8 rounded-2xl shadow-md border">`);
      if (((_t = unref(hopeToday)) == null ? void 0 : _t.result) === "FAIL") {
        _push(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer"> 오늘의 운세 보기 </div>`);
      } else {
        _push(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer">${ssrInterpolate((_v = (_u = unref(hopeToday)) == null ? void 0 : _u.data) == null ? void 0 : _v.result_text)}</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Intro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeIntro = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="space-y-24">`);
  _push(ssrRenderComponent(_component_HomeIntro, null, null, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-LKW4gPPW.js.map
