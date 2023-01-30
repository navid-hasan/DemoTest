var http=require('http');

var server=http.createServer(function (req,res){
    res.end("Navid hasan")
});

server.listen(5050);
console.log("Welcome to ");