// app：express对象
module.exports = function (app, connection) {
    app.get('/register', function (req, res) {
        connection.query('SELECT * from user', function (error, results, fields) {
            if (error) throw error;
            res.send(results)
        });
    })
}