var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  });
  var map = new L.Map('map', {
  'center': [40.43795438124197,-3.6922931679873723],
    'zoom': 17,
    'layers': [tileLayer]
  });
  var marker = L.marker([40.43795438124197,-3.6922931679873723]).addTo(map);map.on('click', function (e) {
    if (marker) {
      map.removeLayer(marker);
    }
    marker = new L.Marker(e.latlng).addTo(map);
    document.getElementById('UBICACION').value = [e.latlng.lat, e.latlng.lng];
  });
  