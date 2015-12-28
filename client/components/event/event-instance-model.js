goog.provide('taipan3k.components.event.EventInstanceModel');


goog.scope(function() {
  taipan3k.components.event.EventInstanceModel = class {
    constructor(name, duration) {
      const EventInstanceModel = taipan3k.components.event.EventInstanceModel;

      this.name = name || EventInstanceModel.DEFAULT_NAME;
      this.duration = duration || EventInstanceModel.DEFAULT_DURATION;
    }
  }
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;

  EventInstanceModel.fromJSON = function(obj) {
    return new EventInstanceModel(obj.name, obj.duration);
  }
  EventInstanceModel.DEFAULT_NAME = '';
  EventInstanceModel.DEFAULT_DURATION = 0;
});
