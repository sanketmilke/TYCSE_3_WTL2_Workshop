var http = require('http')
http.createServer(function(req,res){
    res.write("<h1> Welcome From Node</h1>")
    res.end()
}).listen(8080);
console.log("Server Started")

