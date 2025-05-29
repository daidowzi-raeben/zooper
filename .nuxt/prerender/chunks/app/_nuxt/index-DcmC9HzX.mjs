import { _ as __nuxt_component_0 } from './Button-D_KE08Vq.mjs';
import { mergeProps, ref, resolveComponent, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { _ as _export_sfc, d as useSeoMeta } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import './Icon-C6dZ5_mg.mjs';
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

const _sfc_main$1 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    const student = ref({});
    const memberPoint = ref(0);
    const storeItems = ref([]);
    ref(null);
    useSeoMeta({
      title: "Fayaz Ahmed",
      description: "I'm Fayaz, your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node."
    });
    const isMoney = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="space-y-4"><div class="flex justify-between items-center"><p class="text-lg font-semibold text-gray-700">${ssrInterpolate((_a = unref(student)) == null ? void 0 : _a.student_name)}\uCE5C\uAD6C, \uD658\uC601\uD569\uB2C8\uB2E4 \u{1F44B}</p><button class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"><span class="i-heroicons-arrow-right-on-rectangle w-4 h-4"></span> \uB85C\uADF8\uC544\uC6C3 </button></div><div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">\uB0B4 \uC794\uC561</p><p class="text-2xl font-bold">`);
      if (unref(isMoney)) {
        _push(`<span> \u{1F4B0} ${ssrInterpolate(Number(unref(memberPoint) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">\uB3CC\uB9F9\uC774</span></span>`);
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
      _push(ssrRenderComponent(_component_router_link, { to: "/tax" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> \u{1F4BC} \uC138\uAE08 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer" }, " \u{1F4BC} \uC138\uAE08 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/penalty" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> \u26A0\uFE0F \uBC8C\uAE08 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer" }, " \u26A0\uFE0F \uBC8C\uAE08 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-10"><div class=""><h1 class="text-2xl font-bold mb-4">\uC0C1\uC810 \uC544\uC774\uD15C \uBAA9\uB85D</h1>`);
      if (unref(storeItems).length > 0) {
        _push(`<div><ul><!--[-->`);
        ssrRenderList(unref(storeItems), (item, index2) => {
          _push(`<li class="mb-4 p-4 border rounded-lg"><div class="text-lg font-semibold">${ssrInterpolate(item.item_name)}</div><div class="text-sm text-gray-600">${ssrInterpolate(item.item_desc)}</div><div class="text-right font-bold text-blue-600">${ssrInterpolate(item.price.toLocaleString())} \uD3EC\uC778\uD2B8 </div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div class="text-gray-500">\uBD88\uB7EC\uC62C \uC544\uC774\uD15C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>`);
      }
      _push(`</div></div></div>`);
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
//# sourceMappingURL=index-DcmC9HzX.mjs.map
