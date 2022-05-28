var fs = require('fs')

var p1 = new Promise(function (resolve, reject) {

    fs.readFile('./data/a.txt', 'utf-8', function(err,data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var p2 = new Promise(function (resolve, reject) {

    fs.readFile('./data/b.txt', 'utf-8', function(err,data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var p3 = new Promise(function (resolve, reject) {

    fs.readFile('./data/c.txt', 'utf-8', function(err,data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})


p1.
    then(function (data) {
        console.log(data)
        
        // 当 p1 读取成功的时候
        // 当前函数中 return 的结果就可以在后面的 then 中 function 接收到
        // 当你 return 123 后面就接收到 123
        //      return 'hello' 后面就接收到 'hello'
        //      没有 return 后面收到的就是 undefined
        // 上面那些 return 的数据没有什么用
        // 真正有用的是：我们可以return 一个 Promise 对象
        // 当 return 一个 Promise 对象的时候，后续的 then 中的方法的第一个参数会作为你return对象的 resolve函数 
        return p2
    }, function (err) {
        console.log('p1读取文件失败了',err)
    })
    .then(function(data) {
        console.log(data)
        return p3
    }, function (err) {
        console.log('p2读取文件失败了',err)
    })
    .then(function(data) {
        console.log(data)
    },function (err) {
        console.log('p3读取文件失败了',err)
    })