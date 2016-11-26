havar httpd = require("http");

// Stub HTTPd
//var server=http.createServer();
//server.listen(8888);

httpd.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("nkchangHTTPd 0.1 build 0.1");
  response.write("Current time:");
  response.end();
}).listen(8888);
