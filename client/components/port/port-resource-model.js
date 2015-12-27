goog.provide('taipan3k.components.port.PortResourceModel');


goog.scope(function() {
  taipan3k.components.port.PortResourceModel = class {
    constructor() {
      const PortResourceModel = taipan3k.components.port.PortResourceModel;

      this.name = PortResourceModel.DEFAULT_NAME;
      this.price = PortResourceModel.DEFAULT_PRICE;
      this.stock = PortResourceModel.DEFAULT_STOCK;
    }
    
    get supply() {
      return PortResourceModel.DEFAULT_SUPPLY;
    }
    
    get demand() {
      return PortResourceModel.DEFAULT_DEMAND;
    }
  }
  const PortResourceModel = taipan3k.components.port.PortResourceModel;

  PortResourceModel.DEFAULT_NAME = 'untitled';
  PortResourceModel.DEFAULT_PRICE = 1;
  PortResourceModel.DEFAULT_STOCK = 2;
  PortResourceModel.DEFAULT_SUPPLY = 3;
  PortResourceModel.DEFAULT_DEMAND = 4;
});
