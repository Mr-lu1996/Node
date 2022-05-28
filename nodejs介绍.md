# 1. Node.js入门
## 1.1  为什么要学习Node.js
不会就学，哪那么多为什么

## 1.2 Node.js是什么
 - Node.js 不是一门语言
 - Node.js 不是库、不是框架
 - Node.js是一个Javascript运行时环境
 - 简单来讲就是Node.js可以解析和执行JavaScript代码
 - 以前只有浏览器可以解析执行JavaScript代码
 - 也就是说现在的JavaScript可以完全脱离浏览器来运行，一切都归功于：Node.js
## 浏览器中的JavaScript
 - EcmaScript
	 - 基本的语法
	 - if
	 - var
	 - function
	 - Object
	 - Array
 - BOM
 - DOM
 ## Node.js中的JavaScript
 - 没有BOM、DOM
 - EcmaScript
 - 在Node这个JavaScript执行环境中为JavaScript提供了一些服务器级别的操作API
	 - 例如文件读写
	 - 网络服务的构建
	 - 网络通信
	 - http服务器等处理
 
 - 构建于Chrome的V8引擎之上
	 - 代码只是具有特定格式的字符串而已
	 - 引擎可以认识它，引擎可以帮你去解析和执行
	 - Google Chrome的V8引擎是目前公认的解析执行JavaScript代码最快的
	 - Node.js的作者把Google Chrome中的V8引擎移植了出来，开发了一个独立的JavaScript运行时环境。

## Node.js uses an event-driven,non-blocking I/O model that makes it lightweight and efficient.(Node.js特性)
 - event-driven事件驱动
 - non-blocking I/O model非阻塞IO模型（异步）
 - lightweight and efficient 轻量和高效
 
 - npm是世界上最大的开源库生态系统
 - 绝大多数JavaScript相关的包都存放在了npm上，这样做的目的是为了让开发人员更方便的去下载使用
 - *npm install jquery*

## 1.3 Node.js能做什么

 - Web服务器后台
 - 命令行工具
	 - npm(基于Node开发的)
	 - git(基于C语言)
	 - hexo（基于Node）
 - 对于前端开发工程师来讲，接触 Node最多的是它的命令行工具
	 - 自己写的很少，主要是使用别人第三方的
	 - webpack
	 - gulp
	 - npm

## 1.4 一些资源
![](nodejs%E4%BB%8B%E7%BB%8D_md_files/image_20211209220452.png?v=1&type=image&token=V1:iBN6dLV-eNaPZeKbSz11MycA-PwpgSvhmtxAiCxz-WQ)
 
## 1.5 通过Node.js能学到啥？
 - B/S编程模型
	 - Browser-Server
	 - back-end
	 - 任何服务端技术这种BS编程模型都是一样，和语言无关
	 - Node只是作为我们学习BS编程一个工具而已
 - 模块化编程
	 - RequireJS
	 - SeaJS
	 - `@import('文件路径')`
	 - 以前认知的Javascript只能通过`script`标签来加载
	 - 在Node中可以像`@import`一样来引用加载Javascript脚本文件
 - Node常用API
 - 异步编程
	 - 回调函数
	 - Promise
	 - async
	 - generator
 - Express Web开发框架
 - Ecmascript 6
## 2.Hello World
1. 创建编写Javascript脚本文件
2. 打开终端，定位到脚本文件所属目录
3. 输入`node文件名`执行对应的文件

解析执行JavaScript
读写文件
http

# 3. Node中的JavaScript

 - EcmaScript
	 - 没有 DOM、BOM
 - 核心模块
 - 第三方模块
 - 用户自定义模块

## 3.1 核心模块
	Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中。例如文件操作的`fs`核心模块，http服务器构建的`http`模块，`path`路径扣件模块、`os`操作系统信息模块...

	以后只要说这个模块是一个核心模块，你就要马上想到如果想要使用它，就必须使用：
    `var hs = require('fs')` 
    `var http = require('http')` 

## 3.2 用户自定义模块

 - require
 - exports

# 4. Web服务器开发

