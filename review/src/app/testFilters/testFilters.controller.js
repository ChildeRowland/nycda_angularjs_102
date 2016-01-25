(function() {
  'use strict';

  angular.module('review')

  .service('MathCalc', function() {
    var self = this;

    self.calcAverage = function(array) {

      return 0;
    };
  })

  .factory('PersonDTO', function() { 
    function PersonDTO() {

    }
    return PersonDTO;
  })

    .controller('TestFilterController', function() {
      var self = this;
      self.welcome = "Test and Filter";
  });
})();
