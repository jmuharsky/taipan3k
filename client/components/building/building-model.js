goog.provide('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.effect.EffectModel');
goog.require('taipan3k.components.requirement.RequirementModel');


goog.scope(function() {
  const EffectModel = taipan3k.components.effect.EffectModel;
  const RequirementModel = taipan3k.components.requirement.RequirementModel;

  taipan3k.components.building.BuildingModel = class {
    /**
     * Creates a new building template model.
     * A template contains the rules and effects referenced by building instances
     * in ports.
     * @param {?string=} name A unique name for the building template.
     * @param {?Array.<!RequirementModel>=} requirements A list of requirements for the building.
     * @param {?Array.<!EffectModel>=} effects An array of effects for the building.
     */
    constructor(name, requirements, effects) {
      const BuildingModel = taipan3k.components.building.BuildingModel;

      this.name = name || BuildingModel.DEFAULT_NAME;
      this.requirements = requirements || BuildingModel.DEFAULT_REQUIREMENTS();
      this.effects = effects || BuildingModel.DEFAULT_EFFECTS();
    }

    static DEFAULT_REQUIREMENTS() {
      return [];
    }

    static DEFAULT_EFFECTS() {
      return [];
    }
  }
  const BuildingModel = taipan3k.components.building.BuildingModel;

  BuildingModel.fromJSON = function(obj) {
    let result = new BuildingModel(obj.name);

    if (goog.isDefAndNotNull(obj.requirements)) {
      for (let req of obj.requirements) {
        result.requirements.push(RequirementModel.fromJSON(req));
      }
    }

    if (goog.isDefAndNotNull(obj.effects)) {
      for (let req of obj.effects) {
        result.effects.push(EffectModel.fromJSON(req));
      }
    }

    return result;
  }

  BuildingModel.DEFAULT_NAME = 'Untitled';
});
