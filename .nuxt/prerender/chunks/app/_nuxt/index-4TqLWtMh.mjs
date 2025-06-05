import { _ as __nuxt_component_0 } from './Button-DRBuhPYJ.mjs';
import { mergeProps, ref, resolveComponent, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { _ as _export_sfc, d as useSeoMeta } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import './Icon-DV0qDH3E.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
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
    ref(null);
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="space-y-4"><div class="flex justify-between items-center"><p class="text-lg font-semibold text-gray-700">${ssrInterpolate((_a = unref(student)) == null ? void 0 : _a.student_name)}\uCE5C\uAD6C, \uD658\uC601\uD569\uB2C8\uB2E4 \u{1F44B}</p><button class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"><span class="i-heroicons-arrow-right-on-rectangle w-4 h-4"></span> \uB85C\uADF8\uC544\uC6C3 </button></div><div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">\uB0B4 \uC794\uC561</p><p class="text-2xl font-bold">`);
      if (unref(isMoney)) {
        _push(`<span> \u{1F4B0} ${ssrInterpolate(Number(unref(memberPoint) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">\uB3CC\uBA69\uC774</span></span>`);
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
      _push(`<!--]--></ul></div></div>`);
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
//# sourceMappingURL=index-4TqLWtMh.mjs.map
