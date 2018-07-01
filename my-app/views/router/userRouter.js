const express = require('express');
const path = require('path');
const userRouter = express.Router();

userRouter.get('/user', (request , response) => {
    // response.sendFile('user.html' , {root : path.join(__dirname,'../web')});
    response.send('<H1>GET METHOD:</H1><H3>ACTION -> Get all users</H3>');
});
userRouter.post('/user', (request , response) => {
    // response.sendFile('user.html' , {root : path.join(__dirname,'../web')});
    response.send('<H1>POST METHOD:</H1><H3>ACTION -> Get all users</H3>');
});
userRouter.get('/user/:userId', (request , response) => {
    // response.sendFile('user.html' , {root : path.join(__dirname,'../web')});
    response.send('<H1>GET METHOD:</H1><H3>ACTION -> Get user ' + request.params.userId + '</H3>');
});
userRouter.delete('/user', (request , response) => {
    // response.sendFile('user.html' , {root : path.join(__dirname,'../web')});
    response.send('<H1>GET METHOD:</H1><H3>ACTION -> Delete all users</H3>');
});
module.exports = userRouter;