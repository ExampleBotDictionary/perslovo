'use strict';

const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('@metascraper/helpers')()
  /*
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit-logo')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
 */
])
;

const got = require('got');

const targetUrl = 'http://sum.in.ua/s/parta'

;(async () => {
  const { body: html, url } = await got(targetUrl)

  const metadata = await metascraper({ html, url })

  console.log(metadata)
})()
