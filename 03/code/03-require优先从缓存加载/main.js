require('./a')

// 优先从缓存加载
// 由于在 a 中已经加载过了
// 所以这里不会重复加载
// 可以拿到其中的接口对象
// 这样做的目的是为了
var fn = require('./b')

console.log(fn)