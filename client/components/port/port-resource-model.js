goog.provide('taipan3k.components.port.PortResourceModel');

goog.require('taipan3k.components.resource.ResourceModel');


goog.scope(function() {
  const ResourceModel = taipan3k.components.resource.ResourceModel;

  taipan3k.components.port.PortResourceModel = class {
    /**
     * Constructs a new port resource instance with the provided values.
     * @param {!ResourceModel} template The resource template that contains the rules.
     * @param {?number=} price The local base price for the resource.
     * @param {?number=} stock The quantity on hand for the resource.
     * @param {?number=} supply The local supply for the resource.
     * @param {?number=} demand The local demand for the resource.
     */
    constructor(template, price, stock, supply, demand) {
      const PortResourceModel = taipan3k.components.port.PortResourceModel;

      this.template = template;
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
