module.exports = function (app, mysql) {
    var bodyParser = require('body-parser');
    // 创建 application/x-www-form-urlencoded 编码解析
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.post('/addCart', urlencodedParser, function (req, res) {
        var uid = req.cookies.id;
        if (uid == undefined) {
            res.jsonp({
                message: '登录状态已过期',
                code: 1
            })
            return;
        }
        console.log(req.body.cid)
        mysql.query('select * from cart where cid="' + req.body.cid + '"', function (error, results, fields) {
            if (error) throw error
            results = JSON.parse(JSON.stringify(results).replace('RowDataPacket', ''));
            var cid = req.body.cid;
            var name = req.body.name;
            var price = req.body.price;
            console.log(results)
            if (JSON.stringify(results) == '[]') {//第一次加入购物车
                var sql = 'insert into `cart`(`uid`,`cid`,`name`,`price`,`quantity`,`status`) values ("' + uid + '","' + cid + '","' + name + '","' + price + '","1","no")';
            } else {
                var newQuantity=req.body.quantity
                var quantity =newQuantity?newQuantity: Number(results[0].quantity) + 1;
                console.log(quantity)
                console.log(results[0].id)
                var sql = 'UPDATE `cart` SET `quantity` = "' + quantity + '" WHERE `id` = ' + results[0].id
            }
            insert(res, sql)
        })
    })
    var insert = function (res, sql) {
        mysql.query(sql, function (error, results, fields) {
            if (error) throw error
            results = JSON.parse(JSON.stringify(results).replace('RowDataPacket', ''));
            if (results.affectedRows == 1) {
                res.status(200).jsonp({
                    message: '加入购物车成功',
                    code: 0
                })
            }
        })
    }

    app.get('/cartList', function (req, res) {
        var uid = req.cookies.id;
        if (uid == undefined) {
            res.redirect('login');
        } else {
            res.render('cardList');
        }
    })
    app.post('/cartList', function (req, res) {
          queryAll(req,res)
    })
    var queryAll = function (req, res) {
        mysql.query('select * from cart where uid = "' + req.cookies.id + '"', function (error, results, fields) {
            if (error) throw error
            results = JSON.parse(JSON.stringify(results).replace('RowDataPacket', ''));
            res.status(200).jsonp({
                message: 'success',
                code: 0,
                results: results
            })
        })
    }
    app.post('/delete', urlencodedParser, function (req, res) {
        mysql.query('DELETE FROM `cart` WHERE id=' + req.body.id, function (error, results, fields) {
            if (error) throw error
            results = JSON.parse(JSON.stringify(results).replace('RowDataPacket', ''));
            if (results.affectedRows == 1) {
                queryAll(req,res)
            }
        })
    })
}