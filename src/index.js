//Required files
const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql2'),
    myConnection = require('express-myconnection');

const app = express();

// importing routes
const aereosRoutes = require('./routes/aereos/aereoRoutes');
const aeristasRoutes = require('./routes/aeristas/aeristaRoutes');
const miniFincasRoutes = require('./routes/minifincas/miniFincasRoutes');
const seccionesMFRoutes = require('./routes/minifincas/secciones');


// settings
app.set('port', process.env.PORT || 3000);

//middlewares
// app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: '35.226.107.150',
  user: 'desarrollador',
  password: 'mariobross5625',
  port: 3306,
  database: 'bandegua',
  timezone: 'utc',
  dateStrings : true
}, 'pool'));
app.use(express.urlencoded({extended: false}));


// routes
app.use('/', aereosRoutes);
app.use('/', aeristasRoutes);
app.use('/', miniFincasRoutes);
app.use('/', seccionesMFRoutes);

// starting the server
var ip = require("ip");
const server = app.listen(app.get('port'), () => {
    console.log(`server on address ${ip.address()}:${app.get('port')}`);
  });
  