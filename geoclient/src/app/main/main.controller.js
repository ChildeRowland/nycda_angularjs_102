(function() {
  'use strict';

  angular.module('template')

  .controller('MainController', function MainController(GeoclientResource) {
    var self = this;

    self.welcome = "Tacos";

    self.userInput = "";
    self.results = "";



      var requestObject = GeoclientResource.getAddress({
        // address: self.userInput
      });

      requestObject.$promise
      .then(function onSuccess(responce) {
        console.log(responce);
      }, function onError(error) {
      	console.log("error");
      });
    
  });

})();
