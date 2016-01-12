angular.module('MyServiceModule', ['ngResource'])

.service('PeopleRESTService', function($log, PeopleResource) {
	var self = this;

	self.getPeopleList = function(params, onCompletion) {
		$log.debug('Getting People List with params: ', params);
		PeopleResource.getPeople(params).$promise
		.then(function onSuccess(responce)) {

		}, function onError(error) {
			$log.error(error);
		};
	};
})

.factory('PeopleResource', function($resource) {
	return $resource('sampleData.json', {
		// Query paramters can be added here:
		limit: 20,
		page: 1
	}, {
		// custom action
		getPeople: {
			method: 'GET',
			isArray: true
		}
	});
});

.factory('FriendsResource', function($resource) {
	return $resource()
})

// URL argument
// '/api/user/signup'
// '/api/user/:userId/home'

// Query parameters
// '/api/user/signup?page=1&limit=20'