"use strict"
goog.require('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.game.GameStateService');
goog.require('taipan3k.components.port.PortBuildingModel');


goog.scope(function() {
  const ContentService = taipan3k.components.content.ContentService;
  const GameStateService = taipan3k.components.game.GameStateService;
  const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

  describe('GameStateService', function() {
    let gameStateService, contentService;

    beforeEach(module('taipan3k'));

    beforeEach(inject(function(_contentService_, _gameStateService_) {
      gameStateService = _gameStateService_;
      contentService = _contentService_;
    }));

    describe('should initialize the default', function() {
      it('world', function() {
        expect(gameStateService.world).toEqual(GameStateService.DEFAULT_WORLD);
      });
    });

    describe('.nextTurn', function() {
      it('should increment the world.turn counter', function() {
        expect(gameStateService.world.turn).toEqual(1);

        gameStateService.nextTurn();

        expect(gameStateService.world.turn).toEqual(2);
      });
    });

    describe('.initializeWorld', function() {
      beforeEach(function() {
        gameStateService.world.turn = 42;

        contentService.initializeRules();
        gameStateService.initializeWorld();
      });

      it('should reset the turn counter', function() {
        expect(gameStateService.world.turn).toEqual(1);
      });
    });

    describe('.addBuilding', function() {
      let actualPort;

      beforeEach(function() {
        contentService.initializeRules();
        gameStateService.initializeWorld();

        actualPort = gameStateService.world.ports['San Dominica'];
      });

      it('should add a building by name to the specified port', function() {
        let expectedBuildingName = 'granary';
        let blueprintBuilding = contentService.buildings[expectedBuildingName];

        gameStateService.addBuilding(actualPort, expectedBuildingName);
        let actualBuilding = actualPort.buildings[0];

        expect(actualBuilding).not.toBeNull();
        expect(actualBuilding).toEqual(new PortBuildingModel(blueprintBuilding));
      });

      it('should activate the building when added', function() {
        let providedBuildingName = 'granary';
        let blueprintBuilding = contentService.buildings[providedBuildingName];

        gameStateService.addBuilding(actualPort, providedBuildingName);
        let actualBuilding = actualPort.buildings[0];

        expect(actualBuilding.active).toEqual(true);
      });
    });

    describe('.calculatePort', function() {
      let actualPort;

      beforeEach(function() {
        contentService.initializeRules();
        gameStateService.initializeWorld();

        actualPort = gameStateService.world.ports['San Dominica'];
      });

      describe('should set', function() {
        it('food demand based on population', function() {
          actualPort.population = 100;
          gameStateService.calculatePort(actualPort);
          expect(actualPort.resources.food.demand).toEqual(20);
        });

        describe('food supply based on buildings', function() {
          it('with no buildings', function() {
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources.food.supply).toEqual(0);
          });

          it('with one food-producing building', function() {
            gameStateService.addBuilding(actualPort, 'farm');
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources.food.stock).toEqual(20);
          });
        });
      });
    });
  });
});
