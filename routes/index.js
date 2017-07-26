//app:express实例对象 
module.exports = function ( app,mysql) {
    require('./register')(app,mysql);
    require('./login')(app,mysql);
    require('./addGoods')(app,mysql);
    require('./getGoods')(app,mysql);
    require('./cart')(app,mysql);
};