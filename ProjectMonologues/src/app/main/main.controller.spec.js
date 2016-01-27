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

    it('variables should be defined', function() {
      expect(toTest.welcome).not.toBe(undefined);
      // expect(MonologuesControllerDataService).not.toBe(undefined);
    });
  });


  // Testing for monologueServiceModule
  describe('Test monologueServiceModule', function() {
    var toTest;
    beforeEach(module('monologueServiceModule'));

    beforeEach(inject(function(_monologueResource_) {
      toTest = _monologueResource_;
    }));

    it('should blueprint some data', function() {
      expect(toTest).not.toBe(undefined);
    })

    beforeEach(inject(function(_MonologueRESTService_) {
      toTest = _MonologueRESTService_;
    }));

    it('should do some logic', function() {
      expect(toTest).toBeTruthy;
    });
  });


})();

