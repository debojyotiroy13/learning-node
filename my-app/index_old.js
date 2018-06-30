// Importing requirements
var server_conf = require('./server_config');
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');

var server = http.Server((request,response)=>{ 
    
    console.log(request.headers);
    if(request.method == 'GET'){
        var fileUrl;
        if(request.url == '/') fileUrl = '/index.html';
        else fileUrl = request.url;
        var filePath = path.resolve('./views' + fileUrl);
        var fileExt = path.extname(filePath);
        if(fileExt == '.html' || fileExt == '.json'){
            //if(filePath.exists)
            fs.exists(filePath , (exists) => {
                if(!exists){
                    response.writeHead(404,{'Content-Type' : 'text/html'});
                    response.end('<html> <body> <h1>Error 404 : File is not found!</h1> </body></html>')           
                    return;
                }
                fs.createReadStream(filePath).pipe(response);
            })
        }
        else{
            response.writeHead(404,{'Content-Type' : 'text/html'});
            response.end('<html> <body> <h1>Error 404 : File extention ' + fileExt + ' is not supported</h1> </body></html>')   
        }
        
    }
    else{
        response.writeHead(404,{'Content-Type' : 'text/html'});
        response.end('<html> <body> <h1>Error 404 : Request method ' + request.method + ' is not supported</h1> </body></html>')
    }
    

});
server.listen(server_conf.port,server_conf.host);
console.log('Server started on ' + server_conf.host + ' : ' + server_conf.port);
