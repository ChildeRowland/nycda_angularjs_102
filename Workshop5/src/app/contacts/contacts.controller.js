(function() {
  'use strict';

  angular.module('template')

  .controller('ContactsController', function ContactsController(contactsProvider) {
    var self = this;

    self.welcome = "Contacts Page";

    self.contacts = contactsProvider;
    
  });

})();
