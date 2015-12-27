goog.provide('taipan3k.application.module');
goog.require('taipan3k.components.world.WorldModel');

goog.scope(function() {
  const BuildingModel = taipan3k.components.building.BuildingModel;
  const WorldModel = taipan3k.components.world.WorldModel;

  taipan3k.application.module = angular.module('taipan3k', []);
  const app = taipan3k.application.module;

  app.config(function() {
    let world = new WorldModel();
    world.name = 'Bar';
  });
});
