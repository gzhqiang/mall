<template>
  <div class="goods">
    <goods-list-item class="goods-item" v-for="item in goodsList" :key="item.iid" :item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"

export default {
  data() {
    return {

    }
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang="scss" scoped>
.goods{
  display: flex;
  // flex: 45%;
  // width: 45%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 5px;
  .goods-item {
    width: 48%;
  }
}

</style>
