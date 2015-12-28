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
        expect(svc.resources).toEqual(ContentService.DEFAULT_RESOURCES);
      });
      
      it('buildings', function() {
        expect(svc.buildings).toEqual(ContentService.DEFAULT_BUILDINGS);
      });
      
      it('events', function() {
        expect(svc.events).toEqual(ContentService.DEFAULT_EVENTS);
      });
    });
    
    describe('initRules', function() {
      beforeEach(function() {
        svc.initRules();
      });

      it('should initialize the default resources', function() {
        expect(svc.resources.length).toEqual(3);
      });
      
      describe('should initialize a resource for', function() {
        it('food', function() {
          expect(svc.resources[0]).toEqual(new ResourceModel('food', 20));
        });
        
        it('tool', function() {
          expect(svc.resources[1]).toEqual(new ResourceModel('tool', 40));
        });
        
        it('luxury', function() {
          expect(svc.resources[2]).toEqual(new ResourceModel('luxury', 80));
        });
      });
      
      it('should initialize the default buildings', function() {
        expect(svc.buildings.length).toEqual(6);
      });
      
      describe('should initialize a building for', function() {
        it('farm', function() {
          expect(svc.buildings[0].name).toEqual('farm');
        });

        it('granary', function() {
          expect(svc.buildings[1].name).toEqual('granary');
        });

        it('workshop', function() {
          expect(svc.buildings[2].name).toEqual('workshop');
        });

        it('foundry', function() {
          expect(svc.buildings[3].name).toEqual('foundry');
        });

        it('temple', function() {
          expect(svc.buildings[4].name).toEqual('temple');
        });

        it('cathedral', function() {
          expect(svc.buildings[5].name).toEqual('cathedral');
        });
      });
      
      it('should initialize the default events', function() {
        expect(svc.events.length).toEqual(4);
      });
      
      describe('should initialize an event for', function() {
        it('flood', function() {
          expect(svc.events[0].name).toEqual('flood');
        });

        it('famine', function() {
          expect(svc.events[1].name).toEqual('famine');
        });

        it('rennaissance', function() {
          expect(svc.events[2].name).toEqual('rennaissance');
        });

        it('inquisition', function() {
          expect(svc.events[3].name).toEqual('inquisition');
        });
      });
    })
  });
});
