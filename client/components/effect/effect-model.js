goog.provide('taipan3k.components.effect.EffectModel');
goog.provide('taipan3k.components.effect.EffectScales');

goog.require('taipan3k.components.entity.EntityTypes');


goog.scope(function() {
  const EntityTypes = taipan3k.components.entity.EntityTypes;

  /** @enum {string} */
  taipan3k.components.effect.EffectScales = {
    ABSOLUTE: 'Absolute',
    PERCENTAGE: '%'
  }
  const EffectScales = taipan3k.components.effect.EffectScales;

  taipan3k.components.effect.EffectModel = class {
    /**
     * Constructs a new Effect model. Effects modify attributes of entities.
     * @param {?EntityTypes} targetType
     * @param {string} targetAttribute
     * @param {string} actionName
     * @param {number} value
     * @param {?EffectScales=} scale
     */
    constructor(targetType, targetAttribute, actionName, value, scale) {
      const EffectModel = taipan3k.components.effect.EffectModel;

      this.targetType = targetType || EffectModel.DEFAULT_TARGET_TYPE;
      this.targetAttribute = targetAttribute || EffectModel.DEFAULT_TARGET_ATTRIBUTE;
      this.actionName = actionName || EffectModel.DEFAULT_ACTION_NAME;
      this.value = value || EffectModel.DEFAULT_VALUE;
      this.scale = scale || EffectModel.DEFAULT_SCALE;
    }
  }
  const EffectModel = taipan3k.components.effect.EffectModel;

  EffectModel.fromJSON = function(obj) {
    return new EffectModel(
        obj.targetType, obj.targetAttribute, obj.actionName, obj.value, obj.scale);
  }

  EffectModel.DEFAULT_TARGET_TYPE = EntityTypes.PLAYER;
  EffectModel.DEFAULT_TARGET_ATTRIBUTE = 'unset';
  EffectModel.DEFAULT_ACTION_NAME = 'UNSET';
  EffectModel.DEFAULT_VALUE = 0;
  EffectModel.DEFAULT_SCALE = EffectScales.ABSOLUTE;
});
