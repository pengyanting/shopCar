//app:express实例对象 
module.exports = function ( app,connection) {
    require('./register')(app,connection);
};
module.exports = function ( app,connection) {
    require('./login')(app,connection);
};