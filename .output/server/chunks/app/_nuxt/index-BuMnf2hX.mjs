import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { h as hostUrl, _ as __nuxt_component_2, a as apiPost, b as apiPoint } from './api-DKaA_XRh.mjs';
import { _ as __nuxt_component_0$1 } from './Button-BkeWMuC1.mjs';
import { _ as __nuxt_component_0$2 } from './Modal-BsfxzNKR.mjs';
import { _ as _export_sfc, d as useSeoMeta, f as useRouter, e as __nuxt_component_0$3 } from '../server.mjs';
import { mergeProps, ref, watch, resolveComponent, unref, isRef, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './Icon-DWHer77Q.mjs';
import 'tailwind-merge';
import 'axios';
import './disposables-ze0J46BC.mjs';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const logo = "" + buildAssetsURL("sunny_logo.B3qlKvYv.png");
const allergyMap = {
  1: "\uB09C\uB958 (\uACC4\uB780 \uB4F1)",
  2: "\uC6B0\uC720",
  3: "\uBA54\uBC00",
  4: "\uB545\uCF69",
  5: "\uB300\uB450 (\uCF69)",
  6: "\uBC00",
  7: "\uACE0\uB4F1\uC5B4",
  8: "\uAC8C",
  9: "\uC0C8\uC6B0",
  10: "\uB3FC\uC9C0\uACE0\uAE30",
  11: "\uBCF5\uC22D\uC544",
  12: "\uD1A0\uB9C8\uD1A0",
  13: "\uC544\uD669\uC0B0\uB958",
  14: "\uD638\uB450",
  15: "\uB2ED\uACE0\uAE30",
  16: "\uC1E0\uACE0\uAE30",
  17: "\uC624\uC9D5\uC5B4",
  18: "\uC870\uAC1C\uB958 (\uAD74, \uC804\uBCF5, \uD64D\uD569 \uB4F1)"
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
      title: "Jelly School-OS",
      description: "\uC824\uB9AC\uC5D0\uC11C \uACBD\uC81C,\uD654\uD3D0 \uACBD\uD5D8\uC744 \uB204\uB824\uBCF4\uC138\uC694."
    });
    const isMoney = ref(false);
    const meals = ref([]);
    const points = ref([]);
    const page = ref(1);
    const hasMore = ref(true);
    const isLoading = ref(false);
    const fetchPoints = async () => {
      var _a;
      if (isLoading.value || !hasMore.value)
        return;
      isLoading.value = true;
      try {
        const res = await apiPost("member.php", {
          mode: "pointList",
          idnt_code: ((_a = student.value) == null ? void 0 : _a.idnt_code) || sessionStorage.getItem("idnt_code"),
          page: page.value
        });
        if (res.result === "SUCCESS" && Array.isArray(res.data)) {
          if (res.data.length < 10) {
            hasMore.value = false;
          }
          points.value = [...points.value, ...res.data];
          page.value++;
        } else {
          hasMore.value = false;
        }
      } catch (e) {
        console.error(e);
        hasMore.value = false;
      } finally {
        isLoading.value = false;
      }
    };
    const extractAllergyNames = (text) => {
      const match = text.match(/\(([\d.,\s]+)\)/);
      if (!match)
        return [];
      return match[1].split(/[.,\s]+/).map(Number).filter((n) => allergyMap[n]).map((n) => allergyMap[n]);
    };
    const isOpenHopeModal = ref(false);
    const hopeToday = ref({ result: "FAIL" });
    const isOpenFriendModal = ref(false);
    const friendToday = ref({ result: "FAIL" });
    const onClickEndDeposit = async () => {
      if (confirm("\uC801\uAE08\uC744 \uB9CC\uAE30\uD574\uC9C0\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
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
        console.log("\uC0AD\uC81C \uCDE8\uC18C");
      }
    };
    useRouter();
    const amount = ref("");
    const submitting = ref(false);
    function parseAmount(raw) {
      const n = Number(String(raw != null ? raw : "").replace(/[^\d]/g, ""));
      return Number.isFinite(n) ? n : 0;
    }
    async function createSavings() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const n = parseAmount(amount.value);
      if (!n || n < 1) {
        alert("\uC801\uAE08 \uAE08\uC561\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
        return;
      }
      if (((_a = dispot.value) == null ? void 0 : _a.deposit_min) > n) {
        alert(`${(_b = dispot.value) == null ? void 0 : _b.deposit_min} ${(_c = dispot.value) == null ? void 0 : _c.currency_name} ~ ${(_d = dispot.value) == null ? void 0 : _d.deposit_max} ${(_e = dispot.value) == null ? void 0 : _e.currency_name} \uC758 \uAE08\uC561\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.`);
        return;
      }
      if (((_f = dispot.value) == null ? void 0 : _f.deposit_max) < n) {
        alert(`${(_g = dispot.value) == null ? void 0 : _g.deposit_min} ${(_h = dispot.value) == null ? void 0 : _h.currency_name} ~ ${(_i = dispot.value) == null ? void 0 : _i.deposit_max} ${(_j = dispot.value) == null ? void 0 : _j.currency_name} \uC758 \uAE08\uC561\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.`);
        return;
      }
      if (memberPoint.value < n) {
        alert("\uAE08\uC561\uC774 \uBD80\uC871\uD569\uB2C8\uB2E4.");
        return;
      }
      if (submitting.value)
        return;
      const ok = confirm(
        `\uC801\uAE08 \uAE08\uC561 ${n.toLocaleString()} ${(_k = dispot.value) == null ? void 0 : _k.currency_name} \uC608\uCE58\uD558\uAE30.
\uB9CC\uAE30\uC77C ${maturityDate.value} \uC804\uC5D0\uB294 \uCD9C\uAE08\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC9C4\uD589\uD560\uAE4C\uC694?`
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
          deposit_name: "\uC801\uAE08\uD1B5\uC7A5",
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      const _component_UInput = __nuxt_component_2;
      const _component_UButton = __nuxt_component_0$1;
      const _component_router_link = resolveComponent("router-link");
      const _component_UModal = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-12 space-y-10" }, _attrs))} data-v-eb2b8226><div class="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-[40px] shadow-2xl shadow-blue-200 overflow-hidden transition-all hover:scale-[1.01]" data-v-eb2b8226><div class="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" data-v-eb2b8226></div><div class="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl" data-v-eb2b8226></div><div class="relative z-10 p-8 flex flex-col items-center" data-v-eb2b8226><div class="mb-6 relative group" data-v-eb2b8226><div class="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity" data-v-eb2b8226></div><img${ssrRenderAttr("src", ((_a = unref(dispot)) == null ? void 0 : _a.qr_bg) ? unref(dispot).qr_bg.startsWith("http") ? unref(dispot).qr_bg : unref(hostUrl) + unref(dispot).qr_bg : unref(logo))} alt="Class Logo" class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl bg-white p-1 relative z-10" data-v-eb2b8226></div><div class="text-center space-y-1 mb-8" data-v-eb2b8226><p class="text-white/60 text-[10px] font-black tracking-[0.3em] uppercase" data-v-eb2b8226>${ssrInterpolate(((_b = unref(dispot)) == null ? void 0 : _b.mb_school) || "JellySchool")} ${ssrInterpolate((_c = unref(dispot)) == null ? void 0 : _c.mb_grade)}-${ssrInterpolate((_d = unref(dispot)) == null ? void 0 : _d.mb_class)}</p><h2 class="text-white text-3xl font-black tracking-tight" data-v-eb2b8226>${ssrInterpolate((_e = unref(student)) == null ? void 0 : _e.student_name)}<span class="text-blue-200 text-xl ml-1" data-v-eb2b8226>\uCE5C\uAD6C</span></h2></div><div class="cursor-pointer group bg-white/10 backdrop-blur-xl rounded-[32px] p-8 w-full max-w-sm border border-white/20 shadow-inner flex flex-col items-center transition-all hover:bg-white/15 active:scale-95" data-v-eb2b8226><p class="text-white/60 text-[9px] font-bold uppercase tracking-[0.2em] mb-3" data-v-eb2b8226>\uB0B4 ${ssrInterpolate(((_f = unref(dispot)) == null ? void 0 : _f.currency_name) || "\uC9C0\uAC11")} \uCD1D \uC794\uC561</p>`);
      if (unref(isMoney)) {
        _push(`<div class="flex items-baseline gap-2 transform transition-all" data-v-eb2b8226><span class="text-white text-5xl font-black tabular-nums" data-v-eb2b8226>${ssrInterpolate(Number(unref(memberPoint) || 0).toLocaleString())}</span><span class="text-white/70 text-lg font-bold" data-v-eb2b8226>${ssrInterpolate((_g = unref(dispot)) == null ? void 0 : _g.currency_name)}</span></div>`);
      } else {
        _push(`<div class="flex items-center gap-3 py-2 opacity-80" data-v-eb2b8226><span class="i-heroicons-eye-solid w-6 h-6 text-white/50" data-v-eb2b8226></span><span class="text-white text-xl font-black" data-v-eb2b8226>\uC794\uC561 \uD655\uC778\uD558\uAE30</span></div>`);
      }
      _push(`</div></div><button class="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-all shadow-lg backdrop-blur-md" data-v-eb2b8226><span class="i-heroicons-arrow-right-on-rectangle w-5 h-5" data-v-eb2b8226></span></button></div><div class="space-y-6" data-v-eb2b8226>`);
      if (!((_h = unref(deposit)) == null ? void 0 : _h.deposit_exists)) {
        _push(`<section class="relative group" data-v-eb2b8226><div class="p-8 rounded-[40px] bg-white border border-gray-100 shadow-xl overflow-hidden" data-v-eb2b8226><div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700" data-v-eb2b8226></div><div class="relative z-10 space-y-6" data-v-eb2b8226><div class="flex justify-between items-start" data-v-eb2b8226><div class="space-y-1" data-v-eb2b8226><div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-wider" data-v-eb2b8226><span class="i-heroicons-sparkles-solid w-3 h-3" data-v-eb2b8226></span> Lucky Savings </div><h3 class="text-2xl font-black text-gray-800" data-v-eb2b8226>${ssrInterpolate(((_i = unref(dispot)) == null ? void 0 : _i.deposit_name) || ((_j = unref(dispot)) == null ? void 0 : _j.deposit_cycle) + "\uC8FC\uC57D\uC18D\uC801\uAE08 \uAC1C\uC124")}</h3><p class="text-sm text-gray-400 font-medium" data-v-eb2b8226>\uB9CC\uAE30\uC5D0 <span class="text-orange-500 font-bold" data-v-eb2b8226>${ssrInterpolate(((_k = unref(dispot)) == null ? void 0 : _k.deposit_interest) || 0)}%\uC758 \uC5C4\uCCAD\uB09C \uC774\uC790</span>\uAC00 \uAE30\uB2E4\uB824\uC694!</p></div><div class="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500" data-v-eb2b8226><span class="i-heroicons-gift-solid w-7 h-7 animate-bounce" data-v-eb2b8226></span></div></div><div class="flex flex-col sm:flex-row gap-4" data-v-eb2b8226><div class="flex-1 relative" data-v-eb2b8226>`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: unref(amount),
          "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
          placeholder: "\uC800\uAE08\uD560 \uAE08\uC561 \uC785\uB825",
          size: "xl",
          type: "number",
          "input-class": "h-16 font-black text-xl pl-12 rounded-[24px] border-2 border-gray-50 focus:border-emerald-400 bg-gray-50/50"
        }, null, _parent));
        _push(`<span class="absolute left-5 top-1/2 -translate-y-1/2 i-heroicons-banknotes-solid w-6 h-6 text-gray-300" data-v-eb2b8226></span></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          label: "\uC801\uAE08 \uAC00\uC785\uD558\uAE30",
          size: "xl",
          color: "emerald",
          class: "px-10 rounded-[24px] h-16 font-black text-lg shadow-xl shadow-emerald-100 transition-all hover:-translate-y-1 active:scale-95",
          loading: unref(submitting),
          onClick: createSavings
        }, null, _parent));
        _push(`</div><div class="flex items-center justify-between text-[11px] font-black text-gray-400 px-2 tracking-widest uppercase" data-v-eb2b8226><span class="flex items-center gap-1.5" data-v-eb2b8226><span class="i-heroicons-information-circle w-4 h-4" data-v-eb2b8226></span>\uCD5C\uC18C ${ssrInterpolate(Number(((_l = unref(dispot)) == null ? void 0 : _l.deposit_min) || 0).toLocaleString())}\uC6D0</span>`);
        if (unref(dispotTotal) > 0) {
          _push(`<span class="text-emerald-500 flex items-center gap-1.5 animate-pulse" data-v-eb2b8226><span class="i-heroicons-check-badge w-4 h-4" data-v-eb2b8226></span>\uC608\uC0C1 \uC774\uC790 +${ssrInterpolate(Number(unref(dispotTotal)).toLocaleString())}\uC6D0 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></section>`);
      } else {
        _push(`<section class="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-[40px] text-white shadow-2xl shadow-emerald-100" data-v-eb2b8226><div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" data-v-eb2b8226></div><div class="relative z-10" data-v-eb2b8226><div class="flex justify-between items-start mb-10" data-v-eb2b8226><div data-v-eb2b8226><h3 class="text-2xl font-black flex items-center gap-2" data-v-eb2b8226>${ssrInterpolate(((_m = unref(dispot)) == null ? void 0 : _m.deposit_name) || ((_n = unref(dispot)) == null ? void 0 : _n.deposit_cycle) + "\uC8FC \uC57D\uC18D \uC801\uAE08")} <span class="text-[10px] bg-white/20 px-3 py-1 rounded-full font-black uppercase tracking-widest backdrop-blur-sm" data-v-eb2b8226>Active</span></h3><p class="text-sm text-white/70 font-medium" data-v-eb2b8226>\uBAA9\uD45C\uB97C \uC704\uD574 \uC5F4\uC2EC\uD788 \uBAA8\uC73C\uB294 \uC911! \uB300\uB2E8\uD574\uC694 \u{1F44D}</p></div><div class="p-4 bg-white/20 rounded-2xl backdrop-blur-sm" data-v-eb2b8226><span class="i-heroicons-rocket-launch-solid w-7 h-7" data-v-eb2b8226></span></div></div><div class="grid grid-cols-2 gap-8 bg-black/10 rounded-[32px] p-8 border border-white/10 shadow-inner" data-v-eb2b8226><div class="space-y-1" data-v-eb2b8226><p class="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]" data-v-eb2b8226>\uBAA8\uC740 \uC6D0\uAE08</p><p class="text-3xl font-black tabular-nums" data-v-eb2b8226>${ssrInterpolate(Number(((_o = unref(deposit)) == null ? void 0 : _o.amount) || 0).toLocaleString())}<span class="text-sm ml-1 opacity-70" data-v-eb2b8226>${ssrInterpolate((_p = unref(dispot)) == null ? void 0 : _p.currency_name)}</span></p></div><div class="space-y-1 text-right border-l border-white/10 pl-8" data-v-eb2b8226><p class="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]" data-v-eb2b8226>\uC774\uC790 \uD61C\uD0DD</p><p class="text-3xl font-black text-yellow-300 tabular-nums" data-v-eb2b8226>+${ssrInterpolate(Number(((_q = unref(deposit)) == null ? void 0 : _q.amount_interest) || 0).toLocaleString())}<span class="text-sm ml-1 opacity-70" data-v-eb2b8226>${ssrInterpolate((_r = unref(dispot)) == null ? void 0 : _r.currency_name)}</span></p></div></div><div class="mt-8 flex flex-col sm:flex-row justify-between items-center gap-6" data-v-eb2b8226><div class="text-xs font-bold text-white/70 space-y-1" data-v-eb2b8226><p class="flex items-center gap-2" data-v-eb2b8226><span class="w-1.5 h-1.5 rounded-full bg-blue-300" data-v-eb2b8226></span>${ssrInterpolate(formatDate((_s = unref(deposit)) == null ? void 0 : _s.start_date))} \uAC00\uC785\uB428</p><p class="flex items-center gap-2 text-white" data-v-eb2b8226><span class="w-1.5 h-1.5 rounded-full bg-yellow-400" data-v-eb2b8226></span>${ssrInterpolate(formatDate((_t = unref(deposit)) == null ? void 0 : _t.end_date))} \uB9CC\uAE30 \uC120\uBB3C \uC99D\uC815</p></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          label: "\uC6D0\uAE08 + \uC774\uC790 \uBAA8\uB450 \uBC1B\uAE30",
          disabled: !unref(isEndDeposit),
          color: "white",
          size: "xl",
          class: "px-12 rounded-[24px] font-black text-emerald-600 shadow-2xl transition-transform hover:-translate-y-1 active:scale-95 disabled:opacity-40",
          onClick: ($event) => onClickEndDeposit()
        }, null, _parent));
        _push(`</div></div></section>`);
      }
      _push(`</div><div class="grid grid-cols-2 gap-4" data-v-eb2b8226>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/income",
        class: "group relative overflow-hidden bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform" data-v-eb2b8226${_scopeId}></div><div class="w-14 h-14 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-12 transition-transform" data-v-eb2b8226${_scopeId}><span class="i-heroicons-plus-circle-solid w-8 h-8" data-v-eb2b8226${_scopeId}></span></div><p class="text-xl font-black text-gray-800" data-v-eb2b8226${_scopeId}>${ssrInterpolate(((_a2 = unref(dispot)) == null ? void 0 : _a2.currency_name) || "\uC9C0\uAC11")} \uCC44\uC6B0\uAE30</p><p class="text-xs font-bold text-gray-400 uppercase tracking-widest" data-v-eb2b8226${_scopeId}>Income History</p>`);
          } else {
            return [
              createVNode("div", { class: "absolute -right-6 -bottom-6 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform" }),
              createVNode("div", { class: "w-14 h-14 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-12 transition-transform" }, [
                createVNode("span", { class: "i-heroicons-plus-circle-solid w-8 h-8" })
              ]),
              createVNode("p", { class: "text-xl font-black text-gray-800" }, toDisplayString(((_b2 = unref(dispot)) == null ? void 0 : _b2.currency_name) || "\uC9C0\uAC11") + " \uCC44\uC6B0\uAE30", 1),
              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-widest" }, "Income History")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/expense",
        class: "group relative overflow-hidden bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-50 rounded-full opacity-50 group-hover:scale-150 transition-transform" data-v-eb2b8226${_scopeId}></div><div class="w-14 h-14 bg-rose-100 rounded-3xl flex items-center justify-center text-rose-600 mb-6 group-hover:rotate-12 transition-transform" data-v-eb2b8226${_scopeId}><span class="i-heroicons-minus-circle-solid w-8 h-8" data-v-eb2b8226${_scopeId}></span></div><p class="text-xl font-black text-gray-800" data-v-eb2b8226${_scopeId}>${ssrInterpolate(((_a2 = unref(dispot)) == null ? void 0 : _a2.currency_name) || "\uC9C0\uAC11")} \uC4F0\uAE30</p><p class="text-xs font-bold text-gray-400 uppercase tracking-widest" data-v-eb2b8226${_scopeId}>Expense Plan</p>`);
          } else {
            return [
              createVNode("div", { class: "absolute -right-6 -bottom-6 w-24 h-24 bg-rose-50 rounded-full opacity-50 group-hover:scale-150 transition-transform" }),
              createVNode("div", { class: "w-14 h-14 bg-rose-100 rounded-3xl flex items-center justify-center text-rose-600 mb-6 group-hover:rotate-12 transition-transform" }, [
                createVNode("span", { class: "i-heroicons-minus-circle-solid w-8 h-8" })
              ]),
              createVNode("p", { class: "text-xl font-black text-gray-800" }, toDisplayString(((_b2 = unref(dispot)) == null ? void 0 : _b2.currency_name) || "\uC9C0\uAC11") + " \uC4F0\uAE30", 1),
              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-widest" }, "Expense Plan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><section class="space-y-6" data-v-eb2b8226><div class="flex items-center gap-2 px-2" data-v-eb2b8226><span class="i-heroicons-sparkles-solid w-5 h-5 text-yellow-500 animate-pulse" data-v-eb2b8226></span><h3 class="text-sm font-black text-gray-400 uppercase tracking-[0.3em]" data-v-eb2b8226>Today&#39;s Special News</h3></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-eb2b8226><div class="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm space-y-4" data-v-eb2b8226><div class="flex justify-between items-center" data-v-eb2b8226><span class="text-xs font-black text-gray-400 uppercase tracking-widest" data-v-eb2b8226>Lunch Menu</span><span class="i-heroicons-cake w-5 h-5 text-orange-400" data-v-eb2b8226></span></div>`);
      if ((_u = unref(meals)) == null ? void 0 : _u.length) {
        _push(`<ul class="space-y-2" data-v-eb2b8226><!--[-->`);
        ssrRenderList(unref(meals), (meal, index2) => {
          _push(`<li class="text-sm font-bold text-gray-700 flex flex-col" data-v-eb2b8226>${ssrInterpolate(meal)} `);
          if (extractAllergyNames(meal).length) {
            _push(`<span class="text-[9px] text-red-400 mt-0.5 font-medium" data-v-eb2b8226>\u26A0\uFE0F \uC54C\uB808\uB974\uAE30 \uC8FC\uC758: ${ssrInterpolate(extractAllergyNames(meal).join(", "))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<p class="text-sm text-gray-300 font-bold py-4" data-v-eb2b8226>\uC2DD\uB2E8 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>`);
      }
      _push(`</div><div class="${ssrRenderClass([
        "p-6 rounded-[32px] border shadow-sm transition-all cursor-pointer flex flex-col justify-between h-full",
        ((_v = unref(friendToday)) == null ? void 0 : _v.result) === "FAIL" ? "bg-gray-50 border-gray-100 hover:bg-blue-50" : "bg-blue-500 border-blue-400 text-white shadow-blue-100"
      ])}" data-v-eb2b8226><div class="flex justify-between items-center" data-v-eb2b8226><span class="${ssrRenderClass(["text-[10px] font-black uppercase tracking-widest", ((_w = unref(friendToday)) == null ? void 0 : _w.result) === "FAIL" ? "text-gray-400" : "text-blue-200"])}" data-v-eb2b8226>Today&#39;s Friend</span><span class="${ssrRenderClass(["i-heroicons-sparkles-solid w-5 h-5", ((_x = unref(friendToday)) == null ? void 0 : _x.result) === "FAIL" ? "text-gray-200" : ((_z = (_y = unref(friendToday)) == null ? void 0 : _y.data) == null ? void 0 : _z.is_soulmate) ? "text-yellow-300 animate-pulse" : "text-white animate-ping"])}" data-v-eb2b8226></span></div><div class="py-4" data-v-eb2b8226>`);
      if (((_A = unref(friendToday)) == null ? void 0 : _A.result) === "FAIL") {
        _push(`<p class="text-base font-black text-gray-400" data-v-eb2b8226>\uC624\uB298\uC758 \uB2E8\uC9DD\uC744<br data-v-eb2b8226>\uD655\uC778\uD574\uBCF4\uC138\uC694!</p>`);
      } else {
        _push(`<div class="space-y-1" data-v-eb2b8226><p class="text-xs font-bold opacity-80" data-v-eb2b8226>\uC624\uB298 \uCD5C\uACE0\uC758 \uD30C\uD2B8\uB108\uB294</p><p class="text-2xl font-black" data-v-eb2b8226>${ssrInterpolate((_C = (_B = unref(friendToday)) == null ? void 0 : _B.data) == null ? void 0 : _C.mb_name)}</p></div>`);
      }
      _push(`</div>`);
      if (((_D = unref(friendToday)) == null ? void 0 : _D.result) === "FAIL") {
        _push(`<div class="text-xs font-bold text-blue-500 flex items-center gap-1" data-v-eb2b8226>\uD0ED\uD558\uC5EC \uD655\uC778 <span class="i-heroicons-chevron-right w-3 h-3" data-v-eb2b8226></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([
        "p-6 rounded-[32px] border shadow-sm transition-all cursor-pointer flex flex-col justify-between h-full",
        ((_E = unref(hopeToday)) == null ? void 0 : _E.result) === "FAIL" ? "bg-gray-50 border-gray-100 hover:bg-purple-50" : "bg-purple-600 border-purple-400 text-white shadow-purple-100"
      ])}" data-v-eb2b8226><div class="flex justify-between items-center" data-v-eb2b8226><span class="${ssrRenderClass(["text-[10px] font-black uppercase tracking-widest", ((_F = unref(hopeToday)) == null ? void 0 : _F.result) === "FAIL" ? "text-gray-400" : "text-purple-200"])}" data-v-eb2b8226>Today&#39;s Fortune</span><span class="${ssrRenderClass(["i-heroicons-moon-solid w-5 h-5", ((_G = unref(hopeToday)) == null ? void 0 : _G.result) === "FAIL" ? "text-gray-200" : "text-yellow-300 animate-pulse"])}" data-v-eb2b8226></span></div><div class="py-4" data-v-eb2b8226>`);
      if (((_H = unref(hopeToday)) == null ? void 0 : _H.result) === "FAIL") {
        _push(`<p class="text-base font-black text-gray-400" data-v-eb2b8226>\uC624\uB298\uC758 \uC6B4\uC138\uB294<br data-v-eb2b8226>\uACFC\uC5F0 \uC5B4\uB5A8\uAE4C\uC694?</p>`);
      } else {
        _push(`<p class="text-sm font-bold leading-relaxed line-clamp-3" data-v-eb2b8226>${ssrInterpolate((_J = (_I = unref(hopeToday)) == null ? void 0 : _I.data) == null ? void 0 : _J.result_text)}</p>`);
      }
      _push(`</div>`);
      if (((_K = unref(hopeToday)) == null ? void 0 : _K.result) === "FAIL") {
        _push(`<div class="text-xs font-bold text-purple-500 flex items-center gap-1" data-v-eb2b8226>\uD0ED\uD558\uC5EC \uD655\uC778 <span class="i-heroicons-chevron-right w-3 h-3" data-v-eb2b8226></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section data-v-eb2b8226><div class="flex items-center justify-between mb-4 px-3" data-v-eb2b8226><h3 class="text-xs font-black text-gray-400 flex items-center gap-2 uppercase tracking-[0.3em]" data-v-eb2b8226><span class="i-heroicons-list-bullet-solid w-5 h-5 text-blue-500" data-v-eb2b8226></span> Realtime History </h3></div><div class="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50/50" data-v-eb2b8226>`);
      if (((_L = unref(points)) == null ? void 0 : _L.length) > 0) {
        _push(`<div data-v-eb2b8226><!--[-->`);
        ssrRenderList(unref(points), (item) => {
          _push(`<div class="flex items-center justify-between p-8 hover:bg-gray-50/50 transition-all group" data-v-eb2b8226><div class="flex items-center gap-5" data-v-eb2b8226><div class="${ssrRenderClass([
            "w-14 h-14 rounded-3xl flex items-center justify-center font-black transition-all group-hover:scale-110",
            item.point_type === "save" ? "bg-blue-50 text-blue-600" : "bg-rose-50 text-rose-600"
          ])}" data-v-eb2b8226>`);
          if (item.point_type === "save") {
            _push(`<span class="i-heroicons-plus-circle-solid w-8 h-8" data-v-eb2b8226></span>`);
          } else {
            _push(`<span class="i-heroicons-minus-circle-solid w-8 h-8" data-v-eb2b8226></span>`);
          }
          _push(`</div><div data-v-eb2b8226><p class="text-base font-black text-gray-800 leading-tight" data-v-eb2b8226>${ssrInterpolate(item.description)}</p><p class="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1" data-v-eb2b8226>${ssrInterpolate(item.c_datetime)}</p></div></div><div class="text-right" data-v-eb2b8226><p class="${ssrRenderClass(["text-xl font-black tabular-nums", item.point_type === "save" ? "text-blue-600" : "text-rose-600"])}" data-v-eb2b8226>${ssrInterpolate(item.point_type === "save" ? "+" : "-")}${ssrInterpolate(Number(item.point).toLocaleString())}</p><p class="text-[9px] text-gray-300 font-black uppercase tracking-widest mt-0.5" data-v-eb2b8226>${ssrInterpolate(item.point_type === "save" ? "Received" : "Paid Out")}</p></div></div>`);
        });
        _push(`<!--]-->`);
        if (unref(hasMore)) {
          _push(`<div class="p-10 text-center bg-gray-50/20" data-v-eb2b8226>`);
          _push(ssrRenderComponent(_component_UButton, {
            label: "\uACFC\uAC70 \uD65C\uB3D9 \uB0B4\uC5ED \uB354 \uBD88\uB7EC\uC624\uAE30",
            color: "gray",
            variant: "ghost",
            icon: "i-heroicons-chevron-down",
            class: "rounded-[24px] px-12 h-14 font-black transition-all hover:bg-white border border-gray-100",
            onClick: fetchPoints,
            loading: unref(isLoading)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="py-32 text-center" data-v-eb2b8226><div class="w-24 h-24 bg-gray-50 rounded-[40px] flex items-center justify-center mx-auto mb-6 border border-dashed border-gray-200 shadow-inner" data-v-eb2b8226><span class="i-heroicons-clipboard-document-check-solid w-12 h-12 text-gray-200" data-v-eb2b8226></span></div><p class="text-base font-black text-gray-300" data-v-eb2b8226>\uB0B4\uC5ED\uC774 \uAE68\uB057\uD569\uB2C8\uB2E4!</p></div>`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpenHopeModal),
        "onUpdate:modelValue": ($event) => isRef(isOpenHopeModal) ? isOpenHopeModal.value = $event : null,
        ui: { width: "max-w-md", rounded: "rounded-[40px]", padding: "p-0", background: "bg-transparent" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(`<div class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-8 text-center min-h-[400px] flex flex-col justify-center border border-white/10 shadow-2xl" data-v-eb2b8226${_scopeId}><div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.15),transparent)] animate-pulse" data-v-eb2b8226${_scopeId}></div><div class="relative z-10 space-y-8" data-v-eb2b8226${_scopeId}><div class="flex flex-col items-center" data-v-eb2b8226${_scopeId}><div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-white/20 shadow-xl animate-bounce" data-v-eb2b8226${_scopeId}><span class="i-heroicons-moon-solid w-12 h-12 text-yellow-300" data-v-eb2b8226${_scopeId}></span></div><p class="text-xs font-black text-purple-300 uppercase tracking-[0.4em] mb-2" data-v-eb2b8226${_scopeId}>Today&#39;s Prophecy</p><h3 class="text-white text-2xl font-black" data-v-eb2b8226${_scopeId}>\uC624\uB298\uC758 \uC6B4\uC138\uAC00 \uB3C4\uB2EC\uD588\uC2B5\uB2C8\uB2E4</h3></div><div class="bg-white/5 backdrop-blur-lg rounded-[32px] p-8 border border-white/10 shadow-inner" data-v-eb2b8226${_scopeId}><p class="text-lg font-bold text-white leading-relaxed animate-typing overflow-hidden whitespace-normal" data-v-eb2b8226${_scopeId}>${ssrInterpolate((_b2 = (_a2 = unref(hopeToday)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.result_text)}</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "\uD655\uC778\uD588\uC2B5\uB2C8\uB2E4",
              size: "xl",
              color: "white",
              variant: "solid",
              class: "w-full rounded-[24px] h-14 font-black text-indigo-900 shadow-xl shadow-purple-900/50 hover:bg-gray-100 transition-all active:scale-95",
              onClick: ($event) => isOpenHopeModal.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-8 text-center min-h-[400px] flex flex-col justify-center border border-white/10 shadow-2xl" }, [
                createVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.15),transparent)] animate-pulse" }),
                createVNode("div", { class: "relative z-10 space-y-8" }, [
                  createVNode("div", { class: "flex flex-col items-center" }, [
                    createVNode("div", { class: "w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-white/20 shadow-xl animate-bounce" }, [
                      createVNode("span", { class: "i-heroicons-moon-solid w-12 h-12 text-yellow-300" })
                    ]),
                    createVNode("p", { class: "text-xs font-black text-purple-300 uppercase tracking-[0.4em] mb-2" }, "Today's Prophecy"),
                    createVNode("h3", { class: "text-white text-2xl font-black" }, "\uC624\uB298\uC758 \uC6B4\uC138\uAC00 \uB3C4\uB2EC\uD588\uC2B5\uB2C8\uB2E4")
                  ]),
                  createVNode("div", { class: "bg-white/5 backdrop-blur-lg rounded-[32px] p-8 border border-white/10 shadow-inner" }, [
                    createVNode("p", { class: "text-lg font-bold text-white leading-relaxed animate-typing overflow-hidden whitespace-normal" }, toDisplayString((_d2 = (_c2 = unref(hopeToday)) == null ? void 0 : _c2.data) == null ? void 0 : _d2.result_text), 1)
                  ]),
                  createVNode(_component_UButton, {
                    label: "\uD655\uC778\uD588\uC2B5\uB2C8\uB2E4",
                    size: "xl",
                    color: "white",
                    variant: "solid",
                    class: "w-full rounded-[24px] h-14 font-black text-indigo-900 shadow-xl shadow-purple-900/50 hover:bg-gray-100 transition-all active:scale-95",
                    onClick: ($event) => isOpenHopeModal.value = false
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpenFriendModal),
        "onUpdate:modelValue": ($event) => isRef(isOpenFriendModal) ? isOpenFriendModal.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2;
          if (_push2) {
            _push2(`<div class="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[40px] shadow-2xl" data-v-eb2b8226${_scopeId}><div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" data-v-eb2b8226${_scopeId}></div><div class="absolute -left-20 -bottom-20 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl" data-v-eb2b8226${_scopeId}></div><div class="relative z-10 space-y-8 text-center pt-10" data-v-eb2b8226${_scopeId}><div class="relative inline-block mb-4" data-v-eb2b8226${_scopeId}>`);
            if ((_b2 = (_a2 = unref(friendToday)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.is_soulmate) {
              _push2(`<div class="absolute inset-0 bg-pink-500/20 blur-3xl animate-pulse rounded-full" data-v-eb2b8226${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl mx-auto animate-bounce overflow-hidden relative" data-v-eb2b8226${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:users-group-rounded-bold-duotone",
              class: "w-16 h-16 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-lg border-2 border-white animate-pulse" data-v-eb2b8226${_scopeId}><span class="i-heroicons-sparkles-solid w-5 h-5 text-white" data-v-eb2b8226${_scopeId}></span></div></div><div class="space-y-2" data-v-eb2b8226${_scopeId}><p class="text-xs font-black text-blue-200 uppercase tracking-[0.4em]" data-v-eb2b8226${_scopeId}>${ssrInterpolate(((_d2 = (_c2 = unref(friendToday)) == null ? void 0 : _c2.data) == null ? void 0 : _d2.is_soulmate) ? "Legendary Partners" : "The Chosen Partner")}</p>`);
            if ((_f2 = (_e2 = unref(friendToday)) == null ? void 0 : _e2.data) == null ? void 0 : _f2.is_soulmate) {
              _push2(`<div class="inline-flex items-center gap-2 bg-blue-500/30 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-2" data-v-eb2b8226${_scopeId}><span class="i-heroicons-hand-thumb-up-solid w-3 h-3 text-blue-300" data-v-eb2b8226${_scopeId}></span> \uC11C\uB85C \uD1B5\uD588\uB2E4! \uCC10\uCE5C \uC778\uC99D </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h3 class="text-white text-3xl font-black" data-v-eb2b8226${_scopeId}>${ssrInterpolate(((_h2 = (_g2 = unref(friendToday)) == null ? void 0 : _g2.data) == null ? void 0 : _h2.is_soulmate) ? "\uC640! \uC11C\uB85C\uAC00 \uC11C\uB85C\uB97C \uC120\uD0DD\uD588\uC5B4\uC694!" : "\uC624\uB298\uC758 \uCD5C\uACE0 \uB2E8\uC9DD\uC740?")}</h3></div><div class="bg-white/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/10 shadow-inner group" data-v-eb2b8226${_scopeId}><h2 class="text-5xl font-black text-white tracking-widest animate-typing" data-v-eb2b8226${_scopeId}>${ssrInterpolate((_j2 = (_i2 = unref(friendToday)) == null ? void 0 : _i2.data) == null ? void 0 : _j2.mb_name)}</h2><p class="text-blue-100 text-sm mt-4 font-bold opacity-60" data-v-eb2b8226${_scopeId}>\uC624\uB298\uC740 \uC774 \uCE5C\uAD6C\uC640 \uD568\uAED8\uD558\uBA74 <br data-v-eb2b8226${_scopeId}>\uB354 \uC990\uAC70\uC6B4 \uC77C\uC774 \uC0DD\uAE38 \uAC70\uC608\uC694! \u2728</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 p-10 rounded-[40px] shadow-2xl" }, [
                createVNode("div", { class: "absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" }),
                createVNode("div", { class: "absolute -left-20 -bottom-20 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl" }),
                createVNode("div", { class: "relative z-10 space-y-8 text-center pt-10" }, [
                  createVNode("div", { class: "relative inline-block mb-4" }, [
                    ((_l2 = (_k2 = unref(friendToday)) == null ? void 0 : _k2.data) == null ? void 0 : _l2.is_soulmate) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "absolute inset-0 bg-pink-500/20 blur-3xl animate-pulse rounded-full"
                    })) : createCommentVNode("", true),
                    createVNode("div", { class: "w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl mx-auto animate-bounce overflow-hidden relative" }, [
                      createVNode(_component_Icon, {
                        name: "solar:users-group-rounded-bold-duotone",
                        class: "w-16 h-16 text-white"
                      })
                    ]),
                    createVNode("div", { class: "absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-lg border-2 border-white animate-pulse" }, [
                      createVNode("span", { class: "i-heroicons-sparkles-solid w-5 h-5 text-white" })
                    ])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("p", { class: "text-xs font-black text-blue-200 uppercase tracking-[0.4em]" }, toDisplayString(((_n2 = (_m2 = unref(friendToday)) == null ? void 0 : _m2.data) == null ? void 0 : _n2.is_soulmate) ? "Legendary Partners" : "The Chosen Partner"), 1),
                    ((_p2 = (_o2 = unref(friendToday)) == null ? void 0 : _o2.data) == null ? void 0 : _p2.is_soulmate) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "inline-flex items-center gap-2 bg-blue-500/30 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-2"
                    }, [
                      createVNode("span", { class: "i-heroicons-hand-thumb-up-solid w-3 h-3 text-blue-300" }),
                      createTextVNode(" \uC11C\uB85C \uD1B5\uD588\uB2E4! \uCC10\uCE5C \uC778\uC99D ")
                    ])) : createCommentVNode("", true),
                    createVNode("h3", { class: "text-white text-3xl font-black" }, toDisplayString(((_r2 = (_q2 = unref(friendToday)) == null ? void 0 : _q2.data) == null ? void 0 : _r2.is_soulmate) ? "\uC640! \uC11C\uB85C\uAC00 \uC11C\uB85C\uB97C \uC120\uD0DD\uD588\uC5B4\uC694!" : "\uC624\uB298\uC758 \uCD5C\uACE0 \uB2E8\uC9DD\uC740?"), 1)
                  ]),
                  createVNode("div", { class: "bg-white/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/10 shadow-inner group" }, [
                    createVNode("h2", { class: "text-5xl font-black text-white tracking-widest animate-typing" }, toDisplayString((_t2 = (_s2 = unref(friendToday)) == null ? void 0 : _s2.data) == null ? void 0 : _t2.mb_name), 1),
                    createVNode("p", { class: "text-blue-100 text-sm mt-4 font-bold opacity-60" }, [
                      createTextVNode("\uC624\uB298\uC740 \uC774 \uCE5C\uAD6C\uC640 \uD568\uAED8\uD558\uBA74 "),
                      createVNode("br"),
                      createTextVNode("\uB354 \uC990\uAC70\uC6B4 \uC77C\uC774 \uC0DD\uAE38 \uAC70\uC608\uC694! \u2728")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Intro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eb2b8226"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeIntro = __nuxt_component_0;
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

export { index as default };
//# sourceMappingURL=index-BuMnf2hX.mjs.map
