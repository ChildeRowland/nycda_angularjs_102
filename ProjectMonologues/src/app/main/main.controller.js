(function() {
  'use strict';

  angular
    .module('monologues')

    .filter('adjustedFuzzySearch', function($filter) {
      return function(data, criteria) {
        var results;
        results = $filter('filter')(data, excludeProperties, criteria);

        var excludeProperties = function(item) {
          var value = criteria.toLowerCase();
          return item.character.toLowerCase().indexOf(value || '') !== -1 || 
                 item.playwright.toLowerCase().indexOf(value || '') !== -1;
        };

        return results;
      }
    })

    .controller('MainController', function($filter, $log, MonologuesControllerDataService) {
      var vm = this;

      vm.welcome = "Main Controller";
      vm.allMonologues;
      vm.userInput;
      vm.results;

      MonologuesControllerDataService.getMonologuesListForCtrl(null, 
        function (isValid, responce) {
        if (isValid) {
          vm.allMonologues = responce;
        } else {
          $log('BEANS')
        }
      });

      vm.adjustedFilterSearch = function() {
        vm.results = $filter('adjustedFuzzySearch')(vm.allMonologues, vm.userInput);
      };

      vm.filterSearch = function() {
        if ( vm.userInput.length < 1 ) { return vm.results; }

        vm.results = $filter('filter')(vm.allMonologues, vm.excludeProperties, vm.userInput);  
      };

      vm.excludeProperties = function(item) {
        var value = vm.userInput.toLowerCase();
        return item.character.toLowerCase().indexOf(value || '') !== -1 || 
               item.playwright.toLowerCase().indexOf(value || '') !== -1;
      };
      
  });
})();

