const express=require("express");

var server=express();
var port=3000;

server.listen(port,()=>{
    console.log("Server Listening "+port);
})

//使用express中间件：express.static()
//向客服端公开一个静态资源目录
// server.use(express.static('./public'));

server.use(express.static('./build'));

