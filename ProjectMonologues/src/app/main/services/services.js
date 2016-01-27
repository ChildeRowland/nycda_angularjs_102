(function() {
  'use strict';

  angular
    .module('monologueServiceModule', ['ngResource'])

    .factory('monologueResource', function($resource) {
      return $resource('sampleData.json');
    })

    .service('MonologueRESTService', function($log, monologueResource) {
      var vm = this;

      vm.getMonologuesList = function(params, onCompletion) {
        $log.debug('Getting Monologue List with params: ', params);
        monologueResource.query(params).$promise
        .then(function onSuccess(responce) {
          onCompletion(true, responce);
        }, function onError(error) {
          onCompletion(false, error);
        })
      };
    })

    .service('MonologuesControllerDataService', function(MonologueRESTService) {
      var vm = this;

      vm.getMonologuesListForCtrl = function(params, onCompletion) {
        MonologueRESTService.getMonologuesList(params, function(isValid, responce) {
          onCompletion(isValid, responce);
        })
      };
    }) 

})();
