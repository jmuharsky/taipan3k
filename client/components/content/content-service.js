goog.provide('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.effect.EffectModel');
goog.require('taipan3k.components.entity.EntityTypes');
goog.require('taipan3k.components.event.EventModel');
goog.require('taipan3k.components.resource.ResourceModel');

goog.scope(function() {
  const BuildingModel = taipan3k.components.building.BuildingModel;
  const EffectModel = taipan3k.components.effect.EffectModel;
  const EntityTypes = taipan3k.components.entity.EntityTypes;
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
      this.addDefaultResources();

      this.buildings = ContentService.DEFAULT_BUILDINGS();
      this.addDefaultBuildings();

      this.events = ContentService.DEFAULT_EVENTS();
      this.addDefaultEvents();
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

    // TODO(joemu): Load from JSON file.
    addDefaultResources() {
      this.addResource(new ResourceModel('food', 20, 'cutlery'));
      this.addResource(new ResourceModel('tool', 40, 'wrench'));
      this.addResource(new ResourceModel('luxury', 80, 'diamond'));
    }

    // TODO(joemu): Load from JSON file.
    addDefaultBuildings() {
      this.addBuilding(BuildingModel.fromJSON(
        {name: 'farm',
         requirements: [
           {targetAttribute: 'population', minValue: 5}
         ],
         effects: [
           {targetType: EntityTypes.PORT, actionName: 'grow', targetAttribute: 'resources.food.supply', value: 20},
           {targetType: EntityTypes.PORT, actionName: 'use', targetAttribute: 'resources.tool.demand', value: 2}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'granary',
         requirements: [
           {targetType: EntityTypes.PORT, targetAttribute: 'population', minValue: 8}
         ],
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.food.supply', value: 40},
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.tool.demand', value: 5}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'workshop',
         requirements: [
           {targetType: EntityTypes.PORT, targetAttribute: 'population', minValue: 5}
         ],
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.tool.supply', value: 5}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'foundry',
         requirements: [
           {targetType: EntityTypes.PORT, targetAttribute: 'population', minValue: 10}
         ],
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.tool.supply', value: 10}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'temple',
         requirements: [
           {targetAttribute: 'population', minValue: 8}
         ],
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.luxury.supply', value: 4},
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.tool.demand', value: 2}
         ]}
      ));

      this.addBuilding(BuildingModel.fromJSON(
        {name: 'cathedral',
         requirements: [
           {targetAttribute: 'population', minValue: 10}
         ],
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.luxury.supply', value: 6},
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.tool.demand', value: 5}
         ]}
      ));
    }

    // TODO(joemu): Load from JSON file.
    addDefaultEvents() {
      this.addEvent(EventModel.fromJSON(
        {name: 'flood',
         baseDuration: 1,
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'population', value: -20, scale: '%'},
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.food.supply', value: 10, scale: '%'}
         ]}
      ));

      this.addEvent(EventModel.fromJSON(
        {name: 'famine',
         baseDuration: 2,
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'population', value: -10, scale: '%'},
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.food.supply', value: -20, scale: '%'}
         ]}
      ));

      this.addEvent(EventModel.fromJSON(
        {name: 'rennaissance',
         baseDuration: 8,
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'morale', value: 3},
           {targetType: EntityTypes.PORT, targetAttribute: 'population', value: 2, scale: '%'},
           {targetType: EntityTypes.PORT, targetAttribute: 'resources.food.supply', value: -10, scale: '%'}
         ]}
      ));

      this.addEvent(EventModel.fromJSON(
        {name: 'inquisition',
         baseDuration: 8,
         effects: [
           {targetType: EntityTypes.PORT, targetAttribute: 'population', value: -5},
           {targetType: EntityTypes.PORT, targetAttribute: 'morale', value: -25, scale: '%'}
         ]}
      ));
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
