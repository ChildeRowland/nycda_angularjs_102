angular.module('MyServiceModule', ['ngResource'])

.factory('MyResource', function($resource) {
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

// URL argument
// '/api/user/signup'
// '/api/user/:userId/home'

// Query parameters
// '/api/user/signup?page=1&limit=20'