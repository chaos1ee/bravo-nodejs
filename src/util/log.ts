import { configure, getLogger } from 'log4js'

let logger

if (process.env.NODE_ENV === 'development') {
  logger = getLogger()

  logger.level = 'debug'
} else {
  configure({
    appenders: {
      platform: {
        type: 'file',
        filename: process.env.LOG_FILENAME
      }
    },
    categories: {
      default: {
        appenders: ['platform'],
        level: 'info'
      }
    }
  })

  logger = getLogger('platform')
}

export { logger }
