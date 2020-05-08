
import  { messages }  from './lang/'

export default {
  /*
  ** Environments
  */
  env: {  
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  /*
  ** Mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss'
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
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', {
      locales: ['en', 'es'],
      defaultLocale: 'es',
      vueI18n: {
        fallbackLocale: 'es',
        messages
      }
    }],
    '@nuxtjs/svg-sprite',
    '@nuxtjs/apollo'
  ],
  /*
  ** Apollo configuration
  */
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: 'https://stormy-tor-75451.herokuapp.com/graphql' || "http://localhost:1337/graphql"
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
