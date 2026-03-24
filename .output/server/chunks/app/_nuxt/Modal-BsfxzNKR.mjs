import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, toRef, computed, ref, h as h$1, onMounted, onUnmounted, watchEffect, watch, provide, normalizeClass, inject, Teleport, reactive, Fragment, shallowRef, unref, nextTick, useSSRContext } from 'vue';
import { _ as _export_sfc, j as useUI, m as mergeConfig, k as appConfig } from '../server.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { C as C$1, S as S$1, t as t$2, u as u$1$1, o as o$1, c as c$2, l as l$2, a as c$1, H as H$1, p as p$3, T as T$1, m as m$3, y, N as N$1$1, f as f$1, b as a$2, d as o, e as S$2, g as t$1, w as w$1, P as P$1, h as N$2, i as T, j as o$2, k as t$1$1 } from './disposables-ze0J46BC.mjs';

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
var d$2 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$2 || {});
function n() {
  let o2 = ref(0);
  return w$1("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function E$2(n2, e2, o2, r) {
  c$1.isServer || watchEffect((t2) => {
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
    let o$12 = o$1(l2);
    o$12 instanceof HTMLElement && t2.add(o$12);
  }
  return t2;
}
var A = ((n2) => (n2[n2.None = 1] = "None", n2[n2.InitialFocus = 2] = "InitialFocus", n2[n2.TabLock = 4] = "TabLock", n2[n2.FocusLock = 8] = "FocusLock", n2[n2.RestoreFocus = 16] = "RestoreFocus", n2[n2.All = 30] = "All", n2))(A || {});
let ce$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e2, { attrs: t2, slots: l2, expose: o$12 }) {
  let r = ref(null);
  o$12({ el: r, $el: r });
  let i2 = computed(() => m$3(r)), n$1 = ref(false);
  onMounted(() => n$1.value = true), onUnmounted(() => n$1.value = false), z({ ownerDocument: i2 }, computed(() => n$1.value && Boolean(e2.features & 16)));
  let m2 = J({ ownerDocument: i2, container: r, initialFocus: computed(() => e2.initialFocus) }, computed(() => n$1.value && Boolean(e2.features & 2)));
  Q$1({ ownerDocument: i2, container: r, containers: e2.containers, previousActiveElement: m2 }, computed(() => n$1.value && Boolean(e2.features & 8)));
  let c2 = n();
  function u2(a2) {
    let d2 = o$1(r);
    if (!d2)
      return;
    ((g2) => g2())(() => {
      u$1$1(c2.value, { [d$2.Forwards]: () => {
        P$1(d2, N$2.First, { skipElements: [a2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P$1(d2, N$2.Last, { skipElements: [a2.relatedTarget] });
      } });
    });
  }
  let s = ref(false);
  function H$1$1(a2) {
    a2.key === "Tab" && (s.value = true, requestAnimationFrame(() => {
      s.value = false;
    }));
  }
  function M2(a2) {
    if (!n$1.value)
      return;
    let d2 = B(e2.containers);
    o$1(r) instanceof HTMLElement && d2.add(o$1(r));
    let E2 = a2.relatedTarget;
    E2 instanceof HTMLElement && E2.dataset.headlessuiFocusGuard !== "true" && (N$1(d2, E2) || (s.value ? P$1(o$1(r), u$1$1(c2.value, { [d$2.Forwards]: () => N$2.Next, [d$2.Backwards]: () => N$2.Previous }) | N$2.WrapAround, { relativeTo: a2.target }) : a2.target instanceof HTMLElement && S$2(a2.target)));
  }
  return () => {
    let a2 = {}, d2 = { ref: r, onKeydown: H$1$1, onFocusout: M2 }, { features: E2, initialFocus: g2, containers: X, ...O } = e2;
    return h$1(Fragment, [Boolean(E2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable }), H$1({ ourProps: d2, theirProps: { ...t2, ...O }, slot: a2, attrs: t2, slots: l2, name: "FocusTrap" }), Boolean(E2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable })]);
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
      t2.value || ((o2 = e2.value) == null ? void 0 : o2.activeElement) === ((r = e2.value) == null ? void 0 : r.body) && S$2(l2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    t2.value && S$2(l2());
  });
}
function J({ ownerDocument: e2, container: t2, initialFocus: l2 }, o$12) {
  let r = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([t2, l2, o$12], (n2, m2) => {
      if (n2.every((u2, s) => (m2 == null ? void 0 : m2[s]) === u2) || !o$12.value)
        return;
      let c2 = o$1(t2);
      c2 && t$1(() => {
        var H2, M2;
        if (!i2.value)
          return;
        let u2 = o$1(l2), s = (H2 = e2.value) == null ? void 0 : H2.activeElement;
        if (u2) {
          if (u2 === s) {
            r.value = s;
            return;
          }
        } else if (c2.contains(s)) {
          r.value = s;
          return;
        }
        u2 ? S$2(u2) : P$1(c2, N$2.First | N$2.NoScroll) === T.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (M2 = e2.value) == null ? void 0 : M2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r;
}
function Q$1({ ownerDocument: e2, container: t2, containers: l2, previousActiveElement: o$12 }, r) {
  var i2;
  E$2((i2 = e2.value) == null ? void 0 : i2.defaultView, "focus", (n2) => {
    if (!r.value)
      return;
    let m2 = B(l2);
    o$1(t2) instanceof HTMLElement && m2.add(o$1(t2));
    let c2 = o$12.value;
    if (!c2)
      return;
    let u2 = n2.target;
    u2 && u2 instanceof HTMLElement ? N$1(m2, u2) ? (o$12.value = u2, S$2(u2)) : (n2.preventDefault(), n2.stopPropagation(), S$2(c2)) : S$2(o$12.value);
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
  watchEffect((o$12) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$1(d2);
    if (!e2)
      return;
    o$12(function() {
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
  let r = ref(null), i2 = computed(() => m$3(r)), l2 = u$1(), n2 = inject(h, null), o$12 = ref(l2 === true || n2 == null ? E(r.value) : n2.resolveTarget());
  watchEffect(() => {
    l2 || n2 != null && (o$12.value = n2.resolveTarget());
  });
  let d2 = inject(f, null);
  return onMounted(() => {
    let a2 = o$1(r);
    a2 && d2 && onUnmounted(d2.register(a2));
  }), onUnmounted(() => {
    var v2, P2;
    let a2 = (v2 = i2.value) == null ? void 0 : v2.getElementById("headlessui-portal-root");
    a2 && o$12.value === a2 && o$12.value.children.length <= 0 && ((P2 = o$12.value.parentElement) == null || P2.removeChild(o$12.value));
  }), () => {
    if (o$12.value === null)
      return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: o$12.value }, H$1({ ourProps: a2, theirProps: t2, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
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
  function s(n2) {
    return e2.value.push(n2), () => {
      let r = e2.value.indexOf(n2);
      r !== -1 && e2.value.splice(r, 1);
    };
  }
  return provide(p$1, { register: s, slot: t2, name: i2, props: o2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t$2()}` } }, setup(t2, { attrs: i2, slots: o2 }) {
  let e2 = b();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: s = "Description", slot: n2 = ref({}), props: r = {} } = e2, { id: d2, ...l2 } = t2, c2 = { ...Object.entries(r).reduce((f2, [a2, g2]) => Object.assign(f2, { [a2]: unref(g2) }), {}), id: d2 };
    return H$1({ ourProps: c2, theirProps: l2, slot: n2.value, attrs: i2, slots: o2, name: s });
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
  }, dispatch(e2, ...s) {
    let i2 = r[e2].call(t2, ...s);
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
  if (!t$1$1())
    return {};
  let r;
  return { before() {
    r = (void 0).pageYOffset;
  }, after({ doc: n2, d: o2, meta: s }) {
    function i2(e2) {
      return s.containers.flatMap((t2) => t2()).some((t2) => t2.contains(e2));
    }
    if ((void 0).getComputedStyle(n2.documentElement).scrollBehavior !== "auto") {
      let e2 = o();
      e2.style(n2.documentElement, "scroll-behavior", "auto"), o2.add(() => o2.microTask(() => e2.dispose()));
    }
    o2.style(n2.body, "marginTop", `-${r}px`), (void 0).scrollTo(0, 0);
    let l2 = null;
    o2.addEventListener(n2, "click", (e2) => {
      if (e2.target instanceof HTMLElement)
        try {
          let t2 = e2.target.closest("a");
          if (!t2)
            return;
          let { hash: c2 } = new URL(t2.href), a2 = n2.querySelector(c2);
          a2 && !i2(a2) && (l2 = a2);
        } catch {
        }
    }, true), o2.addEventListener(n2, "touchmove", (e2) => {
      e2.target instanceof HTMLElement && !i2(e2.target) && e2.preventDefault();
    }, { passive: false }), o2.add(() => {
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
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
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
function p({ defaultContainers: t2 = [], portals: o$12, mainTreeNodeRef: s } = {}) {
  let i2 = ref(null), r = m$3(i2);
  function u2() {
    var l2;
    let n2 = [];
    for (let e2 of t2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (o$12 != null && o$12.value)
      for (let e2 of o$12.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(i2)) || n2.some((c2) => e2.contains(c2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: i2, MainTreeNode() {
    return s != null ? null : h$1(f$1, { features: a$2.Hidden, ref: i2 });
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
let M = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ue = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: M }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t$2()}` } }, emits: { close: (o2) => true }, setup(o$12, { emit: n2, attrs: t2, slots: u2, expose: i2 }) {
  var N2;
  let r = ref(false);
  onMounted(() => {
    r.value = true;
  });
  let s = ref(0), p$12 = p$3(), m2 = computed(() => o$12.open === M && p$12 !== null ? (p$12.value & l$2.Open) === l$2.Open : o$12.open), v2 = ref(null), T2 = computed(() => m$3(v2));
  if (i2({ el: v2, $el: v2 }), !(o$12.open !== M || p$12 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m2.value === M ? void 0 : o$12.open}`);
  let c2 = computed(() => r.value && m2.value ? 0 : 1), R2 = computed(() => c2.value === 0), E2 = computed(() => s.value > 1), $ = inject(F$1, null) !== null, [G, V$1] = V(), { resolveContainers: x2, mainTreeNodeRef: j, MainTreeNode: W2 } = p({ portals: G, defaultContainers: [computed(() => {
    var e2;
    return (e2 = y$1.panelRef.value) != null ? e2 : v2.value;
  })] }), J2 = computed(() => E2.value ? "parent" : "leaf"), H$1$1 = computed(() => p$12 !== null ? (p$12.value & l$2.Closing) === l$2.Closing : false), Q2 = computed(() => $ || H$1$1.value ? false : R2.value), X = computed(() => {
    var e2, l2, f2;
    return (f2 = Array.from((l2 = (e2 = T2.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? l2 : []).find((d2) => d2.id === "headlessui-portal-root" ? false : d2.contains(o$1(j)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E$1(X, Q2);
  let Z = computed(() => E2.value ? true : R2.value), ee = computed(() => {
    var e2, l2, f2;
    return (f2 = Array.from((l2 = (e2 = T2.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? l2 : []).find((d2) => d2.contains(o$1(j)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E$1(ee, Z), S({ type: "Dialog", enabled: computed(() => c2.value === 0), element: v2, onUpdate: (e2, l2) => {
    if (l2 === "Dialog")
      return u$1$1(e2, { [p$2.Add]: () => s.value += 1, [p$2.Remove]: () => s.value -= 1 });
  } });
  let te = M$1({ name: "DialogDescription", slot: computed(() => ({ open: m2.value })) }), k = ref(null), y$1 = { titleId: k, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    k.value !== e2 && (k.value = e2);
  }, close() {
    n2("close", false);
  } };
  provide(F$1, y$1);
  let le = computed(() => !(!R2.value || E2.value));
  y(x2, (e2, l2) => {
    y$1.close(), nextTick(() => l2 == null ? void 0 : l2.focus());
  }, le);
  let oe = computed(() => !(E2.value || c2.value !== 0));
  E$2((N2 = T2.value) == null ? void 0 : N2.defaultView, "keydown", (e2) => {
    oe.value && (e2.defaultPrevented || e2.key === o$2.Escape && (e2.preventDefault(), e2.stopPropagation(), y$1.close()));
  });
  let re = computed(() => !(H$1$1.value || c2.value !== 0 || $));
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
        D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && y$1.close();
      }
    });
    f2.observe(l2), e2(() => f2.disconnect());
  }), () => {
    let { id: e2, open: l2, initialFocus: f2, ...d2 } = o$12, A2 = { ...t2, ref: v2, id: e2, role: "dialog", "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": k.value, "aria-describedby": te.value }, D = { open: c2.value === 0 };
    return h$1(P, { force: true }, () => [h$1(U, () => h$1(_, { target: v2.value }, () => h$1(P, { force: false }, () => h$1(ce$1, { initialFocus: f2, containers: x2, features: R2.value ? u$1$1(J2.value, { parent: ce$1.features.RestoreFocus, leaf: ce$1.features.All & ~ce$1.features.FocusLock }) : ce$1.features.None }, () => h$1(V$1, {}, () => H$1({ ourProps: A2, theirProps: { ...d2, ...t2 }, slot: D, attrs: t2, slots: u2, visible: c2.value === 0, features: N$1$1.RenderStrategy | N$1$1.Static, name: "Dialog" })))))), h$1(W2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t$2()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
  let u2 = C("DialogOverlay");
  function i2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), u2.close());
  }
  return () => {
    let { id: r, ...s } = o2;
    return H$1({ ourProps: { id: r, "aria-hidden": true, onClick: i2 }, theirProps: s, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t$2()}` } }, inheritAttrs: false, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogBackdrop"), r = ref(null);
  return u2({ el: r, $el: r }), onMounted(() => {
    if (i2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s, ...p2 } = o2, m2 = { id: s, ref: r, "aria-hidden": true };
    return h$1(P, { force: true }, () => h$1(U, () => H$1({ ourProps: m2, theirProps: { ...n2, ...p2 }, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t$2()}` } }, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogPanel");
  u2({ el: i2.panelRef, $el: i2.panelRef });
  function r(s) {
    s.stopPropagation();
  }
  return () => {
    let { id: s, ...p2 } = o2, m2 = { id: s, ref: i2.panelRef, onClick: r };
    return H$1({ ourProps: m2, theirProps: p2, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t$2()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
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
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s = o(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s.add(() => o2("cancelled")), s.dispose;
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
  function s(n2, r = S$1.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$1$1(r, { [S$1.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S$1.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s(n2, S$1.Unmount);
  }
  return { children: t2, register: h2, unregister: s };
}
let W = N$1$1.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s, expose: h2 }) {
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
    return () => h$1(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s);
  let d2 = ref(null), b2 = computed(() => e2.unmount ? S$1.Unmount : S$1.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H$1$1 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I = { value: true }, c2 = t$2(), y2 = { value: false }, P2 = Q(() => {
    !y2.value && i2.value !== "hidden" && (i2.value = "hidden", H$1$1(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (b2.value === S$1.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$1$1(i2.value, { ["hidden"]: () => H$1$1(c2), ["visible"]: () => D(c2) });
    }
  });
  let j = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o$12 = o$1(d2);
        if (o$12 instanceof Comment && o$12.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o$12) {
    let E2 = I.value && !A2.value, p2 = o$1(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (y2.value = true, v2.value && r(), v2.value || f2(), o$12(v2.value ? L$1(p2, j, M2, X, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && (L(P2) || (i2.value = "hidden", H$1$1(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te(p2), I.value = false;
    }, { immediate: true });
  }), provide(N, P2), c$2(computed(() => u$1$1(i2.value, { ["visible"]: l$2.Open, ["hidden"]: l$2.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V2, enterTo: Ce, entered: be, leave: ye, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$1.isServer ? { class: normalizeClass([a2.class, U2.class, ...j, ...M2]) } : {} };
    return H$1({ theirProps: re, ourProps: ne, slot: {}, slots: s, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s }) {
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
    return H$1({ ourProps: { ...b2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...b2, ...d2 }, s.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main = defineComponent({
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Modal-BsfxzNKR.mjs.map