## 4.1 ip地址和端口号

 - ip地址用来定位计算机
 - 端口号用来定位具体的应用程序
 - 一切需要联网通信的软件才会占用一个端口号
 - 端口号的范围从 0 ~ 65536 之间
 - 在计算机中有一些默认端口号，最好不要去使用
	 - 例如 http 服务的 80
 - 我们在开发过程中使用一些简单好记的就可以了，例如3000，5000，8000等没什么特殊含义
 
 os在线工具
 [os在线工具](https://tool.oschina.net/)

总结：
 - 代码风格
	 - 无分号
		 - `(`
		 - `[`
		 - `
		 - 最好前面补分号，避免一些问题
		 - 《编写可维护的 JavaScript》
		 - 不仅是功能，还要写得漂亮
 
 - 服务端渲染和客户端渲染的区别
	 - 客户端渲染不利于 SEO 搜索引擎优化
	 - 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
	 - 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的
	 - 而是两者结合来做的
	 - 例如商品列表就采用的是服务端渲染，目的是为了 SEO 搜索引擎优化
	 - 而它的商品评论列表为了用户体验，而且也不需要 SEO优化，所以不采用客户端渲染

# 5.补充（each和forEach）
遍历 JQuery 元素

    $.each(['abc', 'd', 'edg'].function(index,item){
        console.log(item)
    })
伪数组是对象
对象的原型链中没有 forEach
对象的原型链是 Object.prototype

- jQuery 的 each 和 原生的 JavaScript 方法 forEach
	- forEach 是 EcmaScript 5 提供的
		- 不兼容 IE 8
	- jQuery 的 each 由 jQuery 这个第三方库提供
		- jQuery 2 以下的版本是兼容 IE 8 的
		- 它的 each 方法主要用来遍历 jQuery 实例对象（伪数组）
		- 同时它也可以作为低版本浏览器中的 forEach 替代品
		- jQuery 的实例对象不能使用 forEach 方法，如果想要使用必须转为数组才可以使用
		- `[].slice.call(jQuery实例对象)`

		```javascript
		Array.prototype.mySlice = function() {
			var start = 0
			var end = this.length
			if (arguments.length === 1){
				start = arguments[0]
			} else if (arguments.length === 2){
				start = arguments[0]
				end = arguments[1]
			}
			var tmp = []
			for (var i = start; i < end; i++) {
				tmp.push(this[i])
			}
			return tmp
		}

		var fakeArr = {
		0: 'abc',
		1: 'efg',
		2: 'haha',
		length: 3
		}
		// 所以就可以得到真正的数组了
		[].mySlice.call(fakeArr)
		```

# 6.Node 中的模块系统
使用 Node 编写应用程序主要就是在使用：
 - EcmaScript 语言
	 - 和浏览器不一样，在 Node 中没有 BOM、DOM
 - 核心模块
	 - 文件操作的 fs
	 -  http 服务的 http
	 -  url 路径操作模块
	 -  path 路径处理模块
	 -  os 操作系统信息
 - 第三方模块
	 - art-template
	 - 必须通过 npm 来下载才能使用
 - 咱们自己写的模块
	 - 自己创建的文件 

## 6.1 什么是模块化
		- 文件作用域
		- 通信规则
			- 加载 require
			- 导出
	
## 6.2 CommonJS模块规范
	- 在 Node 中的  JavaScript 还有一个很重要的概念： 模块系统。
		- 模块作用域
		- 使用 require 方法用来加载模块
		- 使用 exports 接口对象用来导出模块中的成员
### 6.2.1 加载`require`
		语法：
		    var 自定义变量名称 = require('模块')
		两个作用：
			- 执行被加载模块中的代码
			- 得到被加载模块中的`exports`导出接口对象
### 6.2.2 导出`exports`
		- Node 中是模块作用域，默认文件中的所有的成员只在当前文件模块有效
		- 对于希望可以被其它模块访问的成员，我们就需要把这些公开的成员都挂载到`exports`接口对象中就可以了
		- 导出多个成员（必须在对象中）
					exports.a = 123
				    exports.b = 'hello'
				    exports.c = function () {
						console.log('ccc')
					}
					exports.d = {
						foo: 'bar'
					}
		
		- 导出单个成员（拿到的就是：函数、字符串）
		`module.exports = 'hello'`
		以下情况会覆盖：
	    module.exports = 'hello'
	    		// 以这个为准，后者会覆盖前者
	    		module.exports = function(x, y){
	    			return  x + y
	    		}
	    也可以这样来导出多个成员：
		module.exports  = {
				str:  'abc',
				add:  function(x,  y) {
					return  x  +  y
				}
			}
### 6.2.3 原理解析
	exports 是 `module.exports`的一个引用：
	    
	       console.log(exports === module.exports)  //true
	    
	    	export.foo = 'bar'
	    	// 等价于
	    	module.exports.foo = 'bar'

			一旦出现给 exports 赋值，那么 exports 就不再等于 module.exports 了
			如 export = {}
			此时 module.exports = {
				foo: 'bar'
			}
			而 exports = {} 
### 6.2.4 exports 和 module.exports 的区别
		- 每个模块中都有一个 module 对象
		- module 对象中有一个 exports 对象
		- 我们可以把需要导出的成员都挂载到 module.exports 接口对象中
		- 也就是： `module.exports.xxx = xxx` 的方式
		- 但是每次都  `module.exports.xxx = xxx` 很麻烦，点儿太多了
		- 所以 Node 为了方便，同时在每一个模块中都提供了一个成员叫： `exports`
		- `exports === module.exports` 结果为 true
		- 所以对于：`module.exports.xxx = xxx` 的方式，完全可以： `exports.xxx === xxx`
		- 不要使用 `exports === xxx` 不管用
		- 因为每个模块最终向外 `return` 的是 `module.exports`
		- 但是有一种赋值方式比较特殊：`exports = module.exports` 这个用来重新建立引用关系的
		- 之所以让大家明白这个道理，是希望可以灵活地去用它
	
### 6.2.5 require 方法加载规则
		- 核心模块
			- 模块名
		- 第三方模块
			- 模块名
		- 用户自己写的
			- 路径
	
		- 优先从缓存加载
		- 判断模块标识
			- 核心模块
			- 第三方模块
			- 自己写的模块 

相关加载规则：
	**路径形式的模块**:
			./ 当前目录，不可省略
			../ 上一级目录，不可省略
			/xxx 几乎不用
			d:/a/foo.js 几乎不用，绝对路径
	   首位的 / 在这里表示的是当前文件模块所属磁盘根路径
		.js 后缀名可以省

   **核心模块**的本质也是文件，核心模块文件已经被编译到了二进制文件中了，我们只需要按照名字来加载就可以了
			require('fs')
			require('http')  

  **第三方模块**
			凡是第三方模块都必须通过 `npm` 来下载
			使用的时候就可以通过 `requrie('包名') `的方式来进行加载才可以使用	
			不可能有任何一个第三方包和核心模块的名字是一样的
			既不是核心模块，也不是路径形式的模块
			先找到当前文件所处目录的 node_modules 目录
				node_modules/art-template
				node_modules/art-template/package.json 文件
				node_modules/art-template/package.json 文件中的 main 属性
				main 属性中就记录了 art-template 的入口模块
				然后加载使用这个第三方包
				实际上最终加载的还是文件

如果 package.json 文件不存在或者 main 指定的入口模块也没有，则 node 会自动找该目录下的 index.js
也就是说 index.js 会作为一个默认备选项，如果以上所有任何一个条件都不成立
则会进入上一级目录中的 node_modules 目录查找
如果上一级还没有，则继续往上上一级查找。。。
直到当前磁盘根目录还不到，最后就会报错`can not find module  xxx`

注意：我们一个项目有且只有一个 node_modules，放在项目根目录中
这样的话项目中所有的子目录都可以找到并使用第三方包

不会出现有多个 node_modules

**模块查找机制**
		优先从缓存加载
		然后核心模块
		最后是第三方模块（如 art-template）
			node_modules/art-template
			node_modules/art-template/package.json 文件
			如果没有就往上一级查找... 

## 6.3  npm
- node package manager
### 6.3.1 npm网站
`npmjs.com`
### 6.3.2 npm 命令行工具
npm 的第二层含义就是一个命令行工具，只要你安装了 node 就已经安装了 npm
npm 也有版本这个概念
可以通过在命令行输入：
```shell
npm --version 	#查看当前版本
``` 
升级 npm : 
```shell
npm install --global npm
```
### 6.3.3 常用命令
- npm init
	- npm init -y 可以跳过向导，快速生成
- npm install
	- 一次性把dependencies 选项中的依赖项全部安装
- npm install 包名
	- 只下载
	- npm i 包名
- npm install --save 包名
	- 下载并且保存依赖项（保存到 package.json文件中的dependencies选项）
	- npm i -S 包名
- npm uninstall 包名
	- 只删除，如果有依赖项会依然保存
	- npm un 包名
- npm uninstall --save 包名
	- 删除的同时也会把依赖信息也去除
	- npm un -S 包名
- npm help
	- 查看使用帮助
- npm 命令 --help
	- 查看指定命令的使用帮助
	- 例如忘记了 uninstall 命令的简写了，这个时候，可以输入`npm uninstall --help`不查看使用帮助
### 6.3.4 解决npm被墙问题
npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题
[中国 NPM 镜像](https://npmmirror.com/)  淘宝的开发团队把 npm 在国内做了一个备份
安装淘宝的 cnpm:
```shell
npm install --global cnpm
```
接下来你安装包的时候把之前的`npm` 替换成 `cnpm`
举个例子：
```shell
# 这里还是走国外的 npm 服务器，速度比较慢
npm install jquery

# 使用 cnpm 就会通过淘宝的服务器来下载 jquery 
cnpm install jquery
```

如果不想安装`cnpm`又想使用淘宝的服务器不下载：
```shell
npm install jquery --registry=https://registry.npmmirror.com
```

但是每一次手动这样加参数很麻烦，所以我们可以把这个选项加入配置文件中：
```shell
npm config set registry https://registry.npmmirror.com

# 查看 npm 配置信息
npm config list
```

只要经过了上面命令的配置，则以后所有的 `npm install` 都会默认通过淘宝的服务器来下载。


## 6.4 package.json
我们建议每一个项目都要有一个 `package.json` 文件（包描述文件，就像产品的说明书一样）
这个文件可以通过`npm init` 的方式来自动初始化出来		
```javascript
D:\我的坚果云\我的笔记本\Node.js\03\code\05-npm>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (05-npm) npm-demo
version: (1.0.0) 1.0.0
description: 鹿先森
entry point: (index.js) main.js
test command:
git repository:
keywords:
author: Mr_lululu
license: (ISC)
About to write to D:\我的坚果云\我的笔记本\Node.js\03\code\05-npm\package.json:

{
  "name": "npm-demo",
  "version": "1.0.0",
  "description": "鹿先森",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mr_lululu",
  "license": "ISC"
}
```
对于咱们目前来讲，最有用的是那个`dependencies` 选项，可以用来帮我们保存第三方包的依赖信息
如果你的`node_modules`删除了也不用担心，我们只需要：`npm install`就会自动把`package.json`中的`dependencies`中所有的依赖都下载回来。
	- 建议每个项目的根目录下都有一个 `package.json` 文件
	- 建议执行`npm install 包名` 的时候都加上 `--save` 这个选项，目的是用来保存依赖项信息

#### 6.4.1 package.json 和 package-lock.json
npm 5 以前是不会有 `package-lock.json`这个文件的
npm 5 以后才加入了这个文件
当你安装包的时候，npm都会生成或者更新`package-lock.json`这个文件

 - npm 5 以后的版本安装包不需要加`--save`参数，它会自动保存依赖信息
 - 当你安装包的时候，会自动创建或者是更新`paackage-lock.json`这个文件
 - `package-lock.json`这个文件会保存`node_modules`中所有包的信息（版本、下载地址）
	 - 这样的话重新`npm install`的时候速度就可以提升
 - 从文件来看，有一个`lock`称之为锁
	 - 这个`lock`是用来锁定版本的
	 - 如果项目依赖了`1.1.1`版本
	 - 如果你重新 install 其实会下载最新版本，而不是 1.1.1
	 - 我们的目的就是希望可以锁住 1.1.1 这个版本
	 - 所以这个`package-lock.json`这个文件的另一个作用就是锁定版本号，防止自动升级新版

## 6.5 文件操作路径和模块路径
- 在文件操作的相对路径中
		-  ./data/a.txt  相对于当前目录
		-   data/a.txt 	 相对于当前目录
		-   /data/a.txt   相对于文件模块所处磁盘根目录
- 在模块加载中，相对路径中的  ./  不能省略
		-  require('data/foo.js') -> 报错：Error: Cannot find module 'data/foo.js'
		-  require('./data/foo.js') -> 正确

# 7.Express
## 7.1 起步

### 7.1.1 安装
`npm install --save express`

### 7.1.2 hello world
```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```
### 7.1.3 基本路由
路由器
	- 请求方法
	- 请求路径
	- 请求处理函数
get:
```javascript
// 当你以 GET 方法请求 / 的时候，执行对应的处理函数
app.get('/',(req, res) => {
	res.send('hello world')
})
```
post:
```javascript
// 当你以 POST 方法请求 / 的时候，执行对应的处理函数
app.post('post', (req, res) => {
	res.send('Got a POST request')
})
```
### 7.1.4 静态服务
```javascript
// /public资源
app.use(express.static('public'))

// /files资源
app.use(express.static('files'))

// /public/xxx
app.use('/public',express.static('public'))

// /static/xxx
app.use('static',)
```
## 7.2 在Express中配置使用`art-template`模板引擎
- [art-template-Github仓库](https://github.com/aui/art-template)
- [art-template官方文档](https://aui.github.io/art-template)

安装:
```shell
npm install --save art-template  
npm install --save express-art-template
```
配置：
```javascript
app.engine('html',require('express-art-template'))
```
使用：
```javascript
app.get('/',function(req, res) {
	// express 默认会去项目中的 views 目录寻找 index.html
	res.render('index.html',{
		title: 'hello world'
	})
}
```
如果希望修改默认的 `views`视图渲染存储目录，可以：
```javascript
// 注意：第一个参数 views 千万不能写错
app.set('views',目录路径)
```
## 7.3 在 Express 获取表单 GET 请求参数 
Express 内置了一个	API ，可以直接通过 `req.query`来获取
```javascript
req.query
```
## 7.4 在 Express 获取表单 POST 请求体数据
在 Express 中没有内置 获取表单 POST 请求体的 API，这里我们需要使用一个第三方包：`body-parser`。
安装：
```shell
npm install --save body-parser
```
配置：
```javascript
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性:body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```
## 7.5 修改完代码自动重启
这里可以使用一个第三方命名行工具：`nodemon` 来帮我们解决频繁修改代码重启服务器问题
`nodemon` 是一个基于 Node.js 开发的一个第三方命令行工具，我们使用的时候需要独立安装：
```shell
# 在任意目录执行该命令都可以
# 也就是说，所有需要 --global 来安装的包都可以在任意目录执行
npm install --global nodemon
```
安装完毕之后，使用：
```shell
node app.js
# 使用 nodemon
nodemon app.js
```
只要是通过 `nodemon app.js` 启动的服务，它会监视你的文件变化，当文件发生变化的时候，自动帮你重启服务器。

## 7.6 Express - crud
### 7.6.1 路由设计
|  请求方法 |  请求路径  |  get 参数 | post参数 |  操作  |
| :--: | :--: | :--: | :--: | :--: |
| GET | /menus|	 	|	 	| 渲染首页|
| GET | /menus/new| 	| 	|	渲染添加学生页面	|
| POST| /menus/new| 	| name、age、gender、hobbies	|	处理添加学生请求	|
| GET| /menus/edit|  id	| 	|	渲染编辑页面	|
| POST| /menus/edit| 	| id、name、age、gender、hobbies	|	处理编辑请求	|
| GET| /menus/delete|  id	| 	|	处理删除请求	|

### 7.6.2 回调函数 
如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
回调函数的目的：就是获取异步操作的结果
```javascript
function fn(callback) {
	setTimeout(function () {
		var data = 'hello'
		callback(data)
	}, 1000)
}

fn(function (data) {
	console.log(data)
}
```

### 7.6.3 提取路由模块
router.js

    /**
    * router.js 路由模块 
    * 职责:
    * 处理路由
    * 根据不同的请求方法 + 请求路径设置具体的请求函数
    * 模块职责要单一,不要乱写
    * 我们划分模块的目的就是为了增强项目代码的可维护性
    * 提升开发效率
    */
    var  express =  require('express')
	//1.创建一个路由容器
	var router = express.Router()
	
	//2.把路由都挂载到 router 路由容器中
	router.get('/menus', function(req, res){
	})

	router.get('/menus/new', function(req, res){
	})

	router.post('/menus/new', function(req, res){
	})

	router.get('/menus/edit',  function (req,  res) {
	})

	router.post('/menus/edit',  function (req,  res) {
	})

	router.get('/menus/delete',  function (req,  res) {
	})
	
	3.把 router 导出
	module.exports  =  router

### 7.6.4 设计操作数据的API文件模块

    //获取所有菜单列表
    exports.findAll = function(){
    }

	//根据 id 查询信息
	exports.findById = function(){
	}

	//添加保存菜单
	exports.save = function(){
	}

	//更新菜单
	exports.update = function(){
	}

	//删除菜单
	exports.deleteById = function(){
	}

### 7.6.5 编写步骤

 - 处理模板
 - 配置开放静态资源
 - 配置模板引擎
 - 简单路由：/menus 渲染静态页面
 - 路由设计
 - 提取路由模块
 - 由于接下来一些列的业务操作都需要文件数据，所以我们需要封装 `menu.js`
 - 先写好 `menu.js` 文件结构 
	 - 查询所有菜单列表的 API （findAll)
	 - findById
	 - save
	 - update
	 - deleteById
 - 实现具体功能
	 - 通过路由收到请求
	 - 接收请求中数据（get、post） 
		 - req.query(get)
		 - req.body(post)
	 - 调用数据操作 API 处理数据
	 - 根据操作结果给客户端发送响应
 - 业务功能顺序
	 - 列表
	 - 添加
	 - 删除
	 - 编辑

## 7.7 在Express中配置使用`express-session`插件
安装：
`npm install express-session`

配置：
```javascript
app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造 
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,//无论你是否使用 Session，我都默认直接给你分配一把钥匙
    // cookie: { secure: true }
  }))
