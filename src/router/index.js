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
      path: '/jichu/getxinyitoken',
      name: 'getxinyitoken',
      component: resolve => require([`@/components/jichu/getxinyitoken.vue`], resolve),
      meta: {
        title: '基础组件-获取xinyiToken',
        description: '基础组件-获取xinyiToken'
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
    },
    {
      path: '/ui/systoast',
      name: 'systoast',
      component: resolve => require([`@/components/ui/systoast.vue`], resolve),
      meta: {
        title: 'UI组件-系统Toast',
        description: 'UI组件-系统Toast'
      }
    },
    {
      path: '/ui/syspicker',
      name: 'syspicker',
      component: resolve => require([`@/components/ui/syspicker.vue`], resolve),
      meta: {
        title: 'UI组件-系统picker',
        description: 'UI组件-系统picker'
      }
    },
    {
      path: '/ui/sysselectpic',
      name: 'sysselectpic',
      component: resolve => require([`@/components/ui/sysselectpic.vue`], resolve),
      meta: {
        title: 'UI组件-选择照片',
        description: 'UI组件-选择照片',
        navigate: {
          navigationBarBackgroundColor: '#ffffff',
          navigationBarTextStyle: 'black',
          navigationBarTitleText: '页面样式演示',
          backgroundColor: '#eeeeee',
          backgroundTextStyle: 'light'
        }
      }
    }
  ]
})
