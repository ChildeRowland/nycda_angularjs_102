(function() {
  'use strict';

// Controller TESTS
  describe('Test TestFilterController', function() {
    var toTest;
    beforeEach(module('review'));

    beforeEach(inject(function(_$controller_, _NAMELIST_) {
      toTest = _$controller_('TestFilterController', {
        NAMELIST: _NAMELIST_
      });
    }));
    
    it('should load properly', function() {
      expect(toTest.welcome).toBeTruthy();
      // expect(toTest.NAMELIST).arrayContaining([{
      //   fname: "Taco",
      //   lname: "Beans",
      //   age: 12
      // }]);
    });
  });

// Factory TESTS
  describe('Test PersonDTO Factory', function() {
    var toTest;
    var toTestWithInit;

    beforeEach(module('review'));
    beforeEach(inject(function(_PersonDTO_) {
      toTest = new _PersonDTO_();
      toTestWithInit = new _PersonDTO_({name: 'Tom'});
    }));

    it('should initialize correctly', function() {
      expect(toTest.name).toBe('Taco');
    });

    it('should override the defaults', function() {
      expect(toTestWithInit.name).toBe('Tom');
    });

  });


// Service Test
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

    it('should calculate the average of an array with a single item', function() {
      var myArray = [1];
      expect(toTest.calcAverage(myArray)).toBe(1);
    });

    it('should calculate the average of an empty array', function() {
      var myArray = [];
      expect(toTest.calcAverage(myArray)).toBe(0);
    });

  });

})();
