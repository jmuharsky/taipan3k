'use strict'
goog.require('taipan3k.components.event.EventModel');
goog.require('taipan3k.components.port.PortModel');
goog.require('taipan3k.components.resource.ResourceModel');
goog.require('taipan3k.components.world.WorldModel');


goog.scope(function() {
  const EventModel = taipan3k.components.event.EventModel;
  const PortModel = taipan3k.components.port.PortModel;
  const ResourceModel = taipan3k.components.resource.ResourceModel;
  const WorldModel = taipan3k.components.world.WorldModel;

  describe('WorldModel', function() {
    let actual;

    describe('.constructor', function() {
      describe('should initialize the default', function() {
        beforeEach(function() {
          actual = new WorldModel();
        });

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

    describe('.reset', function() {
      it('should return the world to a default state', function() {
        actual = new WorldModel();

        actual.turn = 42;
        actual.events.push(new EventModel());
        actual.ports['port'] = new PortModel('port');
        actual.resources['res'] = new ResourceModel('res');

        actual.reset();

        expect(actual).toEqual(new WorldModel());
      });
    });

    describe('.addResource', function() {
      it('should add a resource to the dictionary', function() {
        actual = new WorldModel();
        let provided = new ResourceModel('foo', 42);

        actual.addResource(provided);
        expect(actual.resources['foo']).toEqual(provided);
      });
    });

    describe('.addPort', function() {
      it('should add a port to the dictionary', function() {
        actual = new WorldModel();
        let provided = new PortModel('bar');

        actual.addPort(provided);
        expect(actual.ports['bar']).toEqual(provided);
      });
    });

    describe('.addEvent', function() {
      it('should add an event to the end of the list', function() {
        actual = new WorldModel();
        let provided = new PortModel('bar');

        actual.addPort(provided);
        expect(actual.ports['bar']).toEqual(provided);
      });
    });
  });
});
