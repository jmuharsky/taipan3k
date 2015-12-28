'use strict'
goog.require('taipan3k.components.content.ContentService');


const ContentService = taipan3k.components.content.ContentService;

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
});
