(function() {
  'use strict';

  angular.module('template')

  .controller('MainController', function MainController(GoogleResource) {
    var self = this;

    self.welcome = "Enter a Location:";

    self.userInput = "";
    self.results = "";

    self.update = function() {

      var requestObject = GoogleResource.getAddress({
        address: self.userInput
      });

      requestObject.$promise
      .then(function onSuccess(responce) {
      	self.results = responce.results;
        console.log(responce);
      }, function onError(error) {
      	console.log("error");
      });

    };

    
  });

})();
