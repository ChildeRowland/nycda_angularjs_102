angular.module('WS2', [])

.value('LETTERGRADES', [

	{range: 91, grade: "A"},
	{range: 81, grade: "B"},
	{range: 71, grade: "C"},
	{range: 61, grade: "D"},
	{range: 0, grade: "F"}

])

.factory('StudentDTO', function() {

	function Student() {
		this.fname = "Taco";
		this.lname = "Bean";
		this.assignment = {};
		// this.gpa;
		this.reportCard = [
			{ name: "HW1", grade: 70}
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
		var arr = []
		var obj = this.reportCard

		for ( idx in obj) {
			arr.push(obj[idx].grade);
		}

		var totalValue = arr.reduce(function(a, b) {
			return a + b;
		});
		
		var average = totalValue / arr.length

		return average;
	}

	Student.prototype.removeGrade = function(idx) {
		this.reportCard.splice(idx, 1);
	}

	return Student;
})


.controller('mainController', function(StudentDTO, LETTERGRADES) {
	var self = this;
	self.student = new StudentDTO;
	self.letterGrades = LETTERGRADES;


	self.convertToLetter = function() {
		var object = self.letterGrades;
		var gpa = self.student.calcGPA()

		for ( idx in self.letterGrades) {
			if (gpa >= object[idx].range) {
				return object[idx].grade;
			}
		}
	};

	self.passFail = function() {
		var gpa = self.student.calcGPA();
		if (gpa > 60) {
			return "Passing"
		} else {
			return "Failing"
		}
	};

})