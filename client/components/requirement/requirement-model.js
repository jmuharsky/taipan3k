goog.provide('taipan3k.components.requirement.RequirementModel');
goog.require('taipan3k.components.entity.EntityTypes');


goog.scope(function() {
  const EntityTypes = taipan3k.components.entity.EntityTypes;

  taipan3k.components.requirement.RequirementModel = class {
    constructor() {
      const RequirementModel = taipan3k.components.requirement.RequirementModel;

      this.targetType = RequirementModel.DEFAULT_TARGET_TYPE;
      this.targetAttribute = RequirementModel.DEFAULT_TARGET_ATTRIBUTE;
      this.minValue = RequirementModel.DEFAULT_MIN_VALUE;
    }
  }
  const RequirementModel = taipan3k.components.requirement.RequirementModel;

  RequirementModel.DEFAULT_TARGET_TYPE = EntityTypes.PERSON;
  RequirementModel.DEFAULT_TARGET_ATTRIBUTE = 'unset';
  RequirementModel.DEFAULT_MIN_VALUE = 0;
});
