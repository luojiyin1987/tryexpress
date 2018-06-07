var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routers = require('./routes/index');
var users    = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extname: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'pubilc')));

app.use('/', routers);
app.use('/users', users);

app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})


app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

//module.exports = app;
app.listen(8080);
