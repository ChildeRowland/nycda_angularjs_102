(function() {
  'use strict';

  angular.module('review')

    .directive('cmFriend', function() {
        return {
            controller: 'friendsController',
            controllerAs: 'friendsCtrl',
        };
    })

    .controller('friendsController', function($scope, personFriendResource) {
        var self = this;

        console.log($scope.person);

        personFriendResource.query({friendId: $scope.person._id}).$promise
            .then(function onSuccess(responce) {
                self.friends = responce;            
        });
    })

    .controller('ProfilesController', function($log, personResource) {
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
        
        // self.people.forEach(function(person) {
        
            
        // })

    }, function onError(error) {
    	$log.error(error);
    });

    
  });
})();
