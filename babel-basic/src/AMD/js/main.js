(function() {
  require.config({
    baseUrl: 'js/', //基本路径 出发点在根目录下
    paths: {
      //映射: 模块标识名: 路径
      a: './modules/a',
      b: './modules/b',
      c: './modules/c',
      jquery: './libs/jquery'
    }
  })
  require(['c'], function(c) {
    c.showMsg()
  })
})()
