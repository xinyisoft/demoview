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
  try {
    if (to.meta.title) {
      XY.setNavigationBarTitle({
        title: to.meta.title
      })
    }
    if (to.meta.navigate.navigationBarTextColor) {
      XY.setNavigationBarTitleColor({
        color: to.meta.navigate.navigationBarTextColor
      })
    }
    if (to.meta.navigate.navigationBarBackgroundColor) {
      XY.setNavigationBarColor({
        color: to.meta.navigate.navigationBarBackgroundColor
      })
    }
    if (to.meta.navigate.navigationBarImmersedStatus) {
      XY.setImmersedStatusbar({
        flag: to.meta.navigate.navigationBarImmersedStatus
      })
    }
    if (to.meta.navigate.navigationBarLoading) {
       XY.showNavigationBarLoading()
    } else {
       XY.hideNavigationBarLoading()
    }
    if (to.meta.navigate.navigationBarShow) {
      XY.showNavigationBar()
    } else {
      XY.hideNavigationBar()
    }
  } catch (err) {

  }
  console.log('test1', to, from)
})
// 当前窗口得到焦点
window.onfocus = function () {
  console.log('window.foucs')
  // 播放动画或视频
}

// 当前窗口失去焦点
window.onblur = function () {
  console.log('window.onblur')
  // 暂停动画或视频
}
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
