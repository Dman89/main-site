'use strict';
var angular = require('angular');
angular.module("mainSite", []);
//STATE CONFIG
require('./scripts/config/main.js');
//CONTROLLERS
require('./scripts/controllers/indexCtrl.js');
require('./scripts/controllers/menuCtrl.js');
require('./scripts/controllers/servicesToSellCtrl.js');
//SERVICE
require('./scripts/services/scrollService.js');
require('./scripts/services/sendDataViaEmailService.js');
require('./scripts/services/barGraphAnimationService.js');
require('./scripts/services/servicesForSaleService.js');
require('./scripts/services/menuService.js');
require('./scripts/services/menuCollapseService.js');
require('./scripts/services/unlockService.js');
require('./scripts/services/portfolioService.js');
require('./scripts/services/resumeService.js');
