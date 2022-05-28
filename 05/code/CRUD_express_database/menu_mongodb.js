/**
 * menu.js
 * 数据操作文件模块（把增删改查方法提取出来进行封装）
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * 
 * 这里才是我们学习 Node 的精华部分
 * 封装异步 API
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')
var menuSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    isHot: {
        type: String,
        requried: true
    },
    price: {
        type: String,
        required: true  
    }
})
var menu = mongoose.model('Menu',menuSchema)

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
        menu.find((error, result) => {
            if(error) {
                return callback(error)
            }
            callback(null, result)
        })
}

/**
 * 根据 id 查询菜系信息
 * @param {Number} id  菜系 id
 * @param {*} callback  回调函数
 */
exports.findById = function(id, callback) {
    menu.findOne({
        id:id
    },(error, result) => {
        if (error) {
            return callback(error)
        }
        console.log(result)
        callback(null,result)
    })
}

/**
 * 添加保存菜单
 */
exports.save = function (menuObj, callback) {
    // 先查询所有菜单
    menu.find((error, result) => {
        if (error) {
            return callback(error)
        }
        // 给新添加的菜单项的 id 属性赋值
        menuObj.id = result.length + 1
        var new_menu = new menu(menuObj)
        console.log(menuObj)
        new_menu.save((error, result) => {
            if (error) {
                return callback(error)
            }
            callback(null)
        })
    })
}

/**
 * 更新菜单
 */
exports.update = function (menuObj, callback) {
    menuObj.id = parseInt(menuObj.id)
    // 传过来的menuObj中的 id是字符串类型，需要转换为 int 再更新
    menu.updateOne({
        id:menuObj.id
    }, menuObj, (error, result) => {
        if (error) {
            return callback(error)
        }
        callback(null)
    })
}

/**
 * 删除菜单
 */
exports.deleteById = function (id, callback) {
    // 转换 id 类型
    id = parseInt(id)
    menu.deleteOne({
        id: id
    }, (error, result) => {
        if (error) {
            return callback(error)
        }
        callback(null)
    })
}