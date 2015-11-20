var CourtInfo = React.createClass({
  render: function() {
    return (<span className="court"></span>);
  }
});
var MapBox = React.createClass({
  showInfo: function(e) {
    console.log(e);
  },
  setupCourtMarkers: function() {
    var courts = [
      { 
        "name": "1A",
        "coords": [14.611128274679167, 121.10397934913634] 
      },
      {
        "name": "1B",
        "coords": [14.60638890103478, 121.10630750656127]
      },
      { 
        "name": "1C",
        "coords": [14.6087923420603, 121.10480010509491]
      },
      {
        "name": "Kalayaan",
        "coords": [14.60823690554013, 121.10714972019196]
      }
    ];
    var markers = []; 
    courts.forEach(function(x) {
      var markerInfo = `${x.name} Court`;
      var marker = L.marker(x.coords,{
          "title": markerInfo,
          "riseOnHover": true
        })
        .bindPopup(`<b>${markerInfo}</b>`)
        .addTo(this.map);
      
      marker.on('click', this.showInfo, this);
      markers.push(marker);
    }, this);
  },
  buildMap: function() {
    var kvCoords = [14.60966442647526, 121.10607147216795]
    this.map.setView(kvCoords, 18);
    L.tileLayer('http://localhost/osm_tiles/{z}/{x}/{y}.png', {
      maxZoom: 20
    }).addTo(this.map);
    this.setupCourtMarkers();
  },
  componentDidMount: function() {
    // add these as children??
    // var x = window.document.getElementsByClassName('leaflet-marker-icon');
    this.map = L.map(ReactDOM.findDOMNode(this));
    this.buildMap();
  },
  render: function() {
    return (<div id="map"></div>);
  }
});

ReactDOM.render(
  <MapBox />,
  document.getElementById('app')
);
