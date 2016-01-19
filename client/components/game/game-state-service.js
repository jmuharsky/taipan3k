goog.provide('taipan3k.components.game.GameStateService');

goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.dice.DiceService');
goog.require('taipan3k.components.entity.EntityTypes');
goog.require('taipan3k.components.event.EventInstanceModel');
goog.require('taipan3k.components.event.EventModel');
goog.require('taipan3k.components.game.GameStateModel');
goog.require('taipan3k.components.port.PortModel');
goog.require('taipan3k.components.port.PortBuildingModel');
goog.require('taipan3k.components.port.PortResourceModel');
goog.require('taipan3k.components.world.WorldModel');
goog.require('taipan3k.util.AdjustmentResolutions');
goog.require('taipan3k.util.DictUtil');


goog.scope(function() {
  const AdjustmentResolutions = taipan3k.util.AdjustmentResolutions;
  const BuildingModel = taipan3k.components.building.BuildingModel;
  const EntityTypes = taipan3k.components.entity.EntityTypes;
  const EventModel = taipan3k.components.event.EventModel;
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;
  const GameStateModel = taipan3k.components.game.GameStateModel;
  const PortModel = taipan3k.components.port.PortModel;
  const PortBuildingModel = taipan3k.components.port.PortBuildingModel;
  const PortResourceModel = taipan3k.components.port.PortResourceModel;
  const WorldModel = taipan3k.components.world.WorldModel;
  const DictUtil = taipan3k.util.DictUtil;

  taipan3k.components.game.GameStateService = class {
    /** @ngInject */
    constructor(contentService) {
      const GameStateService = taipan3k.components.game.GameStateService;

      this.contentService = contentService;

      /** @export {!WorldModel} */
      this.world = new WorldModel();;

      /** @export {!GameStateModel} */
      this.state = new GameStateModel();
    }

    nextTurn() {
      this.world.turn += 1;

      for (let key of Object.keys(this.world.ports)) {
        let port = this.world.ports[key];

        this.applyWorldEvents();
        this.calculatePort(port);
        this.processPort(port);
        this.cleanupEvents(port);
      }

      this.applyWorldEvents();
    }

    applyWorldEvents() {
      for (let event of this.world.events) {
        for (let effect of event.template.effects) {
          switch (effect.targetType) {
            case EntityTypes.PLAYER:
              // TODO: Add player entity.
              break;
            case EntityTypes.PORT:
              // Apply port-level world effects to all ports.
              for (let portName of Object.keys(this.world.ports)) {
                let port = this.world.ports[portName];
                DictUtil.adjustProperty(
                    port, effect.targetAttribute, effect.value, effect.scale);
              }
          }
        }
      }
    }

    getEffectTarget(effect, location) {
      let target;

      switch (effect.targetType) {
        case EntityTypes.PLAYER:
          // TODO: Add player entity.
          break;
        case EntityTypes.PORT:
          target = location;
          break;
      }

      return target;
    }

    applyEvents(events, location) {
      for (let event of events) {
        for (let effect of event.template.effects) {
          this.applyEffect(effect, location);
        }
      }
    }

    cleanupEvents(location) {
      for (let event of location.events) {
        if (--event.duration === 0) {
          location.removeEvent(event);
        }
      }
    }

    applyEffect(effect, location) {
      let target = this.getEffectTarget(effect, location);

      DictUtil.adjustProperty(
          target, effect.targetAttribute, effect.value, effect.scale, AdjustmentResolutions.FLOOR);
    }

    calculatePort(port) {
      // Reset supply and demand to zero; they are recalculated each turn.
      for (let resourceName of Object.keys(port.resources)) {
        let resource = port.resources[resourceName];
        resource.supply = 0;
        resource.demand = 0;
      }

      // Apply building effects.
      for (let building of port.buildings) {
        if (!building.active) {
          continue;
        }

        for (let effect of building.template.effects) {
          this.applyEffect(effect, port);
        }
      }

      // Apply port effects.
      this.applyEvents(port.events, port);

      // Consume per-capita resources.
      for (let resourceName of Object.keys(this.world.resourcesPerCapita)) {
        let consumptionRate = this.world.resourcesPerCapita[resourceName];
        let demand = port.population * consumptionRate;

        port.resources[resourceName].demand += demand;
      }

    }

    calculatePorts() {
      for (let portName of Object.keys(this.world.ports)) {
        let port = this.world.ports[portName];
        this.calculatePort(port);
      }
    }

    processPort(port) {
      // For each resource, decrease the stocks by demand, and increase by supply.
      for (let key of Object.keys(port.resources)) {
        let resource = port.resources[key];

        resource.stock += (resource.supply - resource.demand);
      }
    }

    initialize() {
      this.contentService.initializeRules();
      this.initializeWorld();
      this.setInitialWorldState();

      this.calculatePorts();
    }

    initializeWorld() {
      this.world.reset();

      for (let key of Object.keys(this.contentService.resources)) {
        let blueprint = this.contentService.resources[key];
        this.world.addResource(angular.copy(blueprint));
      }
    }

    setInitialWorldState() {
      let port;

      port = this.addPort('San Dominica');
      port.resources['food'].stock = 300;
      port.resources['tool'].stock = 20;

      this.addBuilding(port, 'farm');
      this.addBuilding(port, 'granary');
      this.addBuilding(port, 'foundry');

      this.addEvent(port, 'famine');

      port = this.addPort('Kirrel Station');
      port.population = 50;
      port.resources['food'].stock =
      this.addPort('Ringworld');

      this.world.resourcesPerCapita.food = .5;
    }

    addPort(name) {
      let port = new PortModel(name);

      for (let key of Object.keys(this.world.resources)) {
        let blueprint = this.world.resources[key];

        port.addResource(new PortResourceModel(blueprint, blueprint.basePrice));
      }

      this.calculatePort(port);
      this.world.addPort(port);
      return port;
    }

    selectPort(port) {
      this.state.selectedPort = port;
    }

    addBuilding(port, building) {
      let result = null;

      if (goog.isString(building)) {
        let blueprint = this.contentService.buildings[building];
        result = new PortBuildingModel(blueprint);
      } else if (Object.is(building, BuildingModel)) {
        result = new PortBuildingModel(building);
      } else {
        throw new Error('Building must be a template name or instance');
      }

      port.addBuilding(result);
    }

    addEvent(port, event) {
      let result = null;

      if (goog.isString(event)) {
        let blueprint = this.contentService.events[event];
        result = new EventInstanceModel(blueprint);
      } else if (Object.is(event, EventModel)) {
        result = new EventInstanceModel(event);
      } else {
        throw new Error('Event must be a template name or instance');
      }

      port.addEvent(result);
    }
  }
  const GameStateService = taipan3k.components.game.GameStateService;
});
