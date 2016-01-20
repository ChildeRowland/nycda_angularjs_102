angular.module('template')

.service('contactsProvider', function() {
	var self = this;

	self.list = [
		{name: "Bruce"},
		{name: "Diana"},
		{name: "Clark"}
	];
})