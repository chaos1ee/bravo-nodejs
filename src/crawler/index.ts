import * as puppeteer from 'puppeteer'
import { resolve } from 'path'
import { sunLog } from '../util'

require('dotenv').config({ path: resolve(__dirname, './.env') })

// prettier-ignore
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    await page.goto(process.env.PUPPETEER_TARGET, { waitUntil: 'networkidle2' })
    await page.pdf({ path: 'baidu.pdf', format: 'A4' })

    sunLog.success(`Crawled data from ${process.env.PUPPETEER_TARGET} success`)
  } catch (err) {
    sunLog.failed(`Crawled data failed`)
  } finally {
    await browser.close()
  }
})()
