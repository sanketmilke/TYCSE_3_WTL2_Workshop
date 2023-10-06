var mysql= require('mysql')
var dbconn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'mydb'
})
// dbconn.connect(function(err){
//     if(err){
//         console.log("Database connection failed");
//     }

//     else{
//         console.log("Connection Successful");
//     }
// })

// Query to insert new data into mysql database
// var record= { name: 'Atharva', mail: 'atharva@gmail.com', pass: 'as3176' };

// dbconn.query('INSERT INTO users SET ?', record, function(err,res){
//   if(err) throw err;
//   else
//   console.log('record inserted successfully')

  
// });

//Query to delete a user from Database
// dbconn.connect(function(err) {
//  //   if (err) throw err;
//     var sql = "DELETE FROM users WHERE name = 'Atharva'";
//     dbconn.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });

//Query to update a user in database
dbconn.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE users SET mail = 'ak47@gmail.com' WHERE name = 'Akash'";
    dbconn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
});

  //Select all customers and return the result object:
//   dbconn.query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     //console.log('field length:',fie)
//     result.forEach( (row) => {
//         console.log(`${row.name} : ${row.mail}`);
//       });
     
//   });

