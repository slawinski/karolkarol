// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/DefaultLayout.vue'

require('typeface-source-serif-pro')
require('typeface-source-sans-pro')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('DefaultLayout', DefaultLayout)

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'pl' }

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'bg-gray-100 max-w-3xl mx-auto px-4' }
}

