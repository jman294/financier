const stocklist = (function () {

  let stockTemplate = document.getElementById('stockTemplate')
  let stockList = document.getElementById('stock-list')

  let newStock = function () {
    let newStock = stockTemplate.content.cloneNode(true)

    newStock.querySelector('div.header h1').classList.add('negative')
    newStock.querySelector('div.header h1').innerText = 'AAPL'
    newStock.querySelector('div.header p').classList.add('negative')
    newStock.querySelector('div.header p i').classList.add('fa-chevron-down')
    newStock.querySelector('div.header p span').textContent = Math.round(Math.random() * 100) + '%'

    stockList.appendChild(newStock)
  }

  return {
    newStock
  }
})()

module.exports = stocklist
