goog.provide('taipan3k.application.module');
goog.require('taipan3k.components.content.ContentService');
goog.require('taipan3k.components.dice.DiceService');
goog.require('taipan3k.components.game.GamePageDirective');
goog.require('taipan3k.components.game.GameStateService');
goog.require('taipan3k.components.port.PortDirective');

goog.scope(function() {
  const components = taipan3k.components;

  taipan3k.application.module = angular.module('taipan3k', ['ngMaterial', 'taipan3k.templates']);
  const app = taipan3k.application.module;

  app.service('diceService', components.dice.DiceService);

  app.service('contentService', components.content.ContentService);
  app.service('gameStateService', components.game.GameStateService);

  app.directive('port', components.port.PortDirective);
  app.directive('gamePage', components.game.GamePageDirective);

  app.config(function() {
  });
});
