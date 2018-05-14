module.exports = {
  mode: 'spa',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~/css/main.css'
  ],
   /*
  ** Customize loading indicator
  */
  loadingIndicator: {
    /*
    ** See https://nuxtjs.org/api/configuration-loading-indicator for available loading indicators
    ** You can add a custom indicator by giving a path
    */
    // name: 'folding-cube',
    /*
    ** You can give custom options given to the template
    ** See https://github.com/nuxt/nuxt.js/blob/dev/lib/app/views/loading/folding-cube.html
    */
    // color: '#DBE1EC'
    // background: 'white'
  },
  build: {
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
    ]
  }
}
