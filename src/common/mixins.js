import { debounce } from './utils'
// eslint-disable-next-line import/prefer-default-export
export const itemImageLoadMixin = {
  data() {
    return {
      refresh: null
    }
  },
  methods: {
    itemImgListener() {
      this.refresh()
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('imgLoad', this.itemImgListener)
  }
}
