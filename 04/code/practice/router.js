var fs = require('fs')

var express = require('express')

var router = express.Router()

var Menus = require('./menu')

/**
 * 获取菜单列表页面（首页）
 */
router.get('/menus', (req, res) => {
    Menus.findAll((err, data) => {
        if (err) {
            return res.status(500).send('Server Error...')
        }
        res.render('index.html', {
            comments: data.comments,
            menus: data.menus
        })
    })
})

/**
 * 渲染添加菜单页面
 */
router.get('/menus/new', (req, res) => {
    res.render('new.html')
})

/**
 * 处理添加菜单页面
 */
router.post('/menus/new', (req, res) => {
    Menus.save(req.body, (err) => {
        if (err) {
            return res.status(500).send('Server Error...')
        }
        res.redirect('/menus')
    })
})

/**
 * 渲染编辑菜单页面
 */
router.get('/menus/edit', (req, res) => {
    Menus.findById(req.query.id, (err, menu) => {
        if (err) {
            return res.status(500).send('Server Error...')
        }
        res.render('edit.html',{
            menu: menu
        })
    })
})

/**
 * 处理编辑菜单页面
 */
router.post('/menus/edit', (req, res) => {
    Menus.update(req.body,(err) => {
        if (err) {
            return res.status(500).send('Server Error...')
        }
        res.redirect('/menus')
    })
})

/**
 * 处理删除菜单页面
 */
router.get('/menus/delete', (req, res) => {
    Menus.deleteById(req.query.id, (err) => {
        if (err) {
            return res.status(500).send('Server Error...')
        }
        res.redirect('/menus')
    })
})

module.exports = router