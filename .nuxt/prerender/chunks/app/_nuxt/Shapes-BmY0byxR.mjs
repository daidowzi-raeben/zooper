import { mergeProps, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
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

export { Shapes as default };
//# sourceMappingURL=Shapes-BmY0byxR.mjs.map
