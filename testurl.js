/**
 * Created by xiaochaochao on 2017/6/9.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (req, res){
    var pathName = url.parse(req.url).pathname;
    //console.log(typeof url.parse(req.url));
    console.log("Request for " + pathName + "received.");

    fs.readFile(pathName.substr(1), function(err, data){
        if(err){
            console.error(err);
            res.writeHead(404, {'Content-type':'text/html'});
        }else{
            res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
            res.write(data.toString()+"我爱你");
            console.log(data.toString());
        }
        res.end();
    })
}).listen(3000);






//var http = require ('http');
//var url = require('url');
//var util = require('util');
//
//http.createServer(function(req, res){
//    res.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
//    console.log(url.parse(req.url));
//    res.end(util.inspect(url.parse(req.url, true)));
//}).listen(3000);
//
console.log("Server start at localhost:3000");