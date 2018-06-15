const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const http = require('http');
const app = express();
// var favicon = require('serve-favicon');
// var logger = require('morgan');
const uuidv1 = require('uuid/v1');

var employee = require('./server/routes/api/employee');
var dailystatus = require('./server/routes/api/dailystatus');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/Dailystatusdb', {promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/employee', express.static(path.join(__dirname, 'dist')));
app.use('/dailystatus', express.static(path.join(__dirname, 'dist')));

app.get('/api/employee', employee.getEmployeeList);
app.get('/api/employee/:id',employee.getEmployeeDetails);
app.post('/api/employee',employee.setEmployee);
app.put('/api/employee/:id',employee.setEmployeeDetails);
app.delete('/api/employee/:id',employee.deleteEmployee);

app.get('/api/dailystatus', dailystatus.getDailystatus);
app.get('/api/dailystatus/:id',dailystatus.getDailystatusId);
app.post('/api/dailystatus',dailystatus.setDailystatus);
app.put('/api/dailystatus/:id',dailystatus.setDailystatus);
//app.delete('/api/dailystatus/:id',dailystatus.deleteDailystatus);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
 res.render('error');
 //next(err)
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port, () => console.log(`Running on localhost:${port}`));