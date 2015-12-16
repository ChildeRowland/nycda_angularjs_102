angular.module('myApp', [])

.controller('personController', function(PersonDTO, ButtonsDTO) {
	var self = this;
	self.person = new PersonDTO();
	self.button = new ButtonsDTO();

	self.saveMe = function(fname, lname) {
		self.person.updatePerson(fname, lname);
		self.button.switchEditButton();
	};

	// set the value of the ngModel to the values stored in the person object.
	self.restoreInfo = function() {
		self.button.edit = false;
		self.editPerson = angular.copy(self.person);
	};
	
	// restore the ngModel value; used in the changeMe function.
	self.restoreInfo();

})

.controller('mainController', function($scope, $timeout, $interval, CarDTO) {
	var self = this;
	self.car = new CarDTO();

	$timeout(function() {
		self.welcome = "Edit, Cancel, Submit Workshop";
	}, 2000);

	self.countdown = 10;
	self.ages = [1, 2, 3, 4, 5];

	$interval(function() {
		self.countdown = self.countdown - 1; 
	}, 1000, 10);

	// $scope.$watch('ctrl.countdown', function(newValue, oldValue) {
	// 	console.log("New Value: ", newValue, " Old Value: ", oldValue);
	// })

});