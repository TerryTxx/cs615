// Require necessary node modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Router modules for different routes within the application
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');
var storiesRouter = require('./routes/story');
var scrumuserRouter = require('./routes/scrumuser');
const db=require('./helper/db')() // Database connection setup
var app = express();

// view engine setup
// Set up Pug as the view engine for rendering views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Middleware for logging request details
app.use(logger('dev'));
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to parse cookies
app.use(cookieParser());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/story', storiesRouter);
app.use('/scrumuser', scrumuserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // Provide error details only in development environment
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // Send error response
  res.status(err.status || 500);
  res.json({ error: { message: err.message, code: err.code } });
});

module.exports = app;
