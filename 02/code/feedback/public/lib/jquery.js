console.log('hello,jquery.js')

var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        var url = req.url
        if (url === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        }
        else if (url.indexOf('/public/') === 0) {
            fs.readFile('.'+url, function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        }
        else if (url === '/post') {
            fs.readFile('./views/post.html',function (err, data) {
                if (err){
                    return res.end('404 Not Found')
                }
                return res.end(data)
            })
        }
        else {
            fs.readFile('./views/404.html', function (err, data) {
                res.end(data)
            })
        }
})
    .listen(3000, function () {
    console.log('Server is running...')
})