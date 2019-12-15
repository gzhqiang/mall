<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  z-index: 1000;
  right: 5px;
  bottom: 49px;
  img {
    width: 45px;
    height: 45px;
  }
}
</style>
