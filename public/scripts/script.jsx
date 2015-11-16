    // lat: 14.60966442647526, lng: 121.10607147216795
var kvCoords = [14.60966442647526, 121.10607147216795]
var map = L.map('map').setView(kvCoords, 18);
var attribution = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
L.tileLayer('http://localhost/osm_tiles/{z}/{x}/{y}.png', {
  attribution: attribution,
  maxZoom: 20
}).addTo(map);
 
var courts = {
  "1A": { 
    "coords": [14.611128274679167, 121.10397934913634] 
   },
  "1B": { 
    "coords": [14.60638890103478, 121.10630750656127]
   },
  "1C": { 
    "coords": [14.6087923420603, 121.10480010509491]
   },
  "Kalayaan": { 
    "coords": [14.60823690554013, 121.10714972019196]
  }
}

Array.prototype.forEach.call(Object.keys(courts), function(x) {
  L.marker(courts[x].coords)
    .bindPopup(`<b>${x} Court</b>`)
    .addTo(map);
});

// debug
map.on('click', function(e) {
  console.log(e.latlng);
});
