/** 树的递归 */
function arrayToTreeData (arr, attributes) {
  let resData = arr
  let tree = []
  if (!Array.isArray(resData)) {
    return tree
  }

  for (let i = 0; i < resData.length; i++) {
    if (resData[i][attributes.parentId] === attributes.rootIdNum) {
      resData[i]['children'] = []
      tree.push(resData[i])
      resData.splice(i, 1)
      i--
    }
  }

  // 递归
  loop(tree)

  function loop (childArr) {
    if (resData.length !== 0) {
      for (let i = 0; i < childArr.length; i++) {
        // childArr[i]['children'] = [];
        for (let j = 0; j < resData.length; j++) {
          if (childArr[i][attributes.id] === resData[j][attributes.parentId]) {
            // childArr[i]['children'].push(resData[j]);
            if (childArr[i]['children']) {
              childArr[i]['children'].push(resData[j])
            } else {
              childArr[i]['children'] = []
              childArr[i]['children'].push(resData[j])
            }
            resData.splice(j, 1)
            j--
          }
        }
        let newChildArr = childArr[i]['children'] ? childArr[i]['children'] : []
        loop(newChildArr)
      }
    }
  }
  return tree
}

const DSA = {
  arrayToTreeData
}

export default DSA
