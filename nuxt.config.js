import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'The Walrus and the Whistleblower',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity. A film by Nathalie Bibeau." },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
      { hid: 'twitter:site', name: 'twitter:site', content: "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity. A film by Nathalie Bibeau." },
      { hid: 'twitter:title', name: 'twitter:title', content: "The Walrus and the Whistleblower" },
      { hid: 'twitter:description', name: 'twitter:description', content: "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity. A film by Nathalie Bibeau." },
      { hid: 'twitter:creator', name: 'twitter:creator', content: "Nathalie Bibeau." },
      { hid: 'twitter:image', name: 'twitter:image', content: "https://walrusandwhistleblower.com/bg_pool_full.jpg" },
      { hid: 'og:title', name: 'og:title', content: "The Walrus and the Whistleblower" },
      { hid: 'og:type', name: 'og:type', content: "Website" },
      { hid: 'og:url', name: 'og:url', content: "https://walrusandwhistleblower.com/" },
      { hid: 'og:image', name: 'og:image', content: "https://walrusandwhistleblower.com/bg_pool_full.jpg" },
      { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', name: 'og:image:height', content: '630' },
      { hid: 'og:description', name: 'og:description', content: "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity. A film by Nathalie Bibeau." },
      { hid: 'og:site_name', name: 'og:site_name', content: "The Walrus and the Whistleblower" },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/website-carbon-badges@^1/b.min.js', defer: true, body: true },
      { src: 'https://player.vimeo.com/api/player.js' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['assets/css/typography.css'],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
