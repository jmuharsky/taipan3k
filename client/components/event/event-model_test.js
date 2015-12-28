"use strict"
goog.require('taipan3k.components.event.EventModel');


goog.scope(function() {
  const EventModel = taipan3k.components.event.EventModel;

  describe('EventModel', function() {
    describe('should initialize the default', function() {
      let actual = new EventModel();
      
      it('name', function() {
        expect(actual.name).toEqual(EventModel.DEFAULT_NAME);
      });
      
      it('baseDuration', function() {
        expect(actual.baseDuration).toEqual(EventModel.DEFAULT_BASE_DURATION);
      });
      
      it('effects', function() {
        expect(actual.effects).toEqual(EventModel.DEFAULT_EFFECTS);
      });
    });
  });
});