```

使用：
```javascript
// 添加 session 数据
req.session.foo = 'bar'

// 获取 session 数据
req.sessionn.foo 
```

提示：默认 Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会把 Session 持久化存储

# 8. 异步编程
## 8.1 回调函数
不成立的情况：
```javascript
function  add(x,  y) {
	console.log(1)
	setTimeout(function() {
	console.log(2);
	var  ret  =  x  +  y
	return  ret
	},  1000)
	console.log(3)
	// 到这里执行就结束了,不会等待前面原定时器，直接就返回了默认值 undefined
	}
console.log(add(10,  20)) // => undefined
```
不成立的情况：
```javascript
function  add(x,  y) {
	var ret
	console.log(1)
	setTimeout(function() {
	console.log(2);
	ret  =  x  +  y
	},  1000)
	console.log(3)
	return  ret
	}
console.log(add(10,  20)) // => undefined
```

回调函数：
```javascript
function  add(x,  y,  callback) {
// callback 就是回调函数
// var x = 10
// var y = 20
// var callback = function (ret) { console.log(ret)}
	setTimeout(function() {
	var  ret  =  x  +  y
	callback(ret)
	},  1000)
}
add(10,  20,  function(ret) {
console.log(ret);
})
```
## 8.2 异步操作
注意： 凡是需要得到一个函数内部异步操作（需要等待）的结果
setTimeout
readFile
writeFile
ajax
这种情况必须通过： 回调函数

# 9. MongoDB
## 9.1 关系型数据库和非关系型数据库
表就是关系
或者说表与表之间存在关系
- 所有的关系型数据库都需要通过`sql`语言来操作
- 所有的关系型数据库在操作之前都需要设计表结构
- 而且数据表还支持约束
	- 唯一的
	- 主键
	- 默认值
	- 非空
- 非关系型数据库非常的灵活
- 有的非关系型数据库就是 key-value 对儿
- 但是 MongoDB 是长得最像关系型数据库的非关系型数据库
	- 数据库 -> 数据库
	- 数据表 -> 集合（数组）
	- 表记录 -> （文档对象）
- MongoDB不需要设计表结构
- 也就是说你可以任意的往里面在数据，没有结构性这么一说

## 9.2 启动和关闭数据库
启动：
```shell
# mongodb 默认使用执行 mongodb 命令所处盘符根目录下的 /data/db 作为自己的数据存储目录
# 所以在第一次执行该命令之前先自己手动新建一个 /data/db
mongod
```
如果想要修改默认的数据存储目录，可以：`mongod --dbpath=数据存储目录路径`

## 9.3 连接和退出数据库
连接：
```shell
# 该命令默认连接本机的 MongoDB 服务 ，需要另起一个 cmd
mongo
```
退出：
在连接状态输入 `exit` 退出连接

## 9.4 基本命令
- `show dbs`
	- 查看显示所有数据库
- `db`
	- 查看当前操作的数据库
- `use 数据库名称`
	- 切换到指定的数据（如果没有会新建）
- `show collections`
	- 展示当前数据库里面的表
- `db.表名.find()`
	- 查看表中数据
- 插入数据

## 9.5 在 Node 中如何操作 MongoDB 数据
### 9.5.1 使用官方的 `mongodb` 包来操作
https://github.com/mongodb/node-mongodb-native
### 9.5.2 使用第三方 mongoose 来操作 MongoDB 数据库
第三方包：`mongoose`

## 9.6 MongoDB 数据库的基本概念
- 可以有多个数据库
- 一个数据库中可以有多个集合（表）
- 一个集合中可以有多个文档（表记录）
- 文档结构很灵活，没有任何限制
- MongoDB非常灵活，不需要像 MySQL 一样先创建数据库、表、设计表结构
	- 在这里只需要：当你需要插入数据的时候，只需要指定往哪个数据库的哪个集合操作就可以了
	- 一切都由 MongoDB 来帮你自动完成建库建表这件事儿

## 9.7 MongoDB的一些操作
### 9.7.1 连接数据库，构建数据库模型
```javascript
var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 1.连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动创建出来

