goog.provide('taipan3k.components.port.PortBuildingModel');


taipan3k.components.port.PortBuildingModel = class {
  constructor() {
    const PortBuildingModel = taipan3k.components.port.PortBuildingModel;
    
    this.name = PortBuildingModel.DEFAULT_NAME;
    this.active = PortBuildingModel.DEFAULT_ACTIVE;
  }
}
const PortBuildingModel = taipan3k.components.port.PortBuildingModel;

PortBuildingModel.DEFAULT_NAME = 'Untitled';
PortBuildingModel.DEFAULT_ACTIVE = true;
