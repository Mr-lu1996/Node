// application 应用程序
// 将当前模块所有的依赖项都声明在文件最模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制

var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')
var comments = [
    {
        name: '鹿先森',
        message: '今天真不错',
        dateTime: '2021-12-18 20:08:08'
    },
    {
        name: '鹿先森',
        message: '今天真不错',
        dateTime: '2021-12-18 20:10:08'
    },
    {
        name: '鹿先森',
        message: '今天真不错',
        dateTime: '2021-12-18 20:12:11'
    },
]


http
    .createServer(function (req, res) {// 简写方式，该函数会直接被注册为 server 的 request 请求事件处理函数
        // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
        var parseObj = url.parse(req.url, true)
        
        // 单独获取不包含查询字符串的路径部分（该路径不包含 ？ 之后的内容）
        var pathname = parseObj.pathname

        if (pathname === '/'){
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        }
        else if (pathname.indexOf('/public/') === 0){
            // html中src中的路径都会自动请求
            //  /public/css/main.css
            //  /public/js/main.js
            //  /public/lib/jquery.js
            // 统一处理：
            //      如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
            //      所以我们就直接可以把请求路径当作文件路径来直接进行读取
            // console.log(url)
            fs.readFile('.' + pathname, function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        }
        else if (pathname === '/post') {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                return res.end(data)
            })
        }
        else if (pathname === '/pinglun') {
            // 注意：这个时候无论 /pinglun?xxx 之后是什么，我都不用担心了，因为我的 pathname中只有路径，没有参数
            // console.log('收到表单请求了',parseObj)

            // 一次请求对应一次响应，响应结束这次请求也就结束了，所以下面这行要注释了
            // res.end(JSON.stringify(parseObj.query))

            // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
            // 所以接下来要做的是：
            //      1.获取表单提交的数据 parseObj.query
            //      2.生成日期到数据对象中，然后存储到数组中
            //      3.让用户重定向跳转到首页 /
            //          当用户重新请求 / 的时候，数组中的数据已经发生变化了，所以用户看到的数据已经更新了
            var comment = parseObj.query
            // myDate.toLocaleDateString();
            
            // 获取当前时间
            var myDate = new Date()
            var year = myDate.getFullYear()
            var month = myDate.getMonth() + 1
            var day = myDate.getDate()
            var hh = myDate.getHours()           
            var mm = myDate.getMinutes() < 10 ? '0'+myDate.getMinutes() : myDate.getMinutes()      
            var ss = myDate.getSeconds() < 10 ? '0'+myDate.getSeconds() : myDate.getSeconds()
            comment.dateTime = year + '-' + month + '-' + day + '  ' + hh + ':' + mm + ':' + ss
            console.log(comment)
            comments.push(comment)//往尾部增加
             // 服务端这个时候已经把数据存储好了，接下来就是让用户重新请求 / 首页

            //  如何通过服务器让客户端重定向？
            //    1.状态码设置为 302 临时重定向
            //          statusCode
            //    2.在响应头中通过 Location 告诉客户端往哪重定向
            //          setHeader
            // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location，然后对该地址发起新的请求
            // 所以客户端就能自动跳转了
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        }
        else{
            fs.readFile('./views/404.html', function(err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
            
        }
})
    .listen(3000, function () {
        console.log('Server is running...')
    })


    // 小结：
    // 1. /  index.html
    // 2.开放 public 目录中的静态资源
    //   当请求 /public/xxx 的时候，读取响应 public  目录中的具体资源
    // 3. /post  post.html
    // 4. /pinglun
    //      4.1 接收表单提交数据
    //      4.2 存储表单提交的数据
    //      4.3 让表单重定向到 /
    //          statusCode
    //          setHeader