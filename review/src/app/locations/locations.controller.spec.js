(function() {
  'use strict';

  describe('controllers', function(){
    var self;

    beforeEach(module('review'));
    beforeEach(inject(function(_$controller_) {

      self = _$controller_('MainController');
      
    }));

    it('should have a timestamp creation date', function() {
      expect(self.creationDate).toEqual(jasmine.any(Number));
    });

    it('should define display a welcome', function() {
      expect(angular.isString(self.welcome)).toBeTruthy();
      expect(self.welcome.length > 5).toBeTruthy();
    });
  });
})();
