const moment = require('moment')
const rp = require('request-promise')
const cheerio = require('cheerio')

let stockdata = (function() {
  const KEY="C9AQ"

  let getCurrentStockData = function(symbol) {
    return new Promise (function (resolve, reject) {
      rp(`https://finance.google.com/finance?q=${symbol}`)
        .then(function (htmlString) {
          $ = cheerio.load(htmlString)
          let result = {}
          // Gets current price of stock from google website
          result.price = $('.pr').find('span').text()
          // Gets percent string and parses it into number after slicing away unneeded characters
          result.percent = parseFloat(
            $('.ch.bld').children()[1].children[0].data
            .slice(1,-1)
          )
          resolve(result)
        })
        .catch(function (err) {
        })
    })
  }

  let getHistoricalStockData = function(symbol, date) {
    return new Promise (function (resolve, reject) {
      rp('https://www.alphavantage.co/query?'+
         `function=TIME_SERIES_DAILY&outputsize=full&symbol=${symbol}&apikey=${KEY}`
      ).then(function (jsonString) {
        json = JSON.parse(jsonString)['Time Series (Daily)'][date]
        let result = {}
        result.price = json['4. close']
        resolve(result)
      })
      .catch(function (err) {
      })
    })
  }

  return {
    getCurrentStockData,
    getHistoricalStockData
  }
})()

module.exports = stockdata
