angular.module('myApp', [])

.controller('mainController', function($scope, $timeout, $interval) {
	var self = this;

	self.person = {
		fname: "Lobsta",
		lname: "Roll",
		email: "lb@email.com"
	};

	// store the keys of the person object in an array, so ngReat will keep order.
	self.personArray = [ "fname", "lname", "email" ]

	self.edit = false;

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

	self.car = {
		make: "Ford",
		model: "Escort",
		year: 1950,
		age: 65
	};

	self.updateAge = function() {
		
	};

	self.changeMe = function() {
		if (self.edit == false) {
			self.edit = true;
		} else {
			self.edit = false;
		}
		self.restoreInfo();
	};

	self.saveMe = function(newFname, newLname) {
		console.log(newFname, newLname);
		self.person.fname = newFname;
		self.person.lname = newLname;
		self.changeMe();
	};

	// set the value of the ngModel to the values stored in the person object.
	self.restoreInfo = function() {
		self.editPerson = angular.copy(self.person)
	};
	
	// restore the ngModel value; used in the changeMe function.
	self.restoreInfo();

});