goog.require('taipan3k.components.port.PortDirective');
goog.require('taipan3k.components.port.PortModel');


describe('PortDirective', function() {
  var scope, $compile;

  const PortDirective = taipan3k.components.port.PortDirective;
  const PortModel = taipan3k.components.port.PortModel;

  beforeEach(module('taipan3k'));
  beforeEach(module('taipan3k.templates'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('compilation', function() {

    it('should succeed as a standalone element.', function() {
      function compile() {
        scope.providedPortModel = new PortModel();

        var actualElement = angular.element(
            '<port ng-model="providedPortModel" />');

        $compile(actualElement)(scope);
        scope.$digest();
      }
      expect(compile).not.toThrow();
    });

  });
});
