// 引入写好的全局组件
import block from '@/components/Block'
// 默认导出插件
export default {
  install(Vue) {
    Vue.component('block', block)
    // eslint-disable-next-line comma-dangle
  },
}
