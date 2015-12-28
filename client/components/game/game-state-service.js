goog.provide('taipan3k.components.game.GameStateService');
goog.require('taipan3k.components.dice.DiceService');
goog.require('taipan3k.components.world.WorldModel');


goog.scope(function() {
  const WorldModel = taipan3k.components.world.WorldModel;

  taipan3k.components.game.GameStateService = class {
    constructor() {
      const GameStateService = taipan3k.components.game.GameStateService;

      this.world = GameStateService.DEFAULT_WORLD;
    }
    
    nextTurn() {
      this.world.turn += 1;
    }
    
    applyWorldEffects() {
      
    }
    
    processPort(port) {
      
    }
  }
  const GameStateService = taipan3k.components.game.GameStateService;

  GameStateService.DEFAULT_WORLD = new WorldModel();
});
