var fs = require('fs')
var express = require('express')
var menu = require('./menu')

var router = express.Router()

// 渲染首页
router.get('/menus', (req, res) => {
    menu.findAll((err, data) => {
        if (err) {
            return res.status(500).send('Server Error')
        }
        res.render('index.html', {
            comments: data.comments,
            menus: data.menus
        })
    })
})

// 渲染添加菜单页面
router.get('/menu/new', (req, res) => {
    res.render('new.html')
})

// 处理添加菜单页面
router.post('/menu/new', (req, res) => {
    res.addMenu(req.body, (err, data) => {
        if (err) {
            res.status(500).send('Server Error')
        }
        res.redirect('/menus')
    })
})

// 渲染编辑页面
router.get('menu/edit', (req, res) => {
    menus.findById(parseInt(req.body.id), (err, data) => {
        if (err) {
            res.status(500).send('Server Error')
        }
        res.render('update.html', {
            menu: data
        })
    })
})

// 处理编辑页面
router.post('menu/edit', (req, res) => {
    menus.updata(req.body, (err, data) => {
        if(err) {
            res.status(500).send('Server Error')
        }
        res.redirect('/menus')
    })
})

// 处理删除请求
router.get('menu/delete', (req, res) => {
    var id = parseInt(req.body.id)
    menus.deleteById(id,(err) => {
        if(err) {
            res.status(500).send('Server Error')
        }
        res.redirect('/menus')
    })
})

// 把路由导出
module.exports = router