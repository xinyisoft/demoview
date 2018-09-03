<template>
  <mu-container :z-depth="1" class="mu-main-view">
    <mu-appbar color="lightBlue400" class="mu-appbar-header">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      轻餐饮API演示
    </mu-appbar>
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
  </mu-container>
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
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
