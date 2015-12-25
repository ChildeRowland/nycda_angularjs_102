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

	function Music() {
		this.masterList = [
			{ genre: "Rock",
				songs: [
					{ title: "rock1", type: "nonexplicit", selected: false },
					{ title: "rock2", type: "explicit", selected: false },
					{ title: "rock3", type: "explicit", selected: false }
			]}, 
			{ genre: "Pop",
				songs: [
					{ title: "Pop1", type: "explicit", selected: false },
					{ title: "Pop2", type: "nonexplicit", selected: false },
					{ title: "Pop3", type: "explicit", selected: false }
			]},
			{ genre: "Talk",
				songs: [
					{ title: "Talk1", type: "nonexplicit", selected: false },
					{ title: "Talk2", type: "explicit", selected: false },
					{ title: "Talk3", type: "explicit", selected: false }
			]}
		]
	}

	Music.prototype.getGenres = function() {
		array = [];
		for ( index in this.masterList ) {
			array.push(this.masterList[index].genre);
		}
		return array;
	}

	return Music;

})

.controller('mainController', function(UserDTO, MusicDTO) {
	var self = this;
	self.user = new UserDTO;
	self.music = new MusicDTO;

	self.genreList = self.music.getGenres();
	console.log(self.genreList);

	self.welcome = "'s up";

	self.updateSelection = function(boolean) {
		console.log(boolean);
	}

	self.genreListIndex = 0;

	self.selected = [];
	console.log(self.music.masterList[0].songs[0]);

})