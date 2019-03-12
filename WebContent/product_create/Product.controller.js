sap.ui.controller("product_create.Product", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf product_create.Product
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf product_create.Product
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf product_create.Product
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf product_create.Product
*/
//	onExit: function() {
//
//	}
	
	onProductCreate : function(){
		// collect data
		var data = {
				ID : this.getView().byId("id").getValue(),
				Name : this.getView().byId("name").getValue(),
				Description : this.getView().byId("description").getValue(),
				ReleaseDate : this.getView().byId("rDate").getValue(),//string
				Rating : this.getView().byId("rating").getValue(),
				Price : this.getView().byId("price").getValue()
				
		}
		
		var oModel = new sap.ui.model.odata.v2.ODataModel("proxy/https/services.odata.org/V2/(S(fnh5000ch5nd21mplxssoao1))/OData/OData.svc/");
		
		oModel.create("/Products", data, {
			success : function(){
				sap.m.MessageToast.show("Data created");
			},
			error : function(){
				sap.m.MessageToast.show("Data not created , contact 991234343");
			}
		});
	}

});