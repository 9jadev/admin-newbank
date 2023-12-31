import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _675fa2a1 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _38aeb415 = () => interopDefault(import('../pages/eeotp.vue' /* webpackChunkName: "pages/eeotp" */))
const _0d5f57e2 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _168da04a = () => interopDefault(import('../pages/funding/index.vue' /* webpackChunkName: "pages/funding/index" */))
const _624c10dc = () => interopDefault(import('../pages/indexxx.vue' /* webpackChunkName: "pages/indexxx" */))
const _084b9b08 = () => interopDefault(import('../pages/investment/index.vue' /* webpackChunkName: "pages/investment/index" */))
const _818cad96 = () => interopDefault(import('../pages/otp.vue' /* webpackChunkName: "pages/otp" */))
const _1b9cb695 = () => interopDefault(import('../pages/refferals/index.vue' /* webpackChunkName: "pages/refferals/index" */))
const _5dc7f514 = () => interopDefault(import('../pages/transfer/index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _0ecf79ee = () => interopDefault(import('../pages/wire-transfers/index.vue' /* webpackChunkName: "pages/wire-transfers/index" */))
const _340a2d73 = () => interopDefault(import('../pages/withdraw/index.vue' /* webpackChunkName: "pages/withdraw/index" */))
const _07798e38 = () => interopDefault(import('../pages/dashboard/profile.vue' /* webpackChunkName: "pages/dashboard/profile" */))
const _5cc2fa48 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _cbf04d6e = () => interopDefault(import('../pages/dashboard/_id.vue' /* webpackChunkName: "pages/dashboard/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _675fa2a1,
    name: "dashboard"
  }, {
    path: "/eeotp",
    component: _38aeb415,
    name: "eeotp"
  }, {
    path: "/forgot-password",
    component: _0d5f57e2,
    name: "forgot-password"
  }, {
    path: "/funding",
    component: _168da04a,
    name: "funding"
  }, {
    path: "/indexxx",
    component: _624c10dc,
    name: "indexxx"
  }, {
    path: "/investment",
    component: _084b9b08,
    name: "investment"
  }, {
    path: "/otp",
    component: _818cad96,
    name: "otp"
  }, {
    path: "/refferals",
    component: _1b9cb695,
    name: "refferals"
  }, {
    path: "/transfer",
    component: _5dc7f514,
    name: "transfer"
  }, {
    path: "/wire-transfers",
    component: _0ecf79ee,
    name: "wire-transfers"
  }, {
    path: "/withdraw",
    component: _340a2d73,
    name: "withdraw"
  }, {
    path: "/dashboard/profile",
    component: _07798e38,
    name: "dashboard-profile"
  }, {
    path: "/",
    component: _5cc2fa48,
    name: "index"
  }, {
    path: "/dashboard/:id",
    component: _cbf04d6e,
    name: "dashboard-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
