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

    beforeEach(module('taipan3k'));

    beforeEach(inject(function(_contentService_, _diceService_, _gameStateService_) {
      contentService = _contentService_;
      diceService = _diceService_;
      gameStateService = _gameStateService_;
      world = gameStateService.world;

      contentService.initializeRules();
      gameStateService.initializeWorld();
    }));

    it('should start with ports and resources', function() {
      expect(Object.keys(world.ports).length).toBe(3);
    });

    it('turn should update port attributes, resources and prices', function() {
      // Take a turn with best-case rolls.
      diceService.loadDice(DiceService.ROLL_BEST);

      let actualPort = world.ports['San Dominica'];
      actualPort.population = 100;

      let actualResource = actualPort.resources['food'];
      expect(actualResource.supply).toEqual(0);
      expect(actualResource.demand).toEqual(20);

      actualResource.stocks = 100;
      let expectedResource = 80;

      gameStateService.nextTurn();

      expect(actualResource.stocks).toEqual(expectedResource);
    });

    it('')
  });
});
