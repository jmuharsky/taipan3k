"use strict"
goog.require('taipan3k.components.event.EventInstanceModel');


goog.scope(function() {
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;

  describe('EventInstanceModel', function() {
    describe('should initialize the default', function() {
      let actual = new EventInstanceModel();
      
      it('name', function() {
        expect(actual.name).toEqual(EventInstanceModel.DEFAULT_NAME);
      });
      
      it('duration', function() {
        expect(actual.duration).toEqual(EventInstanceModel.DEFAULT_DURATION);
      });
    });
  });
});
