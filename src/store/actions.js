import { ADD_TO_CART } from './mutation_types'

export default {
  [ADD_TO_CART]({ state, commit }, payload) {
    const oldProduct = state.cartListProduct.find(
      item => item.id === payload.id
    )
    if (oldProduct) {
      // 告知mutations来修改
      const index = state.cartListProduct.indexOf(oldProduct)
      commit('incrementCount', index)
    } else {
      // eslint-disable-next-line no-param-reassign
      payload.count = 1
      commit('addProduct', payload)
    }
  }
}
