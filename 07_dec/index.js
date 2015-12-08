angular.module('myApp', [])

.controller('mainController', function($timeout) {
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

	self.changeMe = function() {
		if (self.edit == false) {
			self.edit = true;
			self.restoreInfo();
		} else {
			self.edit = false;
			self.restoreInfo();
		}
	};

	self.saveMe = function(newFname, newLname) {
		console.log(newFname, newLname);
		self.person.fname = newFname;
		self.person.lname = newLname;
		self.changeMe();
	};

	// set the value of the ngModel to the values stored in the person object.
	self.restoreInfo = function() {
		self.newFname = self.person.fname;
		self.newLname = self.person.lname;
	};
	
	// restore the ngModel value; used in the changeMe function.
	self.restoreInfo();

});