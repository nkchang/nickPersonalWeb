// node.js 測試
/* 測試, 第一個HTTPD on node.js*/

//建立一個httpd物件
var httpd = require("http");
httpd.createServer(function(request, response) {
  //response.writeHead(200, {"content-type": "plain-text"});
  //加入Unicode support
  response.writeHead(200, {"content-type": "plain-text"});
  response.writeHead(200, {"content-language": "utf-8"});
  response.write('<html><body>');
  response.write('<p1>Hello,World!測試成功</p1>');
  response.write("</body></html>");
  response.end();
}).listen(8888);
