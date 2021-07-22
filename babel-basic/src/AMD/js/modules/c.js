// 定义有依赖的模块
define(['a', 'jquery'], function(a) {
  let name = 'Tom'
  function showMsg() {
    console.warn(a.getMsg() + ', ' + name)
  }
  $('body').css('background', 'green')
  // 暴露模块
  return { showMsg }
})
