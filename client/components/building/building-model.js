goog.provide('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.effect.EffectModel');


goog.scope(function() {
  taipan3k.components.building.BuildingModel = class {
    constructor() {
      const BuildingModel = taipan3k.components.building.BuildingModel;

      this.name = BuildingModel.DEFAULT_NAME;
      this.requirements = BuildingModel.DEFAULT_REQUIREMENTS;
      this.effects = BuildingModel.DEFAULT_REQUIREMENTS;
    }
  }
  const BuildingModel = taipan3k.components.building.BuildingModel;

  BuildingModel.DEFAULT_NAME = 'Untitled';
  BuildingModel.DEFAULT_REQUIREMENTS = [];
  BuildingModel.DEFAULT_EFFECTS = [];
});
