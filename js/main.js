const stockData = require('./stockdata.js')

stockData.getStockData('GOOG')
  .then(function(stock) {
    console.log(stock)
  })
  .catch(function(error) {
    console.error(error)
  })
