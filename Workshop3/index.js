angular.module('playListApp', [])

.factory('UserDTO', function() {

	function User() {
		this.name = "";
		this.age = "";
		//this.playList = []
	}

	User.prototype.update = function(name, age) {
		this.name = name;
		this.age = age;
		console.log(this.name, this.age);
	}

	return User;
})

.factory('MusicDTO', function() {

	function music() {[
		{ name: "Rock",
			songs: [
				{ title: "rock1", type: "" },
				{ title: "rock2", type: "" },
				{ title: "rock3", type: "" }
		]}, 
		{ name: "Pop",
			songs: [
				{ title: "Pop1", type: "" },
				{ title: "Pop2", type: "" },
				{ title: "Pop3", type: "" }
		]},
		{ name: "Talk",
			songs: [
				{ title: "Talk1", type: "" },
				{ title: "Talk2", type: "" },
				{ title: "Talk3", type: "" }
		]}
	]}

})

.controller('mainController', function(UserDTO) {
	var self = this;
	self.user = new UserDTO;

	self.welcome = "'s up";

})