import { defineComponent, useSlots, h, useSSRContext } from "vue";
import _sfc_main$1 from "./ContentQuery-BEUPas7N.js";
import "./query-B-powu9W.js";
import "../server.mjs";
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
import "vue/server-renderer";
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "vue-use-fixed-header";
import "./ssr-CxQlKKks.js";
import "./preview-BoiXoK7b.js";
import "cookie-es";
import "destr";
const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
const ContentList = defineComponent({
  name: "ContentList",
  props: {
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default '/'
     */
    path: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * A query builder params object to be passed to <ContentQuery /> component.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  /**
   * Content not found fallback
   * @slot not-found
   */
  render(ctx) {
    const slots = useSlots();
    const { path, query } = ctx;
    const contentQueryProps = {
      ...query || {},
      path: path || (query == null ? void 0 : query.path) || "/"
    };
    return h(
      _sfc_main$1,
      contentQueryProps,
      {
        // Default slot
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => slots.default({ list: data, refresh, isPartial, ...this.$attrs }) : (bindings) => emptyNode("default", bindings.data),
        // Empty slot
        empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", bindings == null ? void 0 : bindings.data),
        // Not Found slot
        "not-found": (bindings) => {
          var _a;
          return (slots == null ? void 0 : slots["not-found"]) ? (_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings) : emptyNode("not-found", bindings == null ? void 0 : bindings.data);
        }
      }
    );
  }
});
const _sfc_main = ContentList;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentList-COskSOQp.js.map
