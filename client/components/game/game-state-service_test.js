"use strict"
goog.require('taipan3k.components.game.GameStateService');


goog.scope(function() {
  const GameStateService = taipan3k.components.game.GameStateService;

  describe('GameStateService', function() {
    let svc;

    beforeEach(module('taipan3k'));

    beforeEach(inject(function(gameStateService) {
      svc = gameStateService;
    }));

    describe('should initialize the default', function() {
      it('world', function() {
        expect(svc.world).toEqual(GameStateService.DEFAULT_WORLD);
      });
    });
    
    describe('.nextTurn', function() {
      it('should increment the world.turn counter', function() {
        expect(svc.world.turn).toEqual(1);

        svc.nextTurn();
        
        expect(svc.world.turn).toEqual(2);
      });
    });
  });
});
