export default {
  head: {
    title: 'ELIBU-Pustakawan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favi.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' },
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
	{src: '~/plugins/chart.js', mode: 'client'}
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/composition-api/module',

    '@nuxtjs/auth',

    // Component Page
    "vue-toastification/nuxt",
  ],
  
  auth: {
    localStorage: true,
    redirect: {
      login: '/login',
      logout: '/register',
      callback: '/',
      home: '/Pengelola/Dashboard'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'data.token' },
          user: { url: 'user/profile/pustakawan', method: 'get', propertyName: 'data' },
          logout: false
        },
        tokenRequired: true,
        tokenType: '',
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'https://elibx.jaja.id/'
  },

  router: {
    middleware: ['auth']
  },
  

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
// nuxt.config.js
{
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ]
}
