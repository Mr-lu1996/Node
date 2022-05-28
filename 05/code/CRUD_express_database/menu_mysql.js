var mysql = require('mysql')
// 创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
})

connection.connect()

/**
 * 获取所有菜单项
 * @param {*} callback 
 */
exports.findAll = (callback) => {
    // 连接数据库
    var queryAll = 'SELECT * FROM menus'
    connection.query(queryAll, (error, result) => {
        if (error) {
            console.log(error)
            return callback(error)
        }
        callback(null,result)

    })
}

/**
 * 根据 id 查询菜单项信息
 * @param {Number} id 菜单项id
 * @param {*} callback 
 */
exports.findById = (id, callback) => {

    var queryById = 'SELECT * FROM menus WHERE id = ?'
    var params = [id]
    connection.query(queryById, params, (error, result) => {
        if (error) {
            console.log(error)
            callback(error)
        }
        // 要注意，这时result 返回的是数组，不是对象，所以要取 result[0]
        callback(null, result[0])
    
    })
}

/**
 * 添加菜单项
 * @param {Object} menuObj 添加的菜单项对象
 * @param {*} callback 
 */
exports.save = (menuObj, callback) => {
    
    menuObj.id = null

    var addMenu = 'INSERT INTO menus VALUES(?,?,?,?,?)'
    var params = [menuObj.id, menuObj.name, menuObj.weight, menuObj.isHot, menuObj.price]
    
    connection.query(addMenu, params, (error) => {
        if (error) {
            console.log(error)
            callback(error)
        }
        callback(null)
    })
}

/**
 * 更新菜单项
 * @param {Object} menuObj 更新的菜单项对象
 * @param {*} callback 
 */
exports.update = (menuObj, callback) => {
    
    var updateMenu = 'UPDATE menus SET name = ?,weight = ?,isHot = ?,price = ? WHERE id = ?'
    var params = [menuObj.name,  menuObj.weight, menuObj.isHot, menuObj.price, menuObj.id]
    
    connection.query(updateMenu, params, (error) => {
        if (error) {
            console.log(error)
            callback(error)
        }
        callback(null)
    })
}

/**
 * 
 * @param {Number} id 删除菜单项的id
 * @param {*} callback 回调函数
 */
exports.deleteById = (id, callback) => {

    var deleteMenu = 'DELETE FROM menus WHERE id = ?'
    var params = [id]

    connection.query(deleteMenu, params, (error) => {
        if (error) {
            console.log(error)
            callback(error)
        }
        callback(null)
    })
}