module.exports = function (app, mysql) {
    var bodyParser = require('body-parser');
    // 创建 application/x-www-form-urlencoded 编码解析
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.get('/addGoods', function (req, res) {
        res.render('addGoods')
    })
    app.post('/addGoods', urlencodedParser, function (req, res) {
        var response = {
            goodName: req.body.goodName,
            goodPrice: req.body.goodPrice
        }
        var sql = 'insert into `goods`(`goodName`,`goodPrice`) values ("' + response.goodName + '","' + response.goodPrice + '")'
        mysql.query(sql, function (error, results, fields) {
            if (error) throw error
            results = JSON.parse(JSON.stringify(results).replace('OkPacket', ''));
            if (results.affectedRows == 1) {
                res.status(200).jsonp({
                    message: '添加成功',
                    code: 0,
                    results: {
                        goodName: req.body.goodName,
                        goodPrice: req.body.goodPrice,
                        id:results.insertId
                    }
                })
            }
        })
    })
}