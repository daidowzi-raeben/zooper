import { _ as _sfc_main$1 } from "./Header-CdNQX9Ia.js";
import _sfc_main$2 from "./ContentList-COskSOQp.js";
import _sfc_main$3 from "./ContentQuery-BEUPas7N.js";
import _sfc_main$4 from "./ContentRenderer-_FU9__CC.js";
import _sfc_main$5 from "./ContentRendererMarkdown-DWtxLYo7.js";
import { d as useSeoMeta } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./query-B-powu9W.js";
import "ufo";
import "ohash";
import "./ssr-CxQlKKks.js";
import "klona";
import "./preview-BoiXoK7b.js";
import "cookie-es";
import "h3";
import "destr";
import "scule";
import "property-information";
import "./node-hwMnPqaI.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "devalue";
import "tailwind-merge";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "vue-use-fixed-header";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=lab-Ch6jHTxq.js.map
