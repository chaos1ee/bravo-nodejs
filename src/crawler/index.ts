require('dotenv').config({ path: resolve(__dirname, './.env') })

import * as puppeteer from 'puppeteer'
import { resolve } from 'path'
import * as log4js from 'log4js'

const logger = log4js.getLogger()
logger.level = 'debug'

// prettier-ignore
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    await page.goto(process.env.PUPPETEER_TARGET, { waitUntil: 'networkidle2' })
    await page.pdf({ path: 'baidu.pdf', format: 'A4' })

    logger.info(`Crawled data from ${process.env.PUPPETEER_TARGET} success`)
  } catch (err) {
    logger.warn('Crawled data failure')
  } finally {
    await browser.close()
  }
})()
