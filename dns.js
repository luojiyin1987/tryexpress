var dns = require('dns');

dns.resolve4('www.g.cn', function(err, address, family){
  if(err) throw err;
  console.log('www.g.cn  ' + address);
});
