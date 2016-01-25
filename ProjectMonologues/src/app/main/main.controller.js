(function() {
  'use strict';

  angular
    .module('monologues')
    .controller('MainController', function MainController() {
    var vm = this;

    vm.welcome = "Hello Tacos";
  });
})();
