(function() {
  'use strict';

  angular.module('review')

    .controller('ProfilesController', function($log, personResource, personFriendResource) {
    var self = this;

    self.welcome = "ngResource with local JSON file";
    self.people;

    // Save the resource object as a variable.
    // Use the custom action definded in the service.
    var personResourceObject = personResource.getPeople({
    	// optional parameters
    });

    var promiseObject = personResourceObject.$promise;

    promiseObject.then(function onSuccess(responce) {
    	self.people = responce;
        
        self.people.forEach(function(person) {
        
            personFriendResource.query({friendId: person._id}).$promise
            .then(function onSuccess(responce) {
                
                self.people[person.index].friends = responce;
                // person.friends = responce;
            
            });
        })

    }, function onError(error) {
    	$log.error(error);
    });

    
  });
})();
