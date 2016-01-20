(function() {
  'use strict';

  angular.module('template')

  .controller('AddController', function AddController(contactsProvider) {
    var self = this;

    self.welcome = "Add Page";

    self.contacts = contactsProvider;

    self.addContact = function() {
    	self.contacts.list.push({name: self.name})
    };
    
  });

})();
