<template>
  <div class="mu-main-view">
    <mu-appbar :color="appbar.navigate.navigationBarBackgroundColor?appbar.navigate.navigationBarBackgroundColor:'lightBlue400'" class="mu-appbar-header">
      <mu-button flat slot="left" @click="back">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      获取appid
    </mu-appbar>
  </div>
</template>

<script>
  export default {
    name: 'getappid',
    data () {
      return {}
    },
    methods: {
      back() {
        this.$router.back()
      },
      getAppid() {
        XY.getAppLoginInfo({
          'appid': 100087,
          success: function(res) {
            console.log(res)
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
