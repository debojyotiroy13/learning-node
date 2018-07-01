const http = require('http');
const express = require('express');

var deptRouter = express.Router();

deptRouter.get('/dept', (request, response) => {
    response.send('<H1>GET METHOD</H1> <H3>GET Departments</H3>');
});


module.exports = deptRouter;
