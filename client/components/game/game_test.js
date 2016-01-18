"use strict"
goog.require('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.dice.DiceService');
goog.require('taipan3k.components.game.GameStateService');


goog.scope(function() {
  const ContentService = taipan3k.components.content.ContentService;
  const DiceService = taipan3k.components.dice.DiceService;
  const GameStateService = taipan3k.components.game.GameStateService;

  describe('Game', function() {
    let contentService, diceService, gameStateService, world;
    const PROVIDED_PORT_NAMES = ['PROVIDED 0', 'PROVIDED 1', 'PROVIDED 2'];

    beforeEach(module('taipan3k'));

    beforeEach(inject(function(_contentService_, _diceService_, _gameStateService_) {
      contentService = _contentService_;
      diceService = _diceService_;
      gameStateService = _gameStateService_;
      world = gameStateService.world;

      contentService.initializeRules();
      gameStateService.initializeWorld();
      for (let portName of PROVIDED_PORT_NAMES) {
        gameStateService.addPort(portName);
      }
    }));

    it('should start with ports and resources', function() {
      expect(Object.keys(world.ports).length).toBe(3);
    });

    it('turn should update port attributes, resources and prices', function() {
      // Take a turn with best-case rolls.
      diceService.loadDice(DiceService.ROLL_BEST);

      let actualPort = world.ports[PROVIDED_PORT_NAMES[0]];
      actualPort.population = 100;
      actualPort.morale = 50;
      gameStateService.world.resourcesPerCapita['food'] = .2;

      let actualResource = actualPort.resources['food'];

      actualResource.stock = 100;
      let expectedResource = 80;

      gameStateService.nextTurn();

      expect(actualResource.supply).toEqual(0);
      expect(actualResource.demand).toEqual(20);

      expect(actualResource.stock).toEqual(expectedResource);
    });
  });
});
