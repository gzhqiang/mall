<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/maintabbar/MainTabBar'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    MainTabBar
  }
}
</script>

<style lang="scss">
@import 'assets/scss/base.scss';
</style>
