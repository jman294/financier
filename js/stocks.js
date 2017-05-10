const finance = require('google-finance')

let stocks = (function() {
  const PREFIX = 'NASDAQ:'

  let getCurrentPercent = function(symbol, callback) {
    //
    //
    // Percent of change for stocks is like this:
    //
    // today's close - yesterday's close
    // ---------------------------------
    //        yesterday's close
    //
    //
    // MomentJS is already installed :)
    //
    //
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear().toString();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy.concat('-').concat(mm).concat('-').concat(dd)

    finance.historical({
      symbol: PREFIX.concat(symbol.toUpperCase()),
      from: today,
      to: today
    }, function(err, quotes) {
      let change = quotes[0].close - quotes[0].open
      let percent = change / quotes[0].open * 100
      callback(percent)
    })

  }

  let getCurrentPrice = function(symbol, callback) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear().toString();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy.concat('-').concat(mm).concat('-').concat(dd)

    finance.historical({
      symbol: PREFIX.concat(symbol.toUpperCase()),
      from: today,
      to: today
    }, function(err, quotes) {
      callback(quotes[0].close)
    })

  }

  return {
    getCurrentPrice,
    getCurrentPercent
  }
})()

module.exports = stocks
