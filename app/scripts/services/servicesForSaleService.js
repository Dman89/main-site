'use strict';
angular.module('mainSite')
  .service('servicesForSaleService', function() {
    this.newOrOldArr = [{"title": "New Website", "click": 0}, {"title": "Minor Updates", "click": 1}, {"title": "Rebuild Website", "click": 2}];
    this.times = {
      'times': [9,10,11,12,1,2,3,4,5,6,7,8],
      'amPm': ['PM', 'AM'],
      'timezone': ['EST', 'MST', 'PST']
    }
    this.contact = {
      'name': '',
      'email': '',
      'phone': '',
      'company': '',
      'time': {
        'number': this.times.times[0],
        'amPm': this.times.amPm[1],
        'timezone': this.times.timezone[2]
      }
    };
    this.numOfPagesArr = {
      "one": false,
      "six": false,
      "sixteen": false,
      "dynamic": false
    };
    this.timeFrame = {
      "flexible": false,
      "asap": false,
      "nextFewDays": false,
      "byDate": {
        "isTrue": false,
        "content": ""
      },
      "other": {
        "isTrue": false,
        "content": ""
      },
      "employment": {
        "isTrue": false,
        "content": ""
      }
    };
    this.lookingForAWebsite = {
      "services": '',
      "typeOfSite": {
        'personal': false,
        'blog': false,
        'social': false,
        'eCommerce': false,
        'business': false,
        'nonProfit': false,
        'other': {
            'isTrue': false,
            'content': ''
        }
      },
      "options": [""],
      'pagesTotal': {},
      'timeFrame': {
        'flexible': false,
        'asap': false,
        'nextFewDays': false,
        'byDate': {
          'isTrue': false,
          'content': ""
        },
        'other': {
          'isTrue': false,
          'content': ""
        },
        'employment': {
          'isTrue': false,
          'content': ""
        }
      },
      'details': ['']
    };
    this.typeOfSite = {'personal': false, 'blog': false, 'social': false, 'eCommerce': false, 'business': false, 'nonProfit': false, 'other': {'isTrue': false, 'content': ''}};
















  })
