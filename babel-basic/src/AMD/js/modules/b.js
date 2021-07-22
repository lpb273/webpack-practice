// 定义有依赖的模块
define(['a'], function(a) {
  let name = 'Tom'
  function showMsg() {
    console.warn(a.getMsg() + ', ' + name)
  }
  // 暴露模块
  return { showMsg }
})
