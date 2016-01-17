"use strict"
goog.require('taipan3k.components.building.BuildingModel');
goog.require('taipan3k.components.effect.EffectModel');
goog.require('taipan3k.components.requirement.RequirementsModel');


goog.scope(function() {
  const BuildingModel = taipan3k.components.building.BuildingModel;
  const EffectModel = taipan3k.components.effect.EffectModel;
  const RequirementModel = taipan3k.components.requirement.RequirementModel;

  describe('BuildingModel', function() {
    describe('.constructor', function() {
      describe('should initialize the default', function() {
        let actual = new BuildingModel();

        it('name', function() {
          expect(actual.name).toEqual(BuildingModel.DEFAULT_NAME);
        });

        it('requirements', function() {
          expect(actual.requirements).toEqual(BuildingModel.DEFAULT_REQUIREMENTS());
        });

        it('effects', function() {
          expect(actual.effects).toEqual(BuildingModel.DEFAULT_EFFECTS());
        });
      });

      describe('should support overriding default values for', function() {
        it('name', function() {
          const PROVIDED = 'provided';
          let actual = new BuildingModel(PROVIDED);
          expect(actual.name).toEqual(PROVIDED);
        });

        it('requirements', function() {
          const PROVIDED = [new RequirementModel('req')];
          let actual = new BuildingModel(null, PROVIDED);
          expect(actual.requirements).toEqual(PROVIDED);
        });

        it('effects', function() {
          const PROVIDED = [new EffectModel('eff')];
          let actual = new BuildingModel(null, null, PROVIDED);
          expect(actual.effects).toEqual(PROVIDED);
        });
      });
    });

    describe('.fromJSON', function() {
      it('should return a new instance populated from the provided object', function() {
        const PROVIDED_NAME = 'target type';
        const PROVIDED_REQUIREMENTS = [
          {targetType: 'req target type', targetAttribute: 'req target attr',
           minValue: 42}]
        const PROVIDED_EFFECTS = [
          {targetType: 'effect target type', targetAttribute: 'effect target attr',
           actionName: 'effect action', value: 42}]
        const PROVIDED = {
          name: PROVIDED_NAME,
          requirements: PROVIDED_REQUIREMENTS,
          effects: PROVIDED_EFFECTS};

        const EXPECTED_EFFECTS = [
          new EffectModel('effect target type', 'effect target attr', 'effect action', 42)
        ];
        const EXPECTED_REQUIREMENTS = [
          new RequirementModel('req target type', 'req target attr', 42)
        ];

        let actual = BuildingModel.fromJSON(PROVIDED);
        expect(actual).toEqual(new BuildingModel(
            PROVIDED_NAME, EXPECTED_REQUIREMENTS, EXPECTED_EFFECTS));
      });
    });
  });
});
