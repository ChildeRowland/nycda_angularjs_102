angular.module('simonApp', [])

.factory('SimonDTO', function($timeout) {

	function Simon() {
		this.pallet = ["red", "blue", "yellow", "green"];
		this.palletIndex = "";
		this.arrayForButton = [];
		this.currentColor = "";
		this.allChoices = [];
	}

	Simon.prototype.says = function () {
		num = this.pallet.length;
		this.palletIndex = Math.ceil( Math.random() * num ) - 1;
		this.currentColor = this.pallet[this.palletIndex];
		this.allChoices.push(this.currentColor);
		this.arrayForButton.push(this.palletIndex);
	}

	Simon.prototype.repeat = function() {
		parent = this;
		for ( index in this.arrayForButton ) { 

			this.palletIndex = this.arrayForButton[index];
			
			$timeout(function() { 
				parent.palletIndex = "";
			}, 2000);

			
		 }
	}

	return Simon;
})

.factory('PlayerDTO', function() {

	function Player() {
		this.says = "";
		this.allChoices = [];
		this.turn = false;
	}

	Player.prototype.select = function(color) {
		if ( this.turn == true ) { 
			this.says = color;
			this.allChoices.push(this.says);
		}
	}

	return Player;
})

.controller('mainController', function($timeout, SimonDTO, PlayerDTO) {
	var self = this;
	self.simon = new SimonDTO;
	self.player = new PlayerDTO;

	self.button = []

	self.buttonEffect = function(obj, array1, array2, counter) {
		array1 = array1 || [];
		array2 = array2 || [];
		counter = counter || 0;


		if ( Array.isArray(obj) ) {
			num = obj[counter];
		} else {
			num = obj;
		}

		array1[num] = array2[num] + "-pressed";
		$timeout(function() { 
			console.log(array1[num]);
			array1[num] = null;
		}, 400);

		$timeout(function() {

			if ( !Number.isInteger(obj) &&
			 counter < obj.length - 1 ) {

				counter++;
				self.buttonEffect(obj, array1, array2, counter);
				console.log(obj, counter);
			}
		}, 1000);
	}

	self.result = "";


	self.gameCycle = function() {
		self.player.allChoices = [];
		self.simon.says();
		self.buttonEffect(self.simon.arrayForButton, 
						  self.button, 
						  self.simon.pallet, 
						  0);
		self.player.turn = true;
	}

	self.roundLength = function() {
		if (self.player.allChoices.length == self.simon.allChoices.length) {
			self.gameCycle();
		} 
	}

	self.checkSelections = function() {
		playerChoice = self.player.allChoices[self.player.allChoices.length - 1]
		simonChoice = self.simon.allChoices[self.player.allChoices.length - 1]
		
		if ( playerChoice == simonChoice ) { 

			self.result = "Correct!";
			self.roundLength();

		} else {

			self.result = "Wrong"

		}

	}

	self.welcome = "Simon Says";

})