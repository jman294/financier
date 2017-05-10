const quotes = require('../js/stocks')

const stocklist = (function() {
  let stocks = []
  // symbol: GOOG
  // percentChange: -1.2

  let stockTemplate = document.getElementById('stockTemplate')
  let stockList = document.getElementById('stock-list')

  let newStock = function(symbol) {
    let tmpStock = {
      symbol
    }
    quotes.getCurrentPercent(symbol, function(percentChange) {
      tmpStock.percentChange = percentChange
      stocks.push(tmpStock)
      showStocks()
    })
  }

  let showStocks = function() {
    const POSITIVE = {sign: 'positive', arrow: 'fa-chevron-up'}
    const NEGATIVE = {sign: 'negative', arrow: 'fa-chevron-down'}

    while (stockList.lastChild) {
      stockList.removeChild(stockList.lastChild)
    }
    for (let stock in stocks) {
      let newStock = stockTemplate.content.cloneNode(true)

      let tmpSign
      if (stocks[stock] < 0) {
        tmpSign = POSITIVE
      } else {
        tmpSign = NEGATIVE
      }
      newStock.querySelector('div.header h1').classList.add(tmpSign.sign)
      newStock.querySelector('div.header h1').innerText = stocks[stock].symbol
      newStock.querySelector('div.header p').classList.add(tmpSign.sign)
      newStock.querySelector('div.header p i').classList.add(tmpSign.arrow)
      newStock.querySelector('div.header p span').textContent
              = Math.abs(stocks[stock].percentChange.toFixed(2)) + '%'

      stockList.appendChild(newStock)
    }
  }

  let updateStocks = function(newData) {
    if (newData.length != stocks.length) {
      return false
    }

    for (let item in newData) {
      stocks[item] = newData[item]
    }

    return true
  }

  let getStockData = function() {
    //return newData formatted as stocks list
  }

  setInterval(function() {
    updateStocks(getStockData())
    showStocks()
  }, 10000)

  return {
    newStock
  }
})()

module.exports = stocklist
