/**
 * 运行全屏显示
 * @param {Object} elem DOM 节点
 */
const launchFullscreen = elem => {
  if (elem) {
    elem.requestFullscreen =
      elem.requestFullscreen ||
      elem.msRequestFullscreen ||
      elem.mozRequestFullscreen ||
      elem.mozRequestFullScreen || // 较旧的 API 把 ‘S’ 大写
      elem.webkitRequestFullscreen

    elem.requestFullscreen()
  } else {
    console.log('节点元素不存在！')
  }
}

/**
 * 退出全屏
 */
const exitFullscreen = () => {
  document.exitFullscreen =
    document.exitFullscreen ||
    document.msExitFullscreen ||
    document.mozCancelFullscreen ||
    document.mozCancelFullScreen || // 较旧的 API 把 ‘S’ 大写
    document.webkitExitFullscreen

  document.exitFullscreen()
}

export {
  launchFullscreen,
  exitFullscreen
}
