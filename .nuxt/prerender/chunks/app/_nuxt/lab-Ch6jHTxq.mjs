import { _ as _sfc_main$1 } from './Header-CdNQX9Ia.mjs';
import _sfc_main$2 from './ContentList-COskSOQp.mjs';
import _sfc_main$3 from './ContentQuery-BEUPas7N.mjs';
import _sfc_main$4 from './ContentRenderer-_FU9__CC.mjs';
import _sfc_main$5 from './ContentRendererMarkdown-DWtxLYo7.mjs';
import { d as useSeoMeta } from '../server.mjs';
import { mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import './query-B-powu9W.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ohash/dist/index.mjs';
import './ssr-CxQlKKks.mjs';
import './preview-BoiXoK7b.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/h3/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/destr/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/klona/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/scule/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/property-information/index.js';
import './node-hwMnPqaI.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-use-fixed-header/dist/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unenv/runtime/fetch/index.mjs';
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

const description = "Some random experiments with UI I do in my free time.";
const _sfc_main = {
  __name: "lab",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Lab | Fayaz Ahmed",
      description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_ContentList = _sfc_main$2;
      const _component_ContentQuery = _sfc_main$3;
      const _component_ContentRenderer = _sfc_main$4;
      const _component_ContentRendererMarkdown = _sfc_main$5;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-12",
        title: "Lab",
        description
      }, null, _parent));
      _push(`<div class="space-y-24">`);
      _push(ssrRenderComponent(_component_ContentList, { path: "/lab" }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list, (item) => {
              _push2(ssrRenderComponent(_component_ContentQuery, {
                key: item._path,
                path: item._path,
                find: "one"
              }, {
                default: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ContentRenderer, null, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ContentRendererMarkdown, { value: data }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ContentRendererMarkdown, { value: data }, null, 8, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ContentRenderer, null, {
                        default: withCtx(() => [
                          createVNode(_component_ContentRendererMarkdown, { value: data }, null, 8, ["value"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list, (item) => {
                return openBlock(), createBlock(_component_ContentQuery, {
                  key: item._path,
                  path: item._path,
                  find: "one"
                }, {
                  default: withCtx(({ data }) => [
                    createVNode(_component_ContentRenderer, null, {
                      default: withCtx(() => [
                        createVNode(_component_ContentRendererMarkdown, { value: data }, null, 8, ["value"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["path"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lab-Ch6jHTxq.mjs.map
