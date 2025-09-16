import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Button-qjGOVKpX.mjs';
import { _ as __nuxt_component_1, a as apiPost, b as apiPoint } from './api-D3jlul4Q.mjs';
import { mergeProps, ref, watch, resolveComponent, unref, isRef, withCtx, createVNode, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { _ as _export_sfc, d as useSeoMeta, e as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/h3/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/devalue/index.js';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/destr/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/scule/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/klona/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ohash/dist/index.mjs';
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
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@unhead/shared/dist/index.mjs';
import './Icon-DgNtEB-L.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/axios/index.js';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-use-fixed-header/dist/index.js';

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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
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
      const ok = confirm(
        `\uC801\uAE08 \uAE08\uC561 ${n.toLocaleString()}\uC6D0\uC744 \uC608\uCE58\uD569\uB2C8\uB2E4.
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
          interest_rate: (_k = dispot.value) == null ? void 0 : _k.deposit_interest,
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
      const _component_UButton = __nuxt_component_0;
      const _component_UInput = __nuxt_component_1;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center"><img${ssrRenderAttr("src", unref(logo))} width="150" style="${ssrRenderStyle({ "position": "absolute", "margin-top": "-61px" })}"></div><div class="space-y-4"><div class="flex justify-between items-center"><p class="text-lg font-semibold text-gray-700">${ssrInterpolate((_a = unref(student)) == null ? void 0 : _a.student_name)}\uCE5C\uAD6C, \uD658\uC601\uD569\uB2C8\uB2E4 \u{1F44B}</p><button class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"><span class="i-heroicons-arrow-right-on-rectangle w-4 h-4"></span> \uB85C\uADF8\uC544\uC6C3 </button></div><div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">\uB0B4 \uC794\uC561</p><p class="text-2xl font-bold">`);
      if (unref(isMoney)) {
        _push(`<span> \u{1F4B0} ${ssrInterpolate(Number(unref(memberPoint) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">${ssrInterpolate((_b = unref(dispot)) == null ? void 0 : _b.currency_name)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isMoney)) {
        _push(`<span> \uB098\uC758 \uC794\uC561 \uD655\uC778\uD558\uAE30 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "\uC774\uCCB4\uD558\uAE30",
        color: "white",
        class: "text-blue-800 bg-white bg-opacity-90 hover:bg-opacity-100",
        onClick: ($event) => _ctx.$router.push("/transfer")
      }, null, _parent));
      _push(`</div>`);
      if (!((_c = unref(deposit)) == null ? void 0 : _c.amount_interest)) {
        _push(`<div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col md:flex-row md:justify-between md:items-center gap-3"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">\uB2E8\uAE30 \uC801\uAE08</p><p class="text-2xl font-bold">${ssrInterpolate((_d = unref(dispot)) == null ? void 0 : _d.deposit_cycle)}\uC8FC \uC801\uAE08\uD1B5\uC7A5 \uB9CC\uB4E4\uAE30</p><p class="text-xs opacity-90 mt-1">${ssrInterpolate((_e = unref(dispot)) == null ? void 0 : _e.deposit_interest)}% \uC774\uC790\uBC1B\uAE30 \xB7 ${ssrInterpolate(unref(maturityDate))}\uC77C \uB9CC\uAE30 \xB7 \uC911\uB3C4\uD574\uC9C0 \uBD88\uAC00 \xB7 \uCD5C\uC18C ${ssrInterpolate((_f = unref(dispot)) == null ? void 0 : _f.deposit_min)} ~ \uCD5C\uB300 ${ssrInterpolate((_g = unref(dispot)) == null ? void 0 : _g.deposit_max)}</p></div>`);
        if (!((_h = unref(deposit)) == null ? void 0 : _h.amount_interest)) {
          _push(`<div class="flex items-center gap-2 w-full md:w-auto">`);
          _push(ssrRenderComponent(_component_UInput, {
            modelValue: unref(amount),
            "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
            type: "tel",
            inputmode: "numeric",
            placeholder: "\uC5BC\uB9C8\uB97C \uC801\uAE08\uD560\uAE4C\uC694? (\uC6D0)",
            ui: { base: "text-blue-900" },
            class: "bg-white/90 text-blue-900 rounded-xl w-full md:w-56",
            onKeyup: createSavings
          }, null, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            label: "\uB9CC\uB4E4\uAE30",
            color: "secondary",
            class: "rounded-xl",
            loading: unref(submitting),
            onClick: createSavings
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div>\uC608\uC0C1\uC774\uC790 : ${ssrInterpolate(unref(dispotTotal))} ${ssrInterpolate((_i = unref(dispot)) == null ? void 0 : _i.currency_name)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex justify-between items-center">`);
      if ((_j = unref(deposit)) == null ? void 0 : _j.deposit_exists) {
        _push(`<div><p class="text-sm opacity-80">\uB0B4 \uC801\uAE08\uD1B5\uC7A5</p><p class="text-xl font-bold">${ssrInterpolate(Number((_k = unref(deposit)) == null ? void 0 : _k.amount).toLocaleString())}<span class="text-sm font-normal">(\uC6D0\uAE08)</span> + ${ssrInterpolate(Number((_l = unref(deposit)) == null ? void 0 : _l.amount_interest).toLocaleString())}<span class="text-sm font-normal">(\uC774\uC790)</span> = ${ssrInterpolate(Number(((_m = unref(deposit)) == null ? void 0 : _m.amount) + ((_n = unref(deposit)) == null ? void 0 : _n.amount_interest)).toLocaleString())} <span class="text-sm font-normal">${ssrInterpolate((_o = unref(dispot)) == null ? void 0 : _o.currency_name)}</span></p><p class="text-sm mt-1">\uB9CC\uAE30\uC77C : ${ssrInterpolate(formatDate((_p = unref(deposit)) == null ? void 0 : _p.end_date))}</p></div>`);
      } else {
        _push(`<div><p class="text-sm opacity-80">\uB0B4 \uC801\uAE08\uD1B5\uC7A5</p><p class="text-lg font-bold">\uC544\uC9C1 \uAC1C\uC124\uB41C \uC801\uAE08\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</p></div>`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        label: "\uC6D0\uAE08+\uC774\uC790 \uBC1B\uAE30",
        disabled: !unref(isEndDeposit),
        color: "secondary",
        class: "rounded-xl bg-white text-purple-600",
        onClick: ($event) => onClickEndDeposit()
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/income" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> \u{1F4B0} \uC785\uAE08 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-center text-lg font-bold cursor-pointer" }, " \u{1F4B0} \uC785\uAE08 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/expense" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-300 to-orange-400 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> \u{1F4B8} \uCD9C\uAE08 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-300 to-orange-400 text-white text-center text-lg font-bold cursor-pointer" }, " \u{1F4B8} \uCD9C\uAE08 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-8 rounded-2xl shadow-md p-4 bg-white border"><p class="text-base font-semibold text-gray-800 mb-2">\u{1F371} \uC624\uB298\uC758 \uAE09\uC2DD</p><ul class="list-disc list-inside text-gray-700 space-y-1"><!--[-->`);
      ssrRenderList(unref(meals), (meal, index2) => {
        _push(`<li><span>${ssrInterpolate(meal)}</span>`);
        if (extractAllergyNames(meal).length) {
          _push(`<div class="text-xs text-gray-500 ml-4 mt-1"> \u26A0\uFE0F \uC54C\uB808\uB974\uAE30 \uC720\uBC1C \uC2DD\uD488: ${ssrInterpolate(extractAllergyNames(meal).join(", "))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-8 rounded-2xl shadow-md border">`);
      if (((_q = unref(friendToday)) == null ? void 0 : _q.result) === "FAIL") {
        _push(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer"> \uC624\uB298 \uD568\uAED8\uD558\uBA74 \uC88B\uC744 \uAC83 \uAC19\uC740 \uCE5C\uAD6C\uB294? </div>`);
      } else {
        _push(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer"> \u2764\uFE0F\u2764\uFE0F ${ssrInterpolate((_s = (_r = unref(friendToday)) == null ? void 0 : _r.data) == null ? void 0 : _s.mb_name)} \u2764\uFE0F\u2764\uFE0F </div>`);
      }
      _push(`</div><div class="mt-8 rounded-2xl shadow-md border">`);
      if (((_t = unref(hopeToday)) == null ? void 0 : _t.result) === "FAIL") {
        _push(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer"> \uC624\uB298\uC758 \uC6B4\uC138 \uBCF4\uAE30 </div>`);
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

export { index as default };
//# sourceMappingURL=index-cC57KgJ9.mjs.map
