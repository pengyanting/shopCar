module.exports=function(app,mysql){
    app.get('/getGoods',function(req,res){
        mysql.query('select * from goods',function(error,results,fields){
            if(error) throw error
            results=JSON.parse(JSON.stringify(results).replace('RowDataPacket',''));
            res.status(200).jsonp({
                message:'success',
                code:0,
                results:results
            })
        })
    })
}