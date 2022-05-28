var http = require('http')

var fs = require('fs')

var server = http.createServer()

var wwwDir = 'E:/www'

server.on('request', function (req, res) {
    
    var url = req.url

    if (url === '/') {
        fs.readFile(wwwDir + '/10音视频.html', function (err, data) {
            if (err) {
                console.log(err)
                // return 有两个作用:
                //      1.方法返回值
                //      2.阻止代码继续往后执行
                // 这样就可以不用加 else 了
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else if (url === '/list') {
        fs.readFile(wwwDir + '/06列表.html', function (err, data) {
            if (err) {
                console.log(err)
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else if (url === '/index') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            if (err) {
                console.log(err)
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('404 找不到找不到')
    }

})

server.listen(3000, function () {
    console.log('Server is running...')
})