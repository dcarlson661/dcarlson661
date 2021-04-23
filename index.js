const express = require("express");
const socket = require("socket.io");
const app = express();

//starts the server

let server = app.listen(4000, function (){
    console.log("service is started");
})

app.use(express.static("public"));

//hello world 

