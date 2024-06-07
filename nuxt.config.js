export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Dashboard',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	components: true,
		loadingIndicator: {
			name: 'rectangle-bounce',
			color: '#00154A',
			background: 'white',
		},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/css/main.scss",
		"~/assets/css/variables.less",
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/antd-ui',
		'~/plugins/notify.js',
		'~/plugins/backendservice',
		'~/plugins/axios.js',
		'~/plugins/datefilter.js',
		'~/plugins/vue2-filters',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// '@nuxt/postcss8',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		'@nuxtjs/cloudinary',
		'@oruga-ui/oruga/nuxt',
		'@nuxtjs/auth-next',
		'nuxt-paystack'
	],
    cloudinary: {
		cloudName: process.env.CLOUD_NAME,
		apiSecret: process.env.CLOUDNARY_SECRET,
		apiKey: process.env.CLOUDNARY_APIKEY,
		secure: true,
	},

  axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: process.env.BASE_URL,
	},
	env: {
		APP_URL: process.env.APP_URL || 'http://localhost:3000',
	},
    server: {
		port: 5310, // default: 3000
	},
    auth: {
		redirect: {
			login: '/',
			logout: '/',
			callback: '/',
			home: '/dashboard',
		},
		strategies: {
			local: {
				token: {
					property: 'access_token',
					global: true,
					maxAge: 86400,
					// required: true,
					// type: 'Bearer'
				},
				tokenRequired: true,
				tokenType: 'Bearer',
				globalToken: true,
				autoFetchUser: true,
				user: {
					property: 'admin',
					autoFetch: true,
				},
				endpoints: {
					login: {url: 'admin/login', method: 'post'},
					logout: {url: 'admin/logout', method: 'get'},
					user: {url: 'admin/profile', method: 'get'},
				},
			},
      		local1: {
        		scheme: 'local',
				token: {
					property: 'access_token',
					global: true,
					maxAge: 86400,
					// required: true,
					// type: 'Bearer'
				},
				tokenRequired: true,
				tokenType: 'Bearer',
				globalToken: true,
				autoFetchUser: true,
				user: {
					property: 'customer',
					autoFetch: true,
				},
				endpoints: {
					login: {url: 'admin/login', method: 'post'},
					logout: {url: 'admin/logout', method: 'get'},
					user: {url: 'admin/profile', method: 'get'},
				},
			},
		},
	},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
		loaders: {
			less: {
				lessOptions: {
				javascriptEnabled: true,
				math: 'always',
				},
			},
		}
	}
}
