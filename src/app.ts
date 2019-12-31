require('dotenv').config()

import * as Koa from 'koa'
import * as views from 'koa-views'
import * as koaStatic from 'koa-static'
import * as path from 'path'
import * as bodyparser from 'koa-bodyparser'
import { registerRouter } from './routes'
import { logger } from './util'

const app = new Koa()

const PORT = process.env.PORT || 3000

app.use(bodyparser())

app.use(koaStatic(path.join(__dirname + '/public')))

app.use(
  views(path.join(__dirname + '/views'), {
    map: { html: 'ejs' },
    extension: 'ejs'
  })
)

app.use(registerRouter())

app.listen(PORT, () => {
  logger.info(`Koa is listening on ${PORT}`)
})

module.exports = app
