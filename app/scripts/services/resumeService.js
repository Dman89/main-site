'use strict';
angular.module('mainSite')
  .service('resumeService', function() {
    this.resumeArray = [{"url": "resumes/DanielCudneyFullStackResume.pdf", "text": "Full Stack Engineer Resume"},{"url": "resumes/DanielCudneyWorkHistoryResume.pdf", "text": "Work History Resume"}]
  })
