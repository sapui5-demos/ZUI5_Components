sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/training/dialog/controller/HelloDialog"
	],
	function(UIComponent, HelloDialog) {
		"use strict";
		return UIComponent.extend("sap.training.dialog.Component", {

			metadata: {
				manifest: "json"
			},

			init: function() {
				// call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				//set dialog
				this.helloDialog = new HelloDialog();

			}
		});
	});