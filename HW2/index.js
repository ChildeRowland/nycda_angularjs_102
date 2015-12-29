angular.module('simonApp', [])

.factory('SimonDTO', function() {

	Simon = function() {
		this.pallet["Red", "Blue", "Yellow", "Green"];
		this.currentColor = "";
		this.allColors = [];
	}

	Simon.prototype.simonSays = function () {
		num = this.pallet.length
		index = Math.ceil( Math.random() * num ) - 1;
		console.log(index);
		return index;
	}

	Simon.prototype.addColorToList = function() {
		this.allColors.push(color);
	}

	return Simon;
})

.controller('mainController', function(SimonDTO) {
	var self = this;
	self.simon = SimonDTO;

	self.simon.simonSays();

	self.welcome = "Simon Says";

})