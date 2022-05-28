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

menu.find()
    .then(function (data) {
        console.log(data)
    })
 
//  menu.findOne({
//      name: '青椒炒肉'
//  })
//     .then(function(menuOne) {
//         if(menuOne) {
//             // 菜品已存在，不能添加
//             console.log('菜品已存在!')
//         } else {
//             // 菜品不存在，可以添加
//             return new menu({
//                 id: 10,
//                 name: '红烧狮子头',
//                 weight: '中份',
//                 isHot: '是',
//                 price: '19.9',
//             }).save()
//         }        
//     })
//     .then((function(result) {
//         console.log(result)
//         console.log('添加成功!')
//     }))   

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