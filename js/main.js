//Main Map Baselayer
  var street = L.layerGroup();
  L.esri.basemapLayer('Streets').addTo(street);

//Establish baselayers
  var baseLayers = {
    Streetmap: street,
    Geographic: L.esri.basemapLayer('NationalGeographic'),
    Gray: L.esri.basemapLayer('Gray')
  };

//Call Food Insecurity Polygon from ArcGIS Online, Popup, and Query

  var foodInsecurity = L.esri.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/4',
    style: function (feature) {
        if (feature.properties.ML2 === 2) {
            return {color:'#FFAA00', weight: 2};
        } else if (feature.properties.ML2 === 3) {
            return {color: '#FF5500', weight: 2};
        } else if (feature.properties.ML2 === 4) {
            return {color: '#FF0000', weight: 2};
        } else {
            return {color: 'grey', weight: 2}
        } 
        }
  });

//Call Livelihood Polygon from ArcGIS Online, Popup, and Query
var livelihoodYemen = L.esri.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/8',
    style: function (feature) {
        if (feature.properties.LZNUM === 1) {
            return {color:'aqua', weight: 2};
        } else if (feature.properties.LZNUM === 2) {
            return {color: 'teal', weight: 2};
        } else if (feature.properties.LZNUM === 3) {
            return {color: 'navy', weight: 2};
        } else if (feature.properties.LZNUM === 4) {
            return {color: 'green', weight: 2};
        } else if (feature.properties.LZNUM === 5) {
            return {color: 'blue', weight: 2};
        } else if (feature.properties.LZNUM === 6) {
            return {color: 'lime', weight: 2};
        } else if (feature.properties.LZNUM === 7) {
            return {color: '#1cd199', weight: 2};
        } else if (feature.properties.LZNUM === 8) {
            return {color: 'olive', weight: 2};
        } else if (feature.properties.LZNUM === 9) {
            return {color: 'fuchsia', weight: 2};
        } else if (feature.properties.LZNUM === 10) {
            return {color: 'maroon', weight: 2};
        } else if (feature.properties.LZNUM === 11) {
            return {color: 'red', weight: 2};
        } else if (feature.properties.LZNUM === 12) {
            return {color: 'yellow', weight: 2};
        } else if (feature.properties.LZNUM === 13) {
            return {color: 'purple', weight: 2};
        } else if (feature.properties.LZNUM === 14) {
            return {color: '#667a95', weight: 2};
        } else if (feature.properties.LZNUM === 15) {
            return {color: '#ea9b0c', weight: 2};
        } else {
            return {color: 'grey', weight: 2}
        } 
        }
  });
    
//Call Conflicts Polygon from ArcGIS Online, Popup, and Query
var conflictsYemen = L.esri.Cluster.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/0',
    style: function (feature) {
        if (feature.properties.event_type === 'Battles') {
            return {color:'#f76db2', weight: 2};
        } else {
            return {color: 'grey', weight: 2}
        } 
        }
  });   


//Call Opposition Territories Polygon from ArcGIS Online, Popup, and Query
var oppositionTerritories = L.esri.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/3',
    style: function (feature) {
        if (feature.properties.Faction === 'Houthi Movement') {
            return {color:'#00A9E6', weight: 2};
        } else if (feature.properties.Faction === 'Al-Qaeda') {
            return {color: '#A80084', weight: 2};
        } else {
            return {color: 'grey', weight: 2}
        } 
        }
  });

//Call Population Polygon from ArcGIS Online, Popup, and Query
var popYemen = L.esri.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/2',
    //Associate colors with fields being called
    style: function (feature) {
        if (feature.properties.Link__Pop1 >= 279000) {
            return {color:'#0D0887', weight: 2};
        } else if (feature.properties.Link__Pop1 >= 185000) {
            return {color: '#6B00A9', weight: 2}
        } else if (feature.properties.Link__Pop1 >= 119000) {
            return {color: '#B12A91', weight: 2}
        } else if (feature.properties.Link__Pop1 >= 72000) {
            return {color: '#E21662', weight: 2}
        } else if (feature.properties.Link__Pop1 >= 36000) {
            return {color: '#FD5C36', weight: 2}
        } else if (feature.properties.Link__Pop1 <=36000) {
            return {color: '#F1CC22', weight: 2}
        } else {
            return {color: '#a8a1a1', weight: 2}
        } 
        }
  });  

//Admin: Country Polygon and Popup
var countryYemen = L.esri.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/5',
    style: function (feature) {
        if (feature.properties.ISO === 'YEM') {
            return {color:'silver', weight: 2};
        } else {
            return {color: 'grey', weight: 2}
        } 
        }
  });


//Admin: State Polygon and Popup  
var stateYemen = L.esri.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/6',
    style: function (feature) {
        if (feature.properties.ISO === 'YEM') {
            return {color:'black', weight: 2};
        } else {
            return {color: 'grey', weight: 2}
        } 
        }
  });

