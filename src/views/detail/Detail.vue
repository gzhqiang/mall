<template>
  <div class="goods-detail">
    <detail-nav-bar :items="['商品', '参数', '评论', '推荐']"></detail-nav-bar>

    <scroll class="content" ref="scroll" :probeType="3">
      <!-- 轮播图 -->
      <detail-swipe :top-images="topImages"></detail-swipe>

      <!-- 商品信息 -->
      <!-- 基础信息 -->
      <detail-base-info :goodsBaseInfo="goodsBaseInfo"></detail-base-info>
      <!-- 商店信息 -->
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>

      <!-- 商品详细信息 -->
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>

      <!-- 商品参数 -->
      <detail-params :params="params"></detail-params>

      <!-- 推荐商品 -->
      <goods-list :goodsList="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import GoodsList from '@/components/content/goods/GoodsList'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwipe from './childComps/DetailSwipe'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParams from './childComps/DetailParams'

import {
  getGoodsDetail,
  GoodsBaseInfo,
  getRecommendGoods,
  Shop,
  Params
} from '@/network/detail'
import { debounce } from '@/common/utils'

export default {
  name: 'Detail',
  data() {
    return {
      topImages: [],
      goodsBaseInfo: {},
      shopInfo: {},
      detailInfo: {},
      params: {},
      recommends: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    GoodsList
  },
  created() {
    const goodsId = this.$route.params.id
    // 根据id获取商品信息
    getGoodsDetail(goodsId).then(res => {
      this.topImages = res.result.itemInfo.topImages
      this.goodsBaseInfo = new GoodsBaseInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      )
      this.shopInfo = new Shop(res.result.shopInfo)
      this.detailInfo = res.result.detailInfo
      this.params = new Params(res.result.itemParams)
    })
    // 获取推荐商品列表
    getRecommendGoods().then(res => {
      // console.log(res)
      this.recommends = res.data.list
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('detailImgLoad', () => {
      refresh()
      // this.$refs.scroll.refresh()
    })
  }
}
</script>

<style lang="scss" scoped>
.goods-detail {
  height: 100vh;
  position: relative;
  z-index: 999;
  background-color: #fff;
  .content {
    height: calc(100% - 44px);
    // overflow: hidden;
  }
}
</style>
