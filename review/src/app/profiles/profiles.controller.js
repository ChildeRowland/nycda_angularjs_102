(function() {
  'use strict';

  angular.module('review')

    .controller('ProfilesController', function($log, exampleResource) {
    var self = this;

    self.welcome = "Test IT";

    // Save the resource object as a variable.
    // Use the custom action definded in the service.
    var exampleResourceObject = exampleResource.getPeople({
    	// optional parameters
    });

    var promiseObject = exampleResourceObject.$promise;

    promiseObject.then(function onSuccess(responce) {
    	responce;
    }, function onError(error) {
    	$log.error(error);
    });

  });
})();
