var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 1.连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动创建出来

mongoose.connect('mongodb://localhost/test')

// 2.设计集合结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
})

// 3.将文档结构发布为模型
//      mongoose.model 方法就是用来将一个架构发布为 model
//      第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//                  mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//                  例如这里的 User 最终会变为 users 集合名称
//      第二个参数：架构 Schema
// 
//      返回值：模型构造函数
var User = mongoose.model('User', userSchema)
 
// 4.当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了

/**
 * 增加数据
 */
// var admin = new User({
    
//     username: 'luxiansen',
//     password: '123456',
//     email: 'admin@luxiansen.com'

// })

// admin.save((err,ret) => {
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(ret)
//     }
// })

/**
 * 查询数据
 */

// 1.查询所有(返回数组)
// User.find((err,ret) => {
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log(ret)
//     }
// })

// 2.按条件查询所有（返回数组）
// User.find({
//     username: 'luxiansen'
// }, (err, ret) => {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log(ret)
//     }
// })

// 3.按条件查询单个（返回对象）
// User.findOne({
//     username: 'luxiansen'
// }, (err, ret) => {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log(ret)
//     }
// })

// 4.删除单个数据
// User.deleteOne({
//     username: 'admin'   
// }, (err, ret) => {
//     if(err) {
//         console.log('删除失败')
//     } else {
//         console.log('删除成功')
//     }
// })

/**
 * 更新数据
 */

// 通过id更新数据
User.updateOne({
    id:'61ea1405f1f22baa11240017'
},{
    password: '123'
}, (err, ret) => {
    if (err) {
        console.log('更新失败')
    } else {
        console.log('更新成功')
        console.log(ret)
    }
})

