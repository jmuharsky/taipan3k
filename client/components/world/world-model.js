goog.provide('taipan3k.components.world.WorldModel');
goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.port.PortModel');
goog.require('taipan3k.components.resource.ResourceModel');


goog.scope(function() {
  taipan3k.components.world.WorldModel = class {
    constructor() {
      const WorldModel = taipan3k.components.world.WorldModel;

      this.turn = WorldModel.DEFAULT_TURN;
      
      /**
       * Lists the available resources and their global base price.
       * @export {{ResourceModel}}
       */
      this.resources = {}
      
      /**
       * An indexed list of the ports in the world.
       * @export {{Array.<PortModel>}}
       */
      this.ports = {};
      
      /**
       * Lists the events affecting the world.
       * @export {Array.<EventModel>}
       */
      this.events = [];
    }
  }
  const WorldModel = taipan3k.components.world.WorldModel;

  WorldModel.DEFAULT_TURN = 0;
  WorldModel.DEFAULT_RESOURCES = {};
  WorldModel.DEFAULT_PORTS = {};
  WorldModel.DEFAULT_EVENTS = [];
});
