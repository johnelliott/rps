var net = require('net');
var ndjson = require('ndjson');

module.exports = function (weapon, isServer) {
  // weapon = rock|paper|scissors
  var onSocket = function (socket) {
    var parse = ndjson.parse()
    var serialize = ndjson.serialize()
    parse.on('data', console.log);

    serialize.write({ weapon: weapon });
  };

  if (isServer) {
    var server = net.createServer(function (s) {
      onSocket(s);
    });
    server.listen(8080);
  } else {
    var socket = net.connect(8080);
    onSocket(socket);
  }
};
