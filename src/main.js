// Normalize.css
require('~/assets/libs/normalize.css')

// Scss
require('~/assets/scss/global.scss')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}
