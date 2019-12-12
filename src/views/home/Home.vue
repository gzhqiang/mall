<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <back-top 
      @click.native="backTop" 
      v-show="isShowBackTop">
    </back-top>

    <scroll 
      class="content" 
      ref="scroll" 
      @scrollY="scrollY"
      :probeType="3"
      :pullUpLoad="true"
      @loadMore="loadMore">
      <!-- 轮播图 -->
      <home-swipe :banners="banners"></home-swipe>
      <!-- 推荐模块 -->
      <recommends-view :recommends="recommends"></recommends-view>

      <!-- 特性模块 -->
      <feature-view></feature-view>

      <!-- tab control -->
      <tab-control :tabs="['流行', '新款', '精选']" @tabChanged='tabChanged'></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <!-- <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>商品列表1</li>
        <li>商品列表2</li>
        <li>商品列表3</li>
        <li>商品列表4</li>
        <li>商品列表5</li>
        <li>商品列表6</li>
        <li>商品列表7</li>
        <li>商品列表8</li>
        <li>商品列表9</li>
        <li>商品列表10</li>
        <li>商品列表11</li>
        <li>商品列表12</li>
        <li>商品列表13</li>
        <li>商品列表14</li>
        <li>商品列表15</li>
        <li>商品列表16</li>
        <li>商品列表17</li>
        <li>商品列表18</li>
        <li>商品列表19</li>
        <li>商品列表20</li>
        <li>商品列表21</li>
        <li>商品列表22</li>
        <li>商品列表23</li>
        <li>商品列表24</li>
        <li>商品列表25</li>
        <li>商品列表26</li>
        <li>商品列表27</li>
        <li>商品列表28</li>
        <li>商品列表29</li>
        <li>商品列表30</li>
        <li>商品列表31</li>
        <li>商品列表32</li>
        <li>商品列表33</li>
        <li>商品列表34</li>
        <li>商品列表35</li>
        <li>商品列表36</li>
        <li>商品列表37</li>
        <li>商品列表38</li>
        <li>商品列表39</li>
        <li>商品列表40</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabcontrol/TabControl'
import GoodsList from "@/components/content/goods/GoodsList"

import HomeSwipe from './childComps/HomeSwipe'
import RecommendsView from './childComps/RecommendsView'
import FeatureView from './childComps/FeatureView'

import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backtop/BackTop'

import {getMultiData, getProductData} from '@/network/home'

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      products: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      num2type: {
        0: 'pop',
        1: 'new',
        2: 'sell'
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  components: {
    NavBar,
    HomeSwipe,
    RecommendsView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.products[this.currentType].list
    }
  },
  methods: {
    getMultiData() {
      getMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getProductData(type, page) {
      getProductData(type, page).then(res => {
        // console.log(res.data.list)
        this.products[type].list.push(...res.data.list)
        this.products[type].page += 1

        // 完成加载更多数据
        this.$refs.scroll.finishPullUp()
        return res.data.list
      })
    },
    tabChanged(index) {
      this.currentType = this.num2type[index]
    },
    backTop() {
      this.$refs.scroll.backTop(0, 0)
    },
    scrollY(posY) {
      this.isShowBackTop = -posY > 1000
    },
    loadMore() {
      this.getProductData(this.currentType, this.products[this.currentType].page)
    }
  },
  created() {
    // 获取banner和recommends
    this.getMultiData()

    /*
      获取商品信息
      this.getProductData('pop', page+1)
      this.getProductData('new', page+1)
      this.getProductData('sell', page+1)
    */
    for (const type in this.products) {
      this.getProductData(type, this.products[type].page + 1)
    }
    // this.goodsList = this.products.pop.list
  },
  mounted() {
  }
  
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100vh;
}

.content {
  // height: 300px;
  position: absolute;
  // z-index: 1000;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.home-nav-bar {
  background-color: $home-nav-bar-bgc;
  color: #fff;
}


</style>
