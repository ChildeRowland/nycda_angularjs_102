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

	self.documentsDir = { documents: ["declaration_of_macho"] };
	self.picturesDir = { pictures: ["cat_with_taco", "cat_with_donkey" ] };
	self.recipesDir = { recipes: ["candy_bread", "sweets_confit", "flavor_crystal_surprise"] };

	self.homeDir = [ self.documentsDir, self.picturesDir, self.recipesDir ];

	self.name = "documents"

	self.input = "";

	self.addNewFile = function(input, path) {
		if (input.length < 1) {
			alert("File Name can't be Empty")
		} else {

			// this is wacky, but I was unable to pass the actually object from the view.  I settled for passing a string and evaluting the variable name.
			var fileObj = eval("self." + path + "Dir");

			// Trying to check for duplicates and add a string to the end.
			// for ( x in fileObj[path]) { 
			// 	if ( x == input ) {
			// 		var input = (input + "_copy");
			// 		console.log(x);
			// 	}
			// }

			fileObj[path].push(input);
			self.input = "";
		}
	}

})