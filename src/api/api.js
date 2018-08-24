import axios from 'axios'
import router from '../router'

/** 拦截器:在请求或响应被 then 或 catch 处理前拦截它们 */
/** 添加请求拦截器 */
/** 在请求之前,在请求头头部加上公共的数据 */
axios
  .interceptors
  .request
  .use(request => {
    console.log('请求拦截器', request)
    request.headers['Content-Type'] = 'application/json;charset=UTF-8'
    request.headers['token'] = localStorage.getItem('token')
  })

/** 添加响应拦截器 */
/** 当后台响应码为401时,即token失效
 *  则移除本地存储的token,重新登录获取token
*/
axios
  .interceptors
  .response
  .use(response => {
    console.log('响应拦截器', response)
    let result = response.result
    let code = result.code
    if (code === 401) {
      localStorage.removeItem('token')
      router.push({path: '/login'})
      return response
    }
    return response
  })

/**
 * 根据url参数获取url后缀
 * @param urlParams
 * @return {string}
 */
function getUrlSuffix (urlParams) {
  let suffix = ''
  if (urlParams) {
    let keys = Object.keys(urlParams)
    if (keys && keys.length > 0) {
      suffix += '?'
      keys.forEach(key => {
        let tempPrefix = suffix !== '?'
          ? '&'
          : ''
        suffix = suffix + tempPrefix + key + '=' + urlParams[key]
      })
    }
  }
  return suffix
}
/**
 * 发送get请求
 * @param url 请求url
 * @param urlParams 请求中挂在url中的参数
 * @return {Promise.<TResult>|*}
 */
export const doGet = (url, urlParams) => {
  let suffix = getUrlSuffix(urlParams)
  return axios
    .get(`${baseURL}` + url + suffix, {})
    .then(res => res.data)
}
/**
 * 发送post请求
 * @param url 请求url
 * @param urlParams 请求中挂在url中的参数
 * @param postParam post请求的请求体
 * @return {Promise.<TResult>|*}
 */
export const doPost = (url, urlParams, postParam) => {
  let suffix = getUrlSuffix(urlParams)
  return axios
    .post(`${baseURL}` + url + suffix, postParam || {})
    .then(res => res.data)
}
