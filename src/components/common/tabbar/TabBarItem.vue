<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-bar-item',
  data() {
    return {
    }
  },
  props: {
    path: String,
    fontColor: {
      type: String,
      default: 'red',
    },
  },
  components: {

  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.fontColor} : {}
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    },
  },
}
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  img {
    height: 24px;
    width: 24px;
    margin-top: 2px;
    margin-bottom: 3px;
    vertical-align: middle;
  }
  div {
    font-size: 12px;
  }
}
</style>
