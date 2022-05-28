var fs = require('fs')

var dbPath = './db.json'

/**
 * 获取菜单列表所有数据
 * @param {Function} callback 回调函数
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
 * 
 * @param {Object} menu 菜系对象（包含 name,weight,isHot,price属性）
 * @param {Function} callback 回调函数
 */
exports.save = (menu, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus
        menu.id = menus[menus.length - 1].id + 1
        menus.push(menu)

        var fileData = JSON.stringify(file)
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

/**
 * 
 * @param {Number} id 菜系 id
 * @param {Function} callback 回调函数
 */
exports.findById = (id, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus

        var menuObj = menus.find((item) => {
            return item.id === parseInt(id)
        })
        callback(null, menuObj)
    })
}

/**
 *  
 * @param {Object} menu 菜系对象（包含 id,name,weight,isHot,price属性）
 * @param {Function} callback 回调函数
 */
exports.update = (menu, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => { 
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus
        menu.id = parseInt(menu.id)

        // find 直接返回 id 相同的对象
        var menuObj = menus.find((item) => {
            return item.id === menu.id
        })

        // 将 menuObj 中的属性全部替换为 menu
        for (var key in menu) {
            menuObj[key] = menu[key]
        }

        var fileData = JSON.stringify(file)
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.deleteById = (id, callback) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err)
        }
        var file = JSON.parse(data)
        var menus = file.menus

        var deleteId = menus.findIndex((item) => {
            item.id === parseInt(id)
        })

        menus.splice(deleteId, 1)

        var fileData = JSON.stringify(file)
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}