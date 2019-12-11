<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data() {
    return {

    }
  },
  components: {

  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}
</style>
