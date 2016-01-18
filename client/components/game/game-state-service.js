goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.dice.DiceService');
goog.require('taipan3k.components.entity.EntityTypes');
goog.provide('taipan3k.components.game.GameStateService');
goog.require('taipan3k.components.port.PortModel');
goog.require('taipan3k.components.port.PortBuildingModel');
goog.require('taipan3k.components.port.PortResourceModel');
goog.require('taipan3k.components.world.WorldModel');
goog.require('taipan3k.util.DictUtil');


goog.scope(function() {
  const BuildingModel = taipan3k.components.building.BuildingModel;
  const EntityTypes = taipan3k.components.entity.EntityTypes;
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

      this.world = GameStateService.DEFAULT_WORLD;
    }

    nextTurn() {
      this.world.turn += 1;

      for (let key of Object.keys(this.world.ports)) {
        let port = this.world.ports[key];

        this.applyWorldEvents();
        this.calculatePort(port);
        this.processPort(port);
      }
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
                DictUtil.adjustProperty(port, effect.targetAttribute, effect.value);
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

    applyEffect(effect, location) {
      let target = this.getEffectTarget(effect, location);

      DictUtil.adjustProperty(target, effect.targetAttribute, effect.value);
    }

    calculatePort(port) {
      const FOOD_PER_POP = 0.2;

      // Reset supply and demand to zero; they are recalculated each turn.
      for (let resourceName of Object.keys(port.resources)) {
        let resource = port.resources[resourceName];
        resource.supply = 0;
        resource.demand = 0;
      }

      // Consume per-capita resources.
      for (let resourceName of Object.keys(this.world.resourcesPerCapita)) {
        let consumptionRate = this.world.resourcesPerCapita[resourceName];
        let demand = port.population * consumptionRate;

        port.resources[resourceName].demand += demand;
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
    }

    processPort(port) {
      // For each resource, decrease the stocks by demand, and increase by supply.
      for (let key of Object.keys(port.resources)) {
        let resource = port.resources[key];

        resource.stock += (resource.supply - resource.demand);
      }
    }

    initializeWorld() {
      this.world.reset();

      for (let key of Object.keys(this.contentService.resources)) {
        let blueprint = this.contentService.resources[key];
        this.world.addResource(angular.copy(blueprint));
      }

      this.addPort('San Dominica');
      this.addPort('Kirrel Station');
      this.addPort('Ringworld');

      this.world.resourcesPerCapita.food = 1;
    }

    addPort(name) {
      let port = new PortModel(name);

      for (let key of Object.keys(this.world.resources)) {
        let blueprint = this.world.resources[key];

        port.addResource(new PortResourceModel(blueprint, blueprint.basePrice));
      }

      this.calculatePort(port);
      this.world.addPort(port);
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
  }
  const GameStateService = taipan3k.components.game.GameStateService;

  GameStateService.DEFAULT_WORLD = new WorldModel();
});
