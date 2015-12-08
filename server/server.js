var config = require('./config.js');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(require('./config.js').port);

app.get("/", express.static(__dirname + '/../client'));

// // Authentication Routes
// app.post('/signup', function(req, res) {
//   auth.signup(req.body.username, req.body.password)
//     .then(function(result) {
//       res.status(201)
//         .send(result);
//     })
//     .catch(function(err) {
//       res.status(300)
//         .send(err);
//     });
// });

// app.post('/login', function(req, res) {
//   auth.login(req.body.username, req.body.password)
//     .then(function(user) {
//       utils.createSession(req, res, user, function() {
//         res.status(200).send(user);
//       });
//     })
//     .catch(function(err) {
//       res.status(300)
//         .send(err);
//     });
// });

// app.post('/logout', utils.destroySession, function(req, res) {
//   res.status(200).end();
// });

// app.get('/', utils.destroySession, function(req, res) {
//   res.status(200).end();
// });