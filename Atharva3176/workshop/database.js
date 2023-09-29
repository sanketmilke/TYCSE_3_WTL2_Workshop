var mysql=require('mysql')
mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Atharva21161',
    database:'login'
})

dbconn.connect(function(err){
    if(err)
    {
        console.log('database connection failed')
    }

    else{
        console.log('connection successful')
    }
})