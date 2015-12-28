'use strict'
goog.require('taipan3k.components.port.PortModel');


const PortModel = taipan3k.components.port.PortModel;


describe('PortModel', function() {
  describe('.constructor', function() {
    describe('should initialize the default', function() {
      let actual = new PortModel();

      it('name', function() {
        expect(actual.name).toEqual(PortModel.DEFAULT_NAME);
      });

      it('population', function() {
        expect(actual.population).toEqual(PortModel.DEFAULT_POPULATION);
      });

      it('morale', function() {
        expect(actual.morale).toEqual(PortModel.DEFAULT_MORALE);
      });

      it('resources', function() {
        expect(actual.resources).toEqual(PortModel.DEFAULT_RESOURCES());
      });

      it('buildings', function() {
        expect(actual.buildings).toEqual(PortModel.DEFAULT_BUILDINGS());
      });

      it('events', function() {
        expect(actual.events).toEqual(PortModel.DEFAULT_EVENTS());
      });
    });
  });

  describe('addBuilding', function() {
    it('should add a building to the list', function() {
      let actual = new PortModel();

      expect(actual.buildings).toEqual([]);
      let providedName = 'bank';
      let providedBuilding = new PortBuildingModel(providedName);

      actual.addBuilding(providedBuilding);

      expect(actual.buildings[0]).toEqual(providedBuilding);
    });
  });
});
