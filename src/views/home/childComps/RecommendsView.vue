<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  height: 150px;
  // text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;
  .recommend-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    // align-content: center;
    flex: 1;
    img {
      width: 80px;
      height: 80px;
      vertical-align: middle;
      // margin: 10px 0 10px 4px;
      margin: 10px 0;
    }
  }
}

</style>
