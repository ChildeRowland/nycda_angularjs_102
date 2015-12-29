angular.module('simonApp', [])

.factory('UserDTO', function() {

	function User() {
		this.name = "";
		this.age = "";
		//this.playList = []
	}

	User.prototype.addUser = function(name, age) {
		if ( name == undefined || age == undefined ) {
			return alert('Please enter name and age.');
		}
		this.name = name;
		this.age = age;
	}

	return User;
})

.factory('SimonDTO', function() {

	function Simon() {
		this.pallet = ["Red", "Blue", "Yellow", "Green"];
		this.currentColor = "";
		this.allColors = [];
	}

	Simon.prototype.simonSays = function () {
		num = this.pallet.length;
		index = Math.ceil( Math.random() * num ) - 1;
		console.log(this.pallet[index]);
		return this.pallet[index];
	}

	Simon.prototype.addColorToList = function() {
		this.allColors.push(color);
	}

	return Simon;
})

.controller('mainController', function(SimonDTO) {
	var self = this;
	self.simon = new SimonDTO;

	console.log(self.simon);

	self.simon.simonSays();

	self.welcome = "Simon Says";

})