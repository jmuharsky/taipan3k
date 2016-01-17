'use strict'
goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.port.PortBuildingModel');


goog.scope(function() {
  const BuildingModel = taipan3k.components.building.BuildingModel;
  const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

  describe('PortBuildingModel', function() {
    let providedBuilding;

    beforeEach(function() {
      providedBuilding = new BuildingModel('PROVIDED_BUILDING');
    });

    describe('constructor', function() {
      let actual;

      beforeEach(function() {
        actual = new PortBuildingModel(providedBuilding);
      });

      describe('should initialize the default', function() {
        it('name', function() {
          expect(actual.name).toEqual(providedBuilding.name);
        });

        it('active', function() {
          expect(actual.active).toEqual(PortBuildingModel.DEFAULT_ACTIVE);
        });
      });

      it('should store a reference to the provided template', function() {
        expect(actual.template).toEqual(providedBuilding);
      });
    });
  });
});
