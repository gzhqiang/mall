<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :cartItem="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  data() {
    return {}
  },
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartListLength', 'cartList'])
  }
}
</script>

<style lang="scss" scoped></style>
