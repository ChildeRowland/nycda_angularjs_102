(function() {
  'use strict';

  angular
    .module('review')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })

      .state('profiles', {
        url: '/profiles',
        templateUrl: 'app/profiles/profiles.html',
        controller: 'ProfilesController',
        controllerAs: 'ctrl'
      })

      .state('locations', {
        url: '/locations',
        templateUrl: 'app/locations/locations.html',
        controller: 'LocationsController',
        controllerAs: 'ctrl'
      })

      .state('data', {
        url: '/data',
        templateUrl: 'app/profiles/services/sampleData.json'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
