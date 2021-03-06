'use strict';

var express = require('express');
var router  = express.Router();
var mmss    = require('app/mmss');

router.get('/search', function(req, res) {
  var query = req.query.q || null;

  mmss.search(query, function(err, result) {
    if (err) { return res.json({ error: 1 }); }
    res.json(result);
  });
});

module.exports = router;
