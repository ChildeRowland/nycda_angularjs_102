angular.module('myApp', ['MyServiceModule'])

.service('MainCtrlDataService', function(PeopleRestService) {
	var self = this;

	
})

.controller('mainController', function(MyResource) {
	var self = this;

	// Make request using the custom action
	var requestObject = MyResource.getPeople({
		// change or add to the querry parameters
		page: 2,
		age: 30
	});

	var promiseObject = requestObject.$promise;

	promiseObject.$promise
	.then(function onSuccess(responce) {

	}, function onError(error) {

	});

})

