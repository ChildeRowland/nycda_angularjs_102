angular.module('WS2', [])

.value('LETTERGRADES', [

	{range: 91, grade: "A"},
	{range: 81, grade: "B"},
	{range: 71, grade: "C"},
	{range: 61, grade: "D"},
	{range: 0, grade: "F"}

])

.service('summaryService', function() {

	function convertToLetter(number, arrayOfObjects) {

		if ( number < 1 || number == NaN ) {
			return "No Grades Yet.";
		}

		for ( idx in arrayOfObjects) {
			if (number >= arrayOfObjects[idx].range) {
				return arrayOfObjects[idx].grade;
			}
		}
	}

	this.convertToLetter = convertToLetter;


	function passFail(number) {
		if ( number < 1 || number == NaN ) {
			return "No Grades Yet.";
		}

		if (number > 60) {
			return "Passing";
		} else {
			return "Failing";
		}
	}

	this.passFail = passFail;
})

.factory('StudentDTO', function() {

	function Student() {
		this.fname = "Taco";
		this.lname = "Bean";
		this.assignment = {};
		this.gpa = 0;
		this.reportCard = [
			
		];
	}

	Student.prototype.welcome = function() {
		return "Welcome Back to class " + this.fname;
	}

	Student.prototype.addGrade = function(name, grade) {
		this.reportCard.push(
				{ name: name, grade: grade}
			);
		this.assignment = {};
	}

	Student.prototype.calcGPA = function() {
		var obj = this.reportCard

		if (obj.length < 1) { 
			this.gpa = 0;	
			return "No Grades Yet."; 
		}

		var arr = []

		for ( idx in obj) {
			arr.push(obj[idx].grade);
		}

		var totalValue = arr.reduce(function(a, b) {
			return a + b;
		});
		
		var average = totalValue / arr.length

		this.gpa = average;
		return average;
	}

	Student.prototype.removeGrade = function(idx) {
		this.reportCard.splice(idx, 1);
	}

	Student.prototype.checkLetter = function() {
		this.gpa ++;
	}

	return Student;
})


.controller('mainController', function(StudentDTO, LETTERGRADES, summaryService) {
	var self = this;

	// Constructor Object
	self.student = new StudentDTO;

	// value service for letter grades
	self.letterGrades = LETTERGRADES;

	// utility functions
	self.passFailTest = summaryService.passFail;
	self.convertToLetter = summaryService.convertToLetter;

})

// ngShow vs ngHide before any assignments or grades.
// edit student