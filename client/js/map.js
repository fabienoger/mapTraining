if (Meteor.isClient) {
  $(document).ready(function() {
    Template.map.rendered = function() {
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      var marker = L.marker([51.5, -0.09]).addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

      var circle = L.circle([51.508, -0.11], 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
      }).addTo(map);

      var polygon = L.polygon([
          [51.509, -0.08],
          [51.503, -0.06],
          [51.51, -0.047]
      ]).addTo(map);
    }
  });
}
