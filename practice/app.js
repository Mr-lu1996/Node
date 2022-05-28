var express = require('express')

const app = express()

router = require('./router')

app.use(router)

app.listen(3000, function() {
    console.log('http://127.0.0.1:3000 is running...')
})