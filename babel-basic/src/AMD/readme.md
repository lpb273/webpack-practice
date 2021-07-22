# AMD
```
https://requirejs.org/
```
## 概念
AMD （Asynchronous Module Definition）
异步模块加载机制

## 特点
浏览器环境，非同步加载模块，允许指定回调函数，需要使用RequireJS库

## 定义
```
//定义没有依赖的模块
define(function(){
   return 模块
})
//定义有依赖的模块
define(['module1', 'module2'], function(m1, m2){
   return 模块
})

```
## 使用
```
require(['module1', 'module2'], function(m1, m2){
   使用m1/m2
})
```

AMD模块定义的方法非常清晰
不会污染全局环境
能够清楚地显示依赖关系
AMD模式可以用于浏览器环境
并且允许非同步加载模块
也可以根据需要动态加载模块
