import {log} from '../config'
/**
 * Created by quxiqi on 2018-06-25
 * 本地存储插件
 */
const LOCAL_BASE_KEYWORD = '__local__'
const SESSION_BASE_KEYWORD = '__session__'
/**
 * 将值保存到对象
 * @param cache 目标对象
 * @param id 唯一标识
 * @param key key标识
 * @param value 值
 */
function saveToObj (cache, id, key, value) {
  if (!cache) {
    cache = {}
    cache[id] = {}
  } else {
    try {
      cache = JSON.parse(cache)
    } catch (e) {
      log.error('[save] cache JSON parse error ', cache, e)
      cache = {}
    }
    if (!cache[id]) {
      cache[id] = {}
    }
  }
  cache[id][key] = value
  return cache
}
/**
 * 将目标对象获取值
 * @param cache 目标对象
 * @param id 唯一标识
 * @param key key标识
 * @param def 如果目标值非法，则返回该默认值
 */
function loadFromObj (cache, id, key, def) {
  if (!cache) {
    return def
  }
  try {
    cache = JSON.parse(cache)
  } catch (e) {
    log.error('[load] cache JSON parse error ', cache, e)
    return def
  }
  if (!cache) {
    return def
  }

  let ret = cache[id]
  if (!ret || ret === 'null' || ret === 'undefined') {
    return def
  }
  let val = ret[key]
  if (!val || val === 'null' || val === 'undefined') {
    return def
  }
  return val
}

function Cache () {
  /**
   *  新增&&修改本地缓存
   *  @param {string} id 唯一id
   *  @param {string} key 标示
   *  @param {string} value 新增&修改的值
   */
  this.savaToLocal = (id, key, value) => {
    let cache = window.localStorage.getItem(LOCAL_BASE_KEYWORD)
    cache = saveToObj(cache, id, key, value)
    window.localStorage.setItem(LOCAL_BASE_KEYWORD, JSON.stringify(cache))
  }
  /**
   *  查询本地缓存
   *  @param {string} id 唯一id
   *  @param {string} key 标示
   *  @param {string} def 如果查询不到显示的默认值
   */
  this.loadFromLocal = (id, key, def) => {
    let cache = window.localStorage.getItem(LOCAL_BASE_KEYWORD)
    return loadFromObj(cache, id, key, def)
  }
  /**
   *  新增&&修改session缓存
   *  @param {string} id 唯一id
   *  @param {string} key 标示
   *  @param {string} value 新增&修改的值
   */
  this.savaToSession = (id, key, value) => {
    let cache = window.sessionStorage.getItem(SESSION_BASE_KEYWORD)
    cache = saveToObj(cache, id, key, value)
    window.sessionStorage.setItem(SESSION_BASE_KEYWORD, JSON.stringify(cache))
  }
  /**
   *  查询session缓存
   *  @param {string} id 唯一id
   *  @param {string} key 标示
   *  @param {string} def 如果查询不到显示的默认值
   */
  this.loadFromSession = (id, key, def) => {
    let cache = window.sessionStorage.getItem(SESSION_BASE_KEYWORD)
    return loadFromObj(cache, id, key, def)
  }
  /**
   *  新增&&修改cookie缓存
   *  @param {string} key 标示
   *  @param {string} value 新增&修改的值
   *  @param {number} timeout 超时时间，秒
   */
  this.savaToCookie = (key, value, timeout) => {
    if (value && (!timeout || timeout <= 0)) {
      document.cookie = key + '=' + encodeURIComponent(JSON.stringify(value)) + '; expires=Session'
    } else if (value) {
      let exp = new Date()
      exp.setTime(exp.getTime() + timeout * 1000)
      document.cookie = key + '=' + encodeURIComponent(JSON.stringify(value)) + ';expires=' + exp.toGMTString()
    }
  }
  /**
   *  查询cookie缓存
   *  @param {string} key 标示
   *  @param {string} def 如果查询不到显示的值
   */
  this.loadFromCookie = (key, def) => {
    let strCookie = document.cookie
    let arrCookie = strCookie.split('; ')
    for (let i = 0; i < arrCookie.length; i++) {
      let arr = arrCookie[i].split('=')
      if (key === arr[0]) {
        return JSON.parse(decodeURIComponent(arr[1]))
      }
    }
    return def
  }
}
const lzqCache = new Cache()
// 全局注册
const CachePlugin = {
  install: (vue, options) => {
    vue.prototype.$cache = lzqCache
  }
}

export {lzqCache, CachePlugin}
