const moment = require('moment')
const rp = require('request-promise')
const cheerio = require('cheerio')

let stocks = (function() {
  const KEY="C9AQ"

  let getStockData = function(symbol) {
    return new Promise (function(resolve, reject) {
      rp(`https://finance.google.com/finance?q=${symbol}`)
        .then(function (htmlString) {
          $ = cheerio.load(htmlString)
          resolve($('.pr').find('span').text())
        })
        .catch(function (err) {
        })
    })
  }

  let getCurrentPrice = function(symbol, callback) {
  }

  return {
    getStockData,
    getCurrentPrice
  }
})()

module.exports = stocks
