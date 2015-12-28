goog.provide('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.event.EventModel');
goog.require('taipan3k.components.resource.ResourceModel');

goog.scope(function() {
  const BuildingModel = taipan3k.components.building.BuildingModel;
  const EventModel = taipan3k.components.event.EventModel;
  const ResourceModel = taipan3k.components.resource.ResourceModel;

  taipan3k.components.content.ContentService = class {
    constructor() {
      const ContentService = taipan3k.components.content.ContentService;

      this.resources = ContentService.DEFAULT_RESOURCES;
      this.buildings = ContentService.DEFAULT_BUILDINGS;
      this.events = ContentService.DEFAULT_EVENTS;
    }
    
    initRules() {
      this.resources.length = 0;
      this.resources.push(new ResourceModel('food', 20));
      this.resources.push(new ResourceModel('tool', 40));
      this.resources.push(new ResourceModel('luxury', 80));

      this.buildings.length = 0;
      this.buildings.push(BuildingModel.fromJSON(
        {name: 'farm',
         requirements: [
           {targetAttribute: 'population', minValue: 5}
         ],
         effects: [
           {targetAttribute: 'resources.food', value: 20},
           {targetAttribute: 'resources.tool', value: -2}
         ]}
      ));

      this.buildings.push(BuildingModel.fromJSON(
        {name: 'granary',
         requirements: [
           {targetAttribute: 'population', minValue: 8}
         ],
         effects: [
           {targetAttribute: 'resources.food', value: 40},
           {targetAttribute: 'resources.tool', value: -5}
         ]}
      ));

      this.buildings.push(BuildingModel.fromJSON(
        {name: 'workshop',
         requirements: [
           {targetAttribute: 'population', minValue: 5}
         ],
         effects: [
           {targetAttribute: 'resources.tool', value: 5}
         ]}
      ));

      this.buildings.push(BuildingModel.fromJSON(
        {name: 'foundry',
         requirements: [
           {targetAttribute: 'population', minValue: 10}
         ],
         effects: [
           {targetAttribute: 'resources.tool', value: 10}
         ]}
      ));

      this.buildings.push(BuildingModel.fromJSON(
        {name: 'temple',
         requirements: [
           {targetAttribute: 'population', minValue: 8}
         ],
         effects: [
           {targetAttribute: 'resources.luxury', value: 4},
           {targetAttribute: 'resources.tool', value: -2}
         ]}
      ));

      this.buildings.push(BuildingModel.fromJSON(
        {name: 'cathedral',
         requirements: [
           {targetAttribute: 'population', minValue: 10}
         ],
         effects: [
           {targetAttribute: 'resources.luxury', value: 6},
           {targetAttribute: 'resources.tool', value: -5}
         ]}
      ));
    }
  }
  const ContentService = taipan3k.components.content.ContentService;

  ContentService.DEFAULT_RESOURCES = [];
  ContentService.DEFAULT_BUILDINGS = [];
  ContentService.DEFAULT_EVENTS = [];
});
