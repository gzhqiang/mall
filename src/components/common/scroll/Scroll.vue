<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    backTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // console.log('-----111')
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    // console.log('this.$props', this.$props)
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
      startY: 0,
      bounce: false
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
      // 发送网络请求, 请求更多页的数据
      this.$emit('loadMore')
    })

    this.scroll.on('scroll', pos => {
      // this.scrollY = pos.y
      this.$emit('scrollY', pos.y)
    })
  }
}
</script>

<style lang="scss" scoped></style>
