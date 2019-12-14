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
