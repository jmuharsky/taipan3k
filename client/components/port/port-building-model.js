goog.provide('taipan3k.components.port.PortBuildingModel');

goog.require('taipan3k.components.building.BuildingModel');


goog.scope(function() {
  const BuildingModel = taipan3k.components.building.BuildingModel;

  taipan3k.components.port.PortBuildingModel = class {
    /**
     * Creates a PortBuildingModel from the specified template.
     * @param {!BuildingModel} template
     * @param {?boolean=} active
     * @param {?string=} name
     */
    constructor(template, active, name) {
      const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

      /**
       * The BuildingTemplate that the building is created from.  This contains the
       * rules and effects for the building.
       * @export {!BuildingModel}
       */
      this.template = template;

      /**
       * Describes the active state of the building.  If false, no effects are taken.
       * @export {boolean}
       */
      this.active = active || PortBuildingModel.DEFAULT_ACTIVE;

      /**
       * The name of the building.  Defaults to the template name, but can be renamed.
       * @export {string}
       */
      this.name = name || template.name;
    }
  }
  const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

  PortBuildingModel.DEFAULT_ACTIVE = true;
});
