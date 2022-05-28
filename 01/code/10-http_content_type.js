
var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
    // 在服务器默认发送的数据，其实是 utf-8 编码的内容
    // 但是在浏览器不知道你是 utf-8 编码的内容
    // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是  gbk
    // 解决方法就是告诉浏览器我给你发的内容是什么编码的（一般都是 utf-8）
    // res.setHeader('Content-Type','text/plain; charset=utf-8')
    // res.end('hello 鹿先森')

    var url = req.url

    if (url === '/plain') {
        // text/plain 就是普通文本
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('hello 世界')
    } 
    else if (url === '/html') {
        // 如果你发送的是 html 格式的字符串,则也要告诉浏览器给你发送的是 text/html 格式的内容
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        res.end('<p>hello 鹿先森</p>')
    }
})

server.listen(3000, function () {
    console.log('Server is running...')
})