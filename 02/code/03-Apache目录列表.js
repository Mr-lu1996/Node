var http = require('http')

var fs = require('fs')

var server = http.createServer()

var wwwDir = 'E:/www'

server.on('request', function (req, res) {
    var url = req.url

    var filePath = 'index.html'

    if (url !== '/') {
        filePath = url
    }
    fs.readFile('./template.html', function (err, data) {
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

            // 2.2 生成需要替换的内容
            var content = ''
            files.forEach(function (item) {
                // 用 ``, 里面的字符可以直接换行
                // 在 Ecmascript 6 的 ` 字符串中,可以使用 ${} 来引用变量
                content += `
                    <tr>
                        <td data-value="source/"><a class="icon dir" href="/E:/www/source/">${item}</a></td>
                        <td class="detailsColumn" data-value="0"></td>
                        <td class="detailsColumn" data-value="1639291728">2021/12/12 下午2:48:48</td>
                    </tr>
                `
            })

            // 2.3 替换
            data = data.toString()
            // 普通的字符串解析替换,浏览器看到的结果就不一样了
            data = data.replace('^_^',content)

            // 3.发送解析替换过后的响应数据
            res.end(data)
        })
        
    })
})

server.listen(3000, function () {
    console.log('Server is running...')
})