angular.module('myApp')

.factory('CarDTO', function() {

	function CarDTO() {
		this.make = "Ford";
		this.model = "Escort";
		this.year = 1955;
		this.age = 60;
	}

	CarDTO.prototype.updateAge = function(year) {
		this.year = year;
		this.age = 2015 - year;
	}

	return CarDTO;

})

.factory('PersonDTO', function() {

	function PersonDTO() {
		this.fname = "Lobsta";
		this.lname = "Roll";
		this.email = "lr@email.com";
	}

	PersonDTO.prototype.updatePerson = function(fname, lname) {
		this.fname = fname;
		this.lname = lname;
	}

	return PersonDTO;

})

.factory('ButtonsDTO', function() {

	function EditButton() {
		this.edit = false;
	}

	EditButton.prototype.switchEditButton = function() {
		if (this.edit === false) {
			this.edit = true;
		} else {
			this.edit = false;
		}
	}

	return EditButton;
	
})
