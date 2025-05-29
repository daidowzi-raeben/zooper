import { _ as _sfc_main$2 } from "./Header-CdNQX9Ia.js";
import { a as __nuxt_component_0, d as useSeoMeta } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./Avatar-DXqAMQpp.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { u as useAsyncData, q as queryContent } from "./query-B-powu9W.js";
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
import "./Icon-DV0qDH3E.js";
import "./ssr-CxQlKKks.js";
import "./preview-BoiXoK7b.js";
import "cookie-es";
import "destr";
const _sfc_main$1 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UAvatar = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "flex items-end gap-4 group p-2 -m-2 rounded-lg",
        to: __props.project.url,
        target: "_blank",
        external: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-sm"${_scopeId}><h3 class="text-sm font-medium group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.project.name)}</h3><p class="text-gray-400 text-sm"${_scopeId}>${ssrInterpolate(__props.project.description)}</p></div><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: __props.project.thumbnail,
              ui: { rounded: "rounded z-10 relative" },
              size: "md",
              alt: __props.project.name
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-sm" }, [
                createVNode("h3", { class: "text-sm font-medium group-hover:text-primary-600" }, toDisplayString(__props.project.name), 1),
                createVNode("p", { class: "text-gray-400 text-sm" }, toDisplayString(__props.project.description), 1)
              ]),
              createVNode("div", { class: "flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700" }),
              createVNode(_component_UAvatar, {
                src: __props.project.thumbnail,
                ui: { rounded: "rounded z-10 relative" },
                size: "md",
                alt: __props.project.name
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const description = "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.";
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Projects | Fayaz Ahmed",
      description
    });
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "projects-all",
      () => queryContent("/projects").find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$2;
      const _component_AppProjectCard = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-12",
        title: "Projects",
        description
      }, null, _parent));
      _push(`<div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(projects), (project, id) => {
        _push(ssrRenderComponent(_component_AppProjectCard, {
          key: id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-7cLP3yBB.js.map
