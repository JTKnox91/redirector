var config = require('./config.js');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(require('./config.js').port);

// Internal Dependencies
if( (process.env.NODE_ENV === 'development') || !(process.env.NODE_ENV) ){
  app.use(logger('dev'));
}

app.get("/", express.static(__dirname + '/../client-web'));

// Authentication Routes
app.post('/signup', function(req, res) {
  auth.signup(req.body.username, req.body.password)
    .then(function(result) {
      res.status(201)
        .send(result);
    })
    .catch(function(err) {
      res.status(300)
        .send(err);
    });
});

app.post('/login', function(req, res) {
  auth.login(req.body.username, req.body.password)
    .then(function(user) {
      utils.createSession(req, res, user, function() {
        res.status(200).send(user);
      });
    })
    .catch(function(err) {
      res.status(300)
        .send(err);
    });
});

app.post('/logout', utils.destroySession, function(req, res) {
  res.status(200).end();
});

app.get('/', utils.destroySession, function(req, res) {
  res.status(200).end();
});