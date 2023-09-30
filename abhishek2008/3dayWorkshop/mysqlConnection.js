var mysql = require('mysql')
var dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'mydb'
})
dbconn.connect(function(err){
    if(err){
        console.log('connectin failed')
    }
    else{
        console.log('Connection successful!')
    }
})

var record = {id:10,pass:'pass123'};
dbconn.query('INSERT INTO info SET ?',record,function(err,res){
    if(err) throw err;
    else
    console.log('Record added successfully')
});

