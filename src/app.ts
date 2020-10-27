import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import { resolve } from 'path'
import * as views from 'koa-views'
import * as bodyparser from 'koa-bodyparser'
import registerRouter from './routes/index'
import logger from './util/logger'

const https = require('https')
const fs = require('fs')

const app = new Koa()

app.use(bodyparser())

app.use(koaStatic(resolve(__dirname + 'public')))

app.use(
  views(resolve(__dirname, 'views'), {
    map: { html: 'ejs' },
    extension: 'ejs'
  })
)

app.use(registerRouter())

https
  .createServer(
    {
      key: fs.readFileSync(
        resolve(__dirname, 'assets/keys/server.key'),
        'utf8'
      ),
      cert: fs.readFileSync(
        resolve(__dirname, 'assets/keys/server.cert'),
        'utf8'
      )
    },
    app.callback()
  )
  .listen(process.env.PORT, () => {
    logger.info(`Website is running on ${process.env.PORT}`)
  })
