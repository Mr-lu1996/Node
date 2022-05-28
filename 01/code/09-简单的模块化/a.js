// require 是一个方法
// 它的作用就是用来加载模块的
// 在 Node 中，模块有三种：
//      具名的核心模块，例如 fs、http
//      用户自己编写的文件模块
//          相对路径必须加  ./，不能省略， 否则报错
//          可以省略后缀名
//      在 Node 中，没有全局作用域，只有模块作用域
//          外部访问不到内部
//          内部也访问不到外部

console.log('a start')

require('./b.js')

console.log('a end')


// require 方法有两个作用：
//      1.加载文件模块并执行里面的代码
//      2.拿到被加载文件导出的接口对象

//      每一个文件模块中都提供了一个对象：exports
//      exports 默认是一个空对象
//      你要做的就是把所有需要被外部访问的成员放进exports中

var bExports = require('./b')

console.log(bExports.foo)

console.log(bExports.add(1,2))