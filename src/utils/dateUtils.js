// 时间格式

/**
 *  获取当前日期字符串
 */
function getCurrentDateString () {
  let date = new Date()
  let y = date.getFullYear()
  let t = date.getMonth() + 1
  let d = date.getDate()
  if (t < 10) {
    t = '0' + t
  } else if (d < 10) {
    d = '0' + d
  }
  return y + '' + t + '' + d
}

const dateUtils = {
  getCurrentDateString
}

export default dateUtils
