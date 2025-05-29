import { defineComponent, computed, ref, h, resolveComponent, hasInjectionContext, inject, useAttrs, toValue, getCurrentInstance, toRef, isRef, watch, withAsyncContext, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, renderSlot, watchEffect, version, defineAsyncComponent, useSSRContext, provide, shallowReactive, Suspense, nextTick, Transition, createApp, onErrorCaptured, onServerPrefetch, reactive, effectScope, shallowRef, isReadonly, isReactive, toRaw, isShallow, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unctx/dist/index.mjs';
import { getActiveHead } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin, composableNames, unpackMeta } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@unhead/shared/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1, useRouter as useRouter$1 } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-router/dist/vue-router.node.mjs';
import { createError as createError$1, sanitizeStatusCode } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/h3/dist/index.mjs';
import { hasProtocol, joinURL, parseURL, parseQuery, withQuery, isScriptProtocol, withTrailingSlash, withoutTrailingSlash } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ufo/dist/index.mjs';
import { defuFn, defu, createDefu } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/defu/dist/defu.mjs';
import { klona } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/klona/dist/index.mjs';
import { extendTailwindMerge, twMerge, twJoin } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrInterpolate, ssrRenderSuspense, ssrRenderList, ssrRenderClass } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { isEqual } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ohash/dist/index.mjs';
import { Icon as Icon$1 } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/offline.mjs';
import { addAPIProvider, loadIcon } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/iconify.mjs';
import { useFixedHeader } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue-use-fixed-header/dist/index.js';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
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

