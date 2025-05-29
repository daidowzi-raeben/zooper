import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = {
  __name: "Encryption",
  __ssrInlineRender: true,
  setup(__props) {
    const card = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-gray-100 dark:bg-gray-900 relative h-40 text-sm overflow-hidden",
        ref_key: "card",
        ref: card
      }, _attrs))}><div class="absolute left-0 top-0 [--x:0] [--y:0] h-full w-full text-center text-gray-700 dark:text-gray-300" style="${ssrRenderStyle({ "word-wrap": "break-word" })}"><p class="absolute top-1/2 left-1/2 text-gray-500 text-xs -translate-x-1/2 -translate-y-1/2"> Hover/Touch </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Encryption.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Encryption-DL8UGNl-.js.map
