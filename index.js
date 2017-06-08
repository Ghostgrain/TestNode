/**
 * Created by xiaochaochao on 2017/6/8.
 */
var server = require("./start");
var router = require("./Route");

server.start(router.route);