
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kolapo Oni - Interactive Designer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'keywords',
        content: 'Kolapo Oni, Kolapo, Oni'
      },
      {
        property: 'og:title',
        content: 'Kolapo Oni - Interactive Designer'
      },
      {
        property: 'og:url',
        content: 'https://thekolapo.com'
      },
      {
        property: "og:image",
        content: "/meta-image.png"
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio of Kolapo Oni, an interactive designer & developer based in Lagos, Nigeria.'
      },
      {
        name:
          'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:title',
        content: 'Kolapo Oni - Interactive Designer'
      },
      {
        property: 'twitter:description',
        content: 'Portfolio of Kolapo Oni, an interactive designer & developer based in Lagos, Nigeria.'
      },
      {
        property: 'twitter:image',
        content: "/meta-image.png"
      },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js' },
      { src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js' },
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
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
    '~/assets/styles/sass/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    }
  }
}
