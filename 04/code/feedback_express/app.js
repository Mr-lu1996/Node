const bodyParser = require('body-parser')
var express = require('express')


var app = express()

app.use('/public/',express.static('./public'))

// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候（可以改成html或其他自己想渲染的文件），使用 art-template 模板引擎 
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template

app.engine('html', require('express-art-template')) // 配置模板引擎

// Express 为 Response 相应的对象提供了一个方法： render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名',{模板数据})
// 第一个参数不用写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)
// app.set('views',render('./public'))

// app.get('/', (req, res) => {
//     res.render('404.html')
// })

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var comments = [
    {
        name: '鹿先森',
        message: '今天真不错',
        dateTime: '2021-12-18 20:08:08'
    },
    {
        name: '鹿先森',
        message: '是不是啊',
        dateTime: '2021-12-18 20:10:08'
    },
    {
        name: '鹿先森',
        message: '修狗',
        dateTime: '2021-12-18 20:12:11'
    },
]

app.get('/', (req, res) => {
    res.render('index.html',{
        comments:comments
    })
})

app.get('/post', (req, res) => {
    res.render('post.html')
})

// 当以 POST 请求 /post 的时候，执行指定的处理函数
// 这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
app.post('/post', (req, res) => {
    // 1.获取表单 POST 请求体数据
    // 2.处理
    // 3.发送响应

    // req.query 只能拿 get 请求参数
    // console.log(req.query)
    // console.log(req.body)

    var comment = req.body
    
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = myDate.getMonth()+1 < 10 ? '0'+(myDate.getMonth()+1) : myDate.getMonth()+1
    var day = myDate.getDate() < 10 ? '0'+myDate.getDate() : myDate.getDate()
    var hh = myDate.getHours() < 10 ? '0'+myDate.getHours() : myDate.getHours()          
    var mm = myDate.getMinutes() < 10 ? '0'+myDate.getMinutes() : myDate.getMinutes()      
    var ss = myDate.getSeconds() < 10 ? '0'+myDate.getSeconds() : myDate.getSeconds()
    comment.dateTime = year + '-' + month + '-' + day + '  ' + hh + ':' + mm + ':' + ss

    comments.unshift(comment)
    
    res.redirect('/')
})

app.get('/pinglun', (req, res) => {
    var comment = req.query
    
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = myDate.getMonth()+1 < 10 ? '0'+(myDate.getMonth()+1) : myDate.getMonth()+1
    var day = myDate.getDate() < 10 ? '0'+myDate.getDate() : myDate.getDate()
    var hh = myDate.getHours() < 10 ? '0'+myDate.getHours() : myDate.getHours()          
    var mm = myDate.getMinutes() < 10 ? '0'+myDate.getMinutes() : myDate.getMinutes()      
    var ss = myDate.getSeconds() < 10 ? '0'+myDate.getSeconds() : myDate.getSeconds()
    comment.dateTime = year + '-' + month + '-' + day + '  ' + hh + ':' + mm + ':' + ss

    comments.unshift(comment)
    
    res.redirect('/')
    // res.statusCode = 302
    // res.setHeader('Location','/')
})

app.listen(3000, () => {
    console.log('Express Server is running...')
})