var url = require('url')

var parseObj = url.parse('/pinglun?name=鹿先森&message=哈哈哈', true)

console.log(parseObj)

console.log(parseObj.query)