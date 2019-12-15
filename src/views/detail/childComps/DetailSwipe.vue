<template>
  <swipe v-if="topImages.length" :autoplay="3000" indicator-color="white">
    <swipe-item v-for="item in topImages" :key="item.title" class="swipe-item">
      <img :src="item" alt="" />
    </swipe-item>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'

export default {
  data() {
    return {}
  },
  props: {
    topImages: {
      type: Array,
      required: true
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.van-swipe {
  margin-top: 44px;
  img {
    width: 100%;
    height: 375px;
  }
}
</style>
