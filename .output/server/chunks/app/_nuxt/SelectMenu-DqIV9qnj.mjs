import { _ as __nuxt_component_0 } from './Icon-DWHer77Q.mjs';
import { _ as __nuxt_component_1$1 } from './Avatar-C3pGi2x7.mjs';
import { defineComponent, resolveComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, createTextVNode, Transition, toRef, computed, ref, watch, onMounted, onUnmounted, watchEffect, nextTick, provide, h as h$1, isRef, shallowRef, inject, toRaw, useSSRContext } from 'vue';
import { u as useFormGroup, d as useDebounceFn, n as noop } from './api-DKaA_XRh.mjs';
import { m as defu } from '../../nitro/node-server.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { _ as _export_sfc, m as mergeConfig, j as useUI, k as appConfig, s as select, q as get } from '../server.mjs';
import { u as useInjectButtonGroup } from './Button-BkeWMuC1.mjs';
import { ssrRenderVNode, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot, ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { t as t$2, u as u$1, o as o$1$1, H as H$1, p as p$2, l, y, n as w$1, q as h, c as c$2, f as f$2, K, b as a$2, T as T$1, m, O, N as N$1, j as o$2, d as o$3, r as n } from './disposables-ze0J46BC.mjs';

const arrow$1 = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  placement: 'group-data-[popper-placement*="right"]:-left-1 group-data-[popper-placement*="left"]:-right-1 group-data-[popper-placement*="top"]:-bottom-1 group-data-[popper-placement*="bottom"]:-top-1'
};
const selectMenu = {
  container: "z-20 group",
  trigger: "inline-flex w-full",
  select: "inline-flex items-center text-left cursor-default",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-2 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-2 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    create: "block truncate",
    icon: {
      base: "flex-shrink-0 h-4 w-4",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-4 w-4 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "3xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearOnClose: false
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    shallow = true,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e2) {
      onError(e2);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}
function f$1(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a$1 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a$1 || {});
function x(r2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n2.resolveActiveIndex(), s = l2 != null ? l2 : -1, d2 = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e2) => !n2.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i, c2, u2) => s !== -1 && u2.length - c2 - 1 >= s ? false : !n2.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i) => i <= s ? false : !n2.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i) => !n2.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n2.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f$1(r2);
    }
  })();
  return d2 === -1 ? l2 : d2;
}
function r$1(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function b(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var o2;
    n2.value || o$1$1(e2) && o$1$1(e2) instanceof HTMLButtonElement && !((o2 = o$1$1(e2)) != null && o2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function p$1({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = m(e2);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
function e(i = {}, s = null, t2 = []) {
  for (let [r2, n2] of Object.entries(i))
    o$1(t2, f(s, r2), n2);
  return t2;
}
function f(i, s) {
  return i ? i + "[" + s + "]" : s;
}
function o$1(i, s, t2) {
  if (Array.isArray(t2))
    for (let [r2, n2] of t2.entries())
      o$1(i, f(s, r2.toString()), n2);
  else
    t2 instanceof Date ? i.push([s, t2.toISOString()]) : typeof t2 == "boolean" ? i.push([s, t2 ? "1" : "0"]) : typeof t2 == "string" ? i.push([s, t2]) : typeof t2 == "number" ? i.push([s, `${t2}`]) : t2 == null ? i.push([s, ""]) : e(t2, s, i);
}
function d(u2, e2, r2) {
  let i = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i.value), function(t2) {
    return f2.value || (i.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function Oe(l2, y2) {
  return l2 === y2;
}
var Se = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(Se || {}), Ce = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(Ce || {}), ge = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(ge || {});
let Y = Symbol("ComboboxContext");
function $$1(l2) {
  let y2 = inject(Y, null);
  if (y2 === null) {
    let r2 = new Error(`<${l2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, $$1), r2;
  }
  return y2;
}
let Je = defineComponent({ name: "Combobox", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => Oe }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(l$1, { slots: y$1, attrs: r2, emit: w2 }) {
  let e$1 = ref(1), t2 = ref(null), S = ref(null), p2 = ref(null), d$1 = ref(null), b2 = ref({ static: false, hold: false }), v = ref([]), O$1 = ref(null), I = ref(1), P = ref(false);
  function j(n2 = (u2) => u2) {
    let u2 = O$1.value !== null ? v.value[O$1.value] : null, s = O(n2(v.value.slice()), (f2) => o$1$1(f2.dataRef.domRef)), a2 = u2 ? s.indexOf(u2) : null;
    return a2 === -1 && (a2 = null), { options: s, activeOptionIndex: a2 };
  }
  let k = computed(() => l$1.multiple ? 1 : 0), m2 = computed(() => l$1.nullable), [o2, h$12] = d(computed(() => l$1.modelValue), (n2) => w2("update:modelValue", n2), computed(() => l$1.defaultValue)), C = computed(() => o2.value === void 0 ? u$1(k.value, { [1]: [], [0]: void 0 }) : o2.value), E = null, R = null, i = { comboboxState: e$1, value: C, mode: k, compare(n2, u2) {
    if (typeof l$1.by == "string") {
      let s = l$1.by;
      return (n2 == null ? void 0 : n2[s]) === (u2 == null ? void 0 : u2[s]);
    }
    return l$1.by(n2, u2);
  }, defaultValue: computed(() => l$1.defaultValue), nullable: m2, inputRef: S, labelRef: t2, buttonRef: p2, optionsRef: d$1, disabled: computed(() => l$1.disabled), options: v, change(n2) {
    h$12(n2);
  }, activeOptionIndex: computed(() => {
    if (P.value && O$1.value === null && v.value.length > 0) {
      let n2 = v.value.findIndex((u2) => !u2.dataRef.disabled);
      n2 !== -1 && (O$1.value = n2);
    }
    return O$1.value;
  }), activationTrigger: I, optionsPropsRef: b2, closeCombobox() {
    P.value = false, !l$1.disabled && e$1.value !== 1 && (e$1.value = 1, O$1.value = null);
  }, openCombobox() {
    if (P.value = true, l$1.disabled || e$1.value === 0)
      return;
    let n2 = v.value.findIndex((u2) => {
      let s = toRaw(u2.dataRef.value);
      return u$1(k.value, { [0]: () => i.compare(toRaw(i.value.value), toRaw(s)), [1]: () => toRaw(i.value.value).some((f2) => i.compare(toRaw(f2), toRaw(s))) });
    });
    n2 !== -1 && (O$1.value = n2), e$1.value = 0;
  }, goToOption(n2, u2, s) {
    P.value = false, E !== null && cancelAnimationFrame(E), E = requestAnimationFrame(() => {
      if (l$1.disabled || d$1.value && !b2.value.static && e$1.value === 1)
        return;
      let a2 = j();
      if (a2.activeOptionIndex === null) {
        let T2 = a2.options.findIndex((B) => !B.dataRef.disabled);
        T2 !== -1 && (a2.activeOptionIndex = T2);
      }
      let f2 = x(n2 === a$1.Specific ? { focus: a$1.Specific, id: u2 } : { focus: n2 }, { resolveItems: () => a2.options, resolveActiveIndex: () => a2.activeOptionIndex, resolveId: (T2) => T2.id, resolveDisabled: (T2) => T2.dataRef.disabled });
      O$1.value = f2, I.value = s != null ? s : 1, v.value = a2.options;
    });
  }, selectOption(n2) {
    let u2 = v.value.find((a2) => a2.id === n2);
    if (!u2)
      return;
    let { dataRef: s } = u2;
    h$12(u$1(k.value, { [0]: () => s.value, [1]: () => {
      let a2 = toRaw(i.value.value).slice(), f2 = toRaw(s.value), T2 = a2.findIndex((B) => i.compare(f2, toRaw(B)));
      return T2 === -1 ? a2.push(f2) : a2.splice(T2, 1), a2;
    } }));
  }, selectActiveOption() {
    if (i.activeOptionIndex.value === null)
      return;
    let { dataRef: n2, id: u2 } = v.value[i.activeOptionIndex.value];
    h$12(u$1(k.value, { [0]: () => n2.value, [1]: () => {
      let s = toRaw(i.value.value).slice(), a2 = toRaw(n2.value), f2 = s.findIndex((T2) => i.compare(a2, toRaw(T2)));
      return f2 === -1 ? s.push(a2) : s.splice(f2, 1), s;
    } })), i.goToOption(a$1.Specific, u2);
  }, registerOption(n2, u2) {
    R && cancelAnimationFrame(R);
    let s = { id: n2, dataRef: u2 }, a2 = j((f2) => (f2.push(s), f2));
    if (O$1.value === null) {
      let f2 = u2.value.value;
      u$1(k.value, { [0]: () => i.compare(toRaw(i.value.value), toRaw(f2)), [1]: () => toRaw(i.value.value).some((B) => i.compare(toRaw(B), toRaw(f2))) }) && (a2.activeOptionIndex = a2.options.indexOf(s));
    }
    v.value = a2.options, O$1.value = a2.activeOptionIndex, I.value = 1, a2.options.some((f2) => !o$1$1(f2.dataRef.domRef)) && (R = requestAnimationFrame(() => {
      let f2 = j();
      v.value = f2.options, O$1.value = f2.activeOptionIndex;
    }));
  }, unregisterOption(n2) {
    var s;
    i.activeOptionIndex.value !== null && ((s = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : s.id) === n2 && (P.value = true);
    let u2 = j((a2) => {
      let f2 = a2.findIndex((T2) => T2.id === n2);
      return f2 !== -1 && a2.splice(f2, 1), a2;
    });
    v.value = u2.options, O$1.value = u2.activeOptionIndex, I.value = 1;
  } };
  y([S, p2, d$1], () => i.closeCombobox(), computed(() => e$1.value === 0)), provide(Y, i), c$2(computed(() => u$1(e$1.value, { [0]: l.Open, [1]: l.Closed })));
  let A2 = computed(() => i.activeOptionIndex.value === null ? null : v.value[i.activeOptionIndex.value].dataRef.value), F = computed(() => {
    var n2;
    return (n2 = o$1$1(S)) == null ? void 0 : n2.closest("form");
  });
  return onMounted(() => {
    watch([F], () => {
      if (!F.value || l$1.defaultValue === void 0)
        return;
      function n2() {
        i.change(l$1.defaultValue);
      }
      return F.value.addEventListener("reset", n2), () => {
        var u2;
        (u2 = F.value) == null || u2.removeEventListener("reset", n2);
      };
    }, { immediate: true });
  }), () => {
    let { name: n2, disabled: u2, form: s, ...a2 } = l$1, f2 = { open: e$1.value === 0, disabled: u2, activeIndex: i.activeOptionIndex.value, activeOption: A2.value, value: C.value };
    return h$1(Fragment, [...n2 != null && C.value != null ? e({ [n2]: C.value }).map(([T2, B]) => h$1(f$2, K({ features: a$2.Hidden, key: T2, as: "input", type: "hidden", hidden: true, readOnly: true, form: s, name: T2, value: B }))) : [], H$1({ theirProps: { ...r2, ...T$1(a2, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: f2, slots: y$1, attrs: r2, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t$2()}` } }, setup(l2, { attrs: y2, slots: r2 }) {
  let w2 = $$1("ComboboxLabel");
  function e2() {
    var t2;
    (t2 = o$1$1(w2.inputRef)) == null || t2.focus({ preventScroll: true });
  }
  return () => {
    let t2 = { open: w2.comboboxState.value === 0, disabled: w2.disabled.value }, { id: S, ...p2 } = l2, d2 = { id: S, ref: w2.labelRef, onClick: e2 };
    return H$1({ ourProps: d2, theirProps: p2, slot: t2, attrs: y2, slots: r2, name: "ComboboxLabel" });
  };
} });
let Ge = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t$2()}` } }, setup(l2, { attrs: y2, slots: r2, expose: w2 }) {
  let e2 = $$1("ComboboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function t2(d2) {
    e2.disabled.value || (e2.comboboxState.value === 0 ? e2.closeCombobox() : (d2.preventDefault(), e2.openCombobox()), nextTick(() => {
      var b2;
      return (b2 = o$1$1(e2.inputRef)) == null ? void 0 : b2.focus({ preventScroll: true });
    }));
  }
  function S(d2) {
    switch (d2.key) {
      case o$2.ArrowDown:
        d2.preventDefault(), d2.stopPropagation(), e2.comboboxState.value === 1 && e2.openCombobox(), nextTick(() => {
          var b2;
          return (b2 = e2.inputRef.value) == null ? void 0 : b2.focus({ preventScroll: true });
        });
        return;
      case o$2.ArrowUp:
        d2.preventDefault(), d2.stopPropagation(), e2.comboboxState.value === 1 && (e2.openCombobox(), nextTick(() => {
          e2.value.value || e2.goToOption(a$1.Last);
        })), nextTick(() => {
          var b2;
          return (b2 = e2.inputRef.value) == null ? void 0 : b2.focus({ preventScroll: true });
        });
        return;
      case o$2.Escape:
        if (e2.comboboxState.value !== 0)
          return;
        d2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && d2.stopPropagation(), e2.closeCombobox(), nextTick(() => {
          var b2;
          return (b2 = e2.inputRef.value) == null ? void 0 : b2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let p2 = b(computed(() => ({ as: l2.as, type: y2.type })), e2.buttonRef);
  return () => {
    var I, P;
    let d2 = { open: e2.comboboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: b2, ...v } = l2, O2 = { ref: e2.buttonRef, id: b2, type: p2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (I = o$1$1(e2.optionsRef)) == null ? void 0 : I.id, "aria-expanded": e2.comboboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(P = o$1$1(e2.labelRef)) == null ? void 0 : P.id, b2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: S, onClick: t2 };
    return H$1({ ourProps: O2, theirProps: v, slot: d2, attrs: y2, slots: r2, name: "ComboboxButton" });
  };
} }), Qe = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t$2()}` } }, emits: { change: (l2) => true }, setup(l2, { emit: y2, attrs: r2, slots: w2, expose: e2 }) {
  let t2 = $$1("ComboboxInput"), S = computed(() => m(o$1$1(t2.inputRef))), p2 = { value: false };
  e2({ el: t2.inputRef, $el: t2.inputRef });
  function d2() {
    t2.change(null);
    let o2 = o$1$1(t2.optionsRef);
    o2 && (o2.scrollTop = 0), t2.goToOption(a$1.Nothing);
  }
  let b2 = computed(() => {
    var h2;
    let o2 = t2.value.value;
    return o$1$1(t2.inputRef) ? typeof l2.displayValue != "undefined" && o2 !== void 0 ? (h2 = l2.displayValue(o2)) != null ? h2 : "" : typeof o2 == "string" ? o2 : "" : "";
  });
  onMounted(() => {
    watch([b2, t2.comboboxState, S], ([o2, h2], [C, E]) => {
      if (p2.value)
        return;
      let R = o$1$1(t2.inputRef);
      R && ((E === 0 && h2 === 1 || o2 !== C) && (R.value = o2), requestAnimationFrame(() => {
        var F;
        if (p2.value || !R || ((F = S.value) == null ? void 0 : F.activeElement) !== R)
          return;
        let { selectionStart: i, selectionEnd: A2 } = R;
        Math.abs((A2 != null ? A2 : 0) - (i != null ? i : 0)) === 0 && i === 0 && R.setSelectionRange(R.value.length, R.value.length);
      }));
    }, { immediate: true }), watch([t2.comboboxState], ([o2], [h2]) => {
      if (o2 === 0 && h2 === 1) {
        if (p2.value)
          return;
        let C = o$1$1(t2.inputRef);
        if (!C)
          return;
        let E = C.value, { selectionStart: R, selectionEnd: i, selectionDirection: A2 } = C;
        C.value = "", C.value = E, A2 !== null ? C.setSelectionRange(R, i, A2) : C.setSelectionRange(R, i);
      }
    });
  });
  let v = ref(false);
  function O2() {
    v.value = true;
  }
  function I() {
    o$3().nextFrame(() => {
      v.value = false;
    });
  }
  function P(o2) {
    switch (p2.value = true, o2.key) {
      case o$2.Enter:
        if (p2.value = false, t2.comboboxState.value !== 0 || v.value)
          return;
        if (o2.preventDefault(), o2.stopPropagation(), t2.activeOptionIndex.value === null) {
          t2.closeCombobox();
          return;
        }
        t2.selectActiveOption(), t2.mode.value === 0 && t2.closeCombobox();
        break;
      case o$2.ArrowDown:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), u$1(t2.comboboxState.value, { [0]: () => t2.goToOption(a$1.Next), [1]: () => t2.openCombobox() });
      case o$2.ArrowUp:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), u$1(t2.comboboxState.value, { [0]: () => t2.goToOption(a$1.Previous), [1]: () => {
          t2.openCombobox(), nextTick(() => {
            t2.value.value || t2.goToOption(a$1.Last);
          });
        } });
      case o$2.Home:
        if (o2.shiftKey)
          break;
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a$1.First);
      case o$2.PageUp:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a$1.First);
      case o$2.End:
        if (o2.shiftKey)
          break;
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a$1.Last);
      case o$2.PageDown:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a$1.Last);
      case o$2.Escape:
        if (p2.value = false, t2.comboboxState.value !== 0)
          return;
        o2.preventDefault(), t2.optionsRef.value && !t2.optionsPropsRef.value.static && o2.stopPropagation(), t2.nullable.value && t2.mode.value === 0 && t2.value.value === null && d2(), t2.closeCombobox();
        break;
      case o$2.Tab:
        if (p2.value = false, t2.comboboxState.value !== 0)
          return;
        t2.mode.value === 0 && t2.selectActiveOption(), t2.closeCombobox();
        break;
    }
  }
  function j(o2) {
    y2("change", o2), t2.nullable.value && t2.mode.value === 0 && o2.target.value === "" && d2(), t2.openCombobox();
  }
  function k() {
    p2.value = false;
  }
  let m$1 = computed(() => {
    var o2, h2, C, E;
    return (E = (C = (h2 = l2.defaultValue) != null ? h2 : t2.defaultValue.value !== void 0 ? (o2 = l2.displayValue) == null ? void 0 : o2.call(l2, t2.defaultValue.value) : null) != null ? C : t2.defaultValue.value) != null ? E : "";
  });
  return () => {
    var A2, F, n2, u2, s, a2;
    let o2 = { open: t2.comboboxState.value === 0 }, { id: h2, displayValue: C, onChange: E, ...R } = l2, i = { "aria-controls": (A2 = t2.optionsRef.value) == null ? void 0 : A2.id, "aria-expanded": t2.comboboxState.value === 0, "aria-activedescendant": t2.activeOptionIndex.value === null || (F = t2.options.value[t2.activeOptionIndex.value]) == null ? void 0 : F.id, "aria-labelledby": (s = (n2 = o$1$1(t2.labelRef)) == null ? void 0 : n2.id) != null ? s : (u2 = o$1$1(t2.buttonRef)) == null ? void 0 : u2.id, "aria-autocomplete": "list", id: h2, onCompositionstart: O2, onCompositionend: I, onKeydown: P, onInput: j, onBlur: k, role: "combobox", type: (a2 = r2.type) != null ? a2 : "text", tabIndex: 0, ref: t2.inputRef, defaultValue: m$1.value, disabled: t2.disabled.value === true ? true : void 0 };
    return H$1({ ourProps: i, theirProps: R, slot: o2, attrs: r2, slots: w2, features: N$1.RenderStrategy | N$1.Static, name: "ComboboxInput" });
  };
} }), Xe = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(l$1, { attrs: y2, slots: r2, expose: w2 }) {
  let e2 = $$1("ComboboxOptions"), t$1 = `headlessui-combobox-options-${t$2()}`;
  w2({ el: e2.optionsRef, $el: e2.optionsRef }), watchEffect(() => {
    e2.optionsPropsRef.value.static = l$1.static;
  }), watchEffect(() => {
    e2.optionsPropsRef.value.hold = l$1.hold;
  });
  let S = p$2(), p2 = computed(() => S !== null ? (S.value & l.Open) === l.Open : e2.comboboxState.value === 0);
  return p$1({ container: computed(() => o$1$1(e2.optionsRef)), enabled: computed(() => e2.comboboxState.value === 0), accept(d2) {
    return d2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d2) {
    d2.setAttribute("role", "none");
  } }), () => {
    var O2, I, P;
    let d2 = { open: e2.comboboxState.value === 0 }, b2 = { "aria-labelledby": (P = (O2 = o$1$1(e2.labelRef)) == null ? void 0 : O2.id) != null ? P : (I = o$1$1(e2.buttonRef)) == null ? void 0 : I.id, id: t$1, ref: e2.optionsRef, role: "listbox", "aria-multiselectable": e2.mode.value === 1 ? true : void 0 }, v = T$1(l$1, ["hold"]);
    return H$1({ ourProps: b2, theirProps: v, slot: d2, attrs: y2, slots: r2, features: N$1.RenderStrategy | N$1.Static, visible: p2.value, name: "ComboboxOptions" });
  };
} }), Ye = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(l2, { slots: y2, attrs: r2, expose: w2 }) {
  let e2 = $$1("ComboboxOption"), t$1 = `headlessui-combobox-option-${t$2()}`, S = ref(null);
  w2({ el: S, $el: S });
  let p2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t$1 : false), d2 = computed(() => u$1(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(l2.value)), [1]: () => toRaw(e2.value.value).some((m2) => e2.compare(toRaw(m2), toRaw(l2.value))) })), b2 = computed(() => ({ disabled: l2.disabled, value: l2.value, domRef: S }));
  onMounted(() => e2.registerOption(t$1, b2)), onUnmounted(() => e2.unregisterOption(t$1)), watchEffect(() => {
    e2.comboboxState.value === 0 && p2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var m2, o2;
      return (o2 = (m2 = o$1$1(S)) == null ? void 0 : m2.scrollIntoView) == null ? void 0 : o2.call(m2, { block: "nearest" });
    });
  });
  function v(m2) {
    if (l2.disabled)
      return m2.preventDefault();
    e2.selectOption(t$1), e2.mode.value === 0 && e2.closeCombobox(), n() || requestAnimationFrame(() => {
      var o2;
      return (o2 = o$1$1(e2.inputRef)) == null ? void 0 : o2.focus();
    });
  }
  function O2() {
    if (l2.disabled)
      return e2.goToOption(a$1.Nothing);
    e2.goToOption(a$1.Specific, t$1);
  }
  let I = u();
  function P(m2) {
    I.update(m2);
  }
  function j(m2) {
    I.wasMoved(m2) && (l2.disabled || p2.value || e2.goToOption(a$1.Specific, t$1, 0));
  }
  function k(m2) {
    I.wasMoved(m2) && (l2.disabled || p2.value && (e2.optionsPropsRef.value.hold || e2.goToOption(a$1.Nothing)));
  }
  return () => {
    let { disabled: m2 } = l2, o2 = { active: p2.value, selected: d2.value, disabled: m2 }, h2 = { id: t$1, ref: S, role: "option", tabIndex: m2 === true ? void 0 : -1, "aria-disabled": m2 === true ? true : void 0, "aria-selected": d2.value, disabled: void 0, onClick: v, onFocus: O2, onPointerenter: P, onMouseenter: P, onPointermove: j, onMousemove: j, onPointerleave: k, onMouseleave: k };
    return H$1({ ourProps: h2, theirProps: l2, slot: o2, attrs: r2, slots: y2, name: "ComboboxOption" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i = t2.innerText) != null ? i : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i = r2.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$1$1(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function pe(t2, v) {
  return t2 === v;
}
var ce = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(ce || {}), ve = ((l2) => (l2[l2.Single = 0] = "Single", l2[l2.Multi = 1] = "Multi", l2))(ve || {}), be = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(be || {});
function me(t2) {
  requestAnimationFrame(() => requestAnimationFrame(t2));
}
let $ = Symbol("ListboxContext");
function A(t2) {
  let v = inject($, null);
  if (v === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, A), l2;
  }
  return v;
}
let Be = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t2, { slots: v, attrs: l$1, emit: L }) {
  let e$1 = ref(1), d$1 = ref(null), b2 = ref(null), m2 = ref(null), f2 = ref([]), o2 = ref(""), i = ref(null), T$1$1 = ref(1);
  function k(a2 = (n2) => n2) {
    let n2 = i.value !== null ? f2.value[i.value] : null, u2 = O(a2(f2.value.slice()), (O2) => o$1$1(O2.dataRef.domRef)), s = n2 ? u2.indexOf(n2) : null;
    return s === -1 && (s = null), { options: u2, activeOptionIndex: s };
  }
  let y$1 = computed(() => t2.multiple ? 1 : 0), [h$2, M] = d(computed(() => t2.modelValue), (a2) => L("update:modelValue", a2), computed(() => t2.defaultValue)), w$1$1 = computed(() => h$2.value === void 0 ? u$1(y$1.value, { [1]: [], [0]: void 0 }) : h$2.value), r2 = { listboxState: e$1, value: w$1$1, mode: y$1, compare(a2, n2) {
    if (typeof t2.by == "string") {
      let u2 = t2.by;
      return (a2 == null ? void 0 : a2[u2]) === (n2 == null ? void 0 : n2[u2]);
    }
    return t2.by(a2, n2);
  }, orientation: computed(() => t2.horizontal ? "horizontal" : "vertical"), labelRef: d$1, buttonRef: b2, optionsRef: m2, disabled: computed(() => t2.disabled), options: f2, searchQuery: o2, activeOptionIndex: i, activationTrigger: T$1$1, closeListbox() {
    t2.disabled || e$1.value !== 1 && (e$1.value = 1, i.value = null);
  }, openListbox() {
    t2.disabled || e$1.value !== 0 && (e$1.value = 0);
  }, goToOption(a2, n2, u2) {
    if (t2.disabled || e$1.value === 1)
      return;
    let s = k(), O2 = x(a2 === a$1.Specific ? { focus: a$1.Specific, id: n2 } : { focus: a2 }, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (P) => P.id, resolveDisabled: (P) => P.dataRef.disabled });
    o2.value = "", i.value = O2, T$1$1.value = u2 != null ? u2 : 1, f2.value = s.options;
  }, search(a2) {
    if (t2.disabled || e$1.value === 1)
      return;
    let u2 = o2.value !== "" ? 0 : 1;
    o2.value += a2.toLowerCase();
    let O2 = (i.value !== null ? f2.value.slice(i.value + u2).concat(f2.value.slice(0, i.value + u2)) : f2.value).find((I) => I.dataRef.textValue.startsWith(o2.value) && !I.dataRef.disabled), P = O2 ? f2.value.indexOf(O2) : -1;
    P === -1 || P === i.value || (i.value = P, T$1$1.value = 1);
  }, clearSearch() {
    t2.disabled || e$1.value !== 1 && o2.value !== "" && (o2.value = "");
  }, registerOption(a2, n2) {
    let u2 = k((s) => [...s, { id: a2, dataRef: n2 }]);
    f2.value = u2.options, i.value = u2.activeOptionIndex;
  }, unregisterOption(a2) {
    let n2 = k((u2) => {
      let s = u2.findIndex((O2) => O2.id === a2);
      return s !== -1 && u2.splice(s, 1), u2;
    });
    f2.value = n2.options, i.value = n2.activeOptionIndex, T$1$1.value = 1;
  }, theirOnChange(a2) {
    t2.disabled || M(a2);
  }, select(a2) {
    t2.disabled || M(u$1(y$1.value, { [0]: () => a2, [1]: () => {
      let n2 = toRaw(r2.value.value).slice(), u2 = toRaw(a2), s = n2.findIndex((O2) => r2.compare(u2, toRaw(O2)));
      return s === -1 ? n2.push(u2) : n2.splice(s, 1), n2;
    } }));
  } };
  y([b2, m2], (a2, n2) => {
    var u2;
    r2.closeListbox(), w$1(n2, h.Loose) || (a2.preventDefault(), (u2 = o$1$1(b2)) == null || u2.focus());
  }, computed(() => e$1.value === 0)), provide($, r2), c$2(computed(() => u$1(e$1.value, { [0]: l.Open, [1]: l.Closed })));
  let x$1 = computed(() => {
    var a2;
    return (a2 = o$1$1(b2)) == null ? void 0 : a2.closest("form");
  });
  return onMounted(() => {
    watch([x$1], () => {
      if (!x$1.value || t2.defaultValue === void 0)
        return;
      function a2() {
        r2.theirOnChange(t2.defaultValue);
      }
      return x$1.value.addEventListener("reset", a2), () => {
        var n2;
        (n2 = x$1.value) == null || n2.removeEventListener("reset", a2);
      };
    }, { immediate: true });
  }), () => {
    let { name: a2, modelValue: n2, disabled: u2, form: s, ...O2 } = t2, P = { open: e$1.value === 0, disabled: u2, value: w$1$1.value };
    return h$1(Fragment, [...a2 != null && w$1$1.value != null ? e({ [a2]: w$1$1.value }).map(([I, Q]) => h$1(f$2, K({ features: a$2.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: s, name: I, value: Q }))) : [], H$1({ ourProps: {}, theirProps: { ...l$1, ...T$1(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: P, slots: v, attrs: l$1, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t$2()}` } }, setup(t2, { attrs: v, slots: l2 }) {
  let L = A("ListboxLabel");
  function e2() {
    var d2;
    (d2 = o$1$1(L.buttonRef)) == null || d2.focus({ preventScroll: true });
  }
  return () => {
    let d2 = { open: L.listboxState.value === 0, disabled: L.disabled.value }, { id: b2, ...m2 } = t2, f2 = { id: b2, ref: L.labelRef, onClick: e2 };
    return H$1({ ourProps: f2, theirProps: m2, slot: d2, attrs: v, slots: l2, name: "ListboxLabel" });
  };
} });
let Ne = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t$2()}` } }, setup(t2, { attrs: v, slots: l2, expose: L }) {
  let e2 = A("ListboxButton");
  L({ el: e2.buttonRef, $el: e2.buttonRef });
  function d2(o2) {
    switch (o2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o$1$1(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a$1.First);
        });
        break;
      case o$2.ArrowUp:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o$1$1(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a$1.Last);
        });
        break;
    }
  }
  function b$1(o2) {
    switch (o2.key) {
      case o$2.Space:
        o2.preventDefault();
        break;
    }
  }
  function m2(o2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var i;
      return (i = o$1$1(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })) : (o2.preventDefault(), e2.openListbox(), me(() => {
      var i;
      return (i = o$1$1(e2.optionsRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })));
  }
  let f2 = b(computed(() => ({ as: t2.as, type: v.type })), e2.buttonRef);
  return () => {
    var y2, h2;
    let o2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: i, ...T2 } = t2, k = { ref: e2.buttonRef, id: i, type: f2.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$1$1(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(h2 = o$1$1(e2.labelRef)) == null ? void 0 : h2.id, i].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: d2, onKeyup: b$1, onClick: m2 };
    return H$1({ ourProps: k, theirProps: T2, slot: o2, attrs: v, slots: l2, name: "ListboxButton" });
  };
} }), He = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t$2()}` } }, setup(t2, { attrs: v, slots: l$1, expose: L }) {
  let e2 = A("ListboxOptions"), d2 = ref(null);
  L({ el: e2.optionsRef, $el: e2.optionsRef });
  function b2(o2) {
    switch (d2.value && clearTimeout(d2.value), o2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return o2.preventDefault(), o2.stopPropagation(), e2.search(o2.key);
      case o$2.Enter:
        if (o2.preventDefault(), o2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let i = e2.options.value[e2.activeOptionIndex.value];
          e2.select(i.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o$1$1(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        }));
        break;
      case u$1(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.Next);
      case u$1(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.First);
      case o$2.End:
      case o$2.PageDown:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.Last);
      case o$2.Escape:
        o2.preventDefault(), o2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o$1$1(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        o2.preventDefault(), o2.stopPropagation();
        break;
      default:
        o2.key.length === 1 && (e2.search(o2.key), d2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let m2 = p$2(), f2 = computed(() => m2 !== null ? (m2.value & l.Open) === l.Open : e2.listboxState.value === 0);
  return () => {
    var y2, h2, M, w2;
    let o2 = { open: e2.listboxState.value === 0 }, { id: i, ...T2 } = t2, k = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (w2 = (h2 = o$1$1(e2.labelRef)) == null ? void 0 : h2.id) != null ? w2 : (M = o$1$1(e2.buttonRef)) == null ? void 0 : M.id, "aria-orientation": e2.orientation.value, id: i, onKeydown: b2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return H$1({ ourProps: k, theirProps: T2, slot: o2, attrs: v, slots: l$1, features: N$1.RenderStrategy | N$1.Static, visible: f2.value, name: "ListboxOptions" });
  };
} }), Ue = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t$2()}` } }, setup(t2, { slots: v, attrs: l2, expose: L }) {
  let e2 = A("ListboxOption"), d2 = ref(null);
  L({ el: d2, $el: d2 });
  let b2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t2.id : false), m2 = computed(() => u$1(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(t2.value)), [1]: () => toRaw(e2.value.value).some((r2) => e2.compare(toRaw(r2), toRaw(t2.value))) })), f2 = computed(() => u$1(e2.mode.value, { [1]: () => {
    var x2;
    let r2 = toRaw(e2.value.value);
    return ((x2 = e2.options.value.find((a2) => r2.some((n2) => e2.compare(toRaw(n2), toRaw(a2.dataRef.value))))) == null ? void 0 : x2.id) === t2.id;
  }, [0]: () => m2.value })), o2 = p(d2), i = computed(() => ({ disabled: t2.disabled, value: t2.value, get textValue() {
    return o2();
  }, domRef: d2 }));
  onMounted(() => e2.registerOption(t2.id, i)), onUnmounted(() => e2.unregisterOption(t2.id)), onMounted(() => {
    watch([e2.listboxState, m2], () => {
      e2.listboxState.value === 0 && m2.value && u$1(e2.mode.value, { [1]: () => {
        f2.value && e2.goToOption(a$1.Specific, t2.id);
      }, [0]: () => {
        e2.goToOption(a$1.Specific, t2.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && b2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var r2, x2;
      return (x2 = (r2 = o$1$1(d2)) == null ? void 0 : r2.scrollIntoView) == null ? void 0 : x2.call(r2, { block: "nearest" });
    });
  });
  function T2(r2) {
    if (t2.disabled)
      return r2.preventDefault();
    e2.select(t2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var x2;
      return (x2 = o$1$1(e2.buttonRef)) == null ? void 0 : x2.focus({ preventScroll: true });
    }));
  }
  function k() {
    if (t2.disabled)
      return e2.goToOption(a$1.Nothing);
    e2.goToOption(a$1.Specific, t2.id);
  }
  let y2 = u();
  function h2(r2) {
    y2.update(r2);
  }
  function M(r2) {
    y2.wasMoved(r2) && (t2.disabled || b2.value || e2.goToOption(a$1.Specific, t2.id, 0));
  }
  function w2(r2) {
    y2.wasMoved(r2) && (t2.disabled || b2.value && e2.goToOption(a$1.Nothing));
  }
  return () => {
    let { disabled: r2 } = t2, x2 = { active: b2.value, selected: m2.value, disabled: r2 }, { id: a2, value: n2, disabled: u2, ...s } = t2, O2 = { id: a2, ref: d2, role: "option", tabIndex: r2 === true ? void 0 : -1, "aria-disabled": r2 === true ? true : void 0, "aria-selected": m2.value, disabled: void 0, onClick: T2, onFocus: k, onPointerenter: h2, onMouseenter: h2, onPointermove: M, onMousemove: M, onPointerleave: w2, onMouseleave: w2 };
    return H$1({ ourProps: O2, theirProps: s, slot: x2, attrs: l2, slots: v, name: "ListboxOption" });
  };
} });
function getWindow(node) {
  if (node == null) {
    return void 0;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || void 0 : void 0;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = (void 0).userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return (void 0).userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : void 0, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || (void 0).document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = void 0;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$1,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrowModifier = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
popperGenerator({
  defaultModifiers: [...defaultModifiers, offset$1, flip$1, preventOverflow$1, computeStyles$1, eventListeners, arrowModifier]
});
function usePopper({
  locked = false,
  overflowPadding = 8,
  offsetDistance = 8,
  offsetSkid = 0,
  gpuAcceleration = true,
  adaptive = true,
  scroll = true,
  resize = true,
  arrow: arrow2 = false,
  placement,
  strategy
}, virtualReference) {
  const reference2 = ref(null);
  const popper2 = ref(null);
  const instance = ref(null);
  return [reference2, popper2, instance];
}
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main = defineComponent({
  components: {
    HCombobox: Je,
    HComboboxButton: Ge,
    HComboboxOptions: Xe,
    HComboboxOption: Ye,
    HComboboxInput: Qe,
    HListbox: Be,
    HListboxButton: Ne,
    HListboxOptions: He,
    HListboxOption: Ue,
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper2 = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper2.value);
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const query = ref("");
    const searchInput = ref();
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(query.value, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    const queryOption = computed(() => {
      return query.value === "" ? null : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(event) {
      var _a;
      if (query.value && ((_a = searchInput.value) == null ? void 0 : _a.$el)) {
        query.value = "";
        searchInput.value.$el.value = "";
      }
      emit("update:modelValue", event);
      emit("change", event);
      emitFormChange();
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      queryOption,
      query,
      onUpdate
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_1$1;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled || _ctx.loading,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled || _ctx.loading,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.modelValue.length)} selected</span>`);
                  } else if (!_ctx.multiple && _ctx.modelValue) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute])}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled || _ctx.loading,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.modelValue.length) + " selected", 3)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 3)) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    ref: "searchInput",
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: ($event) => _ctx.query = $event.target.value
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.queryOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.queryOption,
                          active,
                          selected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.queryOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.queryOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    ref: "searchInput",
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: ($event) => _ctx.query = $event.target.value
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                key: 1,
                                ref_for: true
                              }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.queryOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.queryOption,
                            active,
                            selected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled || _ctx.loading,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.modelValue.length) + " selected", 3)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(["string", "number"].includes(typeof _ctx.modelValue) ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 3)) : (openBlock(), createBlock("span", {
                      key: 2,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => [
                      _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                        key: 0,
                        ref: "searchInput",
                        "display-value": () => _ctx.query,
                        name: "q",
                        placeholder: _ctx.searchablePlaceholder,
                        autofocus: "",
                        autocomplete: "off",
                        class: _ctx.uiMenu.input,
                        onChange: ($event) => _ctx.query = $event.target.value
                      }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: index,
                          as: "template",
                          value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                          disabled: option.disabled
                        }, {
                          default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option,
                                  active,
                                  selected
                                }, () => [
                                  option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: option.icon,
                                    class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                    key: 1,
                                    ref_for: true
                                  }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                    class: _ctx.uiMenu.option.avatar.base,
                                    "aria-hidden": "true"
                                  }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: _ctx.uiMenu.option.chip.base,
                                    style: { background: `#${option.chip}` }
                                  }, null, 6)) : createCommentVNode("", true),
                                  createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : option[_ctx.optionAttribute]), 1)
                                ])
                              ], 2),
                              selected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                              }, [
                                createVNode(_component_UIcon, {
                                  name: _ctx.selectedIcon,
                                  class: _ctx.uiMenu.option.selectedIcon.base,
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      _ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                        key: 1,
                        value: _ctx.queryOption,
                        as: "template"
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.queryOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ]),
                        _: 3
                      }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: _ctx.uiMenu.option.empty
                      }, [
                        renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                          createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=SelectMenu-DqIV9qnj.mjs.map
