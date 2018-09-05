<template>
  <div class="mu-main-view">
    <mu-appbar color="lightBlue400" class="mu-appbar-header">
      <mu-button flat slot="left" @click="back">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      获取Xinyitoken
    </mu-appbar>
    <mu-list>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-title>openid</mu-list-item-title>
        <mu-list-item-action>{{openid}}</mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-title>xinyitoken</mu-list-item-title>
        <mu-list-item-action>{{xinyitoken}}</mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: 'getappid',
    data () {
      return {
        openid: '',
        xinyitoken: ''
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      getAppid() {
        XY.getAppLoginInfo({
          'appid': 100087,
          success: (res) => {
            this.openid = res.openid
            this.xinyitoken = res.xinyitoken
          },
          faild: function (error) {
            console.log(error)
          }
        })
      }
    },
    created: function () {
      this.getAppid()
    }
  }
</script>

<style scoped>

</style>
