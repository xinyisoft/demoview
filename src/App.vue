<template>
  <div id="app">
    <transition :name="$root.transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  @import "assets/app";
</style>
