'use strict';

module.exports = {
  isLogin: function(req, res, next) {
    if ('isLogin' in req.session) {
      next();
    } else {
      res.redirect('/login');
    }
  },
  isLoginAPI: function(req, res, next) {
    if ('isLogin' in req.session) {
      next();
    } else {
      res.json({ error: 1 });
    }
  }
};
