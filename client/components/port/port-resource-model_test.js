'use strict'
goog.require('taipan3k.components.port.PortResourceModel');


const PortResourceModel = taipan3k.components.port.PortResourceModel;

describe('PortResourceModel', function() {
  describe('should initialize the default', function() {
    let actual = new PortResourceModel();
    
    it('name', function() {
      expect(actual.name).toEqual(PortResourceModel.DEFAULT_NAME);
    });
    
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