const appConfig$1 = useRuntimeConfig$1().app;
const baseURL = () => appConfig$1.baseURL;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.9.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn2) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn2)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    if (plugin2.dependsOn && !plugin2.dependsOn.every((name) => resolvedPlugins.includes(name))) {
      unresolvedPlugins.push([new Set(plugin2.dependsOn), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn2 = () => setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn2));
  }
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config2) {
  return config2;
}
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input2, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input2, options);
    return head.push(input2, options);
  }
}
function clientUseHead(head, input2, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input2);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input2, options) {
  const { title, titleTemplate, ...meta } = input2;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const _routes = [
  {
    name: "articles-slug",
    path: "/articles/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_slug_-B11nkZe8.mjs').then((m) => m.default || m)
  },
  {
    name: "articles",
    path: "/articles",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-Ccu9ir7Q.mjs').then((m) => m.default || m)
  },
  {
    name: "bookmarks",
    path: "/bookmarks",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/bookmarks-CsrGiwEn.mjs').then((m) => m.default || m)
  },
  {
    name: "expense",
    path: "/expense",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/expense-BkTglhhF.mjs').then((m) => m.default || m)
  },
  {
    name: "income",
    path: "/income",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/income-SKUJ3EI2.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-Dg_ZXdML.mjs').then((m) => m.default || m)
  },
  {
    name: "lab",
    path: "/lab",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/lab-Ch6jHTxq.mjs').then((m) => m.default || m)
  },
  {
    name: "login",
    path: "/login",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/login-Ezyb6znk.mjs').then((m) => m.default || m)
  },
  {
    name: "penalty",
    path: "/penalty",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/penalty-DmRw4ezq.mjs').then((m) => m.default || m)
  },
  {
    name: "projects",
    path: "/projects",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/projects-7cLP3yBB.mjs').then((m) => m.default || m)
  },
  {
    name: "sign-id",
    path: "/sign/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_id_-9n8P3Pov.mjs').then((m) => m.default || m)
  },
  {
    name: "tax",
    path: "/tax",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/tax-BPN_aJNt.mjs').then((m) => m.default || m)
  },
  {
    name: "teacher-id",
    path: "/teacher/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_id_-CokJ1VvY.mjs').then((m) => m.default || m)
  },
  {
    name: "teacher",
    path: "/teacher",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-BkAikQy_.mjs').then((m) => m.default || m)
  },
  {
    name: "transfer",
    path: "/transfer",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/transfer-BLoqfrQP.mjs').then((m) => m.default || m)
  },
  {
    name: "whats-in-my-bag",
    path: "/whats-in-my-bag",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/whats-in-my-bag-CICd3SCm.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "deep": true };
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const cfg0 = defineAppConfig({
  ui: {
    primary: "teal",
    gray: "neutral",
    formGroup: {
      help: "text-xs mt-1 text-gray-500 dark:text-gray-400",
      error: "text-xs mt-1 text-red-500 dark:text-red-400",
      label: {
        base: "text-sm block font-medium text-gray-500 dark:text-gray-200"
      }
    },
    button: {
      rounded: "rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]"
    },
    modal: {
      overlay: {
        background: "bg-[rgba(0,8,47,.275)] saturate-50"
      },
      padding: "p-0",
      rounded: "rounded-t-2xl sm:rounded-xl",
      transition: {
        enterFrom: "opacity-0 translate-y-full sm:translate-y-0 sm:scale-x-95",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-x-100"
      }
    },
    container: {
      constrained: "max-w-2xl"
    }
  }
});
const inlineConfig = {
  "nuxt": {
    "buildId": "29f7e095-a6ea-490d-997f-a6f6e02c70b3"
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
};
const appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(appConfig);
  }
  return nuxtApp._appConfig;
}
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyAnimatedCounter = defineAsyncComponent(() => import('./_nuxt/AnimatedCounter-Bzvn0CCg.mjs').then((r) => r.default));
const LazyCodeView = defineAsyncComponent(() => import('./_nuxt/CodeView-MTyAn4HH.mjs').then((r) => r.default));
const LazyCredit = defineAsyncComponent(() => import('./_nuxt/Credit-DHWJYWxb.mjs').then((r) => r.default));
const LazyEncryption = defineAsyncComponent(() => import('./_nuxt/Encryption-DL8UGNl-.mjs').then((r) => r.default));
const LazyHackerButton = defineAsyncComponent(() => import('./_nuxt/HackerButton-DcymvL4i.mjs').then((r) => r.default));
const LazyLabCard = defineAsyncComponent(() => import('./_nuxt/LabCard-CDcc6F9F.mjs').then((r) => r.default));
const LazyRocket = defineAsyncComponent(() => import('./_nuxt/Rocket-BV02fsGF.mjs').then((r) => r.default));
const LazyShapes = defineAsyncComponent(() => import('./_nuxt/Shapes-BmY0byxR.mjs').then((r) => r.default));
const LazyTextRotator = defineAsyncComponent(() => import('./_nuxt/TextRotator-CSL7tLoi.mjs').then((r) => r.default));
const LazyContentDoc = defineAsyncComponent(() => import('./_nuxt/ContentDoc-CHL-oOHl.mjs').then((r) => r.default));
const LazyContentList = defineAsyncComponent(() => import('./_nuxt/ContentList-COskSOQp.mjs').then((r) => r.default));
const LazyContentNavigation = defineAsyncComponent(() => import('./_nuxt/ContentNavigation-D-en790j.mjs').then((r) => r.default));
const LazyContentQuery = defineAsyncComponent(() => import('./_nuxt/ContentQuery-BEUPas7N.mjs').then((r) => r.default));
const LazyContentRenderer = defineAsyncComponent(() => import('./_nuxt/ContentRenderer-_FU9__CC.mjs').then((r) => r.default));
const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./_nuxt/ContentRendererMarkdown-DWtxLYo7.mjs').then((r) => r.default));
const LazyContentSlot = defineAsyncComponent(() => import('./_nuxt/ContentSlot-DRdVY1wy.mjs').then((r) => r.default));
const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenEmpty-CVfz7tly.mjs').then((r) => r.default));
const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenNotFound-4pTrsASA.mjs').then((r) => r.default));
const LazyMarkdown = defineAsyncComponent(() => import('./_nuxt/Markdown-Dr-sLt0C.mjs').then((r) => r.default));
const LazyProseCode = defineAsyncComponent(() => import('./_nuxt/ProseCode-BtVDNCpJ.mjs').then((r) => r.default));
const LazyProseCodeInline = defineAsyncComponent(() => import('./_nuxt/ProseCodeInline-D_59-VPx.mjs').then((r) => r.default));
const LazyProsePre = defineAsyncComponent(() => import('./_nuxt/ProsePre-BCe7-UHp.mjs').then((r) => r.default));
const LazyProseA = defineAsyncComponent(() => import('./_nuxt/ProseA-Jt8l2yMn.mjs').then((r) => r.default));
const LazyProseBlockquote = defineAsyncComponent(() => import('./_nuxt/ProseBlockquote-C_eyQOMN.mjs').then((r) => r.default));
const LazyProseEm = defineAsyncComponent(() => import('./_nuxt/ProseEm-ySAyym_S.mjs').then((r) => r.default));
const LazyProseH1 = defineAsyncComponent(() => import('./_nuxt/ProseH1-BObwpJqT.mjs').then((r) => r.default));
const LazyProseH2 = defineAsyncComponent(() => import('./_nuxt/ProseH2-DF7_6DPt.mjs').then((r) => r.default));
const LazyProseH3 = defineAsyncComponent(() => import('./_nuxt/ProseH3-D7_y1w7z.mjs').then((r) => r.default));
const LazyProseH4 = defineAsyncComponent(() => import('./_nuxt/ProseH4-BdfsIdWU.mjs').then((r) => r.default));
const LazyProseH5 = defineAsyncComponent(() => import('./_nuxt/ProseH5-DG4C0EOD.mjs').then((r) => r.default));
const LazyProseH6 = defineAsyncComponent(() => import('./_nuxt/ProseH6-DtdowkzB.mjs').then((r) => r.default));
const LazyProseHr = defineAsyncComponent(() => import('./_nuxt/ProseHr-D7HXu5Sj.mjs').then((r) => r.default));
const LazyProseImg = defineAsyncComponent(() => import('./_nuxt/ProseImg-B7I2jqQ2.mjs').then((r) => r.default));
const LazyProseLi = defineAsyncComponent(() => import('./_nuxt/ProseLi-CLt8erTL.mjs').then((r) => r.default));
const LazyProseOl = defineAsyncComponent(() => import('./_nuxt/ProseOl-BbkArePq.mjs').then((r) => r.default));
const LazyProseP = defineAsyncComponent(() => import('./_nuxt/ProseP-DFrAmVjB.mjs').then((r) => r.default));
const LazyProseScript = defineAsyncComponent(() => import('./_nuxt/ProseScript-D0R07iM6.mjs').then((r) => r.default));
const LazyProseStrong = defineAsyncComponent(() => import('./_nuxt/ProseStrong-CSnM1WJR.mjs').then((r) => r.default));
const LazyProseTable = defineAsyncComponent(() => import('./_nuxt/ProseTable-DxNUp_xz.mjs').then((r) => r.default));
const LazyProseTbody = defineAsyncComponent(() => import('./_nuxt/ProseTbody-B6zhwSXA.mjs').then((r) => r.default));
const LazyProseTd = defineAsyncComponent(() => import('./_nuxt/ProseTd-PyW3LPAO.mjs').then((r) => r.default));
const LazyProseTh = defineAsyncComponent(() => import('./_nuxt/ProseTh-DgdbC-N9.mjs').then((r) => r.default));
const LazyProseThead = defineAsyncComponent(() => import('./_nuxt/ProseThead-DqrY2xOW.mjs').then((r) => r.default));
const LazyProseTr = defineAsyncComponent(() => import('./_nuxt/ProseTr-BCRMG5Eh.mjs').then((r) => r.default));
const LazyProseUl = defineAsyncComponent(() => import('./_nuxt/ProseUl-2f0MRhTP.mjs').then((r) => r.default));
const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Icon;
}).then((r) => r.default));
const LazyIconCSS = defineAsyncComponent(() => import('./_nuxt/IconCSS-D3xbTYfR.mjs').then((r) => r.default));
const lazyGlobalComponents = [
  ["AnimatedCounter", LazyAnimatedCounter],
  ["CodeView", LazyCodeView],
  ["Credit", LazyCredit],
  ["Encryption", LazyEncryption],
  ["HackerButton", LazyHackerButton],
  ["LabCard", LazyLabCard],
  ["Rocket", LazyRocket],
  ["Shapes", LazyShapes],
  ["TextRotator", LazyTextRotator],
  ["ContentDoc", LazyContentDoc],
  ["ContentList", LazyContentList],
  ["ContentNavigation", LazyContentNavigation],
  ["ContentQuery", LazyContentQuery],
  ["ContentRenderer", LazyContentRenderer],
  ["ContentRendererMarkdown", LazyContentRendererMarkdown],
  ["MDCSlot", LazyContentSlot],
  ["DocumentDrivenEmpty", LazyDocumentDrivenEmpty],
  ["DocumentDrivenNotFound", LazyDocumentDrivenNotFound],
  ["Markdown", LazyMarkdown],
  ["ProseCode", LazyProseCode],
  ["ProseCodeInline", LazyProseCodeInline],
  ["ProsePre", LazyProsePre],
  ["ProseA", LazyProseA],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseEm", LazyProseEm],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseHr", LazyProseHr],
  ["ProseImg", LazyProseImg],
  ["ProseLi", LazyProseLi],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProseScript", LazyProseScript],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["ProseUl", LazyProseUl],
  ["Icon", LazyIcon],
  ["IconCSS", LazyIconCSS]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const css = ``;
