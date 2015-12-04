var homeWorkOne = angular.module('homeWorkOne', [])

homeWorkOne.controller('mainController', function() {
	var self = this

	this.message = "Home Work One, themes";

	this.themeOne = {
		name: "Mid-Ninties Jam"
	};

	this.themeTwo = {
		name: "Parchment"
	};

	this.themeThree = {
		name: "Snazzy-Do"
	};

	this.themeFour = {
		name: "None"
	};

})