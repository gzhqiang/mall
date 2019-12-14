<template>
  <div class="detail-comment">
    <div class="comment-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div v-if="comments && comments.cRate > 0">
      <div v-for="(item, index) in comments.list" :key="index">
        <div class="comment-user">
          <img :src="item.user.avatar" alt="" />
          <span>{{ item.user.uname }}</span>
        </div>
        <div class="comment-detail">
          <div>{{ item.content }}</div>
          <p>
            <span>{{ dateStr(item.created) }}</span>
            <span>{{ item.style }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeConverter } from '@/common/utils'

export default {
  name: 'DetailComment',
  data() {
    return {}
  },
  props: {
    comments: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    dateStr(created) {
      const [year, month, dateStr] = timeConverter(created)
      return `${year}-${month + 1}-${dateStr}`
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.detail-comment {
  font-size: 14px;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
  .comment-header {
    height: 40px;
    padding-right: 10px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    .header-title {
      float: left;
    }
    .header-more {
      float: right;
    }
  }
  .comment-user {
    margin-bottom: 15px;
    padding-top: 10px;
    img {
      width: 42px;
      border-radius: 21px;
      vertical-align: middle;
      margin-right: 10px;
    }
    span {
      font-size: 16px;
    }
  }
  .comment-detail {
    div {
      padding-bottom: 20px;
    }
    span {
      padding-right: 10px;
      color: #999;
    }
  }
}
</style>
