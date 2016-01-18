"use strict"
goog.require('taipan3k.components.event.EventInstanceModel');
goog.require('taipan3k.components.event.EventModel');


goog.scope(function() {
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;
  const EventModel = taipan3k.components.event.EventModel;

  describe('EventInstanceModel', function() {
    let providedEvent;

    beforeEach(function() {
      providedEvent = new EventModel('PROVIDED');
    });

    describe('.constructor', function() {
      it('', function() {
        let actual = new EventInstanceModel(providedEvent);
        expect(actual).not.toBeNull();
      });

      describe('should initialize the default', function() {
        let actual;

        beforeEach(function() {
          actual = new EventInstanceModel(providedEvent);
        });

        it('name', function() {
          expect(actual.name).toEqual(providedEvent.name);
        });

        it('duration', function() {
          expect(actual.duration).toEqual(EventInstanceModel.DEFAULT_DURATION);
        });
      });

      describe('should support overriding the default value for', function() {
        it('name', function() {
          const providedValue = 'overridden';
          let actual = new EventInstanceModel(providedEvent, providedValue);
          expect(actual.name).toEqual(providedValue);
        });
      });
    });

    describe('.fromJSON', function() {
    });
  });
});
