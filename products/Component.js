sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/resource/ResourceModel",
   "sap/ui/model/odata/v2/ODataModel"
], function(UIComponent, ResourceModel, ODataModel) {
	"use strict";
	return UIComponent.extend("sap.training.products.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			/*   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //   Available as of version 1.30:
            //   If a model is entered in sap.ui5/models in the manifest.json file, SAPUI5 creates the model automatically
            //   and the coding for model creation inside the app can be removed.
            */

			//  getting complete manifest from Component metadata
			//	var mAppData = this.getMetadata().getManifest();

			// ... or getting a namespace
			var mAppData = this.getMetadata().getManifestEntry("sap.app");

			var sServiceUrl = mAppData.dataSources.DemoService.uri;

			// Create and set domain model to the component
			var oModel = new ODataModel(sServiceUrl);
			this.setModel(oModel);

			// set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "sap.training.products.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");

		}
	});
});