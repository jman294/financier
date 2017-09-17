const moment = require('moment')
const finance = require('google-finance')
const axios = require('axios')

let stocks = (function() {
  const KEY="C9AQ"

  let getStockData = function(symbol) {
    return new Promise (function(resolve, reject) {
      //axios.get('https://www.alphavantage.co/query', {
        //params: {
          //function: 'TIME_SERIES_DAILY',
          //symbol: symbol.toUpperCase(),
          //apikey: KEY
        //}
      //})
      .then(function (response) {
        resolve(response.data['Time Series (Daily)']);
      })
      .catch(function (error) {
        reject(error)
      })
    })
  }

  let getCurrentPrice = function(symbol, callback) {
    //getJson({
      //host: 'www.google.com',
      //port: 443,
      //method: 'GET',
      //path: '/finance/info?q='+PREFIX.concat(symbol.toUpperCase()),
    //}, function (status, res) {
      //var obj = JSON.parse(res.slice(3))
      //callback(obj[0].l)
    //})
  }

  return {
    getStockData,
    getCurrentPrice
  }
})()

module.exports = stocks
