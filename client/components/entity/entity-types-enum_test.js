"use strict"
goog.require('taipan3k.components.entity.EntityTypes');


const EntityTypes = taipan3k.components.entity.EntityTypes;

describe('EntityTypes', function() {
  describe('should contain a value for', function() {
    it('Player', function() {
      expect(EntityTypes.PLAYER).toEqual('Player');
    });

    it('Port', function() {
      expect(EntityTypes.PORT).toEqual('Port');
    });
  })
});
