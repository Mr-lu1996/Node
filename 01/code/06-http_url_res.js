var http = require('http')

// 1.创建 Server
var server = http.createServer()

// 2.监听 request 请求事件，设置请求处理函数
server.on('request',function (req,res) {
    console.log('收到请求了，请求路径是：'+req.url)
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    // res.write('hello')
    // res.write(' world')
    // res.end()

    // 上面的方式比较麻烦，推荐使用更装箱单的方式，直接end的同时发送响应数据
    // res.end('hello world!')

    //根据不同的请求路径发送不同的响应结果
    // 1. 获取请求路径
    //      req.url 获取到的是端口号之后的那一部分路径
    //      也就是说所有的 url 都是以 / 开头的
    // 2. 判断路径处理响应
    
    var url = req.url
    if (url === '/') {
        res.end('index page')
    }
    else if (url === '/login') {
        res.end('login page')
    }
    else if (url === '/products') {
        var products = [
            {
                name: '青椒肉丝',
                price: 12
            },
            {
                name: '红烧茄子',
                price: 10
            },
            {
                name: '排骨莲藕汤',
                price: 35
            }
        ]

        // 响应内容只能是二进制数据或者字符串
        // 数字、对象、数组、布尔值 都不行
        res.end(JSON.stringify(products))
    }
    else {
        res.end('404 Not Found')
    }
    
})

// 3.绑定端口号，启动服务
server.listen(3000, function () {
    console.log('服务器启动成功，可以访问了')
})