//Admin: County Polygon and Popup
var countyYemen = L.esri.featureLayer({
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Yemen_Final_WFL1/FeatureServer/7',
    style: function (feature) {
        if (feature.properties.ISO === 'YEM') {
            return {color:'white', weight: 2};
        } else {
            return {color: 'grey', weight: 2}
        } 
        }
  });

//Create and set basic controls of map
  var map = L.map('map', {
    zoomControl: false,
    center: [15.8527, 47.5164],
    zoom: 5,
    minZoom: 5,
    maxZoom: 15,
    layers: [street, foodInsecurity]
  });

// Zoom Home Map Control
var zoomHome = L.Control.zoomHome({
    position: 'topleft'
});
zoomHome.addTo(map);

//GPS Locating Map Control
var locateControl = L.control.locate({
    //    position: "bottomright",
    drawCircle: true,
    follow: true,
    setView: true,
    keepCurrentZoomLevel: true,
    markerStyle: {
        weight: 1,
        opacity: 0.8,
        fillOpacity: 0.8
    },
    circleStyle: {
        weight: 1,
        clickable: false
    },
    icon: "fa fa-compass",
    metric: false,
    strings: {
    },
    locateOptions: {
        maxZoom: 18,
        watch: true,
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000
    }
}).addTo(map);

//Create main overlay features 
  var overlays = {
    'Food Insecurity':foodInsecurity,
    'Livelihood': livelihoodYemen,
    'Faction':oppositionTerritories,
    'Population': popYemen,
    'Conflicts': conflictsYemen,
    'Country Boundary':countryYemen,
    'State Boundaries': stateYemen,
    'County Boundaries': countyYemen
  };

////Main Map Popup
var popup = L.popup({
    keepInView: true,
    offset: L.point(30,203),
    closeButton: true,
    autoClose: true
    }).setLatLng(map.getBounds().getCenter()).setContent('<p class= mainPopup1 style="font-size:(3px + 1vw)"><b>Layer Selection:</b> The top right corner of this map contains various layers that can be added to the map. If you are interested in how each  layer collected/made decisions on classifications click on the "?" on the navigation bar above.<br><b>Food Insecurity:</b> Shows forward-looking analysis representing the most likely food security for the near term. Not having access to reliable food can lead to malnutrition, death, an increase in civilian conflicts, and more. <br><b>Livelihood Zone:</b>This is included to give context and potential reasons why Yemen is currently suffering. For example, areas with more air strikes are more likely to have lower crop yields from being felled.<br><b>Faction:</b>This layer is included to show how each faction is doing in that regard and to compare the types of conflicts taking place in each zone.<br><b>Population:</b> This layer is meant to help showcase the role population has to play in the level of food insecurity and the types of conflicts within Yemen. <br><b>Conflicts:</b>This layer is meant to allow for an easier way to visually see how each conflict may be impacting Yemen on its road to recovery.<br><b>Boundaries:</b> County, State, and County boundaries have been included to serve as a reference.</p>').openOn(map);

//Establish legend position within the map
var legend1FoodInsecurity = L.control({position: 'bottomleft'});
var legend2Livelihood = L.control({position: 'bottomleft'});
var legend3Conflicts = L.control({position: 'bottomleft'});
var legend4Faction = L.control({position: 'bottomleft'});
var legend5Population = L.control({position: 'bottomleft'});

//Call images being used as legends food insecurity
legend1FoodInsecurity.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [""],
        labels = ["Legend_Food_Insecurity.png"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            grades[i] + (" <img src="+ labels[i] +" style= 'max-height:18vh;max-width:18vh;max-height:21vw; max-wdith:21vw;'>") +'<br>';
    }
                         
    return div;
};

//Call images being used as legends livelihood
legend2Livelihood.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [""],
        labels = ["Legend_Livelihood.png"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            grades[i] + (" <img src="+ labels[i] +" style= 'max-height:24vh;max-width:28vh;max-height:36vw; max-wdith:36vw;'>") +'<br>';
    }

    return div;
};

//Call images being used as legends conflicts
legend3Conflicts.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [""],
        labels = ["Legend_Conflicts.png"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            grades[i] + (" <img src="+ labels[i] +" style= 'max-height:48vh;max-width:48vh;max-height:37vw; max-wdith:37vw;'>") +'<br>';
    }

    return div;
};

//Call images being used as legends faction
legend4Faction.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [""],
        labels = ["Legend_Faction.png"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            grades[i] + (" <img src="+ labels[i] +" style= 'max-height:20vh;max-width:24vh;max-height:17vw; max-wdith:17vw;'>") +'<br>';
    }

    return div;
};

