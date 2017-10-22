const stockData = require('../js/stockdata')

const symbols = ['VIOO', 'GOOG']

let displayStockData = function (stockSymbols) {
  document.body.innerHTML = ''
  stockSymbols.forEach(function (symbol) {
    stockData.getCurrentStockData(symbol)
      .then(function(stock) {
        console.log(stock)
        document.write(symbol)
        document.write('<br>')
        document.write(stock.percent)
        document.write('<br>')
        document.write(stock.price)
        document.write('<br>')
      })
      .catch(function(error) {
        console.error(error)
      })
  })
}

stockData.getHistoricalStockData('GOOG', '2016-12-05')
  .then(function (stock) {
    console.log(stock.price)
  })

//setInterval(function () {
  //displayStockData(symbols)
//}, 5000)
