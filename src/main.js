// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'material-design-icons/iconfont/material-icons.css'
import Toast from 'muse-ui-toast'

Vue.config.productionTip = false
Vue.use(MuseUi)
Vue.use(Toast)
router.afterEach((to, from) => {
  document.title = to.meta.title
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  router,
  components: {App},
  template: '<App/>',
  watch: {
    '$route'(to, from) {
      this.transitionName = from.name === 'mainview' ? 'slide-left' : 'slide-right'
    }
  }
})
