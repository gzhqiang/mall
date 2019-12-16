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

todolist:
  backtop mixin
  底部工具栏封装
  滚动内容显示对应标题修改
  复杂条件判断的优化

  商品添加到购物车 vuex -> state mutations actions 记得分文件编写

Promise
vuex:
  mapGetters
  mapActions
toast封装
  插件方式封装
