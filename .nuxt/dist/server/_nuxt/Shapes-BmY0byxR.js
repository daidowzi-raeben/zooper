import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-8 flex items-center justify-center flex-col" }, _attrs))}><div class="flex w-full items-center gap-4"><div class="flex flex-col items-center gap-3"><div class="w-0 h-0 border-x-[30px] border-x-transparent border-b-[50px] border-b-gray-800 dark:border-b-white"></div><p class="text-xs font-semibold text-gray-500">Triangle</p></div><div class="flex flex-col items-center gap-3"><div class="relative w-0 h-0 my-[17.5px] mx-0 border-x-[35px] border-x-transparent border-b-[24.5px] border-b-red-500 rotate-[35deg] before:content-[&#39;&#39;] before:absolute before:w-0 before:h-0 before:border-b-[28px] before:border-b-red-500 before:border-x-[10.5px] before:border-x-transparent before:top-[-15.75px] before:left-[-22.75px] before:rotate-[-35deg] after:content-[&#39;&#39;] after:absolute after:w-0 after:h-0 after:border-x-[35px] after:border-b-[24.5px] after:border-b-red-500 after:border-x-transparent after:top-[1.05px] after:left-[-36.75px] after:rotate-[-70deg]"></div><p class="text-xs font-semibold text-gray-500">Star</p></div><div class="flex flex-col items-center gap-3"><div class="w-0 h-0 border-x-[20px] border-x-transparent border-y-[25px] border-y-indigo-500"></div><p class="text-xs font-semibold text-gray-500">Hourglass</p></div><div class="flex flex-col items-center gap-3"><div class="w-20 h-12 bg-teal-500 -skew-x-[16deg]"></div><p class="text-xs font-semibold text-gray-500">Parallelogram</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Shapes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Shapes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Shapes as default
};
//# sourceMappingURL=Shapes-BmY0byxR.js.map
