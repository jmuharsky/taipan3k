"use strict"
goog.require('taipan3k.util.DictUtil');


goog.scope(function() {
  const DictUtil = taipan3k.util.DictUtil;

  describe('DictUtil.resolveProperty', function() {
    it('should return a top-level property', function() {
      let providedValue = 'PROVIDED_VALUE';
      let providedObject = {PROVIDED: providedValue};
      let providedExpr = 'PROVIDED';

      let actual = DictUtil.resolveProperty(providedObject, providedExpr);
      expect(actual).toEqual(providedValue);
    });

    it('should return a nested property one level deep', function() {
      let providedValue = 'PROVIDED_VALUE';
      let providedObject = {PARENT: {PROVIDED: providedValue}}
      let providedExpr = 'PARENT.PROVIDED';

      let actual = DictUtil.resolveProperty(providedObject, providedExpr);
      expect(actual).toEqual(providedValue);
    })
  });

  describe('DictUtil.adjustProperty', function() {
    it('should modify the property by the provided value', function() {
      let providedValue = 42;
      let providedObject = {PARENT: {PROVIDED: providedValue}}
      let providedExpr = 'PARENT.PROVIDED';
      let providedAdjustment = 24;

      let expectedValue = providedValue + providedAdjustment;

      DictUtil.adjustProperty(providedObject, providedExpr, providedAdjustment);

      let actualValue = providedObject['PARENT']['PROVIDED'];

      expect(actualValue).toEqual(expectedValue);
    });
  });
});
