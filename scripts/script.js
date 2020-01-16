// ssssssss

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