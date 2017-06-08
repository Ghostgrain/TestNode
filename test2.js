/**
 * Created by xiaochaochao on 2017/6/8.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    var f = fs.readFileSync('111.html');
    response.end(f);
}).listen(3000);
console.log("Sever start at localhost:3000");