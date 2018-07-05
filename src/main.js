// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Web3 from 'web3'
import SvgFiller from 'vue-svg-filler'
import store from '@/store'

// Style sheet
import '@/assets/buefy.scss'
import 'begeta/css/begeta.min.css'
import '@/assets/main.css'

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/iT7hWgNoY7XT2BXIVAhq'))

Vue.use(Vuex)
Vue.use(Buefy)
Vue.component('svg-filler', SvgFiller)

Vue.prototype['$web3'] = web3
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
