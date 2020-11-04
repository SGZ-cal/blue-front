export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/resetcss/reset.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/axios',
    'plugins/myInject'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://www.npmjs.com/package/@nuxtjs/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // Doc: https://www.npmjs.com/package/nuxt-i18n
    'nuxt-i18n'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/sign_in', method: 'post', propertyName: false },
          logout: false,
          user: true
        }
      }
    }
  },

  // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
  i18n: {
    strategy: 'no_prefix',
    // アプリがサポートしている言語
    locales: ['ja', 'en'],
    // デフォルトの言語
    defaultLocale: 'ja',
    // Doc: https://kazupon.github.io/vue-i18n/api/#properties
    vueI18n: {
      fallbackLocale: 'ja',
      // silentTranslationWarn: true,
      silentFallbackWarn: true,
      messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
      }
    }
  },

  publicRuntimeConfig: {
    appName: process.env.APP_NAME
  },

  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '4080BE',
          info: '4FC1E9',
          success: '44D69E',
          warning: 'FEB65E',
          error: 'FB8678',
          background: 'f6f6f4',
          myblue: '1867C0'
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
}