//Call images being used as legends population
legend5Population.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [""],
        labels = ["Legend_Population.png"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            grades[i] + (" <img src="+ labels[i] +" style= 'max-height:18vh;max-width:18vh;max-height:24vw; max-wdith:24vw;'>") +'<br>';
    }

    return div;
};

//Add Legend 1 to map
legend1FoodInsecurity.addTo(map);

//Legend Add/Remove Controls
 map.on('overlayadd', function (eventLayer) {

    switch (eventLayer.name) {
    case "Food Insecurity":
        legend1FoodInsecurity.addTo(map);
        map.removeControl(legend2Livelihood);
        map.removeControl(legend3Conflicts);
        map.removeControl(legend4Faction);
        map.removeControl(legend5Population);
            break;
    case "Livelihood":
        legend2Livelihood.addTo(map);
        map.removeControl(legend1FoodInsecurity);
        map.removeControl(legend3Conflicts);
        map.removeControl(legend4Faction);
        map.removeControl(legend5Population);
            break;
    case "Conflicts":
        legend3Conflicts.addTo(map);
        map.removeControl(legend1FoodInsecurity);
        map.removeControl(legend2Livelihood);
        map.removeControl(legend4Faction);
        map.removeControl(legend5Population);
            break;
    case "Faction":
        legend4Faction.addTo(map);
        map.removeControl(legend1FoodInsecurity);
        map.removeControl(legend2Livelihood);
        map.removeControl(legend3Conflicts);
        map.removeControl(legend5Population);
            break;
    case "Population":
        legend5Population.addTo(map);
        map.removeControl(legend1FoodInsecurity);
        map.removeControl(legend2Livelihood);
        map.removeControl(legend3Conflicts);
        map.removeControl(legend4Faction);
            break;
    }
  });

setInterval(function () {
   map.invalidateSize();
}, 100);


    //Bind a popup for the food insecurity
    foodInsecurity.bindPopup(function (layer) {
    return L.Util.template('<p>The level of food insecurity in this region is <strong>{ML2} out of 5</strong>.</p>', layer.feature.properties);
  });

    //Query by specific values for food insecurity (indeex.html page)
    var insecurityFood = document.getElementById('insecurity');

      insecurityFood.addEventListener('change', function () {
        foodInsecurity.setWhere(insecurityFood.value);
      });
    
    
    //Bind a popup for the livelihood
    livelihoodYemen.bindPopup(function (layer) {
    return L.Util.template('<p>The livelihood of this region is: <strong>{LZNAMEEN}</strong>.</p>', layer.feature.properties);
    });

   //Query by specific values for livelihood (indeex.html page)
    var zonesLivelihood = document.getElementById('zone');

      zonesLivelihood.addEventListener('change', function () {
        livelihoodYemen.setWhere(zonesLivelihood.value);
      });
    
    //Bind a popup for the conflicts
    conflictsYemen.bindPopup(function (layer) {
        return L.Util.template('<p>Conflict Type - <strong>{sub_event_type}</strong>: was initiated by <strong>{actor1}</strong> and resulted in <strong>{fatalities}</strong> casualties.</p>', layer.feature.properties);
      });

    //Query by specific values for conflicts (indeex.html page)
    var areaConflicts = document.getElementById('areas');

      areaConflicts.addEventListener('change', function () {
        conflictsYemen.setWhere(areaConflicts.value);
      });
    
    //Bind a popup for the territories
    oppositionTerritories.bindPopup(function (layer) {
    return L.Util.template('<p>The faction currently in control of this region is <strong>{Faction}</strong>.</p>', layer.feature.properties);
    });

    //Query by specific values for territories (indeex.html page)
    var oppTerritories = document.getElementById('territories');

      oppTerritories.addEventListener('change', function () {
        oppositionTerritories.setWhere(oppTerritories.value);
      });

    //Bind a popup for the population
    popYemen.bindPopup(function (layer) {
    return L.Util.template('<p>The population of <strong>{Link__Dist}</strong> is approximately <strong>{Link__Pop1}</strong> as of 2019</p>', layer.feature.properties);
  });

    //Query by specific values for population (indeex.html page)
    var popPopulation = document.getElementById('population');

      popPopulation.addEventListener('change', function () {
        popYemen.setWhere(popPopulation.value);
      });


    //Bind a popup for the country name
    countryYemen.bindPopup(function (layer) {
    return L.Util.template('<p>This is the country of <strong>{NAME_0}</strong>.</p>', layer.feature.properties);
  });

    //Bind a popup for the state names
    stateYemen.bindPopup(function (layer) {
    return L.Util.template('<p>This is the "state" of <strong>{NAME_1}</strong>.</p>', layer.feature.properties);
  });

    //Bind a popup for the county names
    countyYemen.bindPopup(function (layer) {
    return L.Util.template('<p>This is the "county" of <strong>{NAME_2}</strong>.</p>', layer.feature.properties);
  });

L.control.layers(baseLayers, overlays).addTo(map);
