goog.provide('taipan3k.components.resource.ResourceModel');


goog.scope(function() {
  taipan3k.components.resource.ResourceModel = class {
    constructor() {
      const ResourceModel = taipan3k.components.resource.ResourceModel;

      this.name = ResourceModel.DEFAULT_NAME;
      this.basePrice = ResourceModel.DEFAULT_BASE_PRICE;
    }
  }
  const ResourceModel = taipan3k.components.resource.ResourceModel;

  ResourceModel.DEFAULT_NAME = 'Untitled'
  ResourceModel.DEFAULT_BASE_PRICE = 7;
});
