// ssssssss


require([
   "esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery", "esri/layers/GraphicsLayer", "esri/widgets/Sketch", "esri/layers/FeatureLayer"
 ],

  function(Map, MapView, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer) 
  {

   var graphicsLayer = new GraphicsLayer();

   let map = new Map({
     basemap: "topo",
     layers: [graphicsLayer]

   });
   
   let mapContainer = new MapView({
     container: "d",
     map: map,
     center: [22.57, 51.25],
     zoom: 15
   });
   
//       var basemapToggle = new BasemapToggle({
//         view: view,
//         secondMap: "satellite"
//       });
   
//       view.ui.add(basemapToggle,"bottom-right");
   
   var basemapGallery = new BasemapGallery({
     view: mapContainer,
     source:
      {
       portal: 
       {
         url: "http://www.arcgis.com",
         useVectorBasemaps: true, // Load vector tile basemap group
       }
     } 
   });

   var trailheadsLayer = new FeatureLayer({

      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"

    });


   var sketch = new Sketch({
      view: mapContainer,
      layer: graphicsLayer

    });



   mapContainer.ui.add(basemapGallery, "top-right");
   mapContainer.ui.add(sketch, "bottom-left");
   map.add(trailheadsLayer);

   });

/*

mapa1 = document.getElementById("mapa1");
mapa2 = document.getElementById("mapa2");
mapa3 = document.getElementById("mapa3");
mapa4 = document.getElementById("mapa4");

przycisk1 = document.getElementById("przycisk1");
przycisk2 = document.getElementById("przycisk1");
przycisk3 = document.getElementById("przycisk1");
przycisk4 = document.getElementById("przycisk1");

require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
    let map1 = new Map({basemap:"streets"});



    let mapContainer = new MapView({
        container: "d",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        , zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })


require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa1.addEventListener("click", function(){
    let map1 = new Map({basemap:"satellite"});



    let mapContainer = new MapView({
        container: "d",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        , zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa2.addEventListener("click", function(){
    let map1 = new Map({basemap:"topo"});



    let mapContainer = new MapView({
        container: "d",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        , zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa3.addEventListener("click", function(){
    let map1 = new Map({basemap:"osm"});



    let mapContainer = new MapView({
        container: "d",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        , zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })})

   require (["esri/Map", "esri/views/MapView", "esri/WebMap"],
   function(Map, MapView, WebMap, webMercatorUtils)
   {
   mapa4.addEventListener("click", function(){
    let map1 = new WebMap({
      portalItem: {
         id: "ef139263371049d99aec9894f1c09258"
      }
   })



    let mapContainer = new MapView({
        container: "d",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        , zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })}) */
   
   

   




