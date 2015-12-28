goog.provide('taipan3k.components.port.PortModel');
goog.require('taipan3k.components.port.PortBuildingModel');
goog.require('taipan3k.components.port.PortResourceModel');


goog.scope(function() {
  taipan3k.components.port.PortModel = class {
    constructor() {
      const PortModel = taipan3k.components.port.PortModel;

      this.name = PortModel.DEFAULT_NAME;
      this.population = PortModel.DEFAULT_POPULATION;
      this.morale = PortModel.DEFAULT_MORALE;
      
      /**
       * A dictionary of resources.
       * @export {{string, PortResourceModel}}
       */
      this.resources = {};
      
      /**
       * An array of buildings.
       * @export {Array.<PortBuildingModel>}
       */
      this.buildings = [];
      
      /**
       * An array of events that will be applied to the port.
       * @export {Array.<EventInstanceModel>}
       */
      this.events = [];
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
  PortModel.DEFAULT_RESOURCES = {};
  PortModel.DEFAULT_BUILDINGS = [];
  PortModel.DEFAULT_EVENTS = [];
});
