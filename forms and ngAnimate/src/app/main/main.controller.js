(function() {
  'use strict';

  angular.module('template')

  .controller('MainController', function MainController() {
    var self = this;

    self.welcome = "Tacos";

    self.boxes = [];

    

    self.states = [
      { name: "California", abbr: 'CA'},
      { name: "Florida", abbr: 'FL'},
      { name: "New York", abbr: 'NY'}
    ];

    self.onSubmit = function() {
      console.log("Form Submitted");
    }
    
  });

})();
