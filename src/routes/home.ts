import * as Router from 'koa-router'

const router = new Router()

const COOKIE_NAME = 'CSRF_COOKIE'
const COOKIE_VALUE = 'Are you ok ?'

let num = 0

router.get('/', async ctx => {
  ctx.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    maxAge: 60 * 60 * 1000,
    secure: true,
    sameSite: false
  })

  ctx.render

  await ctx.render('index', {
    num,
    cookies: [
      {
        name: COOKIE_NAME,
        value: ctx.cookies.get(COOKIE_NAME) || COOKIE_VALUE
      }
    ]
  })
})

router.get('/get', async ctx => {
  if (ctx.cookies.get(COOKIE_NAME) === COOKIE_VALUE) {
    ctx.body = {
      num: ++num,
      cookies: [
        {
          name: COOKIE_NAME,
          value: ctx.cookies.get(COOKIE_NAME)
        }
      ]
    }
  } else {
    ctx.body = {
      msg: '获取不到cookie'
    }
  }
})

module.exports = router
