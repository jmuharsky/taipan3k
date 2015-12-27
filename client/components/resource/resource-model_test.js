'use strict'
goog.require('taipan3k.components.resource.ResourceModel');


const ResourceModel = taipan3k.components.resource.ResourceModel;

describe('ResourceModel', function() {
  describe('should initialize the default', function() {
    let actual = new ResourceModel();
    
    it('name', function() {
      expect(actual.name).toEqual(ResourceModel.DEFAULT_NAME);
    });
    
    it('basePrice', function() {
      expect(actual.basePrice).toEqual(ResourceModel.DEFAULT_BASE_PRICE);
    });
  });
});
