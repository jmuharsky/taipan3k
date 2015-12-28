goog.provide('taipan3k.components.event.EventModel');


goog.scope(function() {
  taipan3k.components.event.EventModel = class {
    constructor() {
      const EventModel = taipan3k.components.event.EventModel;

      this.name = EventModel.DEFAULT_NAME;
      this.baseDuration = EventModel.DEFAULT_BASE_DURATION;
      this.effects = EventModel.DEFAULT_EFFECTS;
    }
  }
  const EventModel = taipan3k.components.event.EventModel;

  EventModel.DEFAULT_NAME = '';
  EventModel.DEFAULT_BASE_DURATION = 0;
  EventModel.DEFAULT_EFFECTS = [];
});
