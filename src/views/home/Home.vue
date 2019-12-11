<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swipe :banners="banners"></home-swipe>

  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getMultiData} from '@/network/home'
import HomeSwipe from './childComps/HomeSwipe'

export default {
  data() {
    return {
      banners: []
    }
  },
  components: {
    NavBar,
    HomeSwipe
  },
  created() {
    getMultiData().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
    })
  },
}
</script>

<style lang="scss" scoped>

.home-nav-bar {
  background-color: $home-nav-bar-bgc;
  color: #fff;
}


</style>
