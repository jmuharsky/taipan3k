"use strict"
goog.require('taipan3k.components.dice.DiceService');


goog.scope(function() {
  const DiceService = taipan3k.components.dice.DiceService;

  describe('DiceService', function() {
    let svc;

    beforeEach(module('taipan3k'));

    beforeEach(inject(function(diceService) {
      svc = diceService;
    }));

    describe('.getRandomNumber', function() {

      it('should return a number', function() {
        expect(svc.getRandomNumber()).toBeNumber();
      });

      it('should return a math.Random()-derived value', function() {
        spyOn(Math, 'random');

        svc.getRandomNumber();

        expect(Math.random).toHaveBeenCalled();
      });
    });

    describe('.rollDie', function() {

      it('should return a number', function() {
        expect(svc.rollDie()).toBeNumber();
      });

      it('should use getRandomNumber to randomize the value', function() {
        spyOn(svc, 'getRandomNumber');

        svc.rollDie();

        expect(svc.getRandomNumber).toHaveBeenCalled();
      });

      it('should return the minimum value on a worst (0) roll', function() {
        let minValue = 42;
        spyOn(svc, 'getRandomNumber').and.returnValue(DiceService.ROLL_WORST);

        let actual = svc.rollDie(minValue);

        expect(actual).toEqual(minValue);
      });

      it('should return the maximum value on a best (~<1) roll', function() {
        let maxValue = 1138;
        spyOn(svc, 'getRandomNumber').and.returnValue(DiceService.ROLL_BEST);

        let actual = svc.rollDie(1, maxValue);

        expect(actual).toEqual(maxValue);
      });

      it('should throw an error if the min is greater than max', function() {
        let actual = function() {
          svc.rollDie(3, 1);
        }

        expect(actual).toThrowError('min must be less than or equal to max value');
      })
    });

    describe('.rollDice', function() {
      it('should return a random roll for each dice rolled', function() {
        spyOn(svc, 'getRandomNumber').and.returnValue(DiceService.ROLL_BEST);

        let actual = svc.rollDice(1, 6, 3);

        expect(actual).toEqual(18);
      })
    });
  });
});
