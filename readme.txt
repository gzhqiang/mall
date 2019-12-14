this.$bus.$emit('')
this.$bus.$on('', function() {})
事件总线: $bus

非父子组件的通信，所以选择了事件总线

// 

12/14
一. 商品详情页
  1. NavBar封装
  2. 网络请求封装
  3. Swiper展示
