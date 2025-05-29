import { _ as _sfc_main$1 } from './Header-CdNQX9Ia.mjs';
import { _ as __nuxt_component_1 } from './Avatar-DRAAh5He.mjs';
import { d as useSeoMeta } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './Icon-C6dZ5_mg.mjs';
import 'tailwind-merge';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-use-fixed-header';

const description = "Awesome things I've found on the internet. This page is still WIP, I want to add search like bmrks.com";
const _sfc_main = {
  __name: "bookmarks",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Bookmarks | Fayaz Ahmed",
      description
    });
    const bookmarks = [
      {
        id: 1,
        label: "Adam Wathan - Tailwind CSS Best Practice Patterns",
        url: "https://www.youtube.com/watch?v=J_7_mnFSLDg"
      },
      {
        id: 2,
        label: "Dicebear Awesome avatars",
        url: "https://www.dicebear.com/"
      },
      {
        id: 3,
        label: "Circuit design stock image",
        url: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80"
      },
      {
        id: 4,
        label: "Beautiful Gradient Generator",
        url: "https://www.joshwcomeau.com/gradient-generator/"
      },
      {
        id: 5,
        label: "3D device mockups",
        url: "https://deviceframes.com/"
      },
      {
        id: 6,
        label: "Box shadow examples",
        url: "https://getcssscan.com/css-box-shadow-examples"
      },
      {
        id: 7,
        label: "Octupos Illustration",
        url: "https://refine.new/"
      },
      {
        id: 8,
        label: "Metalab agency",
        url: "https://www.metalab.com/"
      },
      {
        id: 9,
        label: "Tines - Beautiful landing page",
        url: "https://www.tines.com/product"
      },
      {
        id: 10,
        label: "SVG Spinners",
        url: "https://github.com/n3r4zzurr0/svg-spinners"
      },
      {
        id: 11,
        label: "ASCII Flow - Text based image drawing",
        url: "https://asciiflow.com/#/"
      },
      {
        id: 12,
        label: "REQRES Mock apis for testing",
        url: "https://reqres.in/"
      },
      {
        id: 13,
        label: "Haikie - SVG background generator",
        url: "https://app.haikei.app/"
      },
      {
        id: 14,
        label: "IP API",
        url: "https://ipapi.is/"
      },
      {
        id: 15,
        label: "Rakko Tools",
        url: "https://en.rakko.tools/"
      }
    ];
    function getHost(url) {
      const parsedUrl = new URL(url);
      let host = parsedUrl.host;
      if (host.startsWith("www.")) {
        host = host.substring(4);
      }
      return host;
    }
    function getThumbnail(url) {
      const host = getHost(url);
      return `https://logo.clearbit.com/${host}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_UAvatar = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-8",
        title: "Bookmarks",
        description
      }, null, _parent));
      _push(`<ul class="space-y-2"><!--[-->`);
      ssrRenderList(bookmarks, (bookmark) => {
        _push(`<li><a${ssrRenderAttr("href", bookmark.url)} target="_blank" class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          src: getThumbnail(bookmark.url),
          alt: bookmark.label,
          ui: { rounded: "rounded-md" }
        }, null, _parent));
        _push(`<p class="truncate text-gray-700 dark:text-gray-200">${ssrInterpolate(bookmark.label)}</p><span class="flex-1"></span><span class="text-xs font-medium text-gray-400 dark:text-gray-600">${ssrInterpolate(getHost(bookmark.url))}</span></a></li>`);
      });
      _push(`<!--]--></ul></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bookmarks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bookmarks-ZmnCc8EC.mjs.map