mongoose.connect('mongodb://localhost/test')

// 2.设计集合结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
})

// 3.将文档结构发布为模型
//      mongoose.model 方法就是用来将一个架构发布为 model
//      第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//                  mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//                  例如这里的 User 最终会变为 users 集合名称
//      第二个参数：架构 Schema
// 
//      返回值：模型构造函数
var User = mongoose.model('User', userSchema)
```

### 9.7.2 增加数据
```javascript

var admin = new User({
    
    username: 'admin',
    password: '123456',
    email: 'admin@admin.com'

})
admin.save((err,ret) => {
    if (err) {
        console.log('保存失败')
    } else {
        console.log('保存成功')
        console.log(ret)
    }
})

```

### 9.7.3 按条件查询所有（返回数组）
```javascript
// 按条件查询所有（返回数组）
User.find({
    username: 'luxiansen'
}, (err, ret) => {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret)
    }
})
```

### 9.7.4 按条件查询单个（返回对象）
```javascript
// 按条件查询单个（返回对象）
User.findOne({
    username: 'luxiansen'
}, (err, ret) => {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret)
    }
})
```

### 9.7.5 删除数据
```javascript
// 删除单个数据
User.deleteOne({
    username: 'admin'   
}, (err, ret) => {
    if(err) {
        console.log('删除失败')
    } else {
        console.log('删除成功')
    }
})
```
根据条件删除一个
```javascript
Model.findOneAndRemove(conditions,[options],[callback])
```
根据id删除一个
```javascript
Model.findByIdAndRemove(id,[options],[callback])
```

### 9.7.6 更新数据
```javascript
// 通过id更新数据
User.findByIdAndUpdate('61ea1405f1f22baa11240017',{
    username: 'admin'   
}, (err, ret) => {
    if(err) {
        console.log('删除失败')
    } else {
        console.log('删除成功')
    }
})
```

# 10.MySQL
## 10.1 Mysql的连接
```javascript
var mysql = require('mysql');

