var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }
})

var Admin = mongoose.model('Admin', adminSchema)

var admin = new Admin({
    name: '鹿先森',
    password: '666666',
    phone_number: '13817352641'
})
admin.save((err, ret) => {
    if (err) {
        console.log('保存失败!')
    } else {
        console.log('保存成功!')
        console.log(ret)
    }
})