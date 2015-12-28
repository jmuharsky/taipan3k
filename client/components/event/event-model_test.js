"use strict"
goog.require('taipan3k.components.effect.EffectModel');
goog.require('taipan3k.components.event.EventModel');


goog.scope(function() {
  const EffectModel = taipan3k.components.effect.EffectModel;
  const EventModel = taipan3k.components.event.EventModel;

  describe('EventModel', function() {
    describe('.constructor', function() {
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
      
      describe('should allow overriding the default value for', function() {
        it('name', function() {
          const PROVIDED = 'provided';
          let actual = new EventModel(PROVIDED);
          expect(actual.name).toEqual(PROVIDED);
        });

        it('baseDuration', function() {
          const PROVIDED = 42;
          let actual = new EventModel(null, PROVIDED);
          expect(actual.baseDuration).toEqual(PROVIDED);
        });

        it('effects', function() {
          const PROVIDED = [new EffectModel('')];
          let actual = new EventModel(PROVIDED);
          expect(actual.name).toEqual(PROVIDED);
        });
      });
    });
    
    describe('.fromJSON', function() {
      it('should return a new instance populated from the provided object', function() {
        const PROVIDED_NAME = 'target type';
        const PROVIDED_BASE_DURATION = 'target attribute';
        const PROVIDED_EFFECTS = [
          {targetType: 'effect target type', targetAttribute: 'effect target attr',
           actionName: 'effect action', value: 42}]
        const PROVIDED = {
          name: PROVIDED_NAME,
          baseDuration: PROVIDED_BASE_DURATION,
          effects: PROVIDED_EFFECTS};
        
        const EXPECTED_EFFECTS = [
          new EffectModel('effect target type', 'effect target attr', 'effect action', 42)
        ];

        let actual = EventModel.fromJSON(PROVIDED);
        
        expect(actual).toEqual(new EventModel(
            PROVIDED_NAME, PROVIDED_BASE_DURATION, EXPECTED_EFFECTS));
      });
    });
  });
});
