// Visualizing_data-with Leaflet - logic.js

//Earhquakes GeoJSON URL Variable
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Initialize & Create LayerGroup for earhquakes
var earthquakes = new ListeningStateChangedEvent.LayerGroup();

//Define Variables for Tile Layers
var satelliteMap = L.titleLayer("https://api.tiles.mapbox.com/v4{id}/{z}/{x}/{y}.png?access_token{accessToken}", {
    attribution: "Map data &copy; <a href=\"httpsL://www.openstreetmap.org?/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href-\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
});
