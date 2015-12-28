"use strict"
goog.require('taipan3k.components.effect.EffectModel');


goog.scope(function() {
  const EffectModel = taipan3k.components.effect.EffectModel;

  describe('EffectModel', function() {
    describe('should initialize the default', function() {
      let actual = new EffectModel();
      
      it('targetType', function() {
        expect(actual.targetType).toEqual(EffectModel.DEFAULT_TARGET_TYPE);
      });
      
      it('targetAttribute', function() {
        expect(actual.targetAttribute).toEqual(EffectModel.DEFAULT_TARGET_ATTRIBUTE);
      });
      
      it('actionName', function() {
        expect(actual.actionName).toEqual(EffectModel.DEFAULT_ACTION_NAME);
      });
      
      it('value', function() {
        expect(actual.value).toEqual(EffectModel.DEFAULT_VALUE);
      });
    });
  });
});