const font_fallback_inlining_plugin_server_0jIQFwhKjU = /* @__PURE__ */ defineNuxtPlugin(() => {
  useHead({ style: [{ children: css + ` @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Noto Sans"); size-adjust: 100.6532%; ascent-override: 96.2463%; descent-override: 23.991%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Arial"); size-adjust: 107.4014%; ascent-override: 90.199%; descent-override: 22.4836%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Helvetica Neue"); size-adjust: 106.0574%; ascent-override: 91.342%; descent-override: 22.7685%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Roboto"); size-adjust: 107.2828%; ascent-override: 90.2987%; descent-override: 22.5085%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("Segoe UI"); size-adjust: 107.1644%; ascent-override: 90.3985%; descent-override: 22.5334%; line-gap-override: 0%; } @font-face { font-family: "Inter fallback"; src: local("BlinkMacSystemFont"); size-adjust: 115.3099%; ascent-override: 84.0128%; descent-override: 20.9416%; line-gap-override: 0%; } ` }] });
});
function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
const customTwMerge = extendTailwindMerge({
  classGroups: {
    icons: [(classPart) => /^i-/.test(classPart)]
  }
});
const defuTwMerge = createDefu((obj, key, value, namespace) => {
  if (namespace !== "default" && !namespace.startsWith("default.") && typeof obj[key] === "string" && typeof value === "string" && obj[key] && value) {
    obj[key] = customTwMerge(obj[key], value);
    return true;
  }
});
function mergeConfig(strategy, ...configs) {
  if (strategy === "override") {
    return defu({}, ...configs);
  }
  return defuTwMerge({}, ...configs);
}
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(_, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : null;
}
function looseToNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}
const _inherit = "inherit";
const _current = "currentColor";
const _transparent = "transparent";
const _black = "#000";
const _white = "#fff";
const _slate = { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a", "950": "#020617" };
const _gray = { "50": "rgb(var(--color-gray-50) / <alpha-value>)", "100": "rgb(var(--color-gray-100) / <alpha-value>)", "200": "rgb(var(--color-gray-200) / <alpha-value>)", "300": "rgb(var(--color-gray-300) / <alpha-value>)", "400": "rgb(var(--color-gray-400) / <alpha-value>)", "500": "rgb(var(--color-gray-500) / <alpha-value>)", "600": "rgb(var(--color-gray-600) / <alpha-value>)", "700": "rgb(var(--color-gray-700) / <alpha-value>)", "800": "rgb(var(--color-gray-800) / <alpha-value>)", "900": "rgb(var(--color-gray-900) / <alpha-value>)", "950": "rgb(var(--color-gray-950) / <alpha-value>)" };
const _zinc = { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b", "950": "#09090b" };
const _neutral = { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717", "950": "#0a0a0a" };
const _stone = { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917", "950": "#0c0a09" };
const _red = { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a" };
const _orange = { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12", "950": "#431407" };
const _amber = { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f", "950": "#451a03" };
const _yellow = { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12", "950": "#422006" };
const _lime = { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314", "950": "#1a2e05" };
const _green = { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d", "950": "#052e16" };
const _emerald = { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b", "950": "#022c22" };
const _teal = { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a", "950": "#042f2e" };
const _cyan = { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63", "950": "#083344" };
const _sky = { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e", "950": "#082f49" };
const _blue = { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" };
const _indigo = { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81", "950": "#1e1b4b" };
const _violet = { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95", "950": "#2e1065" };
const _purple = { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87", "950": "#3b0764" };
const _fuchsia = { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75", "950": "#4a044e" };
const _pink = { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843", "950": "#500724" };
const _rose = { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337", "950": "#4c0519" };
const _primary = { "50": "rgb(var(--color-primary-50) / <alpha-value>)", "100": "rgb(var(--color-primary-100) / <alpha-value>)", "200": "rgb(var(--color-primary-200) / <alpha-value>)", "300": "rgb(var(--color-primary-300) / <alpha-value>)", "400": "rgb(var(--color-primary-400) / <alpha-value>)", "500": "rgb(var(--color-primary-500) / <alpha-value>)", "600": "rgb(var(--color-primary-600) / <alpha-value>)", "700": "rgb(var(--color-primary-700) / <alpha-value>)", "800": "rgb(var(--color-primary-800) / <alpha-value>)", "900": "rgb(var(--color-primary-900) / <alpha-value>)", "950": "rgb(var(--color-primary-950) / <alpha-value>)", "DEFAULT": "rgb(var(--color-primary-DEFAULT) / <alpha-value>)" };
const _cool = { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827", "950": "#030712" };
const config$3 = { "inherit": _inherit, "current": _current, "transparent": _transparent, "black": _black, "white": _white, "slate": _slate, "gray": _gray, "zinc": _zinc, "neutral": _neutral, "stone": _stone, "red": _red, "orange": _orange, "amber": _amber, "yellow": _yellow, "lime": _lime, "green": _green, "emerald": _emerald, "teal": _teal, "cyan": _cyan, "sky": _sky, "blue": _blue, "indigo": _indigo, "violet": _violet, "purple": _purple, "fuchsia": _fuchsia, "pink": _pink, "rose": _rose, "primary": _primary, "cool": _cool };
const colors_244lXBzhnM = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig2 = useAppConfig();
  const root = computed(() => {
    const primary = config$3[appConfig2.ui.primary];
    const gray = config$3[appConfig2.ui.gray];
    if (!primary) {
      console.warn(`[@nuxt/ui] Primary color '${appConfig2.ui.primary}' not found in Tailwind config`);
    }
    if (!gray) {
      console.warn(`[@nuxt/ui] Gray color '${appConfig2.ui.gray}' not found in Tailwind config`);
    }
    return `:root {
${Object.entries(primary || config$3.green).map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`).join("\n")}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(gray || config$3.cool).map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`).join("\n")}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`;
  });
  const headData = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: "nuxt-ui-colors"
    }]
  };
  useHead(headData);
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = /* @__PURE__ */ useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const preference = "system";
const plugin_server_XNCxeHyTuP = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a;
  const colorMode = ((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) ? ref({}) : useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  font_fallback_inlining_plugin_server_0jIQFwhKjU,
  colors_244lXBzhnM,
  plugin_server_XNCxeHyTuP
];
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200 } = opts;
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / duration);
  let _timer = null;
  let _throttle = null;
  const start2 = () => set(0);
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    clear();
    progress.value = at < 0 ? 0 : at;
    {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    clear();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    start: start2,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0$5 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, start: start2, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    expose({
      progress,
      isLoading,
      start: start2,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const arrow$1 = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  placement: 'group-data-[popper-placement*="right"]:-left-1 group-data-[popper-placement*="left"]:-right-1 group-data-[popper-placement*="top"]:-bottom-1 group-data-[popper-placement*="bottom"]:-top-1'
};
({
  arrow: {
    ...arrow$1
  }
});
const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
const input = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-input",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      xs: "ps-8",
      sm: "ps-9",
      md: "ps-10",
      lg: "ps-11",
      xl: "ps-12"
    }
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      xs: "pe-8",
      sm: "pe-9",
      md: "pe-10",
      lg: "pe-11",
      xl: "pe-12"
    }
  },
  color: {
    white: {
      outline: "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    gray: {
      outline: "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  variant: {
    outline: "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none"
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "ps-2",
        xs: "ps-2.5",
        sm: "ps-2.5",
        md: "ps-3",
        lg: "ps-3.5",
        xl: "ps-3.5"
      }
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "pe-2",
        xs: "pe-2.5",
        sm: "pe-2.5",
        md: "pe-3",
        lg: "pe-3.5",
        xl: "pe-3.5"
      }
    }
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
({
  ...input
});
const select = {
  ...input,
  form: "form-select",
  placeholder: "text-gray-900 dark:text-white",
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  }
};
({
  arrow: {
    ...arrow$1
  }
});
const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
};
const tooltip = {
  wrapper: "relative inline-flex",
  container: "z-20 group",
  width: "max-w-xs",
  background: "bg-white dark:bg-gray-900",
  color: "text-gray-900 dark:text-white",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",
  shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5",
  middot: "mx-1 text-gray-700 dark:text-gray-200",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  popper: {
    strategy: "fixed"
  },
  arrow: arrow$1
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main$a = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
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
  setup(props) {
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config$2);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
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
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
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
    var css2 = getComputedStyle$1(currentNode);
    if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
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
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
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
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
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
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
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
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
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
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
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
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
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
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
const _sfc_main$9 = defineComponent({
  components: {
    UKbd: __nuxt_component_0$4
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    prevent: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popper: {
      type: Object,
      default: () => ({})
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
  setup(props) {
    const { ui, attrs } = useUI("tooltip", toRef(props, "ui"), config$1, toRef(props, "class"));
    const popper2 = computed(() => defu({}, props.popper, ui.value.popper));
    const [trigger, container2] = usePopper(popper2.value);
    const open = ref(false);
    let openTimeout = null;
    let closeTimeout = null;
    function onMouseOver() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (open.value) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        open.value = true;
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (!open.value) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        open.value = false;
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container: container2,
      open,
      onMouseOver,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_UKbd = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "trigger",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { open: _ctx.open }, () => {
    _push(` Hover `);
  }, _push, _parent);
  if (_ctx.open && !_ctx.prevent) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}"><template><div>`);
    if (_ctx.popper.arrow) {
      _push(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.background, _ctx.ui.color, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.ring])}">`);
    ssrRenderSlot(_ctx.$slots, "text", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    if ((_a = _ctx.shortcuts) == null ? void 0 : _a.length) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.shortcuts)}"><span class="${ssrRenderClass(_ctx.ui.middot)}">·</span><!--[-->`);
      ssrRenderList(_ctx.shortcuts, (shortcut) => {
        _push(ssrRenderComponent(_component_UKbd, {
          key: shortcut,
          size: "xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(shortcut)}`);
            } else {
              return [
                createTextVNode(toDisplayString(shortcut), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></template></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Tooltip.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
  };
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const config2 = /* @__PURE__ */ useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isProtocolURL = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isProtocolURL.value;
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value && !props.external && !isProtocolURL.value ? resolveTrailingSlashBehavior(joinURL(config2.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$2 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _sfc_main$8 = defineComponent({
  inheritAttrs: false,
  props: {
    ...__nuxt_component_0$2.props,
    as: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: Boolean,
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ disabled: _ctx.disabled }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active ? _ctx.activeClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive })
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active ? _ctx.activeClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              onClick: (e) => !isExternal && navigate(e)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const iconCollections = ["fluent-emoji-high-contrast", "material-symbols-light", "cryptocurrency-color", "icon-park-outline", "icon-park-twotone", "fluent-emoji-flat", "emojione-monotone", "streamline-emojis", "heroicons-outline", "simple-line-icons", "material-symbols", "flat-color-icons", "icon-park-solid", "pepicons-pencil", "heroicons-solid", "pepicons-print", "cryptocurrency", "pixelarticons", "system-uicons", "devicon-plain", "entypo-social", "grommet-icons", "vscode-icons", "pepicons-pop", "svg-spinners", "fluent-emoji", "simple-icons", "circle-flags", "medical-icon", "icomoon-free", "majesticons", "radix-icons", "humbleicons", "fa6-regular", "emojione-v1", "skill-icons", "academicons", "healthicons", "fluent-mdl2", "teenyicons", "ant-design", "gravity-ui", "akar-icons", "lets-icons", "streamline", "fa6-brands", "file-icons", "game-icons", "foundation", "fa-regular", "mono-icons", "iconamoon", "zondicons", "mdi-light", "eos-icons", "gridicons", "icon-park", "heroicons", "fa6-solid", "meteocons", "arcticons", "dashicons", "fa-brands", "websymbol", "fontelico", "mingcute", "bytesize", "guidance", "openmoji", "emojione", "nonicons", "brandico", "flagpack", "fa-solid", "fontisto", "si-glyph", "pepicons", "iconoir", "tdesign", "clarity", "octicon", "codicon", "pajamas", "formkit", "line-md", "twemoji", "noto-v1", "fxemoji", "devicon", "raphael", "flat-ui", "topcoat", "feather", "tabler", "carbon", "lucide", "memory", "mynaui", "circum", "fluent", "nimbus", "entypo", "icons8", "subway", "vaadin", "solar", "basil", "typcn", "charm", "prime", "quill", "logos", "covid", "maki", "gala", "ooui", "noto", "flag", "iwwa", "zmdi", "bpmn", "mdi", "ion", "uil", "bxs", "cil", "uiw", "uim", "uit", "uis", "jam", "bxl", "cib", "cif", "gis", "map", "geo", "fad", "eva", "wpf", "whh", "ic", "ph", "ri", "bi", "bx", "gg", "ci", "ep", "fe", "mi", "ei", "wi", "la", "fa", "oi", "et", "el", "ls", "vs", "il", "ps"];
function resolveIconName(name = "") {
  let prefix;
  let provider = "";
  if (name[0] === "@" && name.includes(":")) {
    provider = name.split(":")[0].slice(1);
    name = name.split(":").slice(1).join(":");
  }
  if (name.startsWith("i-")) {
    name = name.replace(/^i-/, "");
    for (const collectionName of iconCollections) {
      if (name.startsWith(collectionName)) {
        prefix = collectionName;
        name = name.slice(collectionName.length + 1);
        break;
      }
    }
  } else if (name.includes(":")) {
    const [_prefix, _name] = name.split(":");
    prefix = _prefix;
    name = _name;
  }
  return {
    provider,
    prefix: prefix || "",
    name: name || ""
  };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const appConfig2 = useAppConfig();
    const props = __props;
    watch(() => {
      var _a;
      return (_a = appConfig2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions;
    }, () => {
      var _a, _b, _c, _d, _e, _f;
      if (!((_b = (_a = appConfig2.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url))
        return;
      try {
        new URL(appConfig2.nuxtIcon.iconifyApiOptions.url);
      } catch (e) {
        console.warn("Nuxt Icon: Invalid custom Iconify API URL");
        return;
      }
      if ((_d = (_c = appConfig2.nuxtIcon) == null ? void 0 : _c.iconifyApiOptions) == null ? void 0 : _d.publicApiFallback) {
        addAPIProvider("custom", {
          resources: [(_e = appConfig2.nuxtIcon) == null ? void 0 : _e.iconifyApiOptions.url],
          index: 0
        });
        return;
      }
      addAPIProvider("", {
        resources: [(_f = appConfig2.nuxtIcon) == null ? void 0 : _f.iconifyApiOptions.url]
      });
    }, { immediate: true });
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a, _b;
      if ((_b = (_a = appConfig2.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[props.name]) {
        return appConfig2.nuxtIcon.aliases[props.name];
      }
      return props.name;
    });
    const resolvedIcon = computed(() => resolveIconName(iconName.value));
    const iconKey = computed(() => [resolvedIcon.value.provider, resolvedIcon.value.prefix, resolvedIcon.value.name].filter(Boolean).join(":"));
    const icon = computed(() => {
      var _a;
      return (_a = state.value) == null ? void 0 : _a[iconKey.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a, _b, _c;
      if (!props.size && typeof ((_a = appConfig2.nuxtIcon) == null ? void 0 : _a.size) === "boolean" && !((_b = appConfig2.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a;
      return ((_a = appConfig2 == null ? void 0 : appConfig2.nuxtIcon) == null ? void 0 : _a.class) ?? "icon";
    });
    async function loadIconComponent() {
      var _a;
      if (component.value) {
        return;
      }
      if (!((_a = state.value) == null ? void 0 : _a[iconKey.value])) {
        isFetching.value = true;
        state.value[iconKey.value] = await loadIcon(resolvedIcon.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(iconName, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-bd832875></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-bd832875>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-bd832875"]]);
const Icon = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$6 = {
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const isDark = computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTooltip = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UTooltip, mergeProps({
        text: "Toggle theme",
        ui: { popper: { strategy: "absolute" } }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              "aria-hidden": "true",
              name: unref(isDark) ? "solar:sun-2-outline" : "solar:moon-outline",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Toggle theme</span></button>`);
          } else {
            return [
              createVNode("button", {
                class: "relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400",
                onClick: ($event) => isDark.value = !unref(isDark)
              }, [
                createVNode(_component_Icon, {
                  "aria-hidden": "true",
                  name: unref(isDark) ? "solar:sun-2-outline" : "solar:moon-outline",
                  class: "w-5 h-5"
                }, null, 8, ["name"]),
                createVNode("span", { class: "sr-only" }, "Toggle theme")
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ThemeToggle.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const headerRef = ref(null);
    const { styles } = useFixedHeader(headerRef);
    const items = [
      { name: "Home", path: "/", icon: "solar:home-2-outline" },
      { name: "이체", path: "/transfer", icon: "mdi:bank-transfer" },
      // 변경됨
      { name: "입금", path: "/income", icon: "solar:wallet-2-outline" },
      { name: "출금", path: "/expense", icon: "solar:money-bag-outline" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTooltip = __nuxt_component_0$3;
      const _component_ULink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      const _component_AppThemeToggle = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "headerRef",
        ref: headerRef,
        style: unref(styles),
        class: "fixed top-0 w-full z-50"
      }, _attrs))}><nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl"><ul class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_UTooltip, {
          text: item.name,
          ui: { popper: { strategy: "absolute" } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ULink, {
                to: item.path,
                class: "relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400",
                "active-class": "text-primary-600 dark:text-primary-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      "aria-hidden": "true",
                      name: item.icon,
                      class: "w-5 h-5 z-10"
                    }, null, _parent3, _scopeId2));
                    if (_ctx.$route.path === item.path) {
                      _push3(`<span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"${_scopeId2}></span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (_ctx.$route.path === item.path) {
                      _push3(`<span class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"${_scopeId2}></span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<span class="sr-only"${_scopeId2}>${ssrInterpolate(item.name)}</span>`);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        "aria-hidden": "true",
                        name: item.icon,
                        class: "w-5 h-5 z-10"
                      }, null, 8, ["name"]),
                      _ctx.$route.path === item.path ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
                      })) : createCommentVNode("", true),
                      _ctx.$route.path === item.path ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      })) : createCommentVNode("", true),
                      createVNode("span", { class: "sr-only" }, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ULink, {
                  to: item.path,
                  class: "relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400",
                  "active-class": "text-primary-600 dark:text-primary-400"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      "aria-hidden": "true",
                      name: item.icon,
                      class: "w-5 h-5 z-10"
                    }, null, 8, ["name"]),
                    _ctx.$route.path === item.path ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
                    })) : createCommentVNode("", true),
                    _ctx.$route.path === item.path ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    })) : createCommentVNode("", true),
                    createVNode("span", { class: "sr-only" }, toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li class="flex-1"></li><li>`);
      _push(ssrRenderComponent(_component_AppThemeToggle, null, null, _parent));
      _push(`</li></ul></nav></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.container, container);
const _sfc_main$4 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
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
  setup(props) {
    const { ui, attrs } = useUI("container", toRef(props, "ui"), config);
    const containerClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.padding,
        ui.value.constrained
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      containerClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.containerClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Container.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_3 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm text-center pb-8" }, _attrs))}><br><p>© 2025 SchoolOS. All rights reserved.</p></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    useRouter$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0$5;
      const _component_AppNavbar = _sfc_main$5;
      const _component_UContainer = __nuxt_component_2;
      const _component_NuxtPage = __nuxt_component_3;
      const _component_AppFooter = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "#14b8a6" }, null, _parent));
      if (unref(route).path !== "/login") {
        _push(ssrRenderComponent(_component_AppNavbar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(route).path !== "/login") {
        _push(`<div class="h-32"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(route).path !== "/login") {
        _push(`<div class="h-32"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).path !== "/login") {
        _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./_nuxt/error-404-D93036xP.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./_nuxt/error-500-CrGyLXN0.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./_nuxt/island-renderer-C5fcKdTZ.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, __nuxt_component_0$2 as a, useRoute as b, createError as c, useSeoMeta as d, entry$1 as default, useUI as e, appConfig as f, useRuntimeConfig as g, useNuxtApp as h, asyncDataDefaults as i, __nuxt_component_0 as j, useAppConfig as k, input as l, mergeConfig as m, looseToNumber as n, __nuxt_component_0$1 as o, get as p, useState as q, resolveIconName as r, select as s, useHead as u };
//# sourceMappingURL=server.mjs.map
