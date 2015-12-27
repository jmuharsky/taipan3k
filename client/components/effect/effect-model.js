goog.provide('taipan3k.components.effect.EffectModel');
goog.require('taipan3k.components.entity.EntityTypes');


goog.scope(function() {
  const EntityTypes = taipan3k.components.entity.EntityTypes;

  taipan3k.components.effect.EffectModel = class {
    constructor() {
      const EffectModel = taipan3k.components.effect.EffectModel;

      this.targetType = EffectModel.DEFAULT_TARGET_TYPE;
      this.targetAttribute = EffectModel.DEFAULT_TARGET_ATTRIBUTE;
      this.actionName = EffectModel.DEFAULT_ACTION_NAME;
      this.value = EffectModel.DEFAULT_VALUE;
    }
  }
  const EffectModel = taipan3k.components.effect.EffectModel;

  EffectModel.DEFAULT_TARGET_TYPE = EntityTypes.Player;
  EffectModel.DEFAULT_TARGET_ATTRIBUTE = 'unset';
  EffectModel.DEFAULT_ACTION_NAME = 'UNSET';
  EffectModel.DEFAULT_VALUE = 0;
});
