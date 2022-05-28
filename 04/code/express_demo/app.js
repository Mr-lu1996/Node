var express = require('express')
var fs = require('fs')

// 1.创建 app
var app = express()

// 当以 /public/ 开头的时候，去 ./public/ 目录中查找对应的资源
// app.use('/public/', express.static('./public/'))

// 当省略第一个参数的时候，则可以通过省略 /public 的方式来找对应目录中的资源
app.use(express.static('./public/'))


app.listen(3000, () => {
    console.log('express is running...')
})