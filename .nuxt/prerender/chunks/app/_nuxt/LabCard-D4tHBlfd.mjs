import { _ as __nuxt_component_0 } from './Button-D_KE08Vq.mjs';
import { ref, unref, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = {
  __name: "LabCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    showUsageTab: {
      type: Boolean,
      default: true
    },
    showCreditTab: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const tab = ref("preview");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-95c436b2><h2 class="text-sm font-semibold" data-v-95c436b2>${ssrInterpolate(__props.title)}</h2><p class="text-gray-500 text-sm" data-v-95c436b2>${ssrInterpolate(__props.description)}</p><div class="mt-2 border dark:border-white/10 rounded-lg shadow-sm overflow-hidden" data-v-95c436b2><div class="p-2 flex items-center gap-2 border-b dark:border-white/10" data-v-95c436b2><div class="flex items-center w-full" data-v-95c436b2>`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => tab.value = "preview",
        label: "Preview",
        variant: "soft",
        color: "white",
        size: "xs",
        class: ["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300", { "active-tab": unref(tab) === "preview" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        onClick: ($event) => tab.value = "code",
        label: "Code",
        variant: "soft",
        color: "white",
        size: "xs",
        class: ["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300", { "active-tab": unref(tab) === "code" }]
      }, null, _parent));
      if (__props.showUsageTab) {
        _push(ssrRenderComponent(_component_UButton, {
          onClick: ($event) => tab.value = "usage",
          label: "Usage",
          variant: "soft",
          color: "white",
          size: "xs",
          class: ["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300", { "active-tab": unref(tab) === "usage" }]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showCreditTab) {
        _push(ssrRenderComponent(_component_UButton, {
          onClick: ($event) => tab.value = "credit",
          label: "Credits",
          variant: "soft",
          color: "white",
          size: "xs",
          class: ["relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300", { "active-tab": unref(tab) === "credit" }]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div data-v-95c436b2>`);
      if (unref(tab) === "preview") {
        _push(`<div class="bg-gray-100 dark:bg-gray-900 overflow-hidden" data-v-95c436b2>`);
        ssrRenderSlot(_ctx.$slots, "preview", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "code") {
        ssrRenderSlot(_ctx.$slots, "codebase", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "usage") {
        ssrRenderSlot(_ctx.$slots, "usage", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "credit") {
        ssrRenderSlot(_ctx.$slots, "credit", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/LabCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LabCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95c436b2"]]);

export { LabCard as default };
//# sourceMappingURL=LabCard-D4tHBlfd.mjs.map
