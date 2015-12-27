'use strict'
goog.require('taipan3k.components.port.PortBuildingModel');


goog.scope(function() {
  const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

  describe('PortBuildingModel', function() {
    describe('should initialize the default', function() {
      let actual = new PortBuildingModel();
      
      it('name', function() {
        expect(actual.name).toEqual(PortBuildingModel.DEFAULT_NAME);
      });
      
      it('active', function() {
        expect(actual.active).toEqual(PortBuildingModel.DEFAULT_ACTIVE);
      });
    });
  });
});
