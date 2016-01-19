goog.provide('taipan3k.components.port.PortModel');

goog.require('taipan3k.components.event.EventInstanceModel');
goog.require('taipan3k.components.port.PortBuildingModel');
goog.require('taipan3k.components.port.PortBuildingModel');


goog.scope(function() {
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;
  const PortBuildingModel = taipan3k.components.port.PortBuildingModel;
  const PortResourceModel = taipan3k.components.port.PortResourceModel;

  taipan3k.components.port.PortModel = class {
    /**
     * Constructs a new Port instance from the provided values.
     * @param {?string=} name
     * @param {?number=} population
     * @param {?number=} morale
     * @param {?Object.<string, !PortResourceModel>=} resources
     * @param {?Array.<!PortBuildingModel>=} buildings
     * @param {?Array.<!EventInstanceModel>=} events
     */
    constructor(name, population, morale, resources, buildings, events) {
      const PortModel = taipan3k.components.port.PortModel;

      this.name = name || PortModel.DEFAULT_NAME;
      this.population = population || PortModel.DEFAULT_POPULATION;
      this.morale = morale || PortModel.DEFAULT_MORALE;

      /**
       * A dictionary of resources.
       * @export {Object.<string, !PortResourceModel>}
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
      if (goog.isDefAndNotNull(this.resources[resource.template.name])) {
        throw new Error('addResource failed: Resource "' + resource.template.name + '" already exists.');
      }

      this.resources[resource.template.name] = resource;
    }

    addBuilding(building) {
      if (goog.string.isEmptySafe(building.name)) {
        throw new Error('addBuilding failed: building.name is required');
      }

      this.buildings.push(building);
    }

    addEvent(event) {
      if (goog.string.isEmptySafe(event.name)) {
        throw new Error('addEvent failed: event.name is required');
      }

      this.events.push(event);
    }

    removeEvent(event) {
      let eventIndex = this.events.indexOf(event);
      if (eventIndex === -1) {
        throw new Error('Event ' + event.name + ' cannot be found in port ' + this.name + '.');
      }

      this.events.splice(eventIndex, 1);
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
