<template>
  <div class="cart-item">
    <div class="item-selector">
      <!-- <div @click="selectItem" :class="{ checked: isChecked }"></div> -->
      <checked-button
        :isChecked="cartItem.checked"
        @click.native="selectItem"
      ></checked-button>
    </div>
    <div class="item-img">
      <img :src="cartItem.image" alt="" />
    </div>
    <div class="item-desc">
      <h2>{{ cartItem.title }}</h2>
      <p>{{ cartItem.desc }}</p>
      <div class="statistics">
        <span>￥{{ cartItem.price }}</span>
        <span>{{ cartItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedButton from './CheckedButton'

export default {
  name: 'CartListItem',
  data() {
    return {
      // isChecked: true
    }
  },
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckedButton
  },
  methods: {
    selectItem() {
      this.$store.dispatch('updateProductById', {
        id: this.cartItem.id,
        checked: !this.cartItem.checked
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  height: 120px;
  padding: 5px;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  // background-color: pink;
  .item-selector {
    width: 18px;
    // background-color: purple;
    display: flex;
    align-items: center;
    // background-color: purple;
    /* div {
      width: 18px;
      height: 18px;
      border: 2px solid pink;
      border-radius: 50%;
      // background-color: red;
      background: url('~assets/img/cart/tick.svg') no-repeat;
    }
    .checked {
      background-color: #ff8198;
      border-color: #ff8198;
    } */
  }
  .item-img {
    // width: 110px;
    flex: 1;
    padding: 5px;
    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  .item-desc {
    width: 257px;
    padding: 10px;
    h2,
    p {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h2 {
      font-size: 14px;
      height: 25px;
    }
    p {
      height: 50px;
    }
    .statistics {
      span:first-child {
        float: left;
        color: #ff4500;
      }
      span:last-child {
        float: right;
      }
    }
  }
}
</style>
