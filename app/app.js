'use strict';
var angular = require('angular');
angular.module("mainSite", ['ngAnimate']);
//STATE CONFIG
require('./scripts/config/main.js');
//CONTROLLERS
require('./scripts/controllers/indexCtrl.js');
require('./scripts/controllers/mainCtrl.js');
//SERVICE
// require('./scripts/services/timerService.js');
