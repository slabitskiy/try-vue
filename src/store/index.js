import Vuex from 'vuex'
import Vue from 'vue'
import modules from './modules'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules,

  strict: debug
})
