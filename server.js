var http = require('http');
var sayings = require('./siri-sayings');

var server = http.createServer();

var handleRequest = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.method === 'GET'){
    res.statusCode = 200;
    var index = getRandomArbitrary(sayings.length);
    var message = sayings[index];
    var objectToSend = {
      message: message
    };
    res.end(JSON.stringify(objectToSend));
  } else if(req.method === 'OPTIONS'){
    res.statusCode = 200;
    res.end();
  }
}

function getRandomArbitrary(n){
  return Math.floor((Math.random() * n));
}

server
  .on('request', handleRequest)
  .listen(8887);
