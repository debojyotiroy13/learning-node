'use strict'

const http = require('http');
const server_conf = require('../config');

var app = require('./server');

// const server = http.createServer(app);
// const servListen = promisify(server.listen, server);
// servListen(server_conf.port)
// .then(() => { 
//     logger.info(`Server is listening on PORT ${server_conf.port}`) 
// })
// .catch((err) => {
//     logger.error('Error has happened while starting : ' + err);
//     process.exit(1);
// })


app.listen(server_conf.port,server_conf.host, () => {
    console.log('Express started!!');
});