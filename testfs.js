/**
 * Created by xiaochaochao on 2017/6/9.
 */
var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开已存在的文件!");
fs.open('index.txt', 'r+', function(err, fd){
    if(err){
        console.error(err);
    }
    console.log("文件打开成功!");
    console.log('准备读取文件:');

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if(err){
            console.error(err);
        }
        console.log(bytes + " 字节被读取");

        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });

    fs.close(fd, function(err){
        if(err){
            console.error(err);
        }
        console.log("文件关闭");
    });

});




//var fs= require('fs');
//
//console.log("ready to write");
//
//var data = 'newdata阿娇思考的健康路附近阿斯科利解放拉就是看到了福建省垃圾分类ask打飞机累计发卡量减少了飞机上的垃圾分类收集分离';
//fs.writeFile('index.txt',data,function(err){
//    if(err){
//        return console.error(err);
//    }
//    console.log('data enter succeed');
//
//    console.log('read data');
//    fs.readFile('index.txt',function(err, data){
//        if(err){
//            return console.error(err);
//        }
//        console.log(data.toString());
//    })
//});


//var fs = require("fs");
//console.log("准备打开文件!");
//fs.stat('./statement.txt', function(err, stats){
//    console.log(stats);
//})
//fs.open('statement.txt', 'r+', function (err, fd) {
//    if(err){
//        return console.error(err);
//    }
//    console.log(fd);
//})