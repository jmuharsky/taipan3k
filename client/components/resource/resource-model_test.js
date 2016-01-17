'use strict'
goog.require('taipan3k.components.resource.ResourceModel');


goog.scope(function() {
  const ResourceModel = taipan3k.components.resource.ResourceModel;

  describe('ResourceModel', function() {
    describe('.constructor', function() {
      describe('should initialize the default', function() {
        let actual = new ResourceModel();

        it('name', function() {
          expect(actual.name).toEqual(ResourceModel.DEFAULT_NAME);
        });

        it('basePrice', function() {
          expect(actual.basePrice).toEqual(ResourceModel.DEFAULT_BASE_PRICE);
        });
      });

      describe('should support overriding the default', function() {
        it('name', function() {
          const providedName = 'PROVIDED';
          let actual = new ResourceModel(providedName);
          expect(actual.name).toEqual(providedName);
        });

        it('basePrice', function() {
          const providedBasePrice = 42;
          let actual = new ResourceModel(null, providedBasePrice);
          expect(actual.basePrice).toEqual(providedBasePrice);
        });
      });
    });
  });
});
