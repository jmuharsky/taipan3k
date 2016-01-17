goog.provide('taipan3k.components.event.EventModel');

goog.require('taipan3k.components.effect.EffectModel');


goog.scope(function() {
  const EffectModel = taipan3k.components.effect.EffectModel;

  taipan3k.components.event.EventModel = class {
    /**
     * Constructs a new event template from the provided values.
     * An event template contains the rules and behaviors that govern actualized
     * events (or instances) in the game world.
     * @param {?string=} name A unique name for the event.
     * @param {?number=} baseDuration The number of turns the effect will last.
     * @param {?Array.<!EffectModel>=} effects A list of effects that the event will provide
     *    each turn.
     */
    constructor(name, baseDuration, effects) {
      const EventModel = taipan3k.components.event.EventModel;

      this.name = name || EventModel.DEFAULT_NAME;
      this.baseDuration = baseDuration || EventModel.DEFAULT_BASE_DURATION;
      this.effects = effects || EventModel.DEFAULT_EFFECTS();
    }

    static DEFAULT_EFFECTS() {
      return [];
    }
  }
  const EventModel = taipan3k.components.event.EventModel;

  EventModel.fromJSON = function(obj) {
    let result = new EventModel(obj.name, obj.baseDuration);

    if (goog.isDefAndNotNull(obj.effects)) {
      for (let effect of obj.effects) {
        result.effects.push(EffectModel.fromJSON(effect));
      }
    }

    return result;
  }

  EventModel.DEFAULT_NAME = '';
  EventModel.DEFAULT_BASE_DURATION = 0;
});
