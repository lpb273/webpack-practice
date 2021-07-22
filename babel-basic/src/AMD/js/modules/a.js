// 定义没有依赖的模块
define(function() {
  let msg = '新东方 老师好'
  function getMsg() {
    return msg
  }
  return { getMsg } // 暴露模块
})
