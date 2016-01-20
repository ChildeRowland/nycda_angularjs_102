(function() {
  'use strict';

  angular.module('template')

  .constant('UI_STATES', {
    kMainState: { name: 'home' },
    kStoreState: { name: 'contact' }
  })
    
    .config(function ($stateProvider, $urlRouterProvider, UI_STATES) {
    
    $stateProvider
      
      .state(UI_STATES.kMainState.name, {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })

      .state(UI_STATES.kContactState.name, {
        url: '/store',
        templateUrl: 'app/store/store.html',
        controller: 'StoreController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  })

    .controller('NavigationCtrl', function(UI_STATES) {
      var self = this;

      self.states = UI_STATES;
    });

})();
