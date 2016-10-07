'use strict';
angular.module('mainSite')
  .service('sendDataViaEmailService', function() {
    let ajax = new XMLHttpRequest();
    let url = 'https://mandrillapp.com/api/1.0/messages/send.json';
    this.restCall = function(num, contact, work) {
      makeAStringForContact(contact, function(contactString) {
        makeSubject(num, work, function(subjectString) {
          makeAStringForWork(num, work, function(workString) {
            combinedHTML(contactString, workString, function(htmlString) {
              composeData(subjectString, htmlString, function(dataObj) {
                ajaxCall(url, dataObj);
                console.log('Seems To Work: '+num);
              })
            })
          })
        })
      })
    }
    var ajaxCall = function(url, data) {
      ajax.open('post', url, true);
      ajax.onreadystatechange = function() {
        if (ajax.readyState != 4 || ajax.status != 200) {
          console.log(ajax.responseText);
          return
        }
      }
      ajax.send(data);
    }
    var combinedHTML = function(contact, work, output) {
      let outputHTML = contact + work;
      output(outputHTML);
    }
    var makeAStringForWork = function(num, input, output) {
      if(num == 1) {
        let typeOfWork = input.typeOfSite;
        let options = input.options;
        let pageTotal = input.pagesTotal;
        let timeFrame = input.timeFrame;
        let details = input.details;
        let outputString = '<br/><p>Work Type:<br/>'+typeOfWork+'<br/>With Options:<br/>'+options+'<br/>Pages Total:<br/>'+pageTotal+'<br/>Time Frame:<br/>'+timeFrame+'<br/>Extra Details:<br/>'+details+'<br/></p>'
        output(outputString);
      }
      else {
        let outputString = '<h1>Employment</h1>';
        output(outputString);
      }
    }
    var makeAStringForContact = function(input, output) {
        let name = input.name;
        let email = input.email;
        let phone = input.phone;
        let company = input.company;
        let time = input.time.number +' '+ input.time.amPm +' in the timezone of '+ input.time.timezone;
        let outputString = '<h2>'+name+'</h2><p>Company: '+company+'<br/>Email: '+email+'<br/>Phone: '+phone+'<br/>Best Time to Call: '+time+'</p>'
        output(outputString);
    }
    var makeSubject = function(num, input, output) {
      let subject = 'YOUR SUBJECT HERE!';
      if (num == 0) {
        subject = 'Employment Opportunity';
      }
      else {
        subject = input.services;
      }
      output(subject);
    }
    var composeData = function(subject, html, output) {
      let data = {
        'key': 'p1MPv-GEtGCLpqhcgeuqLA',
        'message': {
          'from_email': 'admin@danielcudney.com',
          'to': [
              {
                'email': 'admin@danielcudney.com',
                'name': 'Daniel',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': subject,
          'html': html
        }
      }
      output(data);
    }
  })
