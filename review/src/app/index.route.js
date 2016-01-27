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

      .state('construction', {
        url: '/construction',
        templateUrl: 'app/construction/construction.html',
        controller: 'ConstructionController',
        controllerAs: 'ctrl'
      })

      .state('tests', {
        url: '/tests',
        templateUrl: 'app/testFilters/testFilters.html',
        controller: 'TestFilterController',
        controllerAs: 'ctrl'
      })

      .state('custom', {
        url: '/custom',
        templateUrl: 'app/custom/custom.html',
        controller: 'CustomController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
