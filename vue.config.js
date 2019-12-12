module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
        network: '@/network',
        common: '@/common'
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: '@import "~@/assets/scss/variables.sass"'
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: '@import "~@/assets/scss/variables.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api/v2': {
        target: 'http://123.207.32.32:8000'
      }
    }
  }
}
