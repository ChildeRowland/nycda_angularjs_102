(function() {
  'use strict';

  angular
    .module('monologues')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
