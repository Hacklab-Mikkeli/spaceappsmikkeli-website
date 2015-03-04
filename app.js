var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var db = require('./config/database');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

mongoose.connect(db.getConnectUrl());
require('./config/passport')(passport);

var app = express();

app.set('port', 9010);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'uraanikikkula' }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, passport);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
