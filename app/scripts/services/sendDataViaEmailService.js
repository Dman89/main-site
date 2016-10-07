'use strict';
angular.module('mainSite')
  .service('sendDataViaEmailService', function() {
    let url = "https://mandrillapp.com/api/1.0/messages/send.json";
    this.restCall = function(num, contact, work) {
      makeAStringForContact(contact, function(contactString) {
        makeSubject(num, work, function(subjectString) {
          makeAStringForWork(num, work, function(workString) {
            combinedHTML(contactString, workString, function(htmlString) {
              composeData(subjectString, htmlString, function(dataObj) {
                ajaxCall(url, dataObj);
              })
            })
          })
        })
      })
    }
    var ajaxCall = function(url, data) {
      $.ajax({
        type: "POST",
        url: url,
        data: data
      }).done(function(res){
        console.log(res);
      }).fail(function(res) {
        console.log(res);
      })
    }
    var combinedHTML = function(contact, work, output) {
      let outputHTML = contact + work;
      output(outputHTML);
    }
    var makeAStringForWork = function(num, input, output) {
      if(num == 1) {
        optionsToStr(input.options, function(optionsResponse) {
          optionsToStr(input.details, function(detailsReponse) {
            let typeOfWork2 = "<br/>Non-Profit: " + input.typeOfSite.nonProfit + "<br/>Other: " + input.typeOfSite.other.isTrue+" : " + input.typeOfSite.other.content;
            let typeOfWork = "Personal: " + input.typeOfSite.personal + "<br/>Blog: " + input.typeOfSite.blog + "<br/>Social: " + input.typeOfSite.social + "<br/>eCommerce: " + input.typeOfSite.eCommerce + "<br/>Business: " + input.typeOfSite.business + typeOfWork2;
            let options = optionsResponse;
            let details = detailsReponse;
            let pageTotal = "1-5: " + input.pagesTotal.one + "<br/>6-15: " + input.pagesTotal.six +"<br/>16+:" + input.pagesTotal.sixteen + "<br/>Dynamic: " + input.pagesTotal.dynamic;
            let timeFrame2 = "<br/>By Date: " + input.timeFrame.byDate.isTrue + ": " + input.timeFrame.byDate.content + "<br/>Other: " + input.timeFrame.other.isTrue + ": " + input.timeFrame.other.content + "<br/>Employment: " + input.timeFrame.employment.isTrue + ": " + input.timeFrame.employment.content;
            let timeFrame = "Flexible: " + input.timeFrame.flexible + "<br/>Asap: " + input.timeFrame.asap + "<br/>Next Few Days:" + input.timeFrame.nextFewDays + timeFrame2;
            let outputString = "<br/><p>Work Type:<br/>"+typeOfWork+"<p/>With Options:<br/>"+options+"<p/>Pages Total:<br/>"+pageTotal+"<p/>Time Frame:<br/>"+timeFrame+"<p/>Extra Details:<br/>"+details+"<p/></p>"
            output(outputString);
          })
        })
      }
      else {
        let outputString = "<h1>Employment</h1>";
        output(outputString);
      }
    }
    var optionsToStr = function(input, out) {
      let outArr = '';
      for (var x = 0; x < input.length; x++) {
        let tempArr = outArr;
        outArr = tempArr +"<br/>"+ input[x];
      }
      out(outArr);
    }
    var makeAStringForContact = function(input, output) {
        let name = input.name;
        let email = input.email;
        let phone = input.phone;
        let company = input.company;
        let time = input.time.number +" "+ input.time.amPm +" in the timezone of "+ input.time.timezone;
        let outputString = "<h2>"+name+"</h2><p>Company: "+company+"<br/>Email: "+email+"<br/>Phone: "+phone+"<br/>Best Time to Call: "+time+"</p>"
        output(outputString);
    }
    var makeSubject = function(num, input, output) {
      let subject = "YOUR SUBJECT HERE!";
      if (num == 0) {
        subject = "Employment Opportunity";
      }
      else {
        subject = input.services;
      }
      output(subject);
    }
    var composeData = function(subject, html, output) {
      let data = {
        "key": "p1MPv-GEtGCLpqhcgeuqLA",
        "message": {
          "from_email": "admin@danielcudney.com",
          "from_name": "Attn: Dan",
          "to": [
              {
                "email": "daniel@danielcudney.com",
                "name": "Daniel",
                "type": "to"
              }
            ],
          "autotext": "true",
          "subject": subject,
          "html": html
        }
      }
      output(data);
    }
  })
