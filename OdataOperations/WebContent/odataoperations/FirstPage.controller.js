sap.ui.controller("odataoperations.FirstPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf odataoperations.FirstPage
*/
	
	onInit: function() {
		var appid="com.sap.myflight";
		var context={
				serverHost:"192.168.0.77",
				serverPort:"8080",
				https:"false",
		}
	},	
	onCreate: function(){
		 var serviceUrl = "/TravelagencyCollection";  
        	
         console.log(oModel);
         //sap.ui.getCore().setModel(oModel);
         var parameters={
        		 "agencynum":"00000008",
        		 "NAME":"chetna",
        		 "URL":"www.gma.com",
        		 "LANGU":"G"	 
         }
         
         oModel.create("/TravelagencyCollection",parameters);
	},
	

onDelete: function(){
	 var serviceUrl = "/TravelagencyCollection";  
    
     console.log(oModel);
     oModel.remove("/TravelagencyCollection('00000698')");
},

onRead: function(){
	 var serviceUrl = "/CarrierCollection";  
    	
     console.log(oModel);
     oModel.read("/CarrierCollection");
},



onUpdate: function(){
	 var entry={
		     agencynum:"00000130",
		     CITY:"ngp"};
	
	 oModel.update("/TravelagencyCollection('"+entry.agencynum+"')",entry,null,function(odata,response){
		    console.log("updated");
		    console.log(response);
		   },function(){
		    console.log("failed");
		   });
},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf odataoperations.FirstPage
*/
	onBeforeRendering: function() {
 this.getView().byId("img1").addStyleClass("myimage");  
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf odataoperations.FirstPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf odataoperations.FirstPage
*/
//	onExit: function() {
//
//	}

});
