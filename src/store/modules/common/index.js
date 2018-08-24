import {level} from '../../../api/api.js'
// common store
let mapToOptions = (map, type = 'str') => {
  let arr = []
  for (let key in map) {
    if (map.hasOwnProperty(key)) {
      arr.push({
        label: map[key],
        value: type === 'str'
          ? key
          : parseInt(key)
      })
    }
  }
  return arr
}

const commonStore = {
  namespaced: true,
  // state 初始状态
  state: {
    /* 上下架标记 */
    saleStatus: {
      0: '下架',
      1: '上架'
    },
    /** token */
    token: ''
  },

  // getters 派生状态（类似：计算属性）
  getters: {
    saleStatusOptions (state) {
      let statusMap = state.saleStatus
      return mapToOptions(statusMap)
    }
  },

  // mutations 修改state， 同步操作
  mutations: {
    // 省市区
    SET_REGIION (state, region) {
      state.region = region
    },

    // token
    SET_TOKEN (state, token) {
      state.token = token
    }
  },

  // actions 提交mutations，任意异步操作
  actions: {
    async getRegion ({commit, state}) {
      const region = await level().then(res => {
        console.log('省市区返回的数据', res)
        return res.commonArea
      })
      // 分发mutations改变数据
      commit('SET_REGIION', region)
    },

    async setLocalstorageToken ({commit, state}, opts) {
      localStorage.setItem('token', opts)
      const token = opts
      // 分发mutations改变数据
      commit('SET_TOKEN', token)
    },

    async getLocalstorageToken ({commit, state}, opts) {
      const token = localStorage.getItem('token') || ''
      // 分发mutations改变数据
      commit('SET_TOKEN', token)
    }
  }
}

export default commonStore
