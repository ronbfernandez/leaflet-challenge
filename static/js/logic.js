// Visualizing_data-with Leaflet - logic.js

//Earhquakes GeoJSON URL Variable
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Initialize & Create LayerGroup for earhquakes
var earthquakes = new L.LayerGroup();

// Selectable backgrounds of our map - tile layers:
// grayscale background.
var graymap_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1Ijoicm9uYmZlcm5hbmRleiIsImEiOiJja3A0c3J6ZjMwY3IyMnB0OGYwZTRpZDIzIn0.V-N2WedlsiLh5E6ybb30ng");

// satellite background.
var satellitemap_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1Ijoicm9uYmZlcm5hbmRleiIsImEiOiJja3A0c3J6ZjMwY3IyMnB0OGYwZTRpZDIzIn0.V-N2WedlsiLh5E6ybb30ng");

// outdoors background.
var outdoors_background = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1Ijoicm9uYmZlcm5hbmRleiIsImEiOiJja3A0c3J6ZjMwY3IyMnB0OGYwZTRpZDIzIn0.V-N2WedlsiLh5E6ybb30ng");

  // map object to an array of layers we created.
var map = L.map("mapid", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [graymap_background, satellitemap_background, outdoors_background]
});

// adding one 'graymap' tile layer to the map.
graymap_background.addTo(map);

// layers for two different sets of data, earthquakes and tectonicplates.
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

// base layers
var baseMaps = {
  Satellite: satellitemap_background,
  Grayscale: graymap_background,
  Outdoors: outdoors_background
};

// overlays 
var overlayMaps = {
  "Tectonic Plates": tectonicplates,
  "Earthquakes": earthquakes
};

// control which layers are visible.
L
  .control
  .layers(baseMaps, overlayMaps)
  .addTo(map);

  