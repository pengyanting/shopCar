//app:express实例对象 
module.exports = function ( app,mysql) {
    require('./register')(app,mysql);
    require('./login')(app,mysql);
};