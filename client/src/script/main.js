'use strict';

var Vue = require('vue');

switch (location.pathname) {
case '/':
  new Vue(require('./app/index.vue')).$mount('#jsApp');
  break;
case '/login':
  new Vue(require('./app/login.vue')).$mount('#jsApp');
  break;
case '/player':
  require('./controller/player');
  break;
default:
  break;
}
