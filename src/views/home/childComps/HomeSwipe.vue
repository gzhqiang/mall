<template>
  <swipe v-if="banners.length" :autoplay="3000" indicator-color="white">
    <swipe-item v-for="item in banners" :key="item.title" class="swipe-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swipeImageLoad" />
      </a>
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
    banners: {
      type: Array,
      required: true
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    swipeImageLoad() {
      this.$emit('swipeImageLoad')
    }
  }
}
</script>

<style lang="scss" scoped>
.van-swipe-item {
  margin-top: 44px;
  img {
    width: 100%;
  }
}
</style>
