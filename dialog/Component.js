sap.ui.define([
   "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "sap/training/dialog/controller/HelloDialog"],
	function(UIComponent, ResourceModel, HelloDialog) {
		"use strict";
		return UIComponent.extend("sap.training.dialog.Component", {

			metadata: {
				manifest: "json"
			},

			init: function() {
				// call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				// set i18n model
				var i18nModel = new ResourceModel({
					bundleName: "sap.training.dialog.i18n.i18n"
				});
				this.setModel(i18nModel, "i18n");

				//set dialog
				this.helloDialog = new HelloDialog();

			}
		});
	});