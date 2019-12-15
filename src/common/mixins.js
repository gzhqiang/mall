import { debounce } from './utils'
import BackTop from '@/components/content/backtop/BackTop'
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

export const backTopMixin = {
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.backTo(0, 0)
    }
  }
}
