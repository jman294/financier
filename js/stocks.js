const moment = require('moment')
const finance = require('google-finance')
const getJson = require('../js/getjson')

let stocks = (function() {
  const PREFIX = 'NASDAQ:'

  let getCurrentPercent = function(symbol, callback) {
    getJson({
      host: 'www.google.com',
      port: 443,
      method: 'GET',
      path: '/finance/info?q='+PREFIX.concat(symbol.toUpperCase()),
    }, function (status, res) {
      var obj = JSON.parse(res.slice(3))
      callback(obj[0].c)
    })
  }

  let getCurrentPrice = function(symbol, callback) {
    getJson({
      host: 'www.google.com',
      port: 443,
      method: 'GET',
      path: '/finance/info?q='+PREFIX.concat(symbol.toUpperCase()),
    }, function (status, res) {
      var obj = JSON.parse(res.slice(3))
      callback(obj[0].l)
    })
  }

  return {
    getCurrentPrice,
    getCurrentPercent
  }
})()

module.exports = stocks
