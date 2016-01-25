(function() {
  'use strict';

  describe('Test MainController', function(){
    var toTest;
    beforeEach(module('monologues'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
      var scope = _$rootScope_.$new();
      toTest = _$controller_('MainController', {
        $scope: scope
      });
    }));

    it('should display a welcome in the view', function() {
      expect(toTest.welcome).not.toBe(undefined);
    });

  });
})();