goog.require('taipan3k.components.game.GamePageDirective');


describe('GamePageDirective', function() {
  var scope, $compile;

  const GamePageDirective = taipan3k.components.game.GamePageDirective;

  beforeEach(module('taipan3k'));
  beforeEach(module('taipan3k.templates'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('compilation', function() {

    it('should succeed as a standalone element.', function() {
      function compile() {
        var actualElement = angular.element(
            '<game-pages />');

        $compile(actualElement)(scope);
        scope.$digest();
      }
      expect(compile).not.toThrow();
    });

  });
});
