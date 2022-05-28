var express = require('express')

var router = express.Router()

router.get('/', (req, res) => {
    res.send('鹿先森你好啊')
})



module.exports = router