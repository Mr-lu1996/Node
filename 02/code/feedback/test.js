
var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

var comments = [
    {
        name: '鹿先森',
        message: '今天真不错',
        dateTime: '2021-12-24 15:00:00'
    },
    {
        name: '鹿先森',
        message: '今天很不错',
        dateTime: '2021-12-24 15:01:00'
    },
    {
        name: '鹿先森',
        message: '今天确实不错',
        dateTime: '2021-12-24 15:02:00'
    },
]

http
    .createServer(function (req, res) {
        var parseObj = url.parse(req.url, true)
        var pathname = parseObj.pathname

        if(pathname === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    res.end('404 Not Found')
                }
                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        }
        else if (pathname.indexOf('/public/') === 0) {
            fs.readFile('.' + pathname, function (err, data) {
                if (err) {
                    res.end('404 Not Found')
                }
                res.end(data)
            })
        }
        else if (pathname === '/post') {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    res.end('404 Not Found')
                }
                res.end(data)
            })
        }
        else if (pathname ==='/pinglun') {
            var comment = parseObj.query

            // 获取当前时间
            var myDate = new Date()
            var year = myDate.getFullYear()
            var month = myDate.getMonth() + 1
            var day = myDate.getDate()
            var hh = myDate.getHours()
            var mm = myDate.getMinutes() < 10 ? '0'+myDate.getMinutes() : myDate.getMinutes()
            var ss = myDate.getSeconds() < 10 ? '0'+myDate.getSeconds() : myDate.getSeconds()

            comment.dateTime = year + '-' + month + '-' + day + '-' + hh + ':' + mm + ':' + ss
            // 将传过来的参数存入 comments 中
            comments.push(comment)
            // 临时重定向到首页
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        }
        else {
            fs.readFile('.views/404.html', function (err, data) {
                if (err) {
                    res.end('404 Not Found')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, function () {
        console.log('Server is running...')
    })