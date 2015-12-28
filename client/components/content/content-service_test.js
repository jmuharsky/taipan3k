'use strict'
goog.require('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.resource.ResourceModel');


goog.scope(function() {
  const ContentService = taipan3k.components.content.ContentService;
  const ResourceModel = taipan3k.components.resource.ResourceModel;

  describe('ContentService', function() {
    let svc;

    beforeEach(module('taipan3k'));

    beforeEach(inject(function(contentService) {
      svc = contentService;
    }));

    describe('should initialize the default', function() {
      it('resources', function() {
        expect(svc.resources).toEqual(ContentService.DEFAULT_RESOURCES());
      });

      it('buildings', function() {
        expect(svc.buildings).toEqual(ContentService.DEFAULT_BUILDINGS());
      });

      it('events', function() {
        expect(svc.events).toEqual(ContentService.DEFAULT_EVENTS());
      });
    });

    describe('initializeRules', function() {
      beforeEach(function() {
        svc.initializeRules();
      });

      it('should initialize the default resources', function() {
        expect(Object.keys(svc.resources).length).toEqual(3);
      });

      describe('should initialize a resource for', function() {
        it('food', function() {
          expect(svc.resources['food']).toEqual(new ResourceModel('food', 20));
        });

        it('tool', function() {
          expect(svc.resources['tool']).toEqual(new ResourceModel('tool', 40));
        });

        it('luxury', function() {
          expect(svc.resources['luxury']).toEqual(new ResourceModel('luxury', 80));
        });
      });

      it('should initialize the default buildings', function() {
        expect(Object.keys(svc.buildings).length).toEqual(6);
      });

      describe('should initialize a building for', function() {
        it('farm', function() {
          expect(svc.buildings['farm']).not.toBeNull();
        });

        it('granary', function() {
          expect(svc.buildings['granary']).not.toBeNull();
        });

        it('workshop', function() {
          expect(svc.buildings['workshop']).not.toBeNull();
        });

        it('foundry', function() {
          expect(svc.buildings['foundry']).not.toBeNull();
        });

        it('temple', function() {
          expect(svc.buildings['temple']).not.toBeNull();
        });

        it('cathedral', function() {
          expect(svc.buildings['cathedral']).not.toBeNull();
        });
      });

      it('should initialize the default events', function() {
        expect(Object.keys(svc.events).length).toEqual(4);
      });

      describe('should initialize an event for', function() {
        it('flood', function() {
          expect(svc.events['flood']).not.toBeNull();
        });

        it('famine', function() {
          expect(svc.events['famine']).not.toBeNull();
        });

        it('rennaissance', function() {
          expect(svc.events['rennaissance']).not.toBeNull();
        });

        it('inquisition', function() {
          expect(svc.events['inquisition']).not.toBeNull();
        });
      });
    })
  });
});
