const fs = require('fs')
const os = require('os')
const stocklist = require('../js/stocklist')

var path = os.homedir().concat('/.financier').toString()
fs.stat(path, function (err, stat) {
  if (err == null) {
    fs.readFile(path, function (err, data) {
      if (!data) {
        return
      }

      var config = {}
      try {
        config = JSON.parse(data.toString())
      } catch (e) {
        console.log(e)
      }

      if (config.hasOwnProperty('stocks')) {
        if (Array.isArray(config.stocks)) {
          for (let stock in config.stocks) {
            if (config.stocks[stock].hasOwnProperty('symbol')) {
              stocklist.newStock(config.stocks[stock].symbol)
            }
          }
        }
      } else {
        stocklist.backGround('farts')
      }
    })
  } else if (err.code == 'ENOENT') {
    console.log('No .financier file')
  } else {
  }
})
