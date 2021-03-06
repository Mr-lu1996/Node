const bodyParser = require('body-parser')

var express = requrie('express')
var router = require('./router')
var app = express()

app.engine('html', require('express-art-template'))

app.use('/public/', express.static('./public'))
app.use('/node_modules/', express.static('./node_modules'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(router)

app.listen(3000, () => {
    console.log('Server is running...')
})
