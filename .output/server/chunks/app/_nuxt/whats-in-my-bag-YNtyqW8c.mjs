import { _ as _sfc_main$3 } from './Header-CdNQX9Ia.mjs';
import { withAsyncContext, mergeProps, defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { d as useSeoMeta, a as __nuxt_component_0$2 } from '../server.mjs';
import { u as useAsyncData, q as queryContent } from './query-G9gGTbpf.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-use-fixed-header';
import './preview-B9wjgsAc.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UsesHeader",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(_attrs)}><div class="relative after:-z-10 after:block after:h-[2px] after:absolute after:top-1/2 after:transform after:bg-gray-100 dark:after:bg-white/10 after:w-full after:left-0 after:right-0"><span class="font-medium text-sm text-gray-600 dark:text-gray-500 bg-gray-50 dark:bg-black pr-4">${ssrInterpolate(__props.title)}</span></div></li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/UsesHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UsesItem",
  __ssrInlineRender: true,
  props: {
    item: Object,
    required: true
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.item.url,
        class: "group",
        target: "_blank",
        external: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.item.name)}</p><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(__props.item.description)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600" }, toDisplayString(__props.item.name), 1),
              createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__props.item.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/UsesItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const description = "Software I use, gadgets I love, and other things I recommend. Here\u2019s a big list of all of my favorite stuff.";
const _sfc_main = {
  __name: "whats-in-my-bag",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Things I use | Fayaz Ahmed",
      description
    });
    const { data: items } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "uses",
      () => queryContent("/uses").find()
    )), __temp = await __temp, __restore(), __temp);
    const hardware = items.value.filter((item) => item.category === "hardware");
    const software = items.value.filter((item) => item.category === "software");
    const desk = items.value.filter((item) => item.category === "desk");
    const other = items.value.filter((item) => item.category === "others");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_AppUsesHeader = _sfc_main$2;
      const _component_AppUsesItem = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-12",
        title: "What's in my bag?",
        description
      }, null, _parent));
      _push(`<div class="space-y-24"><ul class="space-y-8">`);
      _push(ssrRenderComponent(_component_AppUsesHeader, { title: "Hardware" }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(hardware), (item, id) => {
        _push(ssrRenderComponent(_component_AppUsesItem, {
          key: id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul><ul class="space-y-8">`);
      _push(ssrRenderComponent(_component_AppUsesHeader, { title: "Software" }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(software), (item, id) => {
        _push(ssrRenderComponent(_component_AppUsesItem, {
          key: id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul><ul class="space-y-8">`);
      _push(ssrRenderComponent(_component_AppUsesHeader, { title: "Desk" }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(desk), (item, id) => {
        _push(ssrRenderComponent(_component_AppUsesItem, {
          key: id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul><ul class="space-y-8">`);
      _push(ssrRenderComponent(_component_AppUsesHeader, { title: "Other" }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(other), (item, id) => {
        _push(ssrRenderComponent(_component_AppUsesItem, {
          key: id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/whats-in-my-bag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=whats-in-my-bag-YNtyqW8c.mjs.map
