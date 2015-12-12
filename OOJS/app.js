function logName() {
	console.log(this.name);
}

var me = {
	name: "taco"
};

var you = {
	name: "lobsta"
};

// this is the calling object
me.logger = logName;
you.logger = logName;

console.log(me.logger());
console.log(you.logger());

function Car(make) {
	this.make = make;
};

Car.prototype.changeName = function(make, model) {
	this.make = make;
	this.model = model;
};

var myCar = new Car("Ford");
console.log(myCar);

myCar.changeName("BMW");
console.log(myCar);

// Constructor Function
function Student(name, grade) {
	this.name = name;
	this.grade = grade;
	this.class = convertion[grade];
}

Student.prototype.changeYear = function(grade) {
	this.grade = grade;
	this.class = convertion[grade];
}

var convertion = { 9: "Freshman", 10: "Sophmore", 11: "Junoir", 12: "Senior" };

var mick = new Student("Mickey", 9);
var vick = new Student("Vickey", 11);
console.log(mick);
console.log(vick);

mick.changeYear(10);
console.log(mick);

