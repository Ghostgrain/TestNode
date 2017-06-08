/**
 * Created by xiaochaochao on 2017/6/8.
 */

var fs = require('fs');
var zlib = require('zlib');
//var readerStream = fs.createReadStream('statement.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('statement.txt.gz'));

//var writerStream = fs.createWriteStream('output.txt');
//
//readerStream.pipe(writerStream);
    fs.createReadStream('statement.txt.gz')
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream('output.txt'));

console.log("程序执行完毕");




//var fs = require("fs");
//var data = "我是大菜鸟,www.Ghostgrain.github.io";
//
//var writerStream = fs.createWriteStream('output.txt');
//
//writerStream.write(data,'UTF8');
//
//writerStream.end();
//
//writerStream.on('finish',function(){
//    console.log("写入完成");
//})
//
//writerStream.on('error', function(){
//    console.log(err.stack);
//})
//
//console.log("程序完毕");
//var fs = require('fs');
//var data = '';
//
//var readerStream = fs.createReadStream('statement.txt');
//
//readerStream.setEncoding('UTF8');
//
//readerStream.on('data', function(chunk){
//    data += chunk;
//})
//
//readerStream.on('end', function(){
//    console.log(data);
//})
//
//readerStream.on('error', function(){
//    console.log(err.stack);
//})
//
//console.log("程序执行完毕");