goog.provide('taipan3k.components.event.EventInstanceModel');

goog.require('taipan3k.components.event.EventModel');


goog.scope(function() {
  const EventModel = taipan3k.components.event.EventModel;

  taipan3k.components.event.EventInstanceModel = class {
    /**
     * Constructs a new instance of an event.
     * @param {!EventModel} template
     * @param {?string=} name
     * @param {?number=} duration
     */
    constructor(template, name, duration) {
      const EventInstanceModel = taipan3k.components.event.EventInstanceModel;

      this.template = template;
      this.name = name || template.name;
      this.duration = duration || template.baseDuration;
    }
  }
  const EventInstanceModel = taipan3k.components.event.EventInstanceModel;

  EventInstanceModel.DEFAULT_DURATION = 0;
});
