<template>
  <div class="tab-control">
    <div @click="itemClick(index)" class="tab-control-item" v-for="(item, index) in tabs" :key="index">
      <span :class="{active: currentIndex === index}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {

  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabChanged', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  // padding-bottom: 5px;
  color: #ff5777;
  padding: 0 5px 5px;
  border-bottom: 2px solid red;
}

.tab-control {
  // position: sticky;
  top: 44px;
  z-index: 999;
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  background-color: #fff;

  .tab-control-item {
    flex: 1;
    // display:

  }
}
</style>
