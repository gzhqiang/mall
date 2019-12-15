<template>
  <div class="bottom-bar">
    <div class="bar-item-left">
      <div>
        <i class="icon icon-service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon icon-shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon icon-collection"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item-right">
      <div @click="addToCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {}
  },
  components: {},
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  font-size: 14px;
  height: 59px;
  background-color: #fff;
  text-align: center;
  .bar-item-left {
    display: flex;
    width: 50%;
    height: 100%;
    float: left;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      flex: 1;
      .icon {
        display: block;
        height: 22px;
        width: 22px;
        background-color: purple;
        background: url('~assets/img/detail/detail_bottom.png') no-repeat;
        background-size: 22px auto;
      }
    }
  }
  .bar-item-right {
    width: 50%;
    height: 100%;
    float: right;
    display: flex;
    line-height: 59px;
    font-size: 16px;
    div {
      flex: 1;
    }
    div:first-child {
      background-color: #ffe817;
    }
    div:last-child {
      background-color: #ff6688;
      color: #fff;
    }
  }
}
</style>
