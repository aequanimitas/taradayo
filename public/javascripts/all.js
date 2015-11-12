(function() {
var map = L.map('map').setView([14.5800, 121.0000], 13),
    attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>' +
                  'contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">' +
                  'CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';

L.tileLayer('http://localhost/osm_tiles/{z}/{x}/{y}.png', {
  attribution: attribution,
  maxZoom: 20
}).addTo(map);
})();
