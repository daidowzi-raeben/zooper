import { cloneVNode, h as h$2, Fragment, provide, inject, watchEffect, computed, ref, defineComponent, onMounted, onUnmounted, watch, Teleport, reactive, unref, shallowRef, nextTick, normalizeClass, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, toRef, useSSRContext, toDisplayString, renderList } from "vue";
import { _ as _export_sfc, e as useUI, m as mergeConfig, f as appConfig } from "../server.mjs";
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as __nuxt_component_1 } from "./Input-h0eT_qab.js";
import { _ as __nuxt_component_0$1 } from "./Button-DRBuhPYJ.js";
import { _ as __nuxt_component_0$2 } from "./Select-DCsIHfuX.js";
import { a as apiPost } from "./api-D3jlul4Q.js";
import * as XLSX from "xlsx/dist/xlsx.full.min.js";
import "vue-qrcode-reader";
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
import "axios";
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right overflow-hidden flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
function u$3(r, n2, ...a2) {
  if (r in n2) {
    let e2 = n2[r];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$3), t2;
}
var N$3 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$3 || {}), S$2 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S$2 || {});
function H$1({ visible: r = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r || t2 & 2 && n2.static)
    return y$2(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$3(d2, { [0]() {
      return null;
    }, [1]() {
      return y$2({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$2(l2);
}
function y$2({ props: r, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b$1(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v$1(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s2) => s2.trim()).filter((s2, g2, R2) => R2.indexOf(s2) === g2).sort((s2, g2) => s2.localeCompare(g2)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2), f2 = cloneVNode(u2, p2);
      for (let s2 in p2)
        s2.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s2] = p2[s2]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$2(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b$1(r) {
  return r.flatMap((t2) => t2.type === Fragment ? b$1(t2.children) : [t2]);
}
function j(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t2 = {}, e2 = {};
  for (let i2 of r)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function T$1(r, t2 = []) {
  let e2 = Object.assign({}, r);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v$1(r) {
  return r == null ? false : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
let e$1 = 0;
function n$3() {
  return ++e$1;
}
function t$3() {
  return n$3();
}
var o$2 = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o$2 || {});
function o$1(n2) {
  var l2;
  return n2 == null || n2.value == null ? null : (l2 = n2.value.$el) != null ? l2 : n2.value;
}
let n$2 = Symbol("Context");
var l$2 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(l$2 || {});
function C$1() {
  return p$3() !== null;
}
function p$3() {
  return inject(n$2, null);
}
function c$3(o2) {
  provide(n$2, o2);
}
var i$1 = Object.defineProperty;
var d$3 = (t2, e2, r) => e2 in t2 ? i$1(t2, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t2[e2] = r;
var n$1 = (t2, e2, r) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, r), r);
class s {
  constructor() {
    n$1(this, "current", this.detect());
    n$1(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
}
let c$2 = new s();
function m$3(r) {
  if (c$2.isServer)
    return null;
  if (r instanceof Node)
    return r.ownerDocument;
  if (r != null && r.hasOwnProperty("value")) {
    let n2 = o$1(r);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$2 || {}), T = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T || {}), F$2 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$2 || {});
function E$3(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$1)).sort((r, t2) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h$1 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h$1 || {});
function w$2(e2, r = 0) {
  var t2;
  return e2 === ((t2 = m$3(e2)) == null ? void 0 : t2.body) ? false : u$3(r, { [0]() {
    return e2.matches(c$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H = ["textarea", "input"].join(",");
function I(e2) {
  var r, t2;
  return (t2 = (r = e2 == null ? void 0 : e2.matches) == null ? void 0 : r.call(e2, H)) != null ? t2 : false;
}
function O(e2, r = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r(t2), i2 = r(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P$1(e2, r, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$3(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s2) => !o2.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r & 5)
      return 1;
    if (r & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r & 1)
      return 0;
    if (r & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0)
      return 0;
    let s2 = p2 + a2;
    if (r & 16)
      s2 = (s2 + d2) % d2;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= d2)
        return 1;
    }
    u2 = n2[s2], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r & 6 && I(u2) && u2.select(), 2;
}
function u$2(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$1(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function y(f2, c2, i2 = computed(() => true)) {
  function a2(e2, r) {
    if (!i2.value || e2.defaultPrevented)
      return;
    let t2 = r(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let m2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of m2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$1(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$2(t2, h$1.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), c2(e2, t2);
  }
  let u2 = ref(null);
  u$2("pointerdown", (e2) => {
    var r, t2;
    i2.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("mousedown", (e2) => {
    var r, t2;
    i2.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$2("click", (e2) => {
    u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$2("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$1("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
var a$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(a$2 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r, { slots: t2, attrs: d2 }) {
  return () => {
    let { features: e2, ...o2 } = r, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return H$1({ ourProps: n2, theirProps: o2, slot: {}, attrs: d2, slots: t2, name: "Hidden" });
  };
} });
function t$2() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o() {
  let a2 = [], s2 = { addEventListener(e2, t2, r, i2) {
    return e2.addEventListener(t2, r, i2), s2.add(() => e2.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s2.requestAnimationFrame(() => {
      s2.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e2[0]();
    }), s2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r of a2.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s2;
}
var d$2 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$2 || {});
function n() {
  let o2 = ref(0);
  return w$1("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function E$2(n2, e2, o2, r) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
function B(e2) {
  if (!e2)
    return /* @__PURE__ */ new Set();
  if (typeof e2 == "function")
    return new Set(e2());
  let t2 = /* @__PURE__ */ new Set();
  for (let l2 of e2.value) {
    let o2 = o$1(l2);
    o2 instanceof HTMLElement && t2.add(o2);
  }
  return t2;
}
var A = ((n2) => (n2[n2.None = 1] = "None", n2[n2.InitialFocus = 2] = "InitialFocus", n2[n2.TabLock = 4] = "TabLock", n2[n2.FocusLock = 8] = "FocusLock", n2[n2.RestoreFocus = 16] = "RestoreFocus", n2[n2.All = 30] = "All", n2))(A || {});
let ce$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e2, { attrs: t2, slots: l2, expose: o2 }) {
  let r = ref(null);
  o2({ el: r, $el: r });
  let i2 = computed(() => m$3(r)), n$12 = ref(false);
  onMounted(() => n$12.value = true), onUnmounted(() => n$12.value = false), z({ ownerDocument: i2 }, computed(() => n$12.value && Boolean(e2.features & 16)));
  let m2 = J({ ownerDocument: i2, container: r, initialFocus: computed(() => e2.initialFocus) }, computed(() => n$12.value && Boolean(e2.features & 2)));
  Q$1({ ownerDocument: i2, container: r, containers: e2.containers, previousActiveElement: m2 }, computed(() => n$12.value && Boolean(e2.features & 8)));
  let c2 = n();
  function u2(a2) {
    let d2 = o$1(r);
    if (!d2)
      return;
    ((g2) => g2())(() => {
      u$3(c2.value, { [d$2.Forwards]: () => {
        P$1(d2, N$2.First, { skipElements: [a2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P$1(d2, N$2.Last, { skipElements: [a2.relatedTarget] });
      } });
    });
  }
  let s2 = ref(false);
  function H2(a2) {
    a2.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
      s2.value = false;
    }));
  }
  function M2(a2) {
    if (!n$12.value)
      return;
    let d2 = B(e2.containers);
    o$1(r) instanceof HTMLElement && d2.add(o$1(r));
    let E2 = a2.relatedTarget;
    E2 instanceof HTMLElement && E2.dataset.headlessuiFocusGuard !== "true" && (N$1(d2, E2) || (s2.value ? P$1(o$1(r), u$3(c2.value, { [d$2.Forwards]: () => N$2.Next, [d$2.Backwards]: () => N$2.Previous }) | N$2.WrapAround, { relativeTo: a2.target }) : a2.target instanceof HTMLElement && S$1(a2.target)));
  }
  return () => {
    let a2 = {}, d2 = { ref: r, onKeydown: H2, onFocusout: M2 }, { features: E2, initialFocus: g2, containers: X, ...O2 } = e2;
    return h$2(Fragment, [Boolean(E2 & 4) && h$2(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable }), H$1({ ourProps: d2, theirProps: { ...t2, ...O2 }, slot: a2, attrs: t2, slots: l2, name: "FocusTrap" }), Boolean(E2 & 4) && h$2(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable })]);
  };
} }), { features: A }), L$2 = [];
function x(e2) {
  let t2 = ref(L$2.slice());
  return watch([e2], ([l2], [o2]) => {
    o2 === true && l2 === false ? t$1(() => {
      t2.value.splice(0);
    }) : o2 === false && l2 === true && (t2.value = L$2.slice());
  }, { flush: "post" }), () => {
    var l2;
    return (l2 = t2.value.find((o2) => o2 != null && o2.isConnected)) != null ? l2 : null;
  };
}
function z({ ownerDocument: e2 }, t2) {
  let l2 = x(t2);
  onMounted(() => {
    watchEffect(() => {
      var o2, r;
      t2.value || ((o2 = e2.value) == null ? void 0 : o2.activeElement) === ((r = e2.value) == null ? void 0 : r.body) && S$1(l2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    t2.value && S$1(l2());
  });
}
function J({ ownerDocument: e2, container: t2, initialFocus: l2 }, o2) {
  let r = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([t2, l2, o2], (n2, m2) => {
      if (n2.every((u2, s2) => (m2 == null ? void 0 : m2[s2]) === u2) || !o2.value)
        return;
      let c2 = o$1(t2);
      c2 && t$1(() => {
        var H2, M2;
        if (!i2.value)
          return;
        let u2 = o$1(l2), s2 = (H2 = e2.value) == null ? void 0 : H2.activeElement;
        if (u2) {
          if (u2 === s2) {
            r.value = s2;
            return;
          }
        } else if (c2.contains(s2)) {
          r.value = s2;
          return;
        }
        u2 ? S$1(u2) : P$1(c2, N$2.First | N$2.NoScroll) === T.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (M2 = e2.value) == null ? void 0 : M2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r;
}
function Q$1({ ownerDocument: e2, container: t2, containers: l2, previousActiveElement: o2 }, r) {
  var i2;
  E$2((i2 = e2.value) == null ? void 0 : i2.defaultView, "focus", (n2) => {
    if (!r.value)
      return;
    let m2 = B(l2);
    o$1(t2) instanceof HTMLElement && m2.add(o$1(t2));
    let c2 = o2.value;
    if (!c2)
      return;
    let u2 = n2.target;
    u2 && u2 instanceof HTMLElement ? N$1(m2, u2) ? (o2.value = u2, S$1(u2)) : (n2.preventDefault(), n2.stopPropagation(), S$1(c2)) : S$1(o2.value);
  }, true);
}
function N$1(e2, t2) {
  for (let l2 of e2)
    if (l2.contains(t2))
      return true;
  return false;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E$1(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$1(d2);
    if (!e2)
      return;
    o2(function() {
      var u2;
      if (!e2)
        return;
      let r = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e2) : t.set(e2, r - 1), r !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
let e = Symbol("ForcePortalRootContext");
function u$1() {
  return inject(e, false);
}
let P = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return H$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
function E(t2) {
  let e2 = m$3(t2);
  if (!e2) {
    if (t2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t2}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let r = e2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(r);
}
let U = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t2, { slots: e2, attrs: u2 }) {
  let r = ref(null), i2 = computed(() => m$3(r)), l2 = u$1(), n2 = inject(h, null), o2 = ref(l2 === true || n2 == null ? E(r.value) : n2.resolveTarget());
  watchEffect(() => {
    l2 || n2 != null && (o2.value = n2.resolveTarget());
  });
  let d2 = inject(f, null);
  return onMounted(() => {
    let a2 = o$1(r);
    a2 && d2 && onUnmounted(d2.register(a2));
  }), onUnmounted(() => {
    var v2, P2;
    let a2 = (v2 = i2.value) == null ? void 0 : v2.getElementById("headlessui-portal-root");
    a2 && o2.value === a2 && o2.value.children.length <= 0 && ((P2 = o2.value.parentElement) == null || P2.removeChild(o2.value));
  }), () => {
    if (o2.value === null)
      return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h$2(Teleport, { to: o2.value }, H$1({ ourProps: a2, theirProps: t2, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} }), f = Symbol("PortalParentContext");
function V() {
  let t2 = inject(f, null), e2 = ref([]);
  function u2(l2) {
    return e2.value.push(l2), t2 && t2.register(l2), () => r(l2);
  }
  function r(l2) {
    let n2 = e2.value.indexOf(l2);
    n2 !== -1 && e2.value.splice(n2, 1), t2 && t2.unregister(l2);
  }
  let i2 = { register: u2, unregister: r, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
    return provide(f, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let h = Symbol("PortalGroupContext"), _ = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t2, { attrs: e2, slots: u2 }) {
  let r = reactive({ resolveTarget() {
    return t2.target;
  } });
  return provide(h, r), () => {
    let { target: i2, ...l2 } = t2;
    return H$1({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
let u = Symbol("StackContext");
var p$2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(p$2 || {});
function v() {
  return inject(u, () => {
  });
}
function S({ type: o2, enabled: r, element: e2, onUpdate: i2 }) {
  let a2 = v();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e2);
  }), provide(u, t2);
}
let p$1 = Symbol("DescriptionContext");
function b() {
  let t2 = inject(p$1, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function M$1({ slot: t2 = ref({}), name: i2 = "Description", props: o2 = {} } = {}) {
  let e2 = ref([]);
  function s2(n2) {
    return e2.value.push(n2), () => {
      let r = e2.value.indexOf(n2);
      r !== -1 && e2.value.splice(r, 1);
    };
  }
  return provide(p$1, { register: s2, slot: t2, name: i2, props: o2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t$3()}` } }, setup(t2, { attrs: i2, slots: o2 }) {
  let e2 = b();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: s2 = "Description", slot: n2 = ref({}), props: r = {} } = e2, { id: d2, ...l2 } = t2, c2 = { ...Object.entries(r).reduce((f2, [a2, g2]) => Object.assign(f2, { [a2]: unref(g2) }), {}), id: d2 };
    return H$1({ ourProps: c2, theirProps: l2, slot: n2.value, attrs: i2, slots: o2, name: s2 });
  };
} });
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w() {
  if (!t$2())
    return {};
  let r;
  return { before() {
    r = (void 0).pageYOffset;
  }, after({ doc: n2, d: o$12, meta: s2 }) {
    function i2(e2) {
      return s2.containers.flatMap((t2) => t2()).some((t2) => t2.contains(e2));
    }
    if ((void 0).getComputedStyle(n2.documentElement).scrollBehavior !== "auto") {
      let e2 = o();
      e2.style(n2.documentElement, "scroll-behavior", "auto"), o$12.add(() => o$12.microTask(() => e2.dispose()));
    }
    o$12.style(n2.body, "marginTop", `-${r}px`), (void 0).scrollTo(0, 0);
    let l2 = null;
    o$12.addEventListener(n2, "click", (e2) => {
      if (e2.target instanceof HTMLElement)
        try {
          let t2 = e2.target.closest("a");
          if (!t2)
            return;
          let { hash: c2 } = new URL(t2.href), a2 = n2.querySelector(c2);
          a2 && !i2(a2) && (l2 = a2);
        } catch {
        }
    }, true), o$12.addEventListener(n2, "touchmove", (e2) => {
      e2.target instanceof HTMLElement && !i2(e2.target) && e2.preventDefault();
    }, { passive: false }), o$12.add(() => {
      (void 0).scrollTo(0, (void 0).pageYOffset + r), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
    });
  } };
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o$12;
  let t2 = (o$12 = this.get(e2)) != null ? o$12 : { doc: e2, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r], o2) => {
    if (!e2 || !m2)
      return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
function p({ defaultContainers: t2 = [], portals: o2, mainTreeNodeRef: s2 } = {}) {
  let i2 = ref(null), r = m$3(i2);
  function u2() {
    var l2;
    let n2 = [];
    for (let e2 of t2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (o2 != null && o2.value)
      for (let e2 of o2.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(i2)) || n2.some((c2) => e2.contains(c2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: i2, MainTreeNode() {
    return s2 != null ? null : h$2(f$1, { features: a$2.Hidden, ref: i2 });
  } };
}
var Oe = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(Oe || {});
let F$1 = Symbol("DialogContext");
function C(o2) {
  let n2 = inject(F$1, null);
  if (n2 === null) {
    let t2 = new Error(`<${o2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, C), t2;
  }
  return n2;
}
let M = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ue = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: M }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t$3()}` } }, emits: { close: (o2) => true }, setup(o2, { emit: n2, attrs: t2, slots: u2, expose: i2 }) {
  var N2;
  let r = ref(false);
  onMounted(() => {
    r.value = true;
  });
  let s2 = ref(0), p$12 = p$3(), m2 = computed(() => o2.open === M && p$12 !== null ? (p$12.value & l$2.Open) === l$2.Open : o2.open), v2 = ref(null), T2 = computed(() => m$3(v2));
  if (i2({ el: v2, $el: v2 }), !(o2.open !== M || p$12 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m2.value === M ? void 0 : o2.open}`);
  let c2 = computed(() => r.value && m2.value ? 0 : 1), R2 = computed(() => c2.value === 0), E2 = computed(() => s2.value > 1), $ = inject(F$1, null) !== null, [G, V$1] = V(), { resolveContainers: x2, mainTreeNodeRef: j2, MainTreeNode: W2 } = p({ portals: G, defaultContainers: [computed(() => {
    var e2;
    return (e2 = y$12.panelRef.value) != null ? e2 : v2.value;
  })] }), J2 = computed(() => E2.value ? "parent" : "leaf"), H2 = computed(() => p$12 !== null ? (p$12.value & l$2.Closing) === l$2.Closing : false), Q2 = computed(() => $ || H2.value ? false : R2.value), X = computed(() => {
    var e2, l2, f2;
    return (f2 = Array.from((l2 = (e2 = T2.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? l2 : []).find((d2) => d2.id === "headlessui-portal-root" ? false : d2.contains(o$1(j2)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E$1(X, Q2);
  let Z = computed(() => E2.value ? true : R2.value), ee = computed(() => {
    var e2, l2, f2;
    return (f2 = Array.from((l2 = (e2 = T2.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? l2 : []).find((d2) => d2.contains(o$1(j2)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E$1(ee, Z), S({ type: "Dialog", enabled: computed(() => c2.value === 0), element: v2, onUpdate: (e2, l2) => {
    if (l2 === "Dialog")
      return u$3(e2, { [p$2.Add]: () => s2.value += 1, [p$2.Remove]: () => s2.value -= 1 });
  } });
  let te = M$1({ name: "DialogDescription", slot: computed(() => ({ open: m2.value })) }), k = ref(null), y$12 = { titleId: k, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    k.value !== e2 && (k.value = e2);
  }, close() {
    n2("close", false);
  } };
  provide(F$1, y$12);
  let le = computed(() => !(!R2.value || E2.value));
  y(x2, (e2, l2) => {
    y$12.close(), nextTick(() => l2 == null ? void 0 : l2.focus());
  }, le);
  let oe = computed(() => !(E2.value || c2.value !== 0));
  E$2((N2 = T2.value) == null ? void 0 : N2.defaultView, "keydown", (e2) => {
    oe.value && (e2.defaultPrevented || e2.key === o$2.Escape && (e2.preventDefault(), e2.stopPropagation(), y$12.close()));
  });
  let re = computed(() => !(H2.value || c2.value !== 0 || $));
  return d$1(T2, re, (e2) => {
    var l2;
    return { containers: [...(l2 = e2.containers) != null ? l2 : [], x2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0)
      return;
    let l2 = o$1(v2);
    if (!l2)
      return;
    let f2 = new ResizeObserver((d2) => {
      for (let A2 of d2) {
        let D = A2.target.getBoundingClientRect();
        D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && y$12.close();
      }
    });
    f2.observe(l2), e2(() => f2.disconnect());
  }), () => {
    let { id: e2, open: l2, initialFocus: f2, ...d2 } = o2, A2 = { ...t2, ref: v2, id: e2, role: "dialog", "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": k.value, "aria-describedby": te.value }, D = { open: c2.value === 0 };
    return h$2(P, { force: true }, () => [h$2(U, () => h$2(_, { target: v2.value }, () => h$2(P, { force: false }, () => h$2(ce$1, { initialFocus: f2, containers: x2, features: R2.value ? u$3(J2.value, { parent: ce$1.features.RestoreFocus, leaf: ce$1.features.All & ~ce$1.features.FocusLock }) : ce$1.features.None }, () => h$2(V$1, {}, () => H$1({ ourProps: A2, theirProps: { ...d2, ...t2 }, slot: D, attrs: t2, slots: u2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h$2(W2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t$3()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
  let u2 = C("DialogOverlay");
  function i2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), u2.close());
  }
  return () => {
    let { id: r, ...s2 } = o2;
    return H$1({ ourProps: { id: r, "aria-hidden": true, onClick: i2 }, theirProps: s2, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t$3()}` } }, inheritAttrs: false, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogBackdrop"), r = ref(null);
  return u2({ el: r, $el: r }), onMounted(() => {
    if (i2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s2, ...p2 } = o2, m2 = { id: s2, ref: r, "aria-hidden": true };
    return h$2(P, { force: true }, () => h$2(U, () => H$1({ ourProps: m2, theirProps: { ...n2, ...p2 }, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t$3()}` } }, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogPanel");
  u2({ el: i2.panelRef, $el: i2.panelRef });
  function r(s2) {
    s2.stopPropagation();
  }
  return () => {
    let { id: s2, ...p2 } = o2, m2 = { id: s2, ref: i2.panelRef, onClick: r };
    return H$1({ ourProps: m2, theirProps: p2, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t$3()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
  let u2 = C("DialogTitle");
  return onMounted(() => {
    u2.setTitleId(o2.id), onUnmounted(() => u2.setTitleId(null));
  }), () => {
    let { id: i2, ...r } = o2;
    return H$1({ ourProps: { id: i2 }, theirProps: r, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s2] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s2) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s2 = o(), o$12 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s2.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s2.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o$12(u2))));
  }), s2.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s2.add(() => o$12("cancelled")), s2.dispose;
}
function g(e2 = "") {
  return e2.split(" ").filter((t2) => t2.trim().length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s2(n2, r = S$2.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$3(r, { [S$2.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S$2.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s2(n2, S$2.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2, expose: h2 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= l$2.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~l$2.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= l$2.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~l$2.Closing, t2("afterLeave");
  }
  if (!me() && C$1())
    return () => h$2(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s2);
  let d2 = ref(null), b2 = computed(() => e2.unmount ? S$2.Unmount : S$2.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = t$3(), y2 = { value: false }, P2 = Q(() => {
    !y2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (b2.value === S$2.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$3(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I2.value && !A2.value, p2 = o$1(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (y2.value = true, v2.value && r(), v2.value || f2(), o2(v2.value ? L$1(p2, j2, M2, X, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te(p2), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), c$3(computed(() => u$3(i2.value, { ["visible"]: l$2.Open, ["hidden"]: l$2.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V2, enterTo: Ce, entered: be, leave: ye, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$2.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return H$1({ theirProps: re, ourProps: ne, slot: {}, slots: s2, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2 }) {
  let h2 = p$3(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & l$2.Open) === l$2.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b2 = { unmount: e2.unmount };
    return H$1({ ourProps: { ...b2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h$2(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...b2, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$1 = defineComponent({
  components: {
    HDialog: Ue,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      isOpen.value = value;
      emit("close");
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      close
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template"
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, {
          onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
        }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, {
            onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
          }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  components: {
    QrcodeStream: () => import("vue-qrcode-reader").then((m2) => m2.QrcodeStream)
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const GenerateUUID = () => {
      const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i2 = 0; i2 < 10; i2++) {
        const r = Math.floor(Math.random() * chars.length);
        result += chars[r];
      }
      return result;
    };
    ref(false);
    ref("");
    const teacherInfo = ref({});
    const points = ref([]);
    ref(1);
    ref(false);
    ref(true);
    const studentOptions = ref([]);
    const selectedStudent = ref(null);
    const selectedStudentName = ref(null);
    ref(null);
    ref(0);
    const saveClassSettings = async () => {
      const res = await apiPost("teacher.php", {
        mode: "updateInfo",
        idnt_code: sessionStorage.getItem("t_idnt_code"),
        class_name: teacherInfo.value.class_name || "",
        currency_name: teacherInfo.value.currency_name || "",
        deposit_cycle: teacherInfo.value.deposit_cycle || "",
        deposit_interest: teacherInfo.value.deposit_interest || "",
        deposit_amount: teacherInfo.value.deposit_amount || "",
        // 🔽 여기에 추가
        deposit_min: teacherInfo.value.deposit_min || "",
        deposit_max: teacherInfo.value.deposit_max || ""
      });
      if (res.result === "SUCCESS") {
        alert("저장되었습니다.");
      } else {
        alert("저장에 실패했습니다.");
      }
    };
    const onClickDownload = () => {
      (void 0).open("http://api.school-os.net/jelly/data/class.xlsx");
    };
    const printStudentQR = () => {
      if (!teacherInfo.value.class_name || !teacherInfo.value.currency_name)
        return alert("우리반 설정 완료 후 가능합니다.");
      (void 0).open("https://api.school-os.net/jelly/qr.php?idnt_code=" + sessionStorage.getItem("t_idnt_code"));
    };
    const onClickLogin = () => {
      (void 0).open("/sign/" + selectedStudent.value);
    };
    const isUploadModalOpen = ref(false);
    const uploadedFile = ref(null);
    const handleFileUpload = async (e2) => {
      const file = uploadedFile.value;
      if (!file) {
        alert("파일을 선택해주세요");
        return;
      }
      const reader = new FileReader();
      reader.onload = async (evt) => {
        var _a, _b;
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
        const students = jsonData.map((row) => {
          var _a2;
          return {
            idnt_code: GenerateUUID(),
            // JS에서 UUID 생성하거나 서버에서 처리
            student_name: row["이름"],
            student_grade: row["학년"],
            student_class: row["반"],
            mb_point: row["포인트"] || 0,
            student_number: row["학번"],
            birth_date: row["생년월일"],
            // YYYY-MM-DD 형식
            gender: row["성별"],
            guardian_name: row["보호자"],
            guardian_phone: row["연락처"],
            address: row["주소"],
            teacher: (_a2 = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _a2.idx,
            pay_name: row["화폐이름"],
            role_code: null
          };
        }).concat([
          {
            idnt_code: GenerateUUID(),
            student_name: "선생님",
            student_grade: null,
            student_class: null,
            mb_point: 0,
            student_number: 0,
            birth_date: null,
            gender: null,
            guardian_name: null,
            guardian_phone: null,
            address: null,
            teacher: (_a = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _a.idx,
            pay_name: null,
            role_code: "1"
          },
          {
            idnt_code: GenerateUUID(),
            student_name: "관리자",
            student_grade: null,
            student_class: null,
            mb_point: 0,
            student_number: 0,
            birth_date: null,
            gender: null,
            guardian_name: null,
            guardian_phone: null,
            address: null,
            teacher: (_b = JSON.parse(sessionStorage.getItem("teacher"))) == null ? void 0 : _b.idx,
            pay_name: null,
            role_code: "1"
          }
        ]);
        console.log(students);
        try {
          const res = await apiPost("teacher.php", {
            mode: "studentInsert",
            data: students
          });
          if (res.result === "SUCCESS") {
            alert("업로드 성공");
            (void 0).location.reload();
          } else {
            alert(res.message || "업로드 실패");
          }
        } catch (error2) {
          alert("서버 오류 발생");
          console.error(error2);
        }
      };
      reader.readAsArrayBuffer(file);
    };
    const onClickUpload = () => {
      isUploadModalOpen.value = true;
    };
    const onFileChange = (e2) => {
      uploadedFile.value = e2.target.files[0];
    };
    const isHistoryModalOpen = ref(false);
    const historyTitle = ref("");
    const historyList = ref([]);
    const openHistoryModal = async (type) => {
      historyTitle.value = type === "tax" ? "세금 내역" : "벌금 내역";
      const res = await apiPost("bank.php", {
        mode: "historyByType",
        idnt_code: sessionStorage.getItem("t_idnt_code"),
        type
        // 'tax' or 'penalty'
      });
      historyList.value = res.data || [];
      isHistoryModalOpen.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_UModal = __nuxt_component_0;
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_0$1;
      const _component_USelect = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isUploadModalOpen.value,
        "onUpdate:modelValue": ($event) => isUploadModalOpen.value = $event
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 space-y-4"${_scopeId}><h2 class="text-lg font-bold"${_scopeId}>엑셀 업로드</h2>`);
            _push2(ssrRenderComponent(_component_UInput, {
              type: "file",
              accept: ".xls,.xlsx",
              onChange: onFileChange
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "취소",
              color: "gray",
              onClick: ($event) => isUploadModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "업로드",
              color: "blue",
              onClick: handleFileUpload
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 space-y-4" }, [
                createVNode("h2", { class: "text-lg font-bold" }, "엑셀 업로드"),
                createVNode(_component_UInput, {
                  type: "file",
                  accept: ".xls,.xlsx",
                  onChange: onFileChange
                }),
                createVNode("div", { class: "flex justify-end gap-2" }, [
                  createVNode(_component_UButton, {
                    label: "취소",
                    color: "gray",
                    onClick: ($event) => isUploadModalOpen.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    label: "업로드",
                    color: "blue",
                    onClick: handleFileUpload
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-4"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "엑셀샘플 다운로드",
        color: "gray",
        onClick: onClickDownload
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "엑셀업로드",
        color: "gray",
        onClick: onClickUpload
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "학생 QR카드 인쇄하기",
        color: "gray",
        onClick: printStudentQR
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "초기화",
        color: "red",
        onClick: printStudentQR,
        style: { "margin-left": "auto" }
      }, null, _parent));
      _push(`</div><div class="flex justify-between items-center"><p class="text-lg font-semibold text-gray-700">${ssrInterpolate((_a = teacherInfo.value) == null ? void 0 : _a.mb_name)} 선생님, 환영합니다 👋</p><button class="flex items-center gap-2 bg-white text-red-500 border border-red-300 px-3 py-1 rounded-full shadow-sm hover:bg-red-50 transition"><span class="i-heroicons-arrow-right-on-rectangle w-4 h-4"></span> 로그아웃 </button></div><div class="col-span-2 rounded-2xl shadow-md p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">국고 잔액</p><p class="text-2xl font-bold"><span> 💰 ${ssrInterpolate(Number(((_b = teacherInfo.value) == null ? void 0 : _b.mb_point) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">${ssrInterpolate((_c = teacherInfo.value) == null ? void 0 : _c.currency_name)}</span></span></p></div></div><div class="flex gap-4 mt-4"><div class="flex-1 rounded-2xl shadow-md p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">누적 세금</p><p class="text-2xl font-bold"> 🧾 ${ssrInterpolate(Number(((_d = teacherInfo.value) == null ? void 0 : _d.tax) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">${ssrInterpolate((_e = teacherInfo.value) == null ? void 0 : _e.currency_name)}</span></p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "내역",
        color: "white",
        class: "text-orange-800 bg-white bg-opacity-90 hover:bg-opacity-100",
        onClick: ($event) => openHistoryModal("tax")
      }, null, _parent));
      _push(`</div><div class="flex-1 rounded-2xl shadow-md p-4 bg-gradient-to-r from-red-400 to-rose-500 text-white flex justify-between items-center"><div class="flex flex-col justify-center"><p class="text-sm opacity-80">누적 벌금</p><p class="text-2xl font-bold"> 🚨 ${ssrInterpolate(Number(((_f = teacherInfo.value) == null ? void 0 : _f.penalty) || 0).toLocaleString())} <span class="text-sm font-normal align-middle">${ssrInterpolate((_g = teacherInfo.value) == null ? void 0 : _g.currency_name)}</span></p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "내역",
        color: "white",
        class: "text-rose-800 bg-white bg-opacity-90 hover:bg-opacity-100",
        onClick: ($event) => openHistoryModal("penalty")
      }, null, _parent));
      _push(`</div></div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-10"><div class="space-y-2 mb-10"><p class="text-lg font-semibold text-gray-700">우리반 설정</p><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.class_name,
        "onUpdate:modelValue": ($event) => teacherInfo.value.class_name = $event,
        placeholder: "학급명 (예: 젤리)",
        class: "flex-1",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.currency_name,
        "onUpdate:modelValue": ($event) => teacherInfo.value.currency_name = $event,
        placeholder: "화폐이름 (예: 젤리코인)",
        class: "flex-1",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "저장",
        color: "blue",
        onClick: saveClassSettings,
        size: "lg"
      }, null, _parent));
      _push(`</div></div><div class="space-y-2 mb-10"><div class="flex items-center gap-2"><p class="text-lg font-semibold text-gray-700">적금 설정</p><div class="relative group"><span class="cursor-pointer text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-0.5 text-xs font-bold">?</span><div class="absolute z-10 hidden group-hover:block bg-white text-gray-800 text-xs p-2 rounded shadow-lg top-full left-0 mt-1 w-64"> 2주 또는 4주 만기의 적금을 설정할 수 있습니다. 설정한 금액은 1회만 입금되며, 만기 시 설정한 이율에 따라 원금과 이자가 함께 지급됩니다. </div></div></div><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: teacherInfo.value.deposit_cycle,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_cycle = $event,
        options: [
          { label: "사용안함", value: "" },
          { label: "2주 적금", value: "2" },
          { label: "4주 적금", value: "4" }
        ],
        placeholder: "적금 주기 선택",
        class: "w-40",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.deposit_interest,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_interest = $event,
        placeholder: "이율 (%)",
        class: "w-40",
        type: "number",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.deposit_min,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_min = $event,
        placeholder: "최소 금액",
        type: "number",
        class: "w-40",
        size: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: teacherInfo.value.deposit_max,
        "onUpdate:modelValue": ($event) => teacherInfo.value.deposit_max = $event,
        placeholder: "최대 금액",
        type: "number",
        class: "w-40",
        size: "lg",
        min: teacherInfo.value.deposit_min || 0
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "저장",
        color: "blue",
        onClick: saveClassSettings,
        size: "lg"
      }, null, _parent));
      _push(`</div></div><div class="flex justify-between items-center"><p class="text-lg font-semibold text-gray-700"> 우리반 학생 </p></div><div class="mb-6 flex items-center gap-3"><div class="flex flex-wrap gap-2 mt-4"><!--[-->`);
      ssrRenderList(studentOptions.value, (student) => {
        _push(`<div class="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm cursor-pointer transition">${ssrInterpolate(student.label)}</div>`);
      });
      _push(`<!--]--></div></div><div style="${ssrRenderStyle({ "height": "30px" })}">`);
      if (selectedStudentName.value) {
        _push(ssrRenderComponent(_component_UButton, {
          label: `${selectedStudentName.value} 학생으로 로그인 하기`,
          color: "blue",
          class: "w-full justify-center text-center",
          onClick: onClickLogin
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-10"><h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">최근 입출금내역</h2><div class="space-y-5"><!--[-->`);
      ssrRenderList(points.value, (item) => {
        _push(`<div class="flex items-center gap-4 dark:hover:text-gray-300 group"><span class="text-sm leading-none">${ssrInterpolate(item.description)} (${ssrInterpolate(item.point_type === "save" ? "+" : "-")}${ssrInterpolate(item.point.toLocaleString())}P) </span><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700 mt-1.5"></div><span class="text-xs text-gray-500 leading-none">${ssrInterpolate(item.c_datetime)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isHistoryModalOpen.value,
        "onUpdate:modelValue": ($event) => isHistoryModalOpen.value = $event
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 space-y-4"${_scopeId}><h2 class="text-lg font-bold"${_scopeId}>${ssrInterpolate(historyTitle.value)}</h2>`);
            if (historyList.value.length === 0) {
              _push2(`<div class="text-gray-500 text-sm"${_scopeId}>내역이 없습니다.</div>`);
            } else {
              _push2(`<ul class="space-y-2 max-h-60 overflow-auto text-sm"${_scopeId}><!--[-->`);
              ssrRenderList(historyList.value, (item) => {
                _push2(`<li class="flex justify-between border-b pb-1"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.description)}</span><span${_scopeId}>${ssrInterpolate(item.point.toLocaleString())}P</span></li>`);
              });
              _push2(`<!--]--></ul>`);
            }
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "닫기",
              color: "gray",
              onClick: ($event) => isHistoryModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 space-y-4" }, [
                createVNode("h2", { class: "text-lg font-bold" }, toDisplayString(historyTitle.value), 1),
                historyList.value.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-gray-500 text-sm"
                }, "내역이 없습니다.")) : (openBlock(), createBlock("ul", {
                  key: 1,
                  class: "space-y-2 max-h-60 overflow-auto text-sm"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(historyList.value, (item) => {
                    return openBlock(), createBlock("li", {
                      key: item.idx,
                      class: "flex justify-between border-b pb-1"
                    }, [
                      createVNode("span", null, toDisplayString(item.description), 1),
                      createVNode("span", null, toDisplayString(item.point.toLocaleString()) + "P", 1)
                    ]);
                  }), 128))
                ])),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_UButton, {
                    label: "닫기",
                    color: "gray",
                    onClick: ($event) => isHistoryModalOpen.value = false
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teacher/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CDLpTGFK.js.map
