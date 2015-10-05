'use strict';

var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('index');
});

router.post('/login', function(req, res) {
  var id = req.body.id;
  var pw = req.body.pw;

  // TODO
  console.log(id, pw);
  req.session.isLogin = true;

  res.redirect('/player');
});

router.get('/logout', function(req, res) {
  delete req.session.isLogin;
  res.redirect('/login');
});

module.exports = router;
