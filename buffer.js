/**
 * Created by xiaochaochao on 2017/6/8.
 */
var buf1 = new Buffer('AAZ');
var buf2 = new Buffer('ABCZ');

console.log(buf1.slice(0,2).length);

//console.log(buf2);
//buf1.copy(buf2);
//console.log(buf2);


//var result = buf1.compare();

//if(result < 0){
//    console.log(buf1 + " 在 " + buf2 + "之前");
//}else if(result == 0){
//    console.log(buf1 + " 与 " + buf2 + "相等");
//}else{
//    console.log(buf1 + " 在 "  + buf2 + "之后");
//}


//var buf1 = new Buffer('菜鸟教程');
//var buf2 = new Buffer('www.runoob.com');
//var buf3= Buffer.concat([buf1,buf2]);
//console.log("buffer3 内容 : "+buf3.toString())




//var buf = new Buffer('www.runoob.com');
//var json = buf.toJSON();
//
//console.log(buf);

//var buf = new Buffer(26);
//var i=0;
//for( ; i < 26 ; i++){
//    buf[i] = i + 97;
//}
//console.log( buf.toJSON());
//console.log( buf.toString('ascii'));
//console.log( buf.toString('ascii',0,5));
//console.log( buf.toString('utf8',0,5));
//console.log( buf.toString(undefined,0,5));