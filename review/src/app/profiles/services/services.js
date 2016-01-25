angular.module('serviceModule', ['ngResource'])

.factory('personResource', function($resource) {

	// The factory service must return the $resource
	// Pass a URL as a string
	return $resource('jsonFiles/sampleData.json', {
		// Second argument is an object with optional query parameters
		limit: 20,
		page: 1
	}, {
		// custom actions
		getPeople: {
			method: 'GET',
			isArray: true
		}
	});
})

.factory('personFriendResource', function($resource) {
	return $resource('jsonFiles/:friendId/profile.json', {
		friendId: '@friendId'
	});
})

// Standard URL path
// '/api/user/signup'

// Notation for placeholders
// '/api/user/:userId/home'

// Place Holder parameters use @
// { userId: @userId }

.service('AddressRESTService', function($log, GoogleResource) {
	var self = this;

	self.getAddressList = function(params, onCompletion) {
		$log.debug('Getting Address List with params: ', params);
		GoogleResource.getAddress(params).$promise
		.then(function onSuccess(responce) {
			onCompletion(true, responce);
		}, function onError(error) {
			$log.error(error);
			onCompletion(false, error);
		})
	};
})

.service('LocationsControllerDataService', function(AddressRESTService) {
	var self = this;

	self.getAddressForCtrl = function(params, onCompletion) {
		AddressRESTService.getAddressList(params, function(isValid, responce) {
			onCompletion(isValid, responce);
		})
	};
})

.factory('GoogleResource', function($resource) {

	return $resource('http://maps.googleapis.com/maps/api/geocode/json', {
		// no optional query parameters
	}, {
		getAddress: {
			method: 'GET'
		}
	});
});


