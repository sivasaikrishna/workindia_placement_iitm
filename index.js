var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRouter = require('./routes/user/user.router'); 
app.use('/', userRouter);

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Hi, server is running on "+port);
});
