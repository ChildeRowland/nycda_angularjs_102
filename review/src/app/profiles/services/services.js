angular.module('serviceModule', ['ngResource'])

.factory('exampleResource', function($resource) {

	// The factory service must return the $resource
	// Pass a URL as a string
	return $resource('/#/data', {
		// Second argument is an object with optional query parameters
		limit: 20,
		page: 1
	}, {
		// custom actions
		getPeople: {
			method: 'GET'
		}
	});

})

// Standard URL path
// '/api/user/signup'

// Notation for placeholders
// '/api/user/:userId/home'

// Place Holder parameters use @
// { userId: @userId }

.factory('GoogleResource', function($resource) {

	return $resource('http://maps.googleapis.com/maps/api/geocode/json', {
		// no optional query parameters
	}, {
		getAddress: {
			method: 'GET'
		}
	});
});


