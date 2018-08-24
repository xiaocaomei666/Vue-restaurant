/** 全局配置类，保存所有环境相关的配置 */
import {LogLevels, Log, LogConfig} from './utils/log'

const ENVIRONMENTAL_DEV = 'dev'
const ENVIRONMENTAL_TEST = 'test'
const ENVIRONMENTAL_PRO = 'pro'

// 请求前缀
export let imgURL
export let baseURL

// 日志级别
export let logConfig = new LogConfig(LogLevels.LOG_LEVEL_DEBUG, true)

// 当前环境
export let environmental = ENVIRONMENTAL_DEV
if (environmental === ENVIRONMENTAL_DEV) {
  baseURL = 'http://jspang.com/DemoApi/'
  imgURL = ''
  logConfig = new LogConfig(LogLevels.LOG_LEVEL_DEBUG, true)
} else if (environmental === ENVIRONMENTAL_TEST) {
  baseURL = ''
  imgURL = ''
  logConfig = new LogConfig(LogLevels.LOG_LEVEL_DEBUG, true)
} else if (environmental === ENVIRONMENTAL_PRO) {
  baseURL = ''
  imgURL = ''
  logConfig = new LogConfig(LogLevels.LOG_LEVEL_WARN, false)
} else {
  throw new Error('非法的环境类型 ==> ' + environmental)
}

export let log = new Log(logConfig)
