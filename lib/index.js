/**
 * @file 学习npm模块
 * @author xuexb <fe.xiaowu@gmail.com>
 */

var urlpath = require('urlpath');

module.exports = function (url) {
    console.log('url => ' + url);
    console.log('urlpath(url) => ' + urlpath(url));
    console.log();
};
