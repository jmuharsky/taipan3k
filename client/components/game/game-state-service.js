goog.provide('taipan3k.components.game.GameStateService');
goog.require('taipan3k.components.dice.DiceService');
goog.require('taipan3k.components.world.WorldModel');


goog.scope(function() {
  const WorldModel = taipan3k.components.world.WorldModel;

  /** @ngInject */
  taipan3k.components.game.GameStateService = class {
    constructor(contentService) {
      const GameStateService = taipan3k.components.game.GameStateService;

      this.contentService = contentService;

      this.world = GameStateService.DEFAULT_WORLD;
    }

    nextTurn() {
      this.world.turn += 1;

      for (let key of Object.keys(this.world.ports)) {
        let port = this.world.ports[key];

        this.processPort(port);
      }
    }

    applyWorldEffects() {

    }

    calculatePort(port) {
      const FOOD_PER_POP = 0.2;

      // Food demand is based on population.
      port.resources.food.demand = Math.floor(port.population * FOOD_PER_POP);
    }

    processPort(port) {
      // For each resource, decrease the stocks by demand, and increase by supply.
      for (let key of Object.keys(port.resources)) {
        let resource = port.resources[key];

        resource.stocks += (resource.supply - resource.demand);
      }

      this.calculatePort(port);
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
    }

    addPort(name) {
      let port = new PortModel(name);

      for (let key of Object.keys(this.world.resources)) {
        let blueprint = this.world.resources[key];

        port.addResource(new PortResourceModel(blueprint.name, blueprint.basePrice));
      }

      this.calculatePort(port);
      this.world.addPort(port);
    }

    addBuilding(port, building) {
      let result = null;

      if (goog.isString(building)) {
        let blueprint = this.contentService.buildings[building];
        result = new PortBuildingModel(blueprint.name);
      } else {
        result = new PortBuildingModel(building.name);
      }

      port.addBuilding(result);
    }
  }
  const GameStateService = taipan3k.components.game.GameStateService;

  GameStateService.DEFAULT_WORLD = new WorldModel();
});
