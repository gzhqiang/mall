<template>
  <div class="cart-bottom-bar">
    <div class="select-all">
      <checked-button
        :isChecked="checkedAll"
        class="check-button"
        @click.native="selectAll"
      >
      </checked-button>
      <span>全选</span>
    </div>
    <div class="statistics">
      <span>合计:</span><span>￥{{ totalPrice }}</span>
    </div>
    <div class="operation">去计算({{ cartListLength }})</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CheckedButton from './CheckedButton'

export default {
  name: 'CartBottomBar',
  data() {
    return {}
  },
  components: {
    CheckedButton
  },
  computed: {
    ...mapGetters(['cartListLength', 'cartList']),
    totalPrice() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((preVal, cur) => preVal + cur.price * cur.count, 0)
        .toFixed(2)
    },
    checkedAll() {
      if (this.cartListLength === 0) {
        return false
      }
      const haveNoChcked = this.cartList.some(item => {
        if (!item.checked) {
          return true
        }
        return false
      })
      return !haveNoChcked
    }
  },
  methods: {
    selectAll() {
      this.$store.dispatch('updateProduct', !this.checkedAll)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-bottom-bar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 44px;
  padding-left: 5px;
  background-color: #eee;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.5);
  // background-color: pink;
  display: flex;
  font-size: 14px;
  .select-all {
    width: 60px;
    display: flex;
    align-items: center;
    .check-button {
      width: 18px;
      margin-right: 4px;
    }
  }
  .statistics {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .operation {
    width: 100px;
    // line-height: 44px;
    // display: flex;
    // align-items: center;
    background-color: #ff4500;
    color: #fff;
    text-align: center;
    line-height: 44px;
  }
}
</style>
