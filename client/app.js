goog.provide('taipan3k.application.module');
goog.require('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.game.GameStateService');

goog.scope(function() {
  const ContentService = taipan3k.components.content.ContentService;
  const GameStateService = taipan3k.components.game.GameStateService;

  taipan3k.application.module = angular.module('taipan3k', []);
  const app = taipan3k.application.module;

  app.service('contentService', ContentService);
  app.service('gameStateService', GameStateService);
  
  app.config(function() {
  });
});
