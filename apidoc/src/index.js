//express_demo.js 文件
var express = require('express');
var app = express();

app.use('/apidoc', express.static('dist_doc'));

app.get('/api/users', function (req, res) {
  res.send({
    _id: 11111,
    name: "张三"
  });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})