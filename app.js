var express = require("express");
var ejs = require("ejs");
var path = require("path");
var app = express();
var mysql = require('mysql');
var cookieParser = require('cookie-parser')
app.set("view engine", "html");
app.engine(".html", ejs.__express);
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

//入口
app.get("/", function (req, res) {
    if (req.cookies.rememberme==undefined) {
         res.redirect('login');
    }else{
         res.render("index");
    }
});
var mysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

mysql.connect();
//引入路由
var routers = require('./routes/index.js');
routers(app, mysql)
app.listen(8001); 