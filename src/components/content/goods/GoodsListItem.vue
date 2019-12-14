<template>
  <div class="goods-list-item">
    <div class="item-img">
      <a :href="item.link" @click.prevent="itemClick">
        <img :src="item.show.img" @load="imgLoad" alt="" />
      </a>
    </div>

    <div>
      <p>{{ item.title }}</p>
      <div class="price_cfav">
        <span>{{ '￥' + item.price }}</span> <span>{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {},
  methods: {
    imgLoad() {
      // console.log('imgload...')
      // console.log(this.$bus.$emit)
      this.$bus.$emit('imgLoad')
    },
    itemClick() {
      // 跳转到商品详情页面
      this.$router.push(`/detail/${this.item.iid}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list-item {
  font-size: 14px;
  padding-bottom: 10px;

  .item-img {
    margin-bottom: 5px;
    img {
      width: 100%;
      min-height: 262px;
      border-radius: 5px;
    }
  }

  p {
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price_cfav {
    // position: relative;
    text-align: center;
    :first-child {
      color: red;
    }

    :nth-child(2) {
      position: relative;
      // top: 0;
      // left: 20px;
      padding-left: 15px;
    }

    :nth-child(2)::before {
      content: '';
      position: absolute;
      // z-index: 999;
      top: 0;
      left: 0;
      height: 14px;
      width: 14px;
      background: url('~assets/img/common/collect.svg') no-repeat;
      background-size: 14px auto;
    }
  }
}
</style>
