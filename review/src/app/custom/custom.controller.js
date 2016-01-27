(function() {
  'use strict';

  angular.module('review')

  .directive('cmBasic', function() {
  	return {
  		template: '<h1>Welcome to Custom Directives</h1>'
  	};
  })

  .directive('cmBasicUrl', function() {
  	return {
  		templateURL: 'app/custom/partials/gd-basic-url.html'
  	};
  })

  .directive('cmContactCeo', function() {
  	return {
  		templateURL: 'app/custom/partials/contact.html',
  		controller: 'CustomController',
  		controllerAs: 'ctrl',
  		scope: true
  	};
  })

    .controller('CustomController', function() {
    var self = this;

    self.welcome = "Custom Directives";

  });
})();
