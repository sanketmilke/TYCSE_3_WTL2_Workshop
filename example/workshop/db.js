const mysql = require('mysql');

const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Atharva21161',
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

/*var record={username:'Atharva21161',password:21161}
dbconn.query('insert into logintable SET ?',record,function(err,res){
    if(err)
    {
        console.log(err)
    }

    else{
        console.log('record added')
    }
})*/

//Select all customers and return the result object:
/*dbconn.query("SELECT * FROM logintable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    //console.log('field length:',fie)
    result.forEach( (row) => {
        console.log(`${row.name} : ${row.mail}`);
      });
     
  });*/

//var record={username:'Atharva21161',password:21161}
/*dbconn.query('update logintable set username="AS3176" where password=7713',function(err,res){
    if(err)
    {
        console.log(err)
    }

    else{
        console.log('record updated')
    }
})*/

dbconn.query('delete from logintable where password=21161',function(err,res){
    if(err)
    {
        console.log(err)
    }

    else{
        console.log('record deleted')
    }
})




