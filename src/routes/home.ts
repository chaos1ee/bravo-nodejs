import * as Router from '@koa/router'
import { Context } from 'koa'

const router = new Router()

router.get('/', async (ctx: Context) => {
  await ctx.render('index')
})

router.post('/test', async (ctx: Context) => {
  await ctx.render('test')
})

module.exports = router
