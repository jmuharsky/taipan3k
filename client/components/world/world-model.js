goog.provide('taipan3k.components.world.WorldModel');
goog.require('taipan3k.components.event.EventInstanceModel');
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
      this.resources = WorldModel.DEFAULT_RESOURCES();
      
      /**
       * An indexed list of the ports in the world.
       * @export {{PortModel}}
       */
      this.ports = WorldModel.DEFAULT_PORTS();
      
      /**
       * Lists the events affecting the world.
       * @export {Array.<EventModel>}
       */
      this.events = WorldModel.DEFAULT_EVENTS();
    }
    
    static DEFAULT_RESOURCES() {
      return {};
    }
    
    static DEFAULT_PORTS() {
      return {};
    }
    
    static DEFAULT_EVENTS() {
      return [];
    }
  }
  const WorldModel = taipan3k.components.world.WorldModel;

  WorldModel.DEFAULT_TURN = 1;
});
