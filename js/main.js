const stocklist = require('../js/stocklist')

document.querySelector('div#stock-list button').addEventListener('click', function (e) {
  stocklist.newStock()
})
