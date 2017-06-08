/**
 * Created by xiaochaochao on 2017/6/8.
 */
    /*阻塞调用文件*/
//var fs = require('fs');
//
//var data = fs.readFileSync('statement.txt');
//
//console.log(data.toString());
//console.log("程序执行结束!");

/*非阻塞调用文件*/

var fs = require('fs');

fs.readFile('statement.txt',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
})
console.log("programing ending");