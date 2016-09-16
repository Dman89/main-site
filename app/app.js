'use strict';
var angular = require('angular');
angular.module("mainSite", []);
//STATE CONFIG
require('./scripts/config/main.js');
//CONTROLLERS
require('./scripts/controllers/indexCtrl.js');
require('./scripts/controllers/menuCtrl.js');
//SERVICE
require('./scripts/services/scrollService.js');
require('./scripts/services/barGraphAnimationService.js');
require('./scripts/services/servicesForSaleService.js');
