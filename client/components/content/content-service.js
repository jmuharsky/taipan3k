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

      this.resources = ContentService.DEFAULT_RESOURCES();
      this.buildings = ContentService.DEFAULT_BUILDINGS();
      this.events = ContentService.DEFAULT_EVENTS();
    }

    initializeRules() {
      this.resources = ContentService.DEFAULT_RESOURCES();
      this.addResource(new ResourceModel('food', 20));
      this.addResource(new ResourceModel('tool', 40));
      this.addResource(new ResourceModel('luxury', 80));

      this.buildings = ContentService.DEFAULT_BUILDINGS();
      this.addBuilding(BuildingModel.fromJSON(
        {name: 'farm',
         requirements: [
           {targetAttribute: 'population', minValue: 5}
         ],
         effects: [
           {targetAttribute: 'resources.food', value: 20},
           {targetAttribute: 'resources.tool', value: -2}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'granary',
         requirements: [
           {targetAttribute: 'population', minValue: 8}
         ],
         effects: [
           {targetAttribute: 'resources.food', value: 40},
           {targetAttribute: 'resources.tool', value: -5}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'workshop',
         requirements: [
           {targetAttribute: 'population', minValue: 5}
         ],
         effects: [
           {targetAttribute: 'resources.tool', value: 5}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'foundry',
         requirements: [
           {targetAttribute: 'population', minValue: 10}
         ],
         effects: [
           {targetAttribute: 'resources.tool', value: 10}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'temple',
         requirements: [
           {targetAttribute: 'population', minValue: 8}
         ],
         effects: [
           {targetAttribute: 'resources.luxury', value: 4},
           {targetAttribute: 'resources.tool', value: -2}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'cathedral',
         requirements: [
           {targetAttribute: 'population', minValue: 10}
         ],
         effects: [
           {targetAttribute: 'resources.luxury', value: 6},
           {targetAttribute: 'resources.tool', value: -5}
         ]}
      ));

      this.events = ContentService.DEFAULT_EVENTS();
      this.addEvent(EventModel.fromJSON(
        {name: 'flood',
         baseDuration: 1,
         effects: [
           {targetAttribute: 'population', value: -20, scale: 'relative'},
           {targetAttribute: 'food', value: 10, scale: 'relative'}
         ]}
      ));

      this.addEvent(EventModel.fromJSON(
        {name: 'famine',
         baseDuration: 2,
         effects: [
           {targetAttribute: 'population', value: -10, scale: 'relative'},
           {targetAttribute: 'food', value: -20, scale: 'relative'}
         ]}
      ));

      this.addEvent(EventModel.fromJSON(
        {name: 'rennaissance',
         baseDuration: 8,
         effects: [
           {targetAttribute: 'population', value: 2, scale: 'relative'},
           {targetAttribute: 'food', value: -20, scale: 'relative'}
         ]}
      ));

      this.addEvent(EventModel.fromJSON(
        {name: 'inquisition',
         baseDuration: 8,
         effects: [
           {targetAttribute: 'morale', value: -5, scale: 'relative'}
         ]}
      ));
    }

    addResource(resource) {
      if (goog.string.isEmptySafe(resource.name)) {
        throw new Error('addResource failed: resource.name is required');
      }

      if (goog.isDefAndNotNull(this.resources[resource.name])) {
        throw new Error('addResource failed: Resource "' + resource.name + '" already exists.');
      }

      this.resources[resource.name] = resource;
    }

    addBuilding(building) {
      if (goog.string.isEmptySafe(building.name)) {
        throw new Error('addBuilding failed: building.name is required');
      }

      if (goog.isDefAndNotNull(this.buildings[building.name])) {
        throw new Error('addBuilding failed: Building "' + building.name + '" already exists.');
      }

      this.buildings[building.name] = building;
    }

    addEvent(event) {
      if (goog.string.isEmptySafe(event.name)) {
        throw new Error('addEvent failed: event.name is required');
      }

      if (goog.isDefAndNotNull(this.events[event.name])) {
        throw new Error('addEvent failed: Event "' + event.name + '" already exists.');
      }

      this.events[event.name] = event;
    }

    static DEFAULT_RESOURCES() {
      return {};
    }

    static DEFAULT_BUILDINGS() {
      return {};
    }

    static DEFAULT_EVENTS() {
      return {};
    }
  }
  const ContentService = taipan3k.components.content.ContentService;
});
