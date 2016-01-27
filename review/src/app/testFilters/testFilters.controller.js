(function() {
  'use strict';

  angular.module('review')

  .service('MathCalc', function() {
    var self = this;

    self.calcAverage = function(array) {
      if (array.length < 1) {
        return 0;
      }

      var totalValue = array.reduce(function(previous, current) {
        return previous + current;
      }, 0);

      return totalValue / array.length;
    };
  })

  .factory('PersonDTO', function() { 
    function PersonDTO(init) {
      this.name = 'Taco';

      angular.extend(this, init);
    }
    return PersonDTO;
  })

  .value('NAMELIST', [
      {
        fname: "Taco",
        lname: "Beans",
        age: 12
      }, {
        fname: "Lobsta",
        lname: "Roll",
        age: 72
      }, {
        fname: "Jelly",
        lname: "Jam",
        age: 48
      }, {
        fname: "Hot",
        lname: "Dog",
        age: 120
      }
  ])

    .filter('ageRange', function() {
      return function(data, criteria) {
        var results;
        if (criteria && age) {
          if (criteria === '>') {
            results = data.filter(function(item) {
              return parseInt(item.age) > parseInt(age);
            });
          } else if (criteria === '<') {
            results = data.filter(function(item) {
              return parseInt(item.age) < parseInt(age);
            });
          } else {
            results = data.filter(function(item) {
              return parseInt(item.age) === parseInt(age);
            });
          }
          return results;
        } else {
          return data
        }
      }
    })

    .controller('TestFilterController', function($filter, NAMELIST) {
      var self = this;
      self.welcome = "Test and Filter";

      self.nameList = NAMELIST;
      self.results = self.nameList;
      
      self.onFilterCriteria = function() {
        var filterFunc = $filter('filter');

        self.results = filterFunc(self.nameList, self.criteria);
      };
  });
})();
