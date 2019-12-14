<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      :tabs="['流行', '新款', '精选']"
      @tabChanged="tabChanged"
      ref="tabControl1"
      class="fixed-tab-control"
      v-show="isShowControl"
    >
    </tab-control>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>

    <scroll
      class="content"
      ref="scroll"
      @scrollY="scrollY"
      :probeType="3"
      :pullUpLoad="true"
      @loadMore="loadMore"
    >
      <!-- 轮播图 -->
      <home-swipe
        :banners="banners"
        @swipeImageLoad="swipeImageLoad"
      ></home-swipe>
      <!-- 推荐模块 -->
      <recommends-view :recommends="recommends"></recommends-view>

      <!-- 特性模块 -->
      <feature-view></feature-view>

      <!-- tab control -->
      <tab-control
        :tabs="['流行', '新款', '精选']"
        @tabChanged="tabChanged"
        ref="tabControl2"
      >
      </tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabcontrol/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import HomeSwipe from './childComps/HomeSwipe'
import RecommendsView from './childComps/RecommendsView'
import FeatureView from './childComps/FeatureView'

import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backtop/BackTop'

import { getMultiData, getProductData } from '@/network/home'

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      products: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      num2type: {
        0: 'pop',
        1: 'new',
        2: 'sell'
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isCeilingLight: false,
      isShowControl: false,
      currentOffsetY: 0
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      // this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = index
    },
    backTop() {
      this.$refs.scroll.backTo(0, 0)
    },
    scrollY(y) {
      const posY = Math.abs(y)
      this.isShowBackTop = posY > 1000
      this.isShowControl = posY >= this.tabControlOffsetTop
    },
    loadMore() {
      this.getProductData(
        this.currentType,
        this.products[this.currentType].page
      )
    },
    swipeImageLoad() {
      // console.log('轮播图加载完成')
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabControlOffsetTop)
    },
    // 去除抖动 && 频繁刷新
    debounce(func, delay = 200) {
      let timer = null
      return () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func()
        }, delay)
      }
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
    /*   for (const type in this.products) {
      this.getProductData(type, this.products[type].page + 1)
    } */
    // for (const [type, product] of Object.entries(this.products)) {
    //   console.log(type, product)
    //   this.getProductData(type, product.page + 1)
    // }

    // for (const type of Object.keys(this.products)) {
    //   this.getProductData(type, this.products[type].page + 1)
    // }
    // console.log(Object.entries(this.products), type(Object.entries(this.products)))
    Object.entries(this.products).forEach(item => {
      // 数组解构
      const [type, product] = item
      this.getProductData(type, product.page + 1)
    })
    // this.goodsList = this.products.pop.list
    // console.log(typeof Object.keys(this.products))
    // console.log(Object.keys(this.products))
  },
  mounted() {
    // this.imgLoadFun(,)
    const refresh = this.debounce(this.$refs.scroll.refresh)
    this.$bus.$on('imgLoad', () => {
      refresh()
      // this.$refs.scroll.refresh()
    })
  },
  activated() {
    // 新版better-scroll好像没有bug, 但是我这里也再做下，避免出现问题。
    // console.log('activated')
    // this.$refs.scroll.sc
    console.log(this.currentOffsetY)
    this.$refs.scroll.backTo(0, this.currentOffsetY, 0)
  },
  deactivated() {
    console.log('deactivated')
    // 记住当前位置
    this.currentOffsetY = this.$refs.scroll.scroll.y
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

.fixed-tab-control {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>
