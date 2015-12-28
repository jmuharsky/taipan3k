goog.provide('taipan3k.components.port.PortBuildingModel');


taipan3k.components.port.PortBuildingModel = class {
  constructor(name, active) {
    const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

    this.name = name || PortBuildingModel.DEFAULT_NAME;
    this.active = active || PortBuildingModel.DEFAULT_ACTIVE;
  }
}
const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

PortBuildingModel.DEFAULT_NAME = 'Untitled';
PortBuildingModel.DEFAULT_ACTIVE = true;
