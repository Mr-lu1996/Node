/**
 * menu.js
 * 数据操作文件模块（把增删改查方法提取出来进行封装）
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * 
 * 这里才是我们学习 Node 的精华部分
 * 封装异步 API
 */

var fs = require('fs')  
var dbPath = './db.json'
/**
 * 获取所有菜单列表
 * callback 中的参数
 *      第一个参数是 err
 *          成功是 null
 *          错误是 错误对象
 *      第二个参数是 结果
 *          成功是 数组
 *          错误是 undefined 
 * return []
 */
exports.findAll = function (callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data))
    })
}

/**
 * 根据 id 查询菜系信息
 * @param {Number} id  菜系 id
 * @param {*} callback  回调函数
 */
exports.findById = function(id, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus

        var menuObj = menus.find(function (item) {
            return item.id === id
        })
        callback(null,menuObj)
    })
}

/**
 * 添加保存菜单
 */
exports.save = function (menu, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus
        // 给对象添加属性直接赋值，给数组添加对象是用 push
        menu.id = parseInt(menus[menus.length-1].id + 1)
        menus.push(menu)
        var fileData = JSON.stringify(file)
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })

}

/**
 * 更新菜单
 */
exports.update = function (menu, callback) {
    fs.readFile(dbPath, 'utf-8', function (err,data) {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus

        // menu 是 req.body 传过来的，body里面的属性都默认是字符串类型，所以 id 的类型需要改成 Int
        menu.id = parseInt(menu.id)

        // 你要修改谁，就需要把谁找出来
        // EcmaScript 6 中的一个数组方法：find
        // 需要接收一个函数作为参数
        // 当某个遍历项符合 item.id === menu.id 条件的时候，find 会终止遍历，同时返回遍历项item对象
        var menuObj = menus.find(function (item) {
            return item.id == menu.id
        })
        // 找到之后就修改对应 id 对象的属性

        // 这种方法写死了，如果有100个属性那是不是要写100次
        // menuObj.name = menu.name
        // menuObj.weight = menu.weight
        // ...

        // 可以遍历拷贝对象
        for (var key in menu) {
            menuObj[key] = menu[key]
        }
        // console.log(menuObj)
        // 把对象转换为字符串
        var fileData = JSON.stringify(file)
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

/**
 * 删除菜单
 */
exports.deleteById = function (id, callback) {
    // 转换 id 类型
    id = parseInt(id)
    fs.readFile(dbPath, 'utf-8', function(err, data) {
        if (err) {
            callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus

        // findIndex 方法专门用来根据条件查找元素的下标
        var deleteId = menus.findIndex(function (item) {
            return item.id === id
        })

        // 找到需要删除的 id 后根据 id 把它删除掉
        // splice(i,n) 删除从下标 i 开始的 n 个元素
        menus.splice(deleteId, 1)

        // for(var i = 0; i < menus.length; i++) {
        //     if (menus[i].id === id) {
        //         menus.splice(i, 1)
        //     }
        // }
        var fileData = JSON.stringify(file)
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}