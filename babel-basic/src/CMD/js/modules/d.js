define(function (require, exports, module) {
  //引入依赖模块(同步)
  var module2 = require('./b')
  function show() {
    console.warn('module4 show() ' + module2.msg)
  }
  exports.show = show
  //引入依赖模块(异步)
  require.async('./c', function (m3) {
    console.warn('异步引入依赖模块c' + m3.API_KEY)
  })
})
