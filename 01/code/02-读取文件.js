// 浏览器中的JavaScript是没有文件操作的能力的
// 但是 Node 中的JavaScript具有文件操作的能力

// fs是file-system的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// 例如：fs.readFile 就是用来读取文件的

// 1.使用require方法来加载fs核心模块

var fs = require('fs')

// 2.读取文件
//      第一个参数就是要读取的文件路径
//      第二个参数是一个回调函数
//          读取成功
//              data -> 数据
//              error -> null
//          读取失败
//              data -> undefine
//              error -> 错误对象

fs.readFile('./data/123.txt',function(error, data){
    // console.log(data)
    // <Buffer 48 65 6c 6c 6f ef bc 8c 6c 75 78 69 61 6e 73 65 6e ef bc 81 ef bc 81 ef bc 81>
    // 文件中存储的其实都是二进制数据 0 1
    // 但是无论是二进制还是16进制，人类都不认识
    // 所以我们可以通过toString方法把其转为我们认识的字符
    if(error) {
        console.log('读取文件失败')
    } else {
        console.log(data.toString())
    }
})