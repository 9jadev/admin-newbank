import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LocalScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/",
    "logout": "/",
    "home": "/dashboard",
    "callback": "/"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "local"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
  "token": {
    "property": "access_token",
    "global": true,
    "maxAge": 86400
  },
  "tokenRequired": true,
  "tokenType": "Bearer",
  "globalToken": true,
  "autoFetchUser": true,
  "user": {
    "property": "admin",
    "autoFetch": true
  },
  "endpoints": {
    "login": {
      "url": "admin/login",
      "method": "post"
    },
    "logout": {
      "url": "admin/logout",
      "method": "get"
    },
    "user": {
      "url": "admin/profile",
      "method": "get"
    }
  },
  "name": "local"
}))

  // local1
  $auth.registerStrategy('local1', new LocalScheme($auth, {
  "token": {
    "property": "access_token",
    "global": true,
    "maxAge": 86400
  },
  "tokenRequired": true,
  "tokenType": "Bearer",
  "globalToken": true,
  "autoFetchUser": true,
  "user": {
    "property": "customer",
    "autoFetch": true
  },
  "endpoints": {
    "login": {
      "url": "admin/login",
      "method": "post"
    },
    "logout": {
      "url": "admin/logout",
      "method": "get"
    },
    "user": {
      "url": "admin/profile",
      "method": "get"
    }
  },
  "name": "local1"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
