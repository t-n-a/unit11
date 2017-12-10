var http = require("http");
http.createServer(function (request, response){
 response.writeHead(200, {'Content-Type': 'text/html'});
response.end('Hello World, my name is T Nguyen\n');
                  }).listen(8001);
console.log('Server running at http://127.0.0.1:8001/');