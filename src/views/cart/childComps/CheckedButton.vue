<template>
  <div class="checked-button">
    <div :class="{ checked: isChecked }"></div>
  </div>
</template>

<script>
export default {
  name: 'CheckedButton',
  data() {
    return {
    }
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  created() {
  },
  components: {},
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.checked-button {
  div {
    width: 18px;
    height: 18px;
    border: 2px solid pink;
    border-radius: 50%;
    background: url('~assets/img/cart/tick.svg') no-repeat;
  }
  .checked {
    background-color: #ff8198;
    border-color: #ff8198;
  }
}
</style>
