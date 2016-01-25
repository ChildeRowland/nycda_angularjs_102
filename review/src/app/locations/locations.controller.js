(function() {
  'use strict';

  angular.module('review')

    .controller('LocationsController', function($log, LocationsControllerDataService) {
	    var self = this;

	    self.welcome = "Search the Google API";

	    self.searchResults;
	    self.userInput;

	    self.updateSearch = function() {
		    LocationsControllerDataService.getAddressForCtrl({ 
		    	// pass the params or null.
		    	address: self.userInput
		    }, function (isValid, responce) {
		    	if (isValid) {
		    		console.log(isValid);
		    		self.searchResults = responce.results;
		    	} else {
		    		console.log("BEANS")
		    	}
		    });
		};

	 //    self.updateSearch = function() {

		//     self.GoogleResourceObject = GoogleResource.getAddress({
		//     	address: self.userInput
		//     });

		//     self.GoogleResourceObject.$promise
		// 	.then(function onSuccess(responce) {
		// 		self.searchResults = responce.results;
		//     }, function onError(error) {
		//     	$log.error(error);
		//     })

		// }

  });
})();
