import axios from 'axios'

/*
可以定义两个baseURL常量：
baseURL = "http://123.207.32.32:8000/api/v2"
baseURL = "http://106.54.54.237:8000/api/v1"
一个作为备份，不能用了注释掉另外一个
待会儿拉你进vip群，有什么疑问可以在里面讨论
*/
const baseURL = 'http://123.207.32.32:8000/api/v2'
// const baseURL = "http://106.54.54.237:8000/api/v1"

// ES6 Promise的封装
// eslint-disable-next-line import/prefer-default-export
export function request(options) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例对象
    const instance = axios.create({
      baseURL,
      timeout: 5000,
    })

    // 过滤器(拦截器)
    instance.interceptors.response.use(res => res.data)

    // 通过实例发送网络请求
    instance(options)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
  })
}
