angular.module('template')

.factory('GeoclientResource', function($resource) {
	return $resource('https://api.cityofnewyork.us/geoclient/v1/address.json?houseNumber=314&street=west 100 st&borough=manhattan&app_id=abc123&app_key=def456', {
		// Query paramters
	}, {
		// custom action
		getAddress: {
			method: 'GET'
			// isArray: true
		}
	});
});