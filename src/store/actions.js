import { ADD_TO_CART } from './mutation_types'

export default {
  [ADD_TO_CART]({ state, commit }, payload) {
    const oldProduct = state.cartListProduct.find(
      item => item.id === payload.id
    )

    return new Promise(resolve => {
      if (oldProduct) {
        // 告知mutations来修改
        const index = state.cartListProduct.indexOf(oldProduct)
        commit('incrementCount', index)
        resolve('该商品数量+1')
      } else {
        // eslint-disable-next-line no-param-reassign
        payload.count = 1
        // eslint-disable-next-line no-param-reassign
        payload.checked = true
        commit('addProduct', payload)
        resolve('该商品已添加到购物车')
      }
    })
  },
  updateProduct({ commit }, checked) {
    commit('updateProduct', checked)
  },
  updateProductById({ state, commit }, payload) {
    const product = state.cartListProduct.find(
      item => item.id === payload.id
    )
    const index = state.cartListProduct.indexOf(product)
    // eslint-disable-next-line no-param-reassign
    payload.index = index
    commit('updateProductById', payload)
  }
}