// 1.创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
// 2.连接数据库
connection.connect();
 
// 3.执行数据操作
connection.query('SELECT * FROM menus', function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// connection.query('INSERT INTO  menus VALUES(NULL, "酸辣土豆丝", "大份", "是", 7)', function (error, results, fields) {
//   if (error) throw error
//   console.log(results)
// })
 
// 关闭连接
connection.end();


```

## 10.2 SQL语句
### 10.2.1 增加
```javascript
	var addMenu = 'INSERT INTO menus VALUES(?,?,?,?,?)'
    var params = [menuObj.id, menuObj.name, menuObj.weight, menuObj.isHot, menuObj.price]
    
    connection.query(addMenu, params, (error, result) => {
        if (error) {
            console.log(error)
            callback(error)
        }
        callback(null, result)
    })
```

### 10.2.2 删除
```javascript
	var deleteMenu = 'DELETE FROM menus WHERE id = ?'
    var params = [id]

    connection.query(deleteMenu, params, (error,result) => {
        if (error) {
            console.log(error)
            callback(error)
        }
        callback(null, result)
    })
```

### 10.2.3 修改
```javascript
	var updateMenu = 'UPDATE menus SET name = ?,weight = ?,isHot = ?,price = ? WHERE id = ?'
    var params = [menuObj.name,  menuObj.weight, menuObj.isHot, menuObj.price, menuObj.id]
    
    connection.query(updateMenu, params, (erro, result) => {
        if (error) {
            console.log(error)
            callback(error)
        }
        callback(null, result)
    })
```

### 10.2.4 查询
```javascript
	var queryAll = 'SELECT * FROM menus'
    connection.query(queryAll, (error, result) => {
        if (error) {
            console.log(error)
            return callback(error)
        }
        callback(null,result)
    })
```

# 11.异步编程（回调地狱）
## 11.1 Promise
无法保证下面代码的执行顺序
```javascript

var fs = require('fs')

fs.readFile('./data/a.txt', 'utf-8', (err,data) => {
    if (err) {
        // return console.log('读取失败')

        // 抛出异常
        //      1.阻止程序的执行
        //      2.把错误消息打印到控制台
        throw err
    }
    console.log(data);
})

fs.readFile('./data/b.txt', 'utf-8', (err,data) => {
    if (err) {
        // return console.log('读取失败')

        // 抛出异常
        //      1.阻止程序的执行
        //      2.把错误消息打印到控制台
        throw err
    }
    console.log(data);
})

fs.readFile('./data/c.txt', 'utf-8', (err,data) => {
    if (err) {
        // return console.log('读取失败')

        // 抛出异常
        //      1.阻止程序的执行
        //      2.把错误消息打印到控制台
        throw err
    }
    console.log(data);
})```

可以通过嵌套的方式来保证顺序
```javascript
var fs = require('fs')

fs.readFile('./data/a.txt', 'utf-8', (err,data) => {
    if (err) {
        // return console.log('读取失败')

        // 抛出异常
        //      1.阻止程序的执行
        //      2.把错误消息打印到控制台
        throw err
    }
    console.log(data);
    fs.readFile('./data/b.txt', 'utf-8', (err,data) => {
        if (err) {
            // return console.log('读取失败')
    
            // 抛出异常
            //      1.阻止程序的执行
            //      2.把错误消息打印到控制台
            throw err
        }
        console.log(data);
        fs.readFile('./data/c.txt', 'utf-8', (err,data) => {
            if (err) {
                // return console.log('读取失败')
        
                // 抛出异常
                //      1.阻止程序的执行
                //      2.把错误消息打印到控制台
                throw err
            }
            console.log(data);
        })
    })
    
})

```

为了解决以上编码方式带来的问题（回调地狱嵌套），所以在EcmaScript6中新增了一个API:`Promise`
- Promise 的英文就是承诺、保证的意思
Promise 语法
```javascript
var fs = require('fs')

// 在 EcmaScript 6 中新增了一个 API Promise
// Promise 是一个构造函数

console.log(1)

// 创建 Promise 容器
// 1.给别人一个承诺
//      Promise 容器一旦创建，就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {
    console.log(2)
    fs.readFile('./data/a.txt', 'utf-8', function(err,data) {
        if (err) {
            // console.log(err)
            // 容器中的任务成功了
            // 把容器的 Pending 状态变为 Rejected

            // 调用 reject 就相当于调用了 then 方法的第二个参数函数
            reject(err)
        } else {
            console.log(3)
            // console.log(data)
            // 容器中的任务失败了
            // 把容器的 Pending 状态改为成功 Resolved
            // 也就是说这里调用的 resolve 方法实际上就是then 方法传递的那个 function
            resolve(data)
        }
    })
})

