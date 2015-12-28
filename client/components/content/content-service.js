goog.provide('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.event.EventModel');
goog.require('taipan3k.components.resource.ResourceModel');

goog.scope(function() {
  taipan3k.components.content.ContentService = class {
    constructor() {
      const ContentService = taipan3k.components.content.ContentService;

      this.resources = ContentService.DEFAULT_RESOURCES;
      this.buildings = ContentService.DEFAULT_BUILDINGS;
      this.events = ContentService.DEFAULT_EVENTS;
    }
  }
  const ContentService = taipan3k.components.content.ContentService;

  ContentService.DEFAULT_RESOURCES = [];
  ContentService.DEFAULT_BUILDINGS = [];
  ContentService.DEFAULT_EVENTS = [];
});
