var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var inFile = fs.createReadStream('./gzip/fileForCompress.txt');
var out = fs.createWriteStream('./gzip/fileForCompress.txt.gz');

inFile.pipe(gzip).pipe(out);
