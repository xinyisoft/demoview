import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainview',
      component: Main,
      meta: {
        title: '轻餐饮组件实例',
        description: '轻餐饮组件实例'
      }
    },
    {
      path: '/jichu/getappid',
      name: 'JichuGetAppid',
      component: resolve => require([`@/components/jichu/getappid.vue`], resolve),
      meta: {
        title: '基础组件-获取APPID',
        description: '基础组件-获取APPID'
      }
    },
    {
      path: '/jichu/getopenid',
      name: 'getopenid',
      component: resolve => require([`@/components/jichu/getopenid.vue`], resolve),
      meta: {
        title: '基础组件-获取OPENID',
        description: '基础组件-获取OPENID'
      }
    },
    {
      path: '/jichu/getsid',
      name: 'getsid',
      component: resolve => require([`@/components/jichu/getsid.vue`], resolve),
      meta: {
        title: '基础组件-获取SID',
        description: '基础组件-获取SID'
      }
    }
  ]
})
