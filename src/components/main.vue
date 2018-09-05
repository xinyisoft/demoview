<template>
  <div class="mu-main-view">
    <mu-appbar color="lightBlue400" class="mu-appbar-header">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      轻餐饮API演示
    </mu-appbar>
    <mu-list>
      <mu-sub-header>测试原生转场</mu-sub-header>
      <mu-list-item button avatar :ripple="true" @click="testclick3">
        <mu-list-item-action>
          <mu-icon value="inbox"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>XY.windowOpen()</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button avatar :ripple="true" @click="testclick">
        <mu-list-item-action>
          <mu-icon value="inbox"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>打开新页面</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button avatar :ripple="true" @click="testclick2">
        <mu-list-item-action>
          <mu-icon value="inbox"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>关闭当前打开新页面</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <mu-list v-for="menu in menuData" :key="menu.title">
      <mu-sub-header>{{menu.title}}</mu-sub-header>
      <mu-list-item avatar button :ripple="true" v-for="itemData in menu.items" :to="itemData.link"
                    :key="itemData.link">
        <mu-list-item-action>
          <mu-icon :value="itemData.icon"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>{{itemData.title}}</mu-list-item-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-icon value="chevron_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: 'mainview',
    data() {
      return {
        menuData: [
          {
            title: '基本数据组件',
            items: [{
              icon: 'folder',
              title: '获取appid',
              link: 'jichu/getappid'
            }, {
              icon: 'folder',
              title: '获取OPENID',
              link: 'jichu/getopenid'
            }, {
              icon: 'folder',
              title: '获取SID',
              link: 'jichu/getsid'
            }]
          },
          {
            title: 'UI组件例子',
            items: [{
              icon: 'folder',
              title: '系统Toast',
              link: 'ui/systoast'
            }, {
              icon: 'folder',
              title: '系统picker',
              link: 'ui/syspicker'
            }, {
              icon: 'folder',
              title: '选择照片',
              link: 'ui/sysselectpic'
            }]
          }
        ]
      }
    },
    methods: {
      testclick(e) {
        XY.navigateTo({
          url: '#/jichu/getappid'
        })
      },
      testclick2(e) {
        XY.redirectTo({
          url: '#/jichu/getappid'
        })
      },
      testclick3(e) {
        XY.windowOpen({
          url: '#/jichu/getappid'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
