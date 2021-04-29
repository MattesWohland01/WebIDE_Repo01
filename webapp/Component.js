sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZMW_GitHub_Test01/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ZMW_GitHub_Test01.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});