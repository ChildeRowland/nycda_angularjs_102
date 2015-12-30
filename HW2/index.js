angular.module('simonApp', [])

.factory('SimonDTO', function() {

	function Simon() {
		this.pallet = ["red", "blue", "yellow", "green"];
		this.currentColor = "";
		this.allColors = [];
	}

	Simon.prototype.simonSays = function () {
		num = this.pallet.length;
		index = Math.ceil( Math.random() * num ) - 1;
		console.log("simonSays() " + this.pallet[index]);
		return this.pallet[index];
	}

	Simon.prototype.addColorToList = function() {
		this.allColors.push(color);
		console.log("addColorToList()", this.allColors);
		return this.allColors;
	}

	return Simon;
})

.factory('PlayerDTO', function() {

})

.controller('mainController', function(SimonDTO) {
	var self = this;
	self.simon = new SimonDTO;

	self.test = function() {
		color = self.simon.simonSays();
		self.simon.addColorToList();
	}

	self.playerPress = function(color) {
		self.playerColor = color;
		return color;
	}

	self.welcome = "Simon Says";

})