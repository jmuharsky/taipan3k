"use strict"
goog.require('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.event.EventInstanceModel');
goog.require('taipan3k.components.game.GameStateService');
goog.require('taipan3k.components.port.PortBuildingModel');
goog.require('taipan3k.components.world.WorldModel');
goog.require('taipan3k.util.DictUtil');


goog.scope(function() {
  const ContentService = taipan3k.components.content.ContentService;
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;
  const GameStateService = taipan3k.components.game.GameStateService;
  const PortBuildingModel = taipan3k.components.port.PortBuildingModel;
  const WorldModel = taipan3k.components.world.WorldModel;
  const DictUtil = taipan3k.util.DictUtil;

  describe('GameStateService', function() {
    let gameStateService, contentService;
    const PROVIDED_PORT_NAME = 'PROVIDED';

    beforeEach(module('taipan3k'));

    beforeEach(inject(function(_contentService_, _gameStateService_) {
      gameStateService = _gameStateService_;
      contentService = _contentService_;
    }));

    describe('should initialize the default', function() {
      it('world', function() {
        expect(gameStateService.world).toEqual(new WorldModel());
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

        gameStateService.addPort(PROVIDED_PORT_NAME);
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

        gameStateService.addPort(PROVIDED_PORT_NAME);
        actualPort = gameStateService.world.ports[PROVIDED_PORT_NAME];
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

    describe('.applyWorldEvents', function() {
      let actualPorts, providedEvent;

      beforeEach(function() {
        contentService.initializeRules();
        gameStateService.initializeWorld();
        providedEvent = new EventInstanceModel(contentService.events['flood']);
        actualPorts = gameStateService.world.ports;

        gameStateService.addPort(PROVIDED_PORT_NAME);
        gameStateService.addPort('Port2');
      });

      it('should apply effects to each port', function() {
        spyOn(DictUtil, 'adjustProperty');

        gameStateService.world.addEvent(providedEvent);
        gameStateService.applyWorldEvents();

        for (let effect of providedEvent.template.effects) {
          for (let portName of Object.keys(gameStateService.world.ports)) {
            let port = gameStateService.world.ports[portName];
            expect(DictUtil.adjustProperty).toHaveBeenCalledWith(
                port, effect.targetAttribute, effect.value, effect.scale);
          }
        }
      });
    });

    describe('.calculatePort', function() {
      let actualPort;

      beforeEach(function() {
        contentService.initializeRules();
        gameStateService.initializeWorld();

        gameStateService.addPort(PROVIDED_PORT_NAME);
        actualPort = gameStateService.world.ports[PROVIDED_PORT_NAME];
      });

      describe('should set resource demand', function() {
        const PROVIDED_RESOURCE = 'tool';

        it('based on population', function() {
          actualPort.population = 100;
          gameStateService.world.resourcesPerCapita[PROVIDED_RESOURCE] = .5
          gameStateService.calculatePort(actualPort);
          expect(actualPort.resources[PROVIDED_RESOURCE].demand).toEqual(50);
        });

        it('based on buildings', function() {
          it('with no buildings', function() {
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].demand).toEqual(0);
          });

          it('with one resource-producing building', function() {
            gameStateService.addBuilding(actualPort, 'farm');
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].demand).toEqual(20);
          });

          it('with multiple resource-producing building', function() {
            gameStateService.addBuilding(actualPort, 'farm');
            gameStateService.addBuilding(actualPort, 'granary');
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].demand).toEqual(60);
          });
        });

        describe('based on population', function() {
          it('with no population', function() {
            let expectedValue = 0;
            actualPort.population = 0;

            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].demand).toEqual(expectedValue);
          });

          it('with a fixed rate of food per capita', function() {
            let expectedValue = 30;
            gameStateService.world.resourcesPerCapita[PROVIDED_RESOURCE] = .25;
            actualPort.population = 120;

            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].demand).toEqual(expectedValue);
          });
        });
      });

      describe('should set resource supply', function() {
        const PROVIDED_RESOURCE = 'food';

        describe('based on buildings', function() {
          beforeEach(function() {
            gameStateService.world.resourcesPerCapita[PROVIDED_RESOURCE] = 0;
          });

          it('with no buildings', function() {
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].supply).toEqual(0);
          });

          it('with one resource-producing building', function() {
            gameStateService.addBuilding(actualPort, 'farm');
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].supply).toEqual(20);
          });

          it('with multiple resource-producing building', function() {
            gameStateService.addBuilding(actualPort, 'farm');
            gameStateService.addBuilding(actualPort, 'granary');
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].supply).toEqual(60);
          });

          it('with that do not affect the resource', function() {
            gameStateService.addBuilding(actualPort, 'temple');
            gameStateService.calculatePort(actualPort);
            expect(actualPort.resources[PROVIDED_RESOURCE].supply).toEqual(0);
          });
        });
      });
    });
  });
});
