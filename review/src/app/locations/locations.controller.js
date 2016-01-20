(function() {
  'use strict';

  angular.module('review')

    .controller('LocationsController', function($log, GoogleResource) {
	    var self = this;

	    self.welcome = "Search the Google API";

	    self.searchResults;
	    self.userInput;

	    self.updateSearch = function() {

		    self.GoogleResourceObject = GoogleResource.getAddress({
		    	address: self.userInput
		    });

		    self.GoogleResourceObject.$promise
			.then(function onSuccess(responce) {
				self.searchResults = responce.results;
		    }, function onError(error) {
		    	error.log;
		    })

		}

  });
})();
