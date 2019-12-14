<template>
  <div class="detail-info">
    <h3 class="title">{{ goodsBaseInfo.itemTitle }}</h3>
    <div class="price-item">
      <span class="price">￥{{ goodsBaseInfo.price }}</span>
      <span class="high-price">￥{{ goodsBaseInfo.highPrice }}</span>
      <span v-show="goodsBaseInfo.discountDesc" class="discount-desc">{{
        goodsBaseInfo.discountDesc
      }}</span>
    </div>

    <div class="columns">
      <!-- <div>销量 228</div>
      <div>收藏 10人</div>
      <div>72小时发货</div> -->
      <div v-for="(item, index) in goodsBaseInfo.columns" :key="index">
        {{ item }}
      </div>
    </div>

    <div class="services">
      <!-- <div>退货补运费</div>
      <div>全国包邮</div>
      <div>7天无理由退货</div> -->
      <div
        class="service-item"
        v-for="(item, index) in goodsBaseInfo.services"
        :key="index"
      >
        <img :src="item.icon" alt="" /><span>{{ item.name }}</span>
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
    goodsBaseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.detail-info {
  font-size: 14px;
  padding: 0 5px;
  border-bottom: 4px solid #eee;

  .title {
    font-weight: 500;
    font-size: 16px;
    margin: 10px 0;
  }

  .price-item {
    margin-top: 15px;
    // position: relative;
    .price {
      font-size: 18px;
      margin-right: 4px;
      color: #ff5777;
    }
    .high-price {
      text-decoration: line-through;
      color: #999;
    }
    .discount-desc {
      position: relative;
      top: -6px;
      // left: 120px;
      height: 20px;
      margin-bottom: 10px;
      margin-left: 5px;
      padding: 0 5px;
      line-height: 20px;
      background-color: #ff5777;
      color: #fff;
      border-radius: 8px;
    }
  }

  .columns {
    height: 30px;
    margin-top: 10px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    font-size: 12px;
    color: #999;
    // div {
    //   flex: 1;
    // }
    // div:nth-child(2) {
    //   text-align: center;
    // }
    // div:last-child {
    //   text-align: right;
    // }
  }

  .services {
    padding: 10px;
    display: flex;
    font-size: 13px;
    color: #333;
    justify-content: space-between;
    flex-wrap: wrap;
    div:last-child {
      text-align: right;
    }
    .service-item {
      height: 20px;
      line-height: 20px;
      img {
        width: 14px;
        height: 14px;
        vertical-align: middle;
      }
    }
    // div:nth-child(2) {
    //   padding-left: 50px;
    // }
  }
}
</style>
