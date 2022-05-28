var http = require('http')

var fs = require('fs')

var server = http.createServer()

var template = require('art-template')

var wwwDir = 'E:/www'

server.on('request', function (req, res) {
    var url = req.url

    var filePath = 'index.html'

    if (url !== '/') {
        filePath = url
    }
    fs.readFile('./template-apache.html', function (err, data) {
        if (err) {
            console.log(err)
            return res.end('404 Not Found.')
        }
        // 1.如何得到 wwwDir 目录列表中的文件名和目录名
        //      fs.readdir
        // 2.如何将得到的文件名和目录名替换到 template.html中
        //      2.1 在 template.html 中需要替换的位置预留一个特殊的标记(就像以前使用模板引擎的一样)
        //      2.2 根据 files 生成需要的 HTML 内容
        //      2.3 替换
        // 只要做了这两件事儿,那这个问题就解决了
        fs.readdir(wwwDir, function (err, files) {
            // fiels返回一个包含目录的数组
            if (err) {
                console.log(err)
                return res.end('Can not find this content.')
            }

            // 这里只需要使用模板引擎解析替换 data 中的模板字符串就可以了
            // 数据就是 files
            // 然后去template.html 文件中编写模板语法就可以了
            var htmlStr = template.render(data.toString(), {
                title: '鹿先森',
                content: '我的文件目录',
                files: files
            })
        
            // 3.发送解析替换过后的响应数据
            res.end(htmlStr)
        })
        
    })
})

server.listen(3000, function () {
    console.log('Server is running...')
})