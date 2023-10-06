const mysql = require('mysql');

const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'login'
});

dbconn.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.message);
    } else {
        console.log('Connection successful');
        // You can perform database operations here.
    }
});

var record={username:'Akash3161',password:3161}
dbconn.query('insert into logintable SET ?',record,function(err,res){
    if(err)
    {
        console.log(err)
    }

    else{
        console.log('record added')
    }
})