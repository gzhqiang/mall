export default {
  incrementCount(state, index) {
    state.cartListProduct[index].count += 1
  },
  addProduct(state, payload) {
    state.cartListProduct.push(payload)
  },
  updateProduct(state, checked) {
    state.cartListProduct.forEach(product => {
      // eslint-disable-next-line no-param-reassign
      product.checked = checked
    })
  },
  updateProductById(state, payload) {
    state.cartListProduct[payload.index].checked = payload.checked
  }
}
