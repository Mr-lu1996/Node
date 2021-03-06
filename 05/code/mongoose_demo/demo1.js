var mongoose = require('mongoose')

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost/test')
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/test');
//   }

mongoose.Promise = global.Promise

// 创建一个模型
// 就是在设计数据库
// MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// mongoose 这个包可以让你的设计编写过程变的非常的简单

var Cat = mongoose.model('Cat', { name: String })

// 实例化一个 Cat
var kitty = new Cat({ name: 'luxiansen'})

// 持久化保存 kitty 实例
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('保存成功');
    }
}) 