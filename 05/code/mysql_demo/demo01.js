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

