<template>
  <nav-bar>
    <div slot="left" class="nav-bar-left" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="nav-bar-items">
      <div
        class="nav-bar-item"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in items"
        :key="index"
        @click="itemClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    itemIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    },
    itemClick(index) {
      this.currentIndex = index
      this.$emit('changeItem', index)
    }
  },
  watch: {
    itemIndex() {
      this.currentIndex = this.itemIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background-color: #fff;
}
.nav-bar-left {
  text-align: center;
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
}

.nav-bar-items {
  display: flex;
  .nav-bar-item {
    flex: 1;
  }
}

.active {
  color: red;
}
</style>
