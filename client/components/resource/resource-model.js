goog.provide('taipan3k.components.resource.ResourceModel');


goog.scope(function() {
  taipan3k.components.resource.ResourceModel = class {
    constructor(name, basePrice, iconClass) {
      const ResourceModel = taipan3k.components.resource.ResourceModel;

      this.name = name || ResourceModel.DEFAULT_NAME;
      this.basePrice = basePrice || ResourceModel.DEFAULT_BASE_PRICE;
      this.iconClass = iconClass || ResourceModel.DEFAULT_ICON_CLASS;
    }
  }
  const ResourceModel = taipan3k.components.resource.ResourceModel;

  ResourceModel.DEFAULT_NAME = 'Untitled'
  ResourceModel.DEFAULT_BASE_PRICE = 7;
  ResourceModel.DEFAULT_ICON_CLASS = 'question-circle';
});
