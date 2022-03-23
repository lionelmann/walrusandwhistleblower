import pkg from "./package";

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "The Walrus and the Whistleblower",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity."
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content:
          "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity."
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "The Walrus and the Whistleblower"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity."
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "Nathalie Bibeau."
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://walrusandwhistleblower.com/banner_facebook.jpg"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "The Walrus and the Whistleblower"
      },
      { hid: "og:type", property: "og:type", content: "Website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://walrusandwhistleblower.com/"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://walrusandwhistleblower.com/banner_facebook.jpg"
      },
      { hid: "og:image:width", property: "og:image:width", content: "1200" },
      { hid: "og:image:height", property: "og:image:height", content: "630" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A whistleblower is sued for $1.5 million for plotting to steal a walrus and falls down the rabbit hole of a personal quest against the backdrop of a movement to end marine mammal captivity."
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "The Walrus and the Whistleblower"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://unpkg.com/website-carbon-badges@^1/b.min.js",
        defer: true,
        body: true
      },
      { src: "https://player.vimeo.com/api/player.js" }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["assets/css/typography.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/ga.js", mode: "client" }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    [
      "nuxt-i18n",
      {
        locales: [
          {
            name: "Français",
            code: "fr",
            iso: "fr-CA",
            file: "fr-CA.js"
          },
          {
            name: "English",
            code: "en",
            iso: "en-CA",
            file: "en-CA.js"
          }
        ],
        lazy: true,
        defaultLocale: "en",
        langDir: "lang/"
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
