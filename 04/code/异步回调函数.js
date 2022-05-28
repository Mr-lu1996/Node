// console.log(1)

// 不会等待
// setTimeout(function() {
//     console.log(2)
//     console.log('hello')
// }, 0)

// console.log(3)

// function add(x, y) {
//     console.log(1)
//     setTimeout(function() {
//         console.log(2);
//         var ret = x + y
//         return ret
//     }, 1000)
//     console.log(3)
//         // 到这里执行就结束了,不会等待前面原定时器，直接就返回了默认值 undefined
// }

// console.log(add(10, 20));

function add(x, y, callback) {
    setTimeout(function() {
        var ret = x + y
        callback(ret)
    }, 1000)
}

add(10, 20, function(ret) {
    console.log(ret);
})


// 注意： 凡是需要得到一个函数内部异步操作（需要等待）的结果
// setTimeout
// readFile
// writeFile
// ajax
// 这种情必须通过： 回调函数