var homeWorkOne = angular.module('homeWorkOne', [])

homeWorkOne.controller('mainController', function() {
	var self = this

	this.message = "HW1, Theme Selection";

	this.themeSelect = {

		one : { name: "Mid-Nineties Jam", themeOne: "ninetiesA", themeTwo: "ninetiesB" },

		two : { name: "Parchment", themeOne: "parchmentA", themeTwo: "parchmentB" },

		three : { name: "Snazzy-Do", themeOne: "snazzyA", themeTwo: "snazzyB" },

		four : { name: "None", themeOne: "noneA", themeTwo: "noneB" }

	};

	this.themeSelection = "None";

})