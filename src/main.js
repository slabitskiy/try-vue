// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  store,
  el: '#app',
  router,
  render: (h) => h(App)
})
