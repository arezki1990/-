
/**
 * Module dependencies.
 */
var express = require('express'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    errorHandler = require('errorhandler'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    prismic = require('./prismic-helpers');
    swig=require('swig')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser('1234'));
app.use(session({secret: '1234', saveUninitialized: true, resave: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler());
// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// Routes
app.route('/').get(function(req,res){
   var tlp=swig.renderFile('views/index.html', {"active":"index"});
   res.send(tlp)
});
app.route('/talabate').get(function(req,res){
   var tlp=swig.renderFile('views/talabate.html', {"active":"talabate"});
   res.send(tlp)
});
app.route('/FAQ').get(function(req,res){
   var tlp=swig.renderFile('views/FAQ.html', {"active":"FAQ"});
   res.send(tlp)
});
app.route('/conditions').get(function(req,res){
   var tlp=swig.renderFile('views/conditions.html', {"active":"conditions"});
   res.send(tlp)
});
app.route('/contact').get(function(req,res){
   var tlp=swig.renderFile('views/contact.html', {"active":"contact"});
   res.send(tlp)
});
app.route('/hissabi').get(function(req,res){
   var tlp=swig.renderFile('views/hissabi.html', {"active":"hissabi"});
   res.send(tlp)
});


var PORT = app.get('port');

app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});

