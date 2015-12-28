goog.provide('taipan3k.components.port.PortModel');
goog.require('taipan3k.components.port.PortBuildingModel');
goog.require('taipan3k.components.port.PortResourceModel');


goog.scope(function() {
  taipan3k.components.port.PortModel = class {
    constructor(name, population, morale, resources, buildings, events) {
      const PortModel = taipan3k.components.port.PortModel;

      this.name = name || PortModel.DEFAULT_NAME;
      this.population = population || PortModel.DEFAULT_POPULATION;
      this.morale = morale || PortModel.DEFAULT_MORALE;

      /**
       * A dictionary of resources.
       * @export {{string, PortResourceModel}}
       */
      this.resources = PortModel.DEFAULT_RESOURCES();

      /**
       * An array of buildings.
       * @export {Array.<PortBuildingModel>}
       */
      this.buildings = PortModel.DEFAULT_BUILDINGS();

      /**
       * An array of events that will be applied to the port.
       * @export {Array.<EventInstanceModel>}
       */
      this.events = PortModel.DEFAULT_EVENTS();
    }

    addResource(resource) {
      if (goog.string.isEmptySafe(resource.name)) {
        throw new Error('addResource failed: Resource.name is required');
      }

      if (goog.isDefAndNotNull(this.resources[resource.name])) {
        throw new Error('addResource failed: Resource "' + resource.name + '" already exists.');
      }

      this.resources[resource.name] = resource;
    }

    addBuilding(building) {
      if (goog.string.isEmptySafe(building.name)) {
        throw new Error('addBuilding failed: building.name is required');
      }

      this.buildings.push(building);
    }

    static DEFAULT_RESOURCES() {
      return {};
    }

    static DEFAULT_BUILDINGS() {
      return [];
    }

    static DEFAULT_EVENTS() {
      return [];
    }
  }
  const PortModel = taipan3k.components.port.PortModel;

  PortModel.DEFAULT_NAME = 'Untitled';
  PortModel.DEFAULT_POPULATION = 100;
  PortModel.DEFAULT_MORALE = 50;
});