// p1 就是那个承诺
// 当 p1 成功了  然后(then) 做指定的操作
// then 方法接收的 function 就是容器中的 resolve 函数
p1.
    then(function (data) {//第一个参数函数
        console.log(111)
        console.log(data)
    }, function (err) {// 第二个参数函数
        console.log('读取文件失败了',err)
    })
```

封装 Promise 版本的 `readFile`
```jacascript
var fs =  require('fs')

function pReadFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf-8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

pReadFile('./data/a.txt')
    .then(function (data) {
        console.log(data)
        return pReadFile('./data/b.txt')
    })
    .then(function (data) {
        console.log(data)
        return pReadFile('./data/c.txt')
    })
    .then(function (data) {
        console.log(data)
    })
```

# 12.path路径操作模块
- path.basename
	- 获取一个路径的文件名（默认包含扩展名）
- path.dirname
	- 获取一个路径中的目录部分
- path.extname
	- 获取一个路径中的扩展名部分
- path.parse
	- 把一个路径转为对象
		- root 根路径
		- dir 目录
		- base 包含后缀名的文件名
		- ext  后缀名
		- name 不包含后缀名的文件名
- path.join
	- 当你需要进行路径拼接的时候，推荐使用这个方法
- path.isAbsolute 判断一个路径是否是绝对路径

# 13.Node中的其它成员
在每个模块中，除了`require`、`exports`等模块相关 API 之外，还有两个特殊的成员：
- `__dirname` **动态获取**可以用来获取当前文件模块所属目录的绝对路径
- `__filename` **动态获取**可以用来获取当前文件的绝对路径
- `__dirname` 和 `__filename`是不受执行 node 命令所属路径影响的

在文件操作中，使用相对路径是不可靠的，因为在 Node 中文件操作的路径被设计为相对于执行 node 命令所处的路径（不是 bug，人家这样设计是有使用场景的）。
所以为了解决这个问题，很简单，只需要把相对路径变为绝对路径就可以了

但是绝对路径也会有问题，当在别人的电脑上执行的时候，别人的电脑里并没有你电脑的绝对路径

所以，我们就可以使用 `__dirname`或者 `__filename`来帮我们来解决这个问题了，这两个可以动态获取当前的绝对路径
如： 
	原来：fs.readFile('C:/Users/lpz/Deskop/nodejs/06/code/foo/a.txt','utf8', function(err,data){})
	现在：fs.readFile(__dirname + '/a.txt', 'utf-8', function(err, data){})

在拼接路径的过程中，为了避免手动拼接带来的一些低级错误，所以推荐多使用：`path.join()`来辅助拼接。
	如：fs.readFile(path.join(__dirname,'./a.txt'), 'utf8',function(){})

所以为了尽量避免刚才所描述这个问题，大家以后在文件操作中使用的相对路径都统一转换为**动态的绝对路径** 

# 14.Node 综合 Web 案例
1.目录结构
.
	--app.js			项目的入口文件
	--controllers
	--models			存储使用 mongoose 设计的数据模型
	--node_modules		第三方包
	--package.json 		包描述文件
	--package-lock.json 第三方包版本锁定文件（npm5以后才有）
	--public			公共的静态资源
	--README.md			项目说明文档
	--routes			如果业务比较多，代码量大，最好把路由按照业务的分类存储到 routes 目录中
	--router.js			简单一点把所有的路由都放到这个文件
	--views				存储视图目录 

2.模板页
- art-template 子模板	include
- art-template 模板继承 extend

3.路由设计
| 路径 | 方法 | get参数 | post参数 | 是否需要登陆 | 备注 |
| /	   | GET|          |			| 			| 渲染首页|
| /register| GET |     |			|			| 渲染注册页面|
| /register| POST|		|email、nickname、password| |处理注册请求|
| /login	|GET |		|			|			| 渲染登录页面 |
| /login	|POST|		|email、password|		| 处理登录页面请求 |
| /logout 	|GET |		|			|			| 处理退出请求|

4.书写步骤
- 创建目录结构
- 整合静态页-模板页
	- include
	- block
	- extent
- 设计用户登陆、退出、注册的路由
- 用户注册
	- 先处理好客户端的内容（表单控件的 name、收集表单数据、发起请求）
	- 服务端
		- 获取客户端表单请求数据
		- 操作数据库
		- 如果有错，发送500告诉客户端服务器错了
		- 其它的根据你的业务发送不同的响应数据
	- 用户登陆
	- 用户退出