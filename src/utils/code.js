// =========================以下为成功代码=============================
/**
 * 操作成功
 */
export const SUCCESS = 0

// =========================以下为失败代码=============================
/**
 * 服务器内部错误
 */
export const ERROR = 500

/**
 * token 失效
 * @type {number}
 */
export const ERROR_TOKEN_INVALID = 401

/**
 * 业务错误，需弹窗提示
 * @type {number}
 */
export const ERROR_SERVICE_INVALID = 600

let codes = {
  SUCCESS: SUCCESS,
  ERROR: ERROR,
  ERROR_TOKEN_INVALID: ERROR_TOKEN_INVALID,
  ERROR_SERVICE_INVALID: ERROR_SERVICE_INVALID
}

// 全局注册
const CodePlugin = {
  install: (vue) => {
    vue.prototype.$code = codes
  }
}

export default CodePlugin
