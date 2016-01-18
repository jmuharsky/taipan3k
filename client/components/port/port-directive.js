goog.provide('taipan3k.components.port.PortDirective');

goog.require('taipan3k.components.port.PortModel');


goog.scope(function() {
  const PortModel = taipan3k.components.port.PortModel;

  taipan3k.components.port.PortDirective = function() {
    return {
      templateUrl: '/client/components/port/port-directive.html',
      restrict: 'E',
      replace: true,
      scope: {
        ngModel: '='
      }
    }
  }
});
