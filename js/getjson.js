var http = require("http");
var https = require("https");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
getJSON = function(options, onResult) {
  var prot = options.port == 443 ? https : http;
  var req = prot.request(options, function(res) {
    var output = '';
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
      output += chunk;
    });

    res.on('end', function() {
      onResult(res.statusCode, output);
    });
  });

  req.on('error', function(err) {
    res.send('error: ' + err.message);
  });

  req.end();
};

module.exports = getJSON