import { configure, getLogger } from 'log4js'

export const logger = getLogger('platform')

if (process.env.NODE_ENV === 'development') {
  logger.level = 'debug'
} else {
  configure({
    appenders: {
      platform: {
        type: 'file',
        filename: process.env.LOG_FILENAME
      }
    },
    categories: { default: { appenders: ['platform'], level: 'info' } }
  })
}
