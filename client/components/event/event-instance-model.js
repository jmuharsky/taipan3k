goog.provide('taipan3k.components.event.EventInstanceModel');


goog.scope(function() {
  taipan3k.components.event.EventInstanceModel = class {
    constructor() {
      const EventInstanceModel = taipan3k.components.event.EventInstanceModel;

      this.name = EventInstanceModel.DEFAULT_NAME;
      this.duration = EventInstanceModel.DEFAULT_DURATION;
    }
  }
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;

  EventInstanceModel.DEFAULT_NAME = '';
  EventInstanceModel.DEFAULT_DURATION = 0;
});
