import { _ as __nuxt_component_0 } from "./Button-D_KE08Vq.js";
import { ref, resolveComponent, unref, withCtx, createVNode, useSSRContext, mergeProps } from "vue";
import { d as useSeoMeta, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./api-DCys9W92.js";
import "./Icon-C6dZ5_mg.js";
import "tailwind-merge";
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
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "vue-use-fixed-header";
import "axios";
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="space-y-4"><div class="flex justify-between items-center"><p class="text-lg font-semibold text-gray-700">${ssrInterpolate((_a = unref(student)) == null ? void 0 : _a.student_name)}친구, 환영합니다 👋</p><button class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"><span class="i-heroicons-arrow-right-on-rectangle w-4 h-4"></span> 로그아웃 </button></div><div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">내 잔액</p><p class="text-2xl font-bold">`);
      if (unref(isMoney)) {
        _push(`<span> 💰 ${ssrInterpolate(Number(unref(memberPoint) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">돌맹이</span></span>`);
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
      _push(ssrRenderComponent(_component_router_link, { to: "/tax" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> 💼 세금 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center text-lg font-bold cursor-pointer" }, " 💼 세금 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/penalty" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer"${_scopeId}> ⚠️ 벌금 </div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-2xl shadow-md p-4 bg-gradient-to-r from-blue-300 to-indigo-400 text-white text-center text-lg font-bold cursor-pointer" }, " ⚠️ 벌금 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-10"><div class=""><h1 class="text-2xl font-bold mb-4">상점 아이템 목록</h1>`);
      if (unref(storeItems).length > 0) {
        _push(`<div><ul><!--[-->`);
        ssrRenderList(unref(storeItems), (item, index2) => {
          _push(`<li class="mb-4 p-4 border rounded-lg"><div class="text-lg font-semibold">${ssrInterpolate(item.item_name)}</div><div class="text-sm text-gray-600">${ssrInterpolate(item.item_desc)}</div><div class="text-right font-bold text-blue-600">${ssrInterpolate(item.price.toLocaleString())} 포인트 </div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div class="text-gray-500">불러올 아이템이 없습니다.</div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-xfcbdNPs.js.map
