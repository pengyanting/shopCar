module.exports = function (app, mysql) {
    var bodyParser = require('body-parser');
    // 创建 application/x-www-form-urlencoded 编码解析
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.get('/login', function (req, res) {
        res.render("login");
    })
    app.post('/login',urlencodedParser, function (req, res) {
        var response = {
            username: req.body.userName,
            password: req.body.password
        }
        mysql.query('select * from user where username="' + response.username + '"', function (error, results, fields) {
            if (error) throw error
            var resData = {}
            results=JSON.parse(JSON.stringify(results).replace('RowDataPacket',''))
            if (JSON.stringify(results) == '[]') {
                resData = { message: '用户名不存在', code: 1 }
            } else {
                if (results[0].password == response.password) {
                     resData = { message: '登录成功', code: 0 }
                     res.cookie('id', results[0].id, { maxAge: 5000000, httpOnly: true })
                }else{
                     resData = { message: '密码不正确', code: 2 }
                }
            }
            res.status(200).jsonp(resData);
        })
    })
}