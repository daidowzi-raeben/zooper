import { _ as _sfc_main$2 } from "./Header-CdNQX9Ia.js";
import { a as __nuxt_component_0, d as useSeoMeta } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { u as useAsyncData, q as queryContent } from "./query-G9gGTbpf.js";
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
import "./ssr-DXvxiYnq.js";
import "./preview-B9wjgsAc.js";
import "cookie-es";
import "destr";
const _sfc_main$1 = {
  __name: "ArticleCard",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const getReadableDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.article._path,
        class: "group"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article${_scopeId}><time class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5" datetime="2022-09-05"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"${_scopeId}><span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"${_scopeId}></span></span> ${ssrInterpolate(getReadableDate(__props.article.published))}</time><h2 class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.article.title)}</h2><p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(__props.article.description)}</p></article>`);
          } else {
            return [
              createVNode("article", null, [
                createVNode("time", {
                  class: "relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5",
                  datetime: "2022-09-05"
                }, [
                  createVNode("span", {
                    class: "absolute inset-y-0 left-0 flex items-center",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span", { class: "h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" })
                  ]),
                  createTextVNode(" " + toDisplayString(getReadableDate(__props.article.published)), 1)
                ]),
                createVNode("h2", { class: "text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600" }, toDisplayString(__props.article.title), 1),
                createVNode("p", { class: "relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(__props.article.description), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const description = "All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Articles | Fayaz Ahmed",
      description
    });
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "all-articles",
      () => queryContent("/articles").sort({ published: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$2;
      const _component_AppArticleCard = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-16",
        title: "Articles",
        description
      }, null, _parent));
      _push(`<ul class="space-y-16"><!--[-->`);
      ssrRenderList(unref(articles), (article, id) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_AppArticleCard, { article }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BLeF9jDO.js.map
