'use strict'
goog.require('taipan3k.components.entity.EntityTypes');
goog.require('taipan3k.components.requirement.RequirementModel');


goog.scope(function() {
  const EntityTypes = taipan3k.components.entity.EntityTypes;
  const RequirementModel = taipan3k.components.requirement.RequirementModel;

  describe('RequirementModel', function() {
    describe('.constructor', function() {
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
        });
      });
      
      describe('should allow overriding the default value for', function() {
        it('targetType', function() {
          const PROVIDED = 'provided';
          let actual = new RequirementModel(PROVIDED);
          expect(actual.targetType).toEqual(PROVIDED);
        });

        it('targetAttribute', function() {
          const PROVIDED = 'provided';
          let actual = new RequirementModel(null, PROVIDED);
          expect(actual.targetAttribute).toEqual(PROVIDED);
        });

        it('minValue', function() {
          const PROVIDED = 42;
          let actual = new RequirementModel(null, null, PROVIDED);
          expect(actual.minValue).toEqual(PROVIDED);
        });
      });
    });
    
    describe('.fromJSON', function() {
      it('should return a new instance populated from the provided object', function() {
        const PROVIDED_TARGET_TYPE = 'target type';
        const PROVIDED_TARGET_ATTR = 'target attribute';
        const PROVIDED_MIN_VALUE = 42;
        const PROVIDED = {
          targetType: PROVIDED_TARGET_TYPE,
          targetAttribute: PROVIDED_TARGET_ATTR,
          minValue: PROVIDED_MIN_VALUE};
          
        let actual = RequirementModel.fromJSON(PROVIDED);
        
        expect(actual).toEqual(new RequirementModel(
            PROVIDED_TARGET_TYPE, PROVIDED_TARGET_ATTR, PROVIDED_MIN_VALUE));
      });
    });
  });
});
