var fs = require('fs')

var dbPath = './db.json'

/**
 * 获取所有菜单列表
 * @param {*} callback 回调函数
 */
exports.findAll = (callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data))
    })
}

/**
 * 根据 id 查询菜品信息
 * @param {Number} id 菜品id
 * @param {*} callback 回调函数
 */
exports.findById = (id, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menu = file.menus

        var menuObj = menu.find((item) => {
            return item.id === id
        })

        callback(null, menuObj)
    })
}

/**
 * 
 * @param {Object} menuObj 新添加 的菜单对象
 * @param {*} callback 回调函数
 */
exports.addMenu = (menuObj, callback) => {
    // 将菜单数据从文件中读取出来
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus

        menuObj.id = menus[menus.length-1].id + 1
        menus.push(menuObj)
        
    })

    // 将添加后的新菜单写入json文件中
    var fileData = JSON.stringify(file)
    fs.writeFile(dbpath, fileData, (err) => {
        if (err) {
            return callback(err)
        }
        callback(null)
    })
}

/**
 * 
 * @param {Object} menu 编辑菜单项对象
 * @param {*} callback 回调函数
 */
exports.update = (menu, callback) => {
    fs.readFile(dbpath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus
        
        // menu是req.body传过来的，req.body对象中的内容是以字符串的形式存储的，所以id需要转换为Int类型
        menu.id = parseInt(menu.id)
        // 通过 id 找到需要编辑的菜单项,find方法返回对象
        var menuObj = menus.find((item) => {
            return item.id === menu.id
        })
        // 遍历拷贝对象，将需要编辑的菜单项对象中的所有属性重新赋值
        for(var key in menu) {
            menuObj[key] = menu[key]
        }
        // 写入json 文件中
        var fileData = JSON.stringify(file)
        fs.writeFile(dbpath, fileData, (err) => {
            if(err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

/**
 * 
 * @param {Number} id 需要删除菜单项的 id
 * @param {*} callback 回调函数
 */
exports.deleteByid = (id, callback) => {
    fs.readFile(dbpath, 'utf-8', (err, data) => {
        if(err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus
        // 找到需要删除菜单项的下标
        var deleteId = menus.findIndex((item) => {
            return item.id === id
        })
        // splice(i,n) 方法删除从下标 i 开始的 n 个元素
        menus.splice(deleteId, 1)

        var fileData = JSON.stringify(file)
        fs.writeFile(dbpath, fileData, (err) => {
            if(err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
