//Required files
const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();

// importing routes
const aereosRoutes = require('./routes/aereos/aereoRoutes');


// settings
app.set('port', process.env.PORT || 3000);

//middlewares
// app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: '35.226.107.150',
  user: 'desarrollador',
  password: 'mariobross5625',
  port: 3306,
  database: 'bandegua'
}, 'single'));
app.use(express.urlencoded({extended: false}));


// routes
app.use('/', aereosRoutes);


// starting the server
var ip = require("ip");
const server = app.listen(app.get('port'), () => {
    console.log(`server on address ${ip.address()}:${app.get('port')}`);
  });
  