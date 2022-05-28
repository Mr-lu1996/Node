// 1.结合 fs 发送文件中的数据
// 2.Content-Type
//      http://tool.oschina.net/commons
//      不同的资源对应的 Content-Type 是不一样的
//      图片不需要指定编码
//      一般值为字符数据才指定编码

var http = require('http')

var fs = require('fs')

var server = http.createServer()

server.on('request', function (req,res) {
    var url = req.url

    if (url === '/') {
        // 我们要发送的还是在文件中的内容
        fs.readFile('./resource/index.html', function (err,data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败,请稍后重试!')
            }
            else {
                console.log('文件读取成功')
                // data 默认是二进制数据,可以通过 .toString()转为咱们认识的字符串
                // res.end() 支持两种数据类型,一种是 二进制, 一种是字符串
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }
    else if (url === '/a'){
        fs.readFile('./resource/2.jpeg', function (err,data) {
            if (err) {
                console.log(err)
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后重试!')
            }
            else {
                // 图片不需要指定编码了，因为常说的编码一般指的是：字符编码；图片格式加了会出问题
                res.setHeader('Content-Type','image/jpeg')
                res.end(data)
            }
        })
    }
    else if (url === '/b'){
        fs.readFile('./resource/1.jpeg', function (err,data) {
            if (err) {
                console.log(err)
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后重试!')
            }
            else {
                // 图片不需要指定编码了，因为常说的编码一般指的是：字符编码；图片格式加了会出问题
                res.setHeader('Content-Type','image/jpeg')
                res.end(data)
            }
        })
    }
    else if (url === '/c') {
        fs.readFile('./resource/123.jpg', function (err,data) {
            if (err) {
                console.log(err)
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后重试!')
            }
            else {
                // 图片不需要指定编码了，因为常说的编码一般指的是：字符编码；图片格式加了会出问题
                res.setHeader('Content-Type','image/jpeg')
                res.end(data)
            }
        })
    }
    else {
        res.end('error,404')
    }
})

server.listen(3000, function () {
    console.log('Server is running....')
})