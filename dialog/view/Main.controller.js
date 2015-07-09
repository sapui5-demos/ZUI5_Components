sap.ui.controller("sap.training.dialog.view.Main", {

	onOpenDialog: function() {
		if (sap.training.dialog.Component.getMetadata().getConfig().displayDialog) {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
	}
});