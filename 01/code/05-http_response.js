var http = require('http')
var serve = http.createServer()

//  request 请求事件处理函数，需要接收两个参数：
//      Request 请求对象
//          请求对象可以用来获取客户端的一些请求信息，例如请求路径
//      Response 响应对象
//          响应对象可以用来给客户端发送响应消息

serve.on('request',function(request,response) {
    // http://127.0.0.1:3000    /
    // http://127.0.0.1:3000/a  /a
    // http://127.0.0.1:3000/a/b    /a/b
    console.log('收到客户端的请求了，语法路径是:'+request.url)

    // response 对象有一个方法：write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用end 来结束响应，否则客户端会一直等待
    response.setHeader('Content-Type','text/plain;charset=utf-8')//解决响应中文乱码问题
    response.write('哈哈哈哈哈')
    response.write('终于连接上了')
    response.write('拜拜')
    // 服务器告诉客户端，我的话说完了，你可以呈递给用户了
    response.end()
    

    // 由于现在我们的服务器的能力还非常的弱，无论什么请求都只能响应固定的文字
    // 思考：
    // 如何实现当请求不同的路径的时候响应不同的结果
    // 例如：
    //  /login  登陆
    //  /register 注册
})

serve.listen(3000, function () {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000访问了')
})