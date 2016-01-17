"use strict"
goog.require('taipan3k.components.effect.EffectModel');


goog.scope(function() {
  const EffectModel = taipan3k.components.effect.EffectModel;

  describe('EffectModel', function() {
    describe('.constructor', function() {
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

      describe('should allow overriding the default value for', function() {
        it('targetType', function() {
          const PROVIDED = 'provided';
          let actual = new EffectModel(PROVIDED);
          expect(actual.targetType).toEqual(PROVIDED);
        });

        it('targetAttribute', function() {
          const PROVIDED = 'provided';
          let actual = new EffectModel(null, PROVIDED);
          expect(actual.targetAttribute).toEqual(PROVIDED);
        });

        it('actionName', function() {
          const PROVIDED = 'provided';
          let actual = new EffectModel(null, null, PROVIDED);
          expect(actual.actionName).toEqual(PROVIDED);
        });

        it('value', function() {
          const PROVIDED = 42;
          let actual = new EffectModel(null, null, null, PROVIDED);
          expect(actual.value).toEqual(PROVIDED);
        });
      });
    });

    describe('.fromJSON', function() {
      it('should return a new instance populated from the provided object', function() {
        const PROVIDED_TARGET_TYPE = 'target type';
        const PROVIDED_TARGET_ATTR = 'target attribute';
        const PROVIDED_ACTION_NAME = 'target action'
        const PROVIDED_VALUE = 42;
        const PROVIDED = {
          targetType: PROVIDED_TARGET_TYPE,
          targetAttribute: PROVIDED_TARGET_ATTR,
          actionName: PROVIDED_ACTION_NAME,
          value: PROVIDED_VALUE};

        let actual = EffectModel.fromJSON(PROVIDED);

        expect(actual).toEqual(new EffectModel(
            PROVIDED_TARGET_TYPE, PROVIDED_TARGET_ATTR, PROVIDED_ACTION_NAME, PROVIDED_VALUE));
      });
    });
  });
});
