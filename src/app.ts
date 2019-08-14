import * as Koa from 'koa'
import { registerRouter } from './routers'
import { sunLog } from './utils/log'

const app = new Koa()

const PORT = process.env.PORT || 3000

app.use(registerRouter())

app.listen(PORT, () => {
  sunLog.success(`Koa is listening on ${PORT}`)
})

module.exports = app
