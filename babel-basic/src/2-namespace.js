/**
 * 作用: 减少了全局变量，解决命名冲突
 * 问题: 数据不安全(外部可以直接修改模块内部的数据)
*/
let myModule = {
  data: 'www.baidu.com',
  foo() {
    console.log(`foo() ${this.data}`)
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
}
myModule.data = 'other data' //能直接修改模块内部的数据
myModule.foo() // foo() other data
