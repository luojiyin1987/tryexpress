var http = require('http');
var zlib = require('zlib');
var fs = require('fs');
var filepath = './gzip/fileForCompress.txt';

var server = http.createServer(function(req, res){
  var acceptEncoding = req.headers['accept-encoding'];
  var gzip;

  if (acceptEncoding.indexOf('gzip') != -1){
    gzip = zlib.createGzip();

    res.writeHead(200, {
      'Cpntent-Encoding': 'gzip'
    });
    fs.createReadStream(filepath).pipe(gzip).pipe(res);
  }else{
    fs.createReadStream(filepath).pipe(res);
  }
});

server.listen('3000');
