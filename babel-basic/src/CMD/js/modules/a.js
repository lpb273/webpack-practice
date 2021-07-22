define(function (require, exports, module) {
  //内部变量数据
  var data = 'xdf.cn'
  //内部函数
  function show() {
    console.warn('a show() ' + data)
  }
  //向外暴露
  exports.show = show
})
