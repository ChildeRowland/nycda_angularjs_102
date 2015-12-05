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

homeWorkOne.controller('folderController', function() {
	var self = this

	self.message = "HW1 Nested Folders"

	self.documentsDir = { documents: ["declairation_of_macho"] };
	self.picturesDir = { pictures: ["cat_with_taco", "cat_with_donkey" ] };
	self.recipesDir = { recipes: ["candy_bread", "sweets_confit", "flavor_crystal_surprise"] };

	self.homeDir = [ self.documentsDir, self.picturesDir, self.recipesDir ];

	self.input = "";

	self.addNewFile = function(input, path) {
		if (input.length < 1) {
			alert("File Name can't be Empty")
		} else {
			var strToObj = ("self." + path + "Dir");
			eval(strToObj)[path].push(input);
			self.input = "";
		}
	}

})