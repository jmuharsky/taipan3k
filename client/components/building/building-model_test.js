"use strict"
goog.require('taipan3k.components.building.BuildingModel');

const BuildingModel = taipan3k.components.building.BuildingModel;

describe('BuildingModel', function() {
  describe('should initialize the default', function() {
    let actual = new BuildingModel();
    
    it('name', function() {
      expect(actual.name).toEqual(BuildingModel.DEFAULT_NAME);
    });
    
    it('requirements', function() {
      expect(actual.requirements).toEqual(BuildingModel.DEFAULT_REQUIREMENTS);
    });
    
    it('effects', function() {
      expect(actual.effects).toEqual(BuildingModel.DEFAULT_EFFECTS);
    });
  });
});
