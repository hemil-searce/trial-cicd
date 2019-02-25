const os = require('os');
const express = require('express')
const Request = require("request");
const app = express()
const http = require('http');

console.log(os.hostname());

app.get('/', function (req, res) {
    res.statusCode = 503;
    res.send(os.hostname());
  });


app.get('/whoami',function(req,res) {
   res.send("This is whomi context");
})


app.listen(80, function () {
  console.log('app listening on port 80!')
})

