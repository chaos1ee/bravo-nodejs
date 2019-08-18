require('dotenv').config()

import * as Koa from 'koa'
import { registerRouter } from './routes'
import { logger } from './util'

const app = new Koa()
const PORT = process.env.PORT || 3000

console.log('213')

app.use(registerRouter())

app.listen(PORT, () => {
  logger.info(`Koa is listening on ${PORT}`)
})

module.exports = app
