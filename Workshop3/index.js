angular.module('playListApp', [])

.factory('UserDTO', function() {

	function User() {
		this.name = "";
		this.age = "";
		//this.playList = []
	}

	User.prototype.addUser = function(name, age) {
		if ( name == undefined || age == undefined ) {
			return alert('Please enter name and age.');
		}
		this.name = name;
		this.age = age;
	}

	return User;
})

.factory('MusicDTO', function() {

	function Music() {
		this.masterList = [
			{ genre: "Rock",
				songs: [
					{ title: "rock1", type: "nonexplicit" },
					{ title: "rock2", type: "explicit" },
					{ title: "rock3", type: "explicit" }
			]}, 
			{ genre: "Pop",
				songs: [
					{ title: "Pop1", type: "explicit" },
					{ title: "Pop2", type: "nonexplicit" },
					{ title: "Pop3", type: "nonexplicit" }
			]},
			{ genre: "Talk",
				songs: [
					{ title: "Talk1", type: "nonexplicit" },
					{ title: "Talk2", type: "explicit" },
					{ title: "Talk3", type: "nonexplicit" }
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

	Music.prototype.addSong = function() {
		array = [];
		for ( index in this.masterList ) {
			
			for ( idx in this.masterList[index].songs ) {

				if ( this.masterList[index].songs[idx].selected === true ) {
					array.push( this.masterList[index].songs[idx] );
				}
			}
		}
		for ( index in array ) {
			delete array[index].selected;
		}
		return array;
	}

	Music.prototype.isNonExplicit = function(index, idx, lyricType) {
		var songObject = this.masterList[index].songs[idx]
		if ( songObject.type === "nonexplicit" || 
			( songObject.type === "explicit" && lyricType === "explicit" ) ) {
			return true;
		}
	}

	Music.prototype.removeExplicit = function() {
		for ( index in this.masterList) {
			for ( idx in this.masterList[index].songs ) {
				if ( this.masterList[index].songs[idx].selected === true && 
			     	 this.masterList[index].songs[idx].type === "explicit" ) { 

						this.masterList[index].songs[idx].selected = false;
				}
			}
		}
	}

	return Music;
})

.service('validateService', function() {

	checkForEmpty = function(value) {
		if ( Number.isInteger(value)) {
			value = value.toString();
		}

		if ( value.length > 0 ) {
			return true;
		}
	}

	this.checkForEmpty = checkForEmpty;

	checkForAge = function(number) {
		if ( number >= 18 ) {
			return true;
		}
	}

	this.checkForAge = checkForAge;

})

.service('uploadService', function() {

	newSong = function() {
		return { title: "", type: "nonexplicit" }
	}

	this.newSong = newSong;

	uploadSong = function(array, object) {
		array.push(object);
	}

	this.uploadSong = uploadSong;

})

.controller('mainController', function(UserDTO, MusicDTO, validateService, uploadService) {
	var self = this;
	self.user = new UserDTO;
	self.music = new MusicDTO;
	self.checkForEmpty = validateService.checkForEmpty;
	self.checkForAge = validateService.checkForAge;
	self.newSong = uploadService.newSong();
	self.uploadSong = uploadService.uploadSong;

	self.lyricType = "safe";

	// Gather the genres into an array and set the default index to 0.
	self.genreList = self.music.getGenres();
	self.genreListIndex = 0;

	self.uploadAndReset = function(array, object) {
		self.uploadSong(array, object);
		self.newSong = uploadService.newSong();
	};

	self.summary = [];

	self.createPlayList = function() {
		self.summary = self.music.addSong();
		console.log(self.summary);
	}

	self.welcome = "Welcome to 'S up Tempo";
})