/**
 *
 * @param {string} value 过滤字体
 */
const iconFont = value => {
  let result = []
  if (typeof value === 'string' && value.split(' ').length > 1) {
    result = value.split(' ')
    result[1] = result[1].slice(result[1].indexOf('-') + 1)
  }
  return result
}

export { iconFont }
