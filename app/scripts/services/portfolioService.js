'use strict';
angular.module('mainSite')
  .service('portfolioService', function() {
    this.portfolio = [
      {
        "image": "http://www.skillsacademy.co.za/wp-content/uploads/2013/01/Program-Project-Management.jpg",
        "title": "Product Display",
        "github": {
          "isTrue": true,
          "url": "https://github.com/Dman89/ProductDisplay"
        },
        "codepen": {
          "isTrue": true,
          "url": "http://productdisplay.danielcudney.com"
        },
        "heroku": {
          "isTrue": false,
          "url": "url"
        },
        "description": "Presentation is one of the keys to success in an online store. Checkout this simple animation for a product display."
      },
      {
        "image": "http://www.skillsacademy.co.za/wp-content/uploads/2013/01/Program-Project-Management.jpg",
        "title": "Quote Generator",
        "github": {
          "isTrue": true,
          "url": "https://github.com/Dman89/quoteMachine"
        },
        "codepen": {
          "isTrue": true,
          "url": "http://quotemachine.danielcudney.com"
        },
        "heroku": {
          "isTrue": false,
          "url": "url"
        },
        "description": "Need Inspiration? Generate a quote and photo for motivation. Why not post it to Twitter too?"
      },
      {
        "image": "http://www.skillsacademy.co.za/wp-content/uploads/2013/01/Program-Project-Management.jpg",
        "title": "Encrptytion",
        "github": {
          "isTrue": true,
          "url": "https://github.com/Dman89/SimpleEncryption"
        },
        "codepen": {
          "isTrue": true,
          "url": "http://encryption.danielcudney.com"
        },
        "heroku": {
          "isTrue": false,
          "url": "url"
        },
        "description": "Got a message you want to keep secret? Use this simple encrption app to keep your top secret message private."
      },
      {
        "image": "http://www.skillsacademy.co.za/wp-content/uploads/2013/01/Program-Project-Management.jpg",
        "title": "Current Weather",
        "github": {
          "isTrue": true,
          "url": "https://github.com/Dman89/weatherApp"
        },
        "codepen": {
          "isTrue": true,
          "url": "http://weather.danielcudney.com"
        },
        "heroku": {
          "isTrue": false,
          "url": "url"
        },
        "description": "Get the current weather report for you IP or at a click of a button, the report for your current location via latitude and longitude."
      },
      {
        "image": "http://www.skillsacademy.co.za/wp-content/uploads/2013/01/Program-Project-Management.jpg",
        "title": "Store / Blog",
        "github": {
          "isTrue": true,
          "url": "https://github.com/Dman89/Store-Front-Api-Project"
        },
        "codepen": {
          "isTrue": false,
          "url": "http://linktochange.danielcudney.com"
        },
        "heroku": {
          "isTrue": true,
          "url": "http://caleapi.herokuapp.com/"
        },
        "description": "Need a website to sell your products and a blog to reach customers? Look no further with this beautiful site package. Add/edit/delete products, blog posts and portfolio pieces with this backend."
      },
      {
        "image": "http://www.skillsacademy.co.za/wp-content/uploads/2013/01/Program-Project-Management.jpg",
        "title": "Watchmen: Dr. Time",
        "github": {
          "isTrue": true,
          "url": "https://github.com/Dman89/WatchMenDrTime"
        },
        "codepen": {
          "isTrue": false,
          "url": "http://drtime.danielcudney.com"
        },
        "heroku": {
          "isTrue": true,
          "url": "http://drtime.herokuapp.com/"
        },
        "description": "Working in an AGILE environment? Here is a timer that uploads to google calendar as you complete tasks to be reviewed later. Dr. Time's features include a sprint mode and the storing of activities for projects."
      }
    ]

















  })
