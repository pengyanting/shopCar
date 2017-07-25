// app：express对象
module.exports = function (app, mysql) {
    var bodyParser = require('body-parser');
    // 创建 application/x-www-form-urlencoded 编码解析
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.get("/register", function (req, res) {
        res.render("register");
    });
    app.post('/register', urlencodedParser, function (req, res) {
        var response = {
            username: req.body.userName,
            password: req.body.password,
            phone: req.body.phone
        }
        isUserName(response, res)
    })
    const isUserName = function (response, res) {
        mysql.query('SELECT `id` from user where username="' + response.username + '"', function (error, results, fields) {
            if (error) throw error;
            if (JSON.stringify(results) == '[]') {
                isPhone(response, res)
            } else {
                res.status(200).jsonp({ message: '用户名已存在！', code: 1 });
                return;
            }
        });
    }
    const isPhone = function (response, res) {
        mysql.query('SELECT `id` from user where phone=' + response.phone, function (error, results, fields) {
            if (error) throw error;
            if (JSON.stringify(results) == '[]') {
                insert(response, res)
            } else {
                res.status(200).jsonp({ message: '手机号已被注册！', code: 2 });
            }
        });
    }
    const insert = function (response, res) {
        mysql.query('INSERT INTO `user`(`username`, `password`, `phone`) VALUES ("' + response.username + '","' + response.password + '","' + response.phone + '")', function (error, results, fields) {
            if (error) throw error;
            results.message = results.affectedRows == 1 ? 'success' : 'fail'
            res.status(200).jsonp({ message: '注册成功！', code: 0, id: results.insertId })
            return;
        });
    }
}