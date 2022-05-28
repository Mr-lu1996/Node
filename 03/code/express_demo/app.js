// 0.安装
// 1.引包
var express = require('express')
var fs = require('fs')
const { nextTick } = require('process')

// 2.创建服务器应用程序（也就是原来的 http.createServer）
var app = express()

// 在 Express 中开放资源就是一个 API 的事儿
// 公开指定目录
// 只要这样做了，就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/public/',express.static('./public/'))
app.use('/static/',express.static('./static/'))
// 当服务器收到 get 请求 / 的时候，执行回调处理函数

app.set('view engine', 'html')

app.get('/', function (req, res, next) {
    fs.readFile('./views/index.html', function (err, data) {
        if (err){
            next(err)
        }else {
            res.send(data)
        }  

    })
})

app.get('/post', function (req, res) {
    fs.readFile('./views/post.html', function (err, data) {
        if (err) {
            return res.send('404 Not Found')
        }
        return res.send(data)
    })
})

app.get('/comment', function (req, res) {
    res.send(req.query)
})

// 相当于 Server.listen
app.listen(3000, function () {
    console.log('app is running at port 3000.')
})