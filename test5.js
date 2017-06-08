/**
 * Created by xiaochaochao on 2017/6/8.
 */
var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('监听器 listener1 执行');
}

var listener2 = function listener2() {
    console.log('监听器 listener2 执行');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2)

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
var L = eventEmitter.lisenerCount('connection');
console.log(eventListeners + "个监听器监听连接事件");
console.log("程序执行完毕")


//eventEmitter.on('someEvent',function(arg1,arg2){
//    console.log('listener1',arg1 , arg2);
//});
//eventEmitter.on('someEvent',function(arg1,arg2){
//    console.log('listener2',arg1,arg2);
//});
//eventEmitter.emit('someEvent','arg1 参数','arg2参数');




//var connectHandler = function connected() {
//    console.log('连接成功');
//
//    eventEmitter.emit('data_received');
//}
//
//eventEmitter.on('connection',connectHandler);
//eventEmitter.on('data_received',function(){
//    console.log('数据接受成功');
//});
//
//eventEmitter.emit('connection');
//console.log("程序执行完毕");


