goog.provide('taipan3k.components.game.GamePageDirective');


goog.scope(function() {
  /**
   * @ngInject
   */
  taipan3k.components.game.GamePageDirective = function(gameStateService) {
    return {
      templateUrl: '/client/components/game/game-page-directive.html',
      restrict: 'E',
      replace: true,
      scope: {},
      link: (scope) => {
        scope.gameStateSvc = gameStateService;
      },
      controller: () => {
        console.log('gameState Starting');
        gameStateService.initialize();
      }
    }
  }
});
