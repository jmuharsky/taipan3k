'use strict'
goog.require('taipan3k.components.port.PortResourceModel');
goog.require('taipan3k.components.resource.ResourceModel');


goog.scope(function() {
  const PortResourceModel = taipan3k.components.port.PortResourceModel;
  const ResourceModel = taipan3k.components.resource.ResourceModel;

  describe('PortResourceModel', function() {
    let providedResource = new ResourceModel('PROVIDED_RESOURCE');

    describe('constructor', function() {
      let actual = new PortResourceModel();

      describe('should initialize the default', function() {

        it('price', function() {
          expect(actual.price).toEqual(PortResourceModel.DEFAULT_PRICE);
        });

        it('stock', function() {
          expect(actual.stock).toEqual(PortResourceModel.DEFAULT_STOCK);
        });

        it('supply', function() {
          expect(actual.supply).toEqual(PortResourceModel.DEFAULT_SUPPLY);
        });

        it('demand', function() {
          expect(actual.demand).toEqual(PortResourceModel.DEFAULT_DEMAND);
        });
      });
    });
  });
});
