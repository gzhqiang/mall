<template>
  <div class="toast" v-show="isShow">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是toast'
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 15px 20px;
  font-size: 16px;
  background-color: rgba(0, 0, 0, .5);
  color: #fff;
}

</style>
