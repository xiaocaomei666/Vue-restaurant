/**
 * 日志类
 * 日志级别： debug -> info -> warn -> error
 * 日志方法调用：vue.$log.debug/info/warn/error(...params)
 */
/**
 * 日志配置类 ，用于配置日志
 * @param logLevel 日志级别
 * @param enableTable 是否启用表格打印
 * @constructor
 */
function LogConfig (logLevel = LOG_LEVEL_DEBUG, enableTable = true) {
  this.logLevel = logLevel instanceof LogLevel ? logLevel : LOG_LEVEL_DEBUG
  this.enableTable = enableTable
}

/**
 * 日志级别类
 */
function LogLevel (name, value) {
  this.name = name
  this.value = value
}

/** **********************以下声明日志级别常量***********************************/
/**
 * 日志级别 - debug
 * @type {LogLevel}
 */
const LOG_LEVEL_DEBUG = new LogLevel('[LZQ-DEBUG]: ', 0)
/**
 * 日志级别 - info
 * @type {LogLevel}
 */
const LOG_LEVEL_INFO = new LogLevel('[LZQ-INFO]: ', 1)
/**
 * 日志级别 - warn
 * @type {LogLevel}
 */
const LOG_LEVEL_WARN = new LogLevel('[LZQ-WARN]: ', 2)
/**
 * 日志级别 - error
 * @type {LogLevel}
 */
const LOG_LEVEL_ERROR = new LogLevel('[LZQ-ERROR]: ', 3)

/** **********************以上声明日志级别常量***********************************/

/**
 * 日志类，提供具体的日志打印方法
 * @param logConfig 日志配送，默认级别为 LOG_LEVEL_DEBUG
 * @constructor
 */
function Log (logConfig = new LogConfig(LOG_LEVEL_DEBUG)) {
  this.logConfig = logConfig
  this.logLevel = logConfig.logLevel
  /**
   * 提供debug级别的日志打印
   * @param params 待打印参数
   */
  this.debug = (...params) => {
    if (this.logLevel.value <= LOG_LEVEL_DEBUG.value) {
      this.__log(LOG_LEVEL_DEBUG, ...params)
    }
  }
  /**
   * 提供info级别的日志打印
   * @param params 待打印参数
   */
  this.info = (...params) => {
    if (this.logLevel.value <= LOG_LEVEL_INFO.value) {
      this.__log(LOG_LEVEL_INFO, ...params)
    }
  }
  /**
   * 提供warn级别的日志打印
   * @param params 待打印参数
   */
  this.warn = (...params) => {
    if (this.logLevel.value <= LOG_LEVEL_WARN.value) {
      this.__log(LOG_LEVEL_WARN, ...params)
    }
  }
  /**
   * 提供error级别的日志打印
   * @param params 待打印参数
   */
  this.error = (...params) => {
    if (this.logLevel.value <= LOG_LEVEL_ERROR.value) {
      this.__log(LOG_LEVEL_ERROR, ...params)
    }
  }
  /**
   * 提供日志打印的公共方法
   * @param logLevel 日志级别
   * @param params 待打印参数
   */
  this.__log = (logLevel, ...params) => {
    switch (logLevel) {
      case LOG_LEVEL_ERROR:
        console.error(logLevel.name, ...params)
        break
      case LOG_LEVEL_WARN:
        console.warn(logLevel.name, ...params)
        break
      default:
        console.log(logLevel.name, ...params)
    }
  }
  /**
   * 提供error级别的日志打印
   * @param params 待打印参数
   */
  this.table = (...params) => {
    if (this.logConfig.enableTable) {
      console.table(...params)
    }
  }
}
/**
 * 日志插件，供VUE使用
 * 日志级别： debug -> info -> warn -> error
 * 日志方法调用：vue.$log.debug/info/warn/error(...params)
 * 注册插件示例：Vue.use(LogPlugin, LogPlugin.LOG_LEVEL_DEBUG)
 */
const LogPlugin = {
  install: (vue, options) => {
    vue.prototype.$log = options instanceof Log ? options : new Log()
  }
}
const LogLevels = {
  LOG_LEVEL_DEBUG: LOG_LEVEL_DEBUG,
  LOG_LEVEL_INFO: LOG_LEVEL_INFO,
  LOG_LEVEL_WARN: LOG_LEVEL_WARN,
  LOG_LEVEL_ERROR: LOG_LEVEL_ERROR
}
export {LogLevels, LogPlugin, Log, LogConfig}
