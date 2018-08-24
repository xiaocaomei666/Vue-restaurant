/** 对element-ui的弹窗进行封装 */
import Vue from 'vue'

const confirm = (title, submitFn, cancelFn) => {
  let _this = Vue.prototype
  _this.$confirm(title, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    center: true
  })
    .then(() => {
      if (typeof submitFn === 'function') {
        submitFn && submitFn()
      }
    })
    .catch(() => {
      if (typeof cancelFn === 'function') {
        cancelFn && cancelFn()
      }
    })
}
const confirmUtils = {
  confirm
}
export default confirmUtils
