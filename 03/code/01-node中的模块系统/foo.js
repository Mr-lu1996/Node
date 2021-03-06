var foo = 'bar'

function add(x, y) {
    return x + y
}

// 如果一个模块需要直接导出某个成员,而非挂载的方式
// 那这个时候必须使用下面这种方式
module.exports = add

// 也可以得到多个成员
module.exports = {
    str: 'abc',
    add: function(x, y) {
        return x + y
    }
}

// 只能得到我想要给你的成员
// 这样做的目的是为了解决变量命名冲突的问题

exports.abc = add

// exports 是一个对象
// 我们可以通过多次为这个对象添加成员实现对外导出多个内部成员

exports.str = 'hello'

// 现在有一个需求:
// 我希望加载得到的直接就是一个:
//      方法
//      字符串