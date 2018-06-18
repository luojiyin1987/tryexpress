var https = require('https')

https.get('https://kyfw.12306.cn/otn/regist/init', function(res){
  res.on('data', function(data){
    process.stdout.write(data);
  });
}).on('error', function(err){
  console.error(err);
});
