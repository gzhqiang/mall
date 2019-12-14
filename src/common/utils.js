// 去除抖动 && 频繁刷新
// eslint-disable-next-line import/prefer-default-export
export function debounce(func, delay = 200) {
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay)
  }
}

export function timeConverter(timestamp) {
  const date = new Date(timestamp * 1000)
  const year = date.getFullYear() // 获取完整的年份(4位,1970)
  const month = date.getMonth() // 获取月份(0-11,0代表1月,用的时候记得加上1)
  const dateStr = date.getDate() // 获取日(1-31)
  // const ts = date.getTime() // 获取时间(从1970.1.1开始的毫秒数)
  const hours = date.getHours() // 获取小时数(0-23)
  const minutes = date.getMinutes() // 获取分钟数(0-59)
  const seconds = date.getSeconds() // 获取秒数(0-59)
  return [year, month, dateStr, hours, minutes, seconds]
}
