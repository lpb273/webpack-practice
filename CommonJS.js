/**
 * 概念
 * CommonJS 模块规范
 * 每个文件就是一个模块，有自己的作用域 eg:process.env
 * 在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见
 * 在服务器端，模块的加载是运行时同步加载的(模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式)
 * 在浏览器端，模块需要提前编译打包处理
 * 
 * 特点
 * 所有代码都运行在模块作用域，不会污染全局作用域
 * 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存
 * 模块加载的顺序，按照其在代码中出现的顺序
 * 
 * 语法 eg1
 * module.exports = value
 * exports.xxx = value
 * 
 * 加载机制 eg2
 * 输入的是被输出的值的拷贝
 * 也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
*/


// example.js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;

var example = require('./example.js');//如果参数字符串以“./”开头，则表示加载的是一个位于相对路径
console.log(example.x); // 5
console.log(example.addX(1)); // 6


// example2.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
