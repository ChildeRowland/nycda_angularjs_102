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

	self.displaySimon = function(counter) {
		counter = counter || 0;
		if ( counter == self.simon.allChoices.length - 1 ) {
			return
		}

		$timeout(function() {
			
			self.buttonEffect(self.simon.allChoices[counter], self.simon.arrayForButton[counter]);
			counter ++

			$timeout(function() {
				self.displaySimon(counter);
			}, 1000);

		}, 500);
	}

	self.buttonEffect = function(color, num) {
		
		self.button[num] = color + "-pressed";
		$timeout(function() { 
			console.log(self.button[num]);
			self.button[num] = null;
		}, 400);
	}

	self.result = "";


	self.gameCycle = function() {
		self.player.allChoices = [];
		self.simon.says();
		self.displaySimon(0, self.simon.arrayForButton[0]);
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