import * as Router from 'koa-router'
import { Context } from 'koa'

const router = new Router()

const ARTICLES = [{ name: '鲁宾逊漂流记' }, { name: '上下五千年' }]

router.prefix('/article')

router.get('/all', (ctx: Context) => {
  ctx.body = ARTICLES
})

router.post('/', (ctx: Context) => {
  ctx.body = { message: 'Successed' }
})

router.get('/:id', (ctx: Context) => {
  const id = ctx.params.id
  ctx.body = ARTICLES[id]
})

router.delete('/:id', (ctx: Context) => {
  const id = ctx.params.id
  delete ARTICLES[id]
  ctx.body = { message: 'Deleted' }
})

module.exports = router
