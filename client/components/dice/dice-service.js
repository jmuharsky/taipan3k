goog.provide('taipan3k.components.dice.DiceService');


goog.scope(function() {
  taipan3k.components.dice.DiceService = class {
    constructor() {
      const DiceService = taipan3k.components.dice.DiceService;

      this.loadedWeight = DiceService.DEFAULT_LOADED_WEIGHT;
    }

    loadDice(weight) {
      this.loadedWeight = weight;
    }

    getRandomNumber() {
      if (goog.isNull(this.loadedWeight)) {
        return Math.random();
      } else {
        return this.loadedWeight;
      }
    }

    rollDie(min=1, max=100) {
      let valueCount = max - min + 1;

      if (min > max) {
        throw new Error('min must be less than or equal to max value');
      }

      return Math.floor(this.getRandomNumber() * valueCount + min);
    }

    rollDice(min=1, max=100, count=1) {
      let result = 0;

      if (count < 1) {
        throw new Error('count must be greater than 0');
      }

      for (let i=0; i < count; ++i) {
        result += this.rollDie(min, max);
      }

      return result;
    }
  }
  const DiceService = taipan3k.components.dice.DiceService;

  DiceService.ROLL_WORST = 0;
  DiceService.ROLL_BEST = 1 - Number.EPSILON;

  DiceService.DEFAULT_LOADED_WEIGHT = null;
});
