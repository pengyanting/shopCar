var express = require("express");
var ejs = require("ejs");
var path = require("path");
var app = express();
var mysql = require('mysql');
app.set("view engine", "html");
app.engine(".html", ejs.__express);
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render("register");
});
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();
var routers=require('./routes/index.js');
routers(app,connection)
app.listen(8000);