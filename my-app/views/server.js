'use strict'

var server_conf = require('../config');
var http = require('http');
var fs = require('fs');
var path = require('path');

var userRouter = require('./router/userRouter');
var deptRouter = require('./router/deptRouter');

var express = require('express');
var morgan = require('morgan');



var app = express();
app.use(morgan('common'));
app.use(userRouter);
app.use(deptRouter);

module.exports = app;

//app.use(express.static(__dirname + '/web'));

// app.use((request , response,next)=>{
//     console.log(requesnt.headers);
//     response.writeHead(200,{'Content-Type' : 'text/html'});
//     response.end('<html> <body> <h1> Hello World!! </h1></body></html>');
// });

// var serverExpress = http.createServer(app)
// serverExpress.listen(server_conf.port,server_conf.host, () => {
//     console.log('Express started!!');
// });

