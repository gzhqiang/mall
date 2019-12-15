export default {
  incrementCount(state, index) {
    state.cartListProduct[index].count += 1
  },
  addProduct(state, payload) {
    state.cartListProduct.push(payload)
  }
}
