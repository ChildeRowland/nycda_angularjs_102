angular.module('template')

.factory('GoogleResource', function($resource) {
	return $resource('http://maps.googleapis.com/maps/api/geocode/json', {
		// Query paramters
		
	}, {
		// custom action
		getAddress: {
			method: 'GET'
			// isArray: true
		}
	});
});