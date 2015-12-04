var myApp = angular.module('myApp', []);
// This function 
myApp.controller('mainController', function($scope) {

	$scope.greeting = "Hello Taco";

})

myApp.controller('secondController', function() {
var self = this;

	self.greeting = "Alternative Greeting, Taco";

	self.onUserClick = function() {
		console.log(user);
	};

	self.simpleArray = ["item1", "item2", "item3"];

	self.intermediateArray = [
		{
			fname: "Taco",
			lname: "Bean"
		},
		{
			fname: "Lobster",
			lname: "Roll"
		}
	];

	self.myDog = {
		age: 12,
		name: "Harry",
		color: "Black"
	};

	self.dog = {
		name: "Max"
	};

	self.cat = {
		name: "Felix"
	};

	self.hampster = {
		name: "Usidore"
	};

})