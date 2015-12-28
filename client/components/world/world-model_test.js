'use strict'
goog.require('taipan3k.components.world.WorldModel');


const WorldModel = taipan3k.components.world.WorldModel;

describe('WorldModel', function() {
  describe('should initialize the default', function() {
    let actual = new WorldModel();
    
    it('turn', function() {
      expect(actual.turn).toEqual(WorldModel.DEFAULT_TURN);
    });
    
    it('resources', function() {
      expect(actual.resources).toEqual(WorldModel.DEFAULT_RESOURCES());
    });
    
    it('ports', function() {
      expect(actual.ports).toEqual(WorldModel.DEFAULT_PORTS());
    });
    
    it('events', function() {
      expect(actual.events).toEqual(WorldModel.DEFAULT_EVENTS());
    });
  });
});
