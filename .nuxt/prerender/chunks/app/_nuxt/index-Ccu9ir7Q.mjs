import { _ as _sfc_main$2 } from './Header-CdNQX9Ia.mjs';
import { d as useSeoMeta, a as __nuxt_component_0$2 } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { u as useAsyncData, q as queryContent } from './query-B-powu9W.mjs';
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
import './ssr-CxQlKKks.mjs';
import './preview-BoiXoK7b.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/cookie-es/dist/index.mjs';

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
      const _component_NuxtLink = __nuxt_component_0$2;
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

export { _sfc_main as default };
//# sourceMappingURL=index-Ccu9ir7Q.mjs.map
