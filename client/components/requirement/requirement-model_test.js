'use strict'
goog.require('taipan3k.components.requirement.RequirementModel');


goog.scope(function() {
  const RequirementModel = taipan3k.components.requirement.RequirementModel;

  describe('RequirementModel', function() {
    describe('should initialize the default', function() {
      let actual = new RequirementModel();
      
      it('targetType', function() {
        expect(actual.targetType).toEqual(RequirementModel.DEFAULT_TARGET_TYPE);
      });
      
      it('targetAttribute', function() {
        expect(actual.targetAttribute).toEqual(RequirementModel.DEFAULT_TARGET_ATTRIBUTE);
      });
      
      it('minValue', function() {
        expect(actual.minValue).toEqual(RequirementModel.DEFAULT_MIN_VALUE);
      })
    });
  });
});
