angular.module('simonApp', [])

.factory('SimonDTO', function() {

	function Simon() {
		this.pallet = ["red", "blue", "yellow", "green"];
		this.palletIndex = "";
		this.currentColor = "";
		this.allChoices = [];
	}

	Simon.prototype.says = function () {
		num = this.pallet.length;
		this.palletIndex = Math.ceil( Math.random() * num ) - 1;
		this.currentColor = this.pallet[this.palletIndex];
		this.allChoices.push(this.currentColor);
		console.log(this.palletIndex);
	}

	return Simon;
})

.factory('PlayerDTO', function() {

	function Player() {
		this.says = "";
		this.allChoices = [];
	}

	Player.prototype.select = function(color) {
		this.says = color;
		this.allChoices.push(this.says);
	}

	return Player;
})

.controller('mainController', function($timeout, SimonDTO, PlayerDTO) {
	var self = this;
	self.simon = new SimonDTO;
	self.player = new PlayerDTO;


	self.buttonIndex;
	self.button = []

	self.buttonEffect = function(num) {
		self.button[num] = self.simon.pallet[num] + "-pressed";
		self.buttonIndex = num;
		$timeout(function() { self.button[num] = null; }, 180);
	}

	self.result = "";

	self.compareColors = function() {
		for ( index in this.player.allChoices ) {
			if ( self.player.allChoices[index] == self.simon.allChoices[index] ) {
				self.result = true;
			} else { 
				return self.result = false;
			}
		}
	}

	self.welcome = "Simon Says";

})