goog.provide('taipan3k.components.game.GameStateModel');

goog.require('taipan3k.components.port.PortModel');


goog.scope(function() {
  const PortModel = taipan3k.components.port.PortModel;

  taipan3k.components.game.GameStateModel = class {
    /**
     * Creates a new GameStateModel.
     */
    constructor() {
      /** @export {PortModel} */
      this.selectedPort = null;
    }
  }
});
