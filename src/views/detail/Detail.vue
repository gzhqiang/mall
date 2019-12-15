<template>
  <div class="goods-detail">
    <detail-nav-bar
      :items="['商品', '参数', '评价', '推荐']"
      @changeItem="changeItem"
      ref="navBar"
    ></detail-nav-bar>

    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar></detail-bottom-bar>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollY="scrollContent"
    >
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
      <detail-params :params="params" ref="params"></detail-params>

      <!-- 商品评价 -->
      <detail-comment :comments="comments" ref="comment"></detail-comment>

      <!-- 推荐商品 -->
      <goods-list :goodsList="recommends" ref="recommend"></goods-list>
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
import DetailComment from './childComps/DetailComment'
import DetailBottomBar from './childComps/DetailBottomBar'

import {
  getGoodsDetail,
  GoodsBaseInfo,
  getRecommendGoods,
  Shop,
  Params
} from '@/network/detail'
import { itemImageLoadMixin, backTopMixin } from '@/common/mixins'

export default {
  name: 'Detail',
  data() {
    return {
      topImages: [],
      goodsBaseInfo: {},
      shopInfo: {},
      detailInfo: {},
      params: {},
      recommends: [],
      comments: {},
      counter: 0,
      offsetTops: [],
      navBarIndex: 0,
      isShowBackTop: false
    }
  },
  mixins: [itemImageLoadMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    GoodsList,
    DetailComment,
    DetailBottomBar
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
      this.comments = res.result.rate
    })
    // 获取推荐商品列表
    getRecommendGoods().then(res => {
      // console.log(res)
      this.recommends = res.data.list
    })
  },
  mounted() {
    this.$refs.scroll.refresh()
    // const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('detailImgLoad', () => {
      this.counter += 1
      this.refresh()
    })
  },
  destroyed() {
    this.$bus.$off('imgLoad', this.itemImgListener)
  },
  watch: {
    counter() {
      if (
        this.detailInfo &&
        this.counter === this.detailInfo.detailImage[0].list.length
      ) {
        this.offsetTops = []
        this.offsetTops.push(0)
        this.offsetTops.push(this.$refs.params.$el.offsetTop)
        this.offsetTops.push(this.$refs.comment.$el.offsetTop)
        this.offsetTops.push(this.$refs.recommend.$el.offsetTop)
        this.offsetTops.push(Number.MAX_VALUE)
        // this.offsetTop['1'] = this.$refs.params.$el.offsetTop
        // this.offsetTop['2'] = this.$refs.comment.$el.offsetTop
        // this.offsetTop['3'] = this.$refs.recommend.$el.offsetTop
      }
    }
  },
  methods: {
    changeItem(index) {
      this.$refs.scroll.backTo(0, -this.offsetTops[index])
    },
    scrollContent(y) {
      const posY = Math.abs(y)
      for (let i = 0; i < this.offsetTops.length - 1; i += 1) {
        if (
          this.navBarIndex !== i &&
          posY >= this.offsetTops[i] &&
          posY <= this.offsetTops[i + 1]
        ) {
          this.navBarIndex = i
        }
      }
      // this.offsetTops.forEach((offsetTop, index) => {
      //   if (posY >=) {

      //   }
      // })
      // if (posY >= this.offsetTop[3]) {
      //   this.navBarIndex = 3
      // } else if (posY >= this.offsetTop[2]) {
      //   this.navBarIndex = 2
      // } else if (posY >= this.offsetTop[1]) {
      //   this.navBarIndex = 1
      // } else {
      //   this.navBarIndex = 0
      // }
      this.$refs.navBar.currentIndex = this.navBarIndex
      this.isShowBackTop = posY > 1000

      // 重构
    }
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
    height: calc(100% - 44px - 59px);
    // overflow: hidden;
    // overflow: hidden;
  }
}
</style>
