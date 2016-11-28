// node.js 測試
/* 測試, 第一個HTTPD on node.js*/

//建立一個httpd物件
var httpd = require("http");

var server8889 = httpd.createServer();
server8889.listen(8889);

httpd.createServer(function(request, response) {
  //response.writeHead(200, {"content-type": "plain-text"});
  //加入Unicode support
  //如果只要顯示純文字檔案就用這個摟.
  //response.writeHead(200, {"content-type": "plain-text"});
  //使用HTML
  response.writeHead(200, {"content-type": "text/html"});
  response.writeHead(200, {"content-language": "Unicode"});
  response.write('<html><title>Nick personalWeb HTTPd</title><body>');
  response.write('<h1>Hello,World!測試成功</h1>');
  response.write("</body></html>");
  response.end();
}).listen(8888);
