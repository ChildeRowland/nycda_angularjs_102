(function() {
  'use strict';

  angular.module('review')

  	.factory('constructionResource', function($resource) {
    		return $resource('https://data.cityofnewyork.us/resource/e98g-f8hy.json', {
    			// optional query paramters
    		})
  	})

    .controller('ConstructionController', function(constructionResource) {
    var self = this;

    self.welcome = "Searchable Construction";
    self.results;

    constructionResource.query().$promise
    .then(function onSuccess(responce) {
      self.results = responce;
    }, function onError(error) {

    });

  });
})();

// DOB Job Application Filings
// https://data.cityofnewyork.us/Housing-Development/DOB-Job-Application-Filings/ic3t-wcy2
// https://data.cityofnewyork.us/resource/ic3t-wcy2.json

// https://data.cityofnewyork.us/Housing-Development/Directory-Of-Future-Construction-Projects/k2zs-b24z
// https://data.cityofnewyork.us/resource/e7nr-fi4r.json

// 
