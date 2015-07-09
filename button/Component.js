sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/m/Button"],
	function(UIComponent, Button) {
		"use strict";
		return UIComponent.extend("sap.training.button.Component", {

			metadata: {
				manifest: "json",
				properties: {
					text: {
						type: "string"
					}
				}
			},

			init: function() {
				// call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);
			},

			createContent: function() {
				this.oButton = new Button(this.createId("btn"));
				return this.oButton;
			},

			setText: function(sText) {
				this.oButton.setText(sText);
				this.setProperty("text", sText);
				return this;
			}
		});
	});