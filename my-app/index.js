// Importing requirements
var server_conf = require('./config');
var http = require('http');


var server = http.Server((request,response)=>{ 
    //response.writeHead(200 , {content-type: 'text/html'})
    
    response.end('<H1>Index Page!</H1>');

})

server.listen(server_conf.port,server_conf.host);
console.log('Server started on ' + server_conf.host + ' : ' + server_conf.port);