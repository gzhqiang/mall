<template>
  <div class="detail-goods-info">
    <div class="title">
      {{ detailInfo.desc }}
    </div>
    <div v-if="detailInfo.detailImage && detailInfo.detailImage.length > 0">
      <div class="key">
        {{ detailInfo.detailImage[0].key }}
      </div>
      <div
        class="imgs"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
      >
        <img :src="item" alt="" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data() {
    return {}
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  methods: {
    imgLoad() {
      this.$bus.$emit('detailImgLoad')
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-goods-info {
  // padding: 0 10px;
  .title,
  .key {
    font-size: 14px;
    padding: 0 10px;
  }
  .title {
    position: relative;
    margin-top: 40px;
  }
  .title::before {
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    width: 80px;
    height: 1px;
    background-color: #000;
  }

  .title::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 80px;
    height: 1px;
    background-color: #000;
  }
  .key {
    height: 80px;
    margin-top: 40px;
    border-bottom: 8px solid #eee;
  }
  .imgs {
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>
