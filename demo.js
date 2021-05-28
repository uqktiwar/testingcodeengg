  require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Legend", "esri/Color"], function(esriConfig,Map, MapView, FeatureLayer, Legend, Color) {
      esriConfig.apiKey = MY_API_KEY;  
      var map = new Map({
          basemap: "dark-gray-vector"
        });

    const view = new MapView({
        map: map,
        center: [-90.02, 29.97],
        zoom: 13, // scale: 72223.819286
        container: "viewDiv",
        constraints: {
          snapToZoom: false
        }
      });

    

        /********************
         * Add feature layer
         ********************/

    // New Orleans Green Infrastructure
      const popupGreenInfrastructure ={
          "title":"Green Infrastructure",
          "content": "<b>CATEGORY:</b> {Category}<br><b>DESCRIPTION:</b>{Descriptio}<br><b>ADDRESS:</b> {Match_addr}<br><b>NEIGHBORHOOD:</b> {Neighborho}<br><b>PROJECT TYPE:</b> {Project_Ty}"
      } 
      
      const GreenInfrastructure = new FeatureLayer({
      url: "https://services3.arcgis.com/QVXXCmytNbrvUMAq/arcgis/rest/services/green_infrastructure/FeatureServer/0",
      outFields: ["Category","Descriptio","Match_addr","Neighborho","Project_Ty"],
      popupTemplate: popupGreenInfrastructure
        });

  map.add(GreenInfrastructure, 0);    
      
      // New Orleans Grey Infrastructure
      const popupGreyInfrastructure ={
          "title":"Grey Infrastructure",
          "content": "<b>STATUS:</b> {SSSTAT}<br><b>TYPE:</b>{SSTYPE}"
      }  
            
      
       
     
      const GreyInfrastructure = new FeatureLayer({
          url: "https://services3.arcgis.com/QVXXCmytNbrvUMAq/arcgis/rest/services/nola_gray_infrastructure/FeatureServer/0",
          outFields: ["SSSTAT","SSTYPE"],
          popupTemplate: popupGreyInfrastructure,
        });

        map.add(GreyInfrastructure);
      
      });
	  

