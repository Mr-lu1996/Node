var express = require('express')

var bodyParser = require('body-parser')
var app = express()

app.use('/public/',express.static('./public'))

// 配置模板引擎
app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var comments = [
    {
        name: 'Jack',
        message: '不求文达于诸候'
    },
    {
        name: 'Bob',
        message: '躬耕于南阳'
    }
]
app.get('/', (req, res) => {
    res.render('index.html',{
        comments:comments
    })
})

app.get('/post', (req, res) => {
    res.render('post.html')
})

app.post('/post', (req, res) => {
    console.log(req.body)
    var comment = req.body
    comments.unshift(comment)

    res.redirect('/')
})


app.listen(3000, () => {
    console.log('express server is running...')
})