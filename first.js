var http = require('http');
// import http from 'http';
var fs = require('fs');

http.createServer(function (request, response) {
   // response.write('<h1>Hello World</h1>');
    //response.end();
    var filename = "index.html";
    fs.readFile(filename, function (err, data){
        if (err) {
            response.writeHead(404, {'Content-Type' : 'text/html'});
            return response.end("404 Not Found");
        } // error handling
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        return response.end();
    })
}).listen(8080);