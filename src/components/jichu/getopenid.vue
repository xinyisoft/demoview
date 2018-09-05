<template>
  <mu-paper :z-depth="1" class="mu-main-view">
    <mu-appbar color="lightBlue400" class="mu-appbar-header">
      <mu-button flat slot="left" @click="back">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
      获取OPENID
    </mu-appbar>
    <div>
      <mu-card style="width: 100%; margin: 0 auto;">
        <mu-card-header title="Myron Avatar" sub-title="sub title">
          <mu-avatar slot="avatar">
            <img src="../../assets/images/avatar1.jpg">
          </mu-avatar>
        </mu-card-header>
        <mu-card-media title="Image Title" sub-title="Image Sub Title">
          <img src="../../assets/images/avatar1.jpg">
        </mu-card-media>
        <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-card-text>
        <mu-card-actions>
          <mu-button flat>Action 1</mu-button>
          <mu-button flat>Action 2</mu-button>
        </mu-card-actions>
      </mu-card>
    </div>
  </mu-paper>
</template>

<script>
  export default {
    name: 'getopenid',
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>
