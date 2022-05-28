/**
 * router.js 路由模块
 * 职责:
 *      处理路由
 *      根据不同的请求方法 + 请求路径设置具体的请求函数
 * 模块职责要单一,不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

var fs = require('fs')

var Menus = require('./menu_mysql')
// 这种方法可以，但是也不够好
// module.exports = function (app) {
//     app.get('/', (req, res) => {
//         console.log(app)
//     })
// }

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// 1.创建一个路由容器
var router = express.Router()

// 2.把路由都挂载到 router 路由容器中

    // 渲染首页
router.get('/menus', (req, res) => {
    // readFile 的第二个参数是可选的，传入 utf-8 就是告诉它把读取到的文件直接按照 utf8 编码转成我们能认识的字符
    // 除了这样来转换之外，也可以通过 data.toString() 的方式
    // fs.readFile('./db.json', 'utf-8', (err, data) => {
    //     if (err) {
    //         return res.status(500).send('Server Error.')
    //     }
    // })
    Menus.findAll(function (err, data) {
        if (err) {
            return res.status(500).send('Server error...')
        }
        // data 是字符串类型
        // 从文件中读取到的数据一定是字符串
        // 所以这里一定要手动转成对象
        // var comments = JSON.parse(data).comments
        // var menus = JSON.parse(data).menus
        res.render('index.html',{
            menus:data
        })
        })
})

    // 渲染添加菜单页面
router.get('/menus/new', (req, res) => {
    res.render('new.html')
})

    // 处理添加菜单页面
router.post('/menus/new', (req, res) => {
    // 1.获取表单数据
    // 2.处理
    //      将数据保存到 db.json 文件中用以持久化
    // 3.发送响应
    var menu = req.body

    Menus.save(menu, function (err) {
        if (err) {
            res.status(500).send('添加失败!')
        }
        res.redirect('/menus')
    })
})

    // 处理删除请求
router.get('/menus/delete', (req, res) => {
    // 1.获取传过来的id
    // 2.根据 id 执行删除操作
    // 3.根据操作结果发送响应数据

    Menus.deleteById(req.query.id, function (err) {
        if (err) {
            res.status(500).send('删除失败!')
        }
        res.redirect('/menus')
    })
})

    // 渲染编辑页面
router.get('/menus/edit', (req, res) => {
    // 1.在客户端的列表中处理链接问题（需要有 id 参数）
    // 2.获取要编辑的菜系的 id
    // 3.渲染编辑页面
    //      根据 id 把菜系信息查出来
    //      根据模板引擎渲染页面

    // query 中的 id 是字符串类型，需要先转成 int 类型
    Menus.findById(parseInt(req.query.id), function (err, menu) {
        if (err) {
            res.status(500).send('页面获取失败!')
        }
        res.render('update.html', {
            menu: menu
        })
    })
})

    //处理编辑页面
router.post('/menus/edit', (req, res) => { 
    // 1.获取表单数据(req.body) 
    // 2. 更新  
    // 3.发送响应
    
    // req.body中的属性类型变成了字符串类型，默认的
    
    Menus.update(req.body, function(err) {
        if (err) {
            res.status(500).send('编辑页面失败!')
        }
        res.redirect('/menus')
    })
}) 


// 3.把 router 导出
module.exports = router


