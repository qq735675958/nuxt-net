
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" },
      { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    // 'iview/dist/styles/iview.css',
    '~static/css/reset.less',
    '~static/css/font-awesome.min.css',
    '~static/css/style.css',
    { src: "swiper/dist/css/swiper.css" }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/iview',
    '@/plugins/bootstrap',
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: "~/plugins/mock.js", ssr: true },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    preset: {
      autoprefixer: true
    },
    vendor: ['axios'] // 为防止重复打包
  },
}
