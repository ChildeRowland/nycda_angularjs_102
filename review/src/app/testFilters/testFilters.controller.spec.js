(function() {
  'use strict';

  // describe('Test TestFilterController', function() {
  //   var toTest;
  //   beforeEach(module('review'));

  //   beforeEach(inject(function(_$controller_) {
  //     toTest = _$controller_('TestFilterController')
  //   }));
    
  // })

  // describe('Test PersonDTO Factory', function() {
  //   var toTest;

  //   beforeEach(module('review'));
  //   beforeEach(inject(function(_PersonDTO_) {
  //     toTest = new _PersonDTO_();
  //   }));

  //   it('should initialize correctly', function() {
  //     expect(toTest).toBe('Taco');
  //   });
  // });

  describe('Test MathCalc service', function() {

    var toTest;

    beforeEach(module('review'));
    beforeEach(inject(function(_MathCalc_) {
      toTest = _MathCalc_;
    }));

    it('should calculate the average of an array', function() {
      var myArray = [1, 2, 3, 4, 5];

      expect(toTest.calcAverage(myArray)).toBe(3);
    });

    // it('should calculate the average of an empty array', function() {
    //   var myArray = [];

    //   expect(toTest.calcAverage(myArray)).toBe(3);
    // });

  });

})();
