goog.provide('taipan3k.components.requirement.RequirementModel');
goog.require('taipan3k.components.entity.EntityTypes');


goog.scope(function() {
  const EntityTypes = taipan3k.components.entity.EntityTypes;

  taipan3k.components.requirement.RequirementModel = class {
    constructor(targetType, targetAttribute, minValue) {
      const RequirementModel = taipan3k.components.requirement.RequirementModel;

      this.targetType = targetType || RequirementModel.DEFAULT_TARGET_TYPE;
      this.targetAttribute = targetAttribute || RequirementModel.DEFAULT_TARGET_ATTRIBUTE;
      this.minValue = minValue || RequirementModel.DEFAULT_MIN_VALUE;
    }
  }
  const RequirementModel = taipan3k.components.requirement.RequirementModel;

  RequirementModel.fromJSON = function(obj) {
    return new RequirementModel(obj.targetType, obj.targetAttribute, obj.minValue);
  }

  RequirementModel.DEFAULT_TARGET_TYPE = EntityTypes.PLAYER;
  RequirementModel.DEFAULT_TARGET_ATTRIBUTE = 'unset';
  RequirementModel.DEFAULT_MIN_VALUE = 0;
});
