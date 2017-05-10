const stocklist = require('../js/stocklist')

document.querySelector('button').addEventListener('click', function (e) {
  stocklist.newStock('VIOO')
})
