module.exports=function(app,connection){
    app.get('/login',function(req,res){
       res.send('登录成功')
    })
}