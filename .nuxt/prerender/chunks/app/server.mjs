import { defineComponent, computed, ref, h, resolveComponent, hasInjectionContext, inject, getCurrentInstance, useAttrs, toValue, toRef, isRef, watch, withAsyncContext, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, renderSlot, watchEffect, version, defineAsyncComponent, useSSRContext, provide, shallowReactive, Suspense, nextTick, Transition, createApp, onErrorCaptured, onServerPrefetch, reactive, effectScope, shallowRef, isReadonly, isReactive, toRaw, isShallow, createBlock, createCommentVNode, openBlock, toDisplayString } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/index.mjs';
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
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrInterpolate, ssrRenderSuspense, ssrRenderList } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/vue/server-renderer/index.mjs';
import { isEqual } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/ohash/dist/index.mjs';
import { Icon as Icon$1 } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/offline.mjs';
import { addAPIProvider, loadIcon } from 'file:///Users/jang-yeong-ug/Documents/zooper/node_modules/@iconify/vue/dist/iconify.mjs';
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
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
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
  const fn = () => setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
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
    component: () => import('./_nuxt/_slug_-DtKeEgx9.mjs').then((m) => m.default || m)
  },
  {
    name: "articles",
    path: "/articles",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-DKs8Dn4K.mjs').then((m) => m.default || m)
  },
  {
    name: "bookmarks",
    path: "/bookmarks",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/bookmarks-u-J4ZFjs.mjs').then((m) => m.default || m)
  },
  {
    name: "expense",
    path: "/expense",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/expense-DUY9zwa4.mjs').then((m) => m.default || m)
  },
  {
    name: "income",
    path: "/income",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/income-CY8OO_Li.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-BuMnf2hX.mjs').then((m) => m.default || m)
  },
  {
    name: "lab",
    path: "/lab",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/lab-DDXOszfj.mjs').then((m) => m.default || m)
  },
  {
    name: "login",
    path: "/login",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/login-DLv8r4on.mjs').then((m) => m.default || m)
  },
  {
    name: "penalty",
    path: "/penalty",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/penalty-FIzvXfCD.mjs').then((m) => m.default || m)
  },
  {
    name: "projects",
    path: "/projects",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/projects-DjIxBoT9.mjs').then((m) => m.default || m)
  },
  {
    name: "sign-id",
    path: "/sign/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_id_-Dji4SPEF.mjs').then((m) => m.default || m)
  },
  {
    name: "signUp",
    path: "/signUp",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/signUp-Gb3vSrrO.mjs').then((m) => m.default || m)
  },
  {
    name: "tax",
    path: "/tax",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/tax-CZQZtQkl.mjs').then((m) => m.default || m)
  },
  {
    name: "teacher-id",
    path: "/teacher/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_id_-BojJJWqf.mjs').then((m) => m.default || m)
  },
  {
    name: "teacher",
    path: "/teacher",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-D0phq7L8.mjs').then((m) => m.default || m)
  },
  {
    name: "teacher-login",
    path: "/teacher/login",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/login-DXYfMPLg.mjs').then((m) => m.default || m)
  },
  {
    name: "transfer",
    path: "/transfer",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/transfer-CaHjUYJq.mjs').then((m) => m.default || m)
  },
  {
    name: "whats-in-my-bag",
    path: "/whats-in-my-bag",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/whats-in-my-bag-M4aQPTwa.mjs').then((m) => m.default || m)
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
    "buildId": "da3e575e-47b2-4391-8379-5dca333ae572"
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
const LazyAnimatedCounter = defineAsyncComponent(() => import('./_nuxt/AnimatedCounter--OG7f6GX.mjs').then((r) => r.default));
const LazyCodeView = defineAsyncComponent(() => import('./_nuxt/CodeView-Bs6rm8K2.mjs').then((r) => r.default));
const LazyCredit = defineAsyncComponent(() => import('./_nuxt/Credit-u9K0JTMi.mjs').then((r) => r.default));
const LazyEncryption = defineAsyncComponent(() => import('./_nuxt/Encryption-DL8UGNl-.mjs').then((r) => r.default));
const LazyHackerButton = defineAsyncComponent(() => import('./_nuxt/HackerButton-DcymvL4i.mjs').then((r) => r.default));
const LazyLabCard = defineAsyncComponent(() => import('./_nuxt/LabCard-1hGCkn_I.mjs').then((r) => r.default));
const LazyRocket = defineAsyncComponent(() => import('./_nuxt/Rocket-D_oSfI8_.mjs').then((r) => r.default));
const LazyShapes = defineAsyncComponent(() => import('./_nuxt/Shapes-IAcLKu4H.mjs').then((r) => r.default));
const LazyTextRotator = defineAsyncComponent(() => import('./_nuxt/TextRotator-DHjQ5NwX.mjs').then((r) => r.default));
const LazyContentDoc = defineAsyncComponent(() => import('./_nuxt/ContentDoc-BpOTug_p.mjs').then((r) => r.default));
const LazyContentList = defineAsyncComponent(() => import('./_nuxt/ContentList-BhRqgn8-.mjs').then((r) => r.default));
const LazyContentNavigation = defineAsyncComponent(() => import('./_nuxt/ContentNavigation-GyTfMVr6.mjs').then((r) => r.default));
const LazyContentQuery = defineAsyncComponent(() => import('./_nuxt/ContentQuery-ConCPHmT.mjs').then((r) => r.default));
const LazyContentRenderer = defineAsyncComponent(() => import('./_nuxt/ContentRenderer-D3XXg9Ku.mjs').then((r) => r.default));
const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./_nuxt/ContentRendererMarkdown-CbGdL-Lr.mjs').then((r) => r.default));
const LazyContentSlot = defineAsyncComponent(() => import('./_nuxt/ContentSlot-DRdVY1wy.mjs').then((r) => r.default));
const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenEmpty-CVfz7tly.mjs').then((r) => r.default));
const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenNotFound-4pTrsASA.mjs').then((r) => r.default));
const LazyMarkdown = defineAsyncComponent(() => import('./_nuxt/Markdown-Dr-sLt0C.mjs').then((r) => r.default));
const LazyProseCode = defineAsyncComponent(() => import('./_nuxt/ProseCode-BtVDNCpJ.mjs').then((r) => r.default));
const LazyProseCodeInline = defineAsyncComponent(() => import('./_nuxt/ProseCodeInline-BBnbxtA7.mjs').then((r) => r.default));
const LazyProsePre = defineAsyncComponent(() => import('./_nuxt/ProsePre-BCe7-UHp.mjs').then((r) => r.default));
const LazyProseA = defineAsyncComponent(() => import('./_nuxt/ProseA-BKO8L-hQ.mjs').then((r) => r.default));
const LazyProseBlockquote = defineAsyncComponent(() => import('./_nuxt/ProseBlockquote-BdXknQzo.mjs').then((r) => r.default));
const LazyProseEm = defineAsyncComponent(() => import('./_nuxt/ProseEm-BNMNspAf.mjs').then((r) => r.default));
const LazyProseH1 = defineAsyncComponent(() => import('./_nuxt/ProseH1-BxetWIeI.mjs').then((r) => r.default));
const LazyProseH2 = defineAsyncComponent(() => import('./_nuxt/ProseH2-NKjaUoKX.mjs').then((r) => r.default));
const LazyProseH3 = defineAsyncComponent(() => import('./_nuxt/ProseH3-BZ7fXiJW.mjs').then((r) => r.default));
const LazyProseH4 = defineAsyncComponent(() => import('./_nuxt/ProseH4-Qs8zUr2d.mjs').then((r) => r.default));
const LazyProseH5 = defineAsyncComponent(() => import('./_nuxt/ProseH5-DRmWK3kj.mjs').then((r) => r.default));
const LazyProseH6 = defineAsyncComponent(() => import('./_nuxt/ProseH6-BZZmYQBF.mjs').then((r) => r.default));
const LazyProseHr = defineAsyncComponent(() => import('./_nuxt/ProseHr-BVKgiA3X.mjs').then((r) => r.default));
const LazyProseImg = defineAsyncComponent(() => import('./_nuxt/ProseImg-BKXvtlf4.mjs').then((r) => r.default));
const LazyProseLi = defineAsyncComponent(() => import('./_nuxt/ProseLi-NmPeR4fn.mjs').then((r) => r.default));
const LazyProseOl = defineAsyncComponent(() => import('./_nuxt/ProseOl-DmByT3-F.mjs').then((r) => r.default));
const LazyProseP = defineAsyncComponent(() => import('./_nuxt/ProseP-D7p_kL6_.mjs').then((r) => r.default));
const LazyProseScript = defineAsyncComponent(() => import('./_nuxt/ProseScript-D0R07iM6.mjs').then((r) => r.default));
const LazyProseStrong = defineAsyncComponent(() => import('./_nuxt/ProseStrong-BM0Lc6oQ.mjs').then((r) => r.default));
const LazyProseTable = defineAsyncComponent(() => import('./_nuxt/ProseTable-w3Bxtgqu.mjs').then((r) => r.default));
const LazyProseTbody = defineAsyncComponent(() => import('./_nuxt/ProseTbody-ClhMcIx3.mjs').then((r) => r.default));
const LazyProseTd = defineAsyncComponent(() => import('./_nuxt/ProseTd-58RUsqTq.mjs').then((r) => r.default));
const LazyProseTh = defineAsyncComponent(() => import('./_nuxt/ProseTh-BY3Iuphj.mjs').then((r) => r.default));
const LazyProseThead = defineAsyncComponent(() => import('./_nuxt/ProseThead-CjTjrFEl.mjs').then((r) => r.default));
const LazyProseTr = defineAsyncComponent(() => import('./_nuxt/ProseTr-BtnpKvjU.mjs').then((r) => r.default));
const LazyProseUl = defineAsyncComponent(() => import('./_nuxt/ProseUl-CkHy6VOB.mjs').then((r) => r.default));
const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Icon;
}).then((r) => r.default));
const LazyIconCSS = defineAsyncComponent(() => import('./_nuxt/IconCSS-B6sj95hI.mjs').then((r) => r.default));
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
const config$1 = { "inherit": _inherit, "current": _current, "transparent": _transparent, "black": _black, "white": _white, "slate": _slate, "gray": _gray, "zinc": _zinc, "neutral": _neutral, "stone": _stone, "red": _red, "orange": _orange, "amber": _amber, "yellow": _yellow, "lime": _lime, "green": _green, "emerald": _emerald, "teal": _teal, "cyan": _cyan, "sky": _sky, "blue": _blue, "indigo": _indigo, "violet": _violet, "purple": _purple, "fuchsia": _fuchsia, "pink": _pink, "rose": _rose, "primary": _primary, "cool": _cool };
const colors_244lXBzhnM = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig2 = useAppConfig();
  const root = computed(() => {
    const primary = config$1[appConfig2.ui.primary];
    const gray = config$1[appConfig2.ui.gray];
    if (!primary) {
      console.warn(`[@nuxt/ui] Primary color '${appConfig2.ui.primary}' not found in Tailwind config`);
    }
    if (!gray) {
      console.warn(`[@nuxt/ui] Gray color '${appConfig2.ui.gray}' not found in Tailwind config`);
    }
    return `:root {
${Object.entries(primary || config$1.green).map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`).join("\n")}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(gray || config$1.cool).map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`).join("\n")}
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
  const start = () => set(0);
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
    start,
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
const __nuxt_component_0$3 = defineComponent({
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
    const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    expose({
      progress,
      isLoading,
      start,
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
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = defineComponent({
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
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
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bd832875"]]);
const Icon = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const _sfc_main$5 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { name: "Home", path: "/", icon: "solar:home-2-bold-duotone" },
      { name: "이체", path: "/transfer", icon: "solar:banknote-2-bold-duotone" },
      { name: "입금", path: "/income", icon: "solar:card-2-bold-duotone" },
      { name: "출금", path: "/expense", icon: "solar:wallet-money-bold-duotone" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ULink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-6 left-0 right-0 z-[100] px-6" }, _attrs))} data-v-aeec8247><nav class="mx-auto max-w-lg" data-v-aeec8247><ul class="flex items-center justify-around px-4 py-3 bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-2xl shadow-indigo-200/50 border border-white/50 ring-1 ring-black/5" data-v-aeec8247><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<li class="flex-1" data-v-aeec8247>`);
        _push(ssrRenderComponent(_component_ULink, {
          to: item.path,
          class: ["relative flex flex-col items-center justify-center gap-1 transition-all duration-300 py-1", [_ctx.$route.path === item.path ? "text-indigo-600" : "text-gray-400 hover:text-gray-600"]],
          "active-class": "active-nav-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$route.path === item.path) {
                _push2(`<div class="absolute inset-0 bg-indigo-50 rounded-2xl scale-110 -z-10 animate-pulse" data-v-aeec8247${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="relative" data-v-aeec8247${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "w-7 h-7 transition-transform group-hover:scale-110"
              }, null, _parent2, _scopeId));
              if (_ctx.$route.path === item.path) {
                _push2(`<span class="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" data-v-aeec8247${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span class="text-[10px] font-black tracking-tight uppercase" data-v-aeec8247${_scopeId}>${ssrInterpolate(item.name)}</span>`);
              if (_ctx.$route.path === item.path) {
                _push2(`<span class="w-1 h-1 bg-indigo-600 rounded-full mt-0.5" data-v-aeec8247${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.$route.path === item.path ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute inset-0 bg-indigo-50 rounded-2xl scale-110 -z-10 animate-pulse"
                })) : createCommentVNode("", true),
                createVNode("div", { class: "relative" }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "w-7 h-7 transition-transform group-hover:scale-110"
                  }, null, 8, ["name"]),
                  _ctx.$route.path === item.path ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"
                  })) : createCommentVNode("", true)
                ]),
                createVNode("span", { class: "text-[10px] font-black tracking-tight uppercase" }, toDisplayString(item.name), 1),
                _ctx.$route.path === item.path ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "w-1 h-1 bg-indigo-600 rounded-full mt-0.5"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-aeec8247"]]);
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
const container = {
  base: "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
  constrained: "max-w-7xl"
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
      const _component_NuxtLoadingIndicator = __nuxt_component_0$3;
      const _component_AppNavbar = __nuxt_component_1;
      const _component_UContainer = __nuxt_component_2;
      const _component_NuxtPage = __nuxt_component_3;
      const _component_AppFooter = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "#14b8a6" }, null, _parent));
      if (unref(route).path !== "/login" && unref(route).path !== "/signUp" && unref(route).path !== "/teacher") {
        _push(ssrRenderComponent(_component_AppNavbar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(route).path !== "/login" && unref(route).path !== "/signUp" && unref(route).path !== "/teacher") {
        _push(`<div class="h-10"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UContainer, {
        class: [unref(route).path.startsWith("/teacher") ? "max-w-none px-4 md:px-8" : "max-w-2xl"]
      }, {
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
      _push(`<div class="h-32"></div>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
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
    const _Error404 = defineAsyncComponent(() => import('./_nuxt/error-404-JKBKdwxL.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./_nuxt/error-500-u598zsgD.mjs').then((r) => r.default || r));
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
    const IslandRenderer = defineAsyncComponent(() => import('./_nuxt/island-renderer-CffaCdk_.mjs').then((r) => r.default || r));
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

export { _export_sfc as _, __nuxt_component_0$2 as a, useRoute as b, createError as c, useSeoMeta as d, entry$1 as default, __nuxt_component_0 as e, useRouter as f, useRuntimeConfig as g, useNuxtApp as h, asyncDataDefaults as i, useUI as j, appConfig as k, useAppConfig as l, mergeConfig as m, input as n, looseToNumber as o, __nuxt_component_0$1 as p, get as q, useState as r, select as s, resolveIconName as t, useHead as u };
//# sourceMappingURL=server.mjs.map
