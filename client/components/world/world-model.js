goog.provide('taipan3k.components.world.WorldModel');

goog.require('goog.string');
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

    reset() {
      const WorldModel = taipan3k.components.world.WorldModel;

      this.turn = WorldModel.DEFAULT_TURN;
      this.resources = WorldModel.DEFAULT_RESOURCES();
      this.ports = WorldModel.DEFAULT_PORTS();
      this.events = WorldModel.DEFAULT_EVENTS();
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

    addPort(port) {
      if (goog.string.isEmptySafe(port.name)) {
        throw new Error('addPort failed: Port.name is required');
      }

      if (goog.isDefAndNotNull(this.ports[port.name])) {
        throw new Error('addPort failed: Port "' + port.name + '" already exists.');
      }

      this.ports[port.name] = port;
    }

    addEvent(event) {
      if (goog.string.isEmptySafe(event.name)) {
        throw new Error('addEvent failed: Event.name is required');
      }

      this.events.push(event);
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
