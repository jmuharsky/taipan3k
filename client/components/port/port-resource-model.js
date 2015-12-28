goog.provide('taipan3k.components.port.PortResourceModel');


goog.scope(function() {
  taipan3k.components.port.PortResourceModel = class {
    constructor(name, price, stock, supply, demand) {
      const PortResourceModel = taipan3k.components.port.PortResourceModel;

      this.name = name || PortResourceModel.DEFAULT_NAME;
      this.price = price || PortResourceModel.DEFAULT_PRICE;
      this.stock = stock || PortResourceModel.DEFAULT_STOCK;
      this.supply = supply || PortResourceModel.DEFAULT_SUPPLY;
      this.demand = demand || PortResourceModel.DEFAULT_DEMAND;
    }
  }
  const PortResourceModel = taipan3k.components.port.PortResourceModel;

  PortResourceModel.DEFAULT_NAME = 'untitled';
  PortResourceModel.DEFAULT_PRICE = 0;
  PortResourceModel.DEFAULT_STOCK = 0;
  PortResourceModel.DEFAULT_SUPPLY = 0;
  PortResourceModel.DEFAULT_DEMAND = 0;
});
