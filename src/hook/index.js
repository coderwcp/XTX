// hooks 封装，提供响应式数据
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

// 数据懒加载方法
export function useLazyData (apiFn) {
  // 需要
  // 1、被观察的对象
  const container = ref(null)
  const data = ref([])
  // 2、不同的api函数
  const { stop } = useIntersectionObserver(container, ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      stop()
      // 调用API获取数据
      apiFn().then(({ result }) => {
        data.value = result
      })
    }
  },
  {
    // threshold 容器和可视区交叉的占比（进入的面积/容器完整面积） 取值，0-1 之间，默认比0大，所以需要滚动较多才能触发进入可视区域事件。
    threshold: 0
  })
  // 返回--->数据（dom,后台数据）
  return {
    container,
    data
  }
}
