var fs = require('fs')

// 第一个参数： 文件路径
// 第二个参数： 文件内容
// 每三个参数： 回调函数
//      error
//          成功：
//              文件写入成功，error是null
//          失败：
//              文件写入失败，error就是错误
fs.writeFile('./data/你好.txt','哈喽，大家好，我是鹿先森', function(error){
    if(error) {
        console.log('文件写入失败')
    } else {
        console.log('文件写入成功')
    }
})