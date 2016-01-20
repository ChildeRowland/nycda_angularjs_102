(function() {
  'use strict';

  angular
    .module('template')

    .constant('UI_STATES', {

      kMainState: {
        name: 'main'
      },

      kContactsState: {
        name: 'contacts'
      },

      kAddState: {
        name: 'add'
      }
    })

    .config(function ($stateProvider, $urlRouterProvider, UI_STATES) {

    $stateProvider

      .state(UI_STATES.kMainState.name, {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })

      .state(UI_STATES.kContactsState.name, {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsController',
        controllerAs: 'ctrl'
      })

      .state(UI_STATES.kAddState.name, {
        url: '/add',
        templateUrl: 'app/add/add.html',
        controller: 'AddController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  })

    .controller('NavigationController', function(UI_STATES) {
      var self = this;

      self.states = UI_STATES;
    })

})();
