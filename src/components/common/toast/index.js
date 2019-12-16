import Toast from './Toast'

const plugin = {}

function removeDom(event) {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

plugin.install = Vue => {
  const ToastContructor = Vue.extend(Toast)

  // eslint-disable-next-line func-names
  ToastContructor.prototype.close = function () {
    this.isShow = false
    this.$el.addEventListener('transitionend', removeDom)
  }

  Vue.prototype.$toast = (options={}) => {
    const toast = new ToastContructor()

  }


}
