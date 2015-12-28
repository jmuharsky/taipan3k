goog.provide('taipan3k.components.dice.DiceService');


goog.scope(function() {
  taipan3k.components.dice.DiceService = class {
    constructor() {
      const DiceService = taipan3k.components.dice.DiceService;
    }

    getRandomNumber(min=1, max=100) {
      let valueCount = max - min + 1;

      if (min > max) {
        throw new Error('min must be less than or equal to max value');
      }
      
      return Math.floor(Math.random() * valueCount + min);
    }

    roll(min=1, max=100, count=1) {
      let result = 0;
      
      if (count < 1) {
        throw new Error('count must be greater than 0');
      }

      for (let i=0; i < count; ++i) {
        result += this.getRandomNumber(min, max);
      }
      
      return result;
    }
  }
  const DiceService = taipan3k.components.dice.DiceService;

  DiceService.ROLL_WORST = 0;
  DiceService.ROLL_BEST = 1 - Number.EPSILON;
});
