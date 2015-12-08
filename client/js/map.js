if (Meteor.isClient) {
  $(document).ready(function() {
    Template.map.rendered = function() {
      // Options for disable / unable latlng onclick
      var latlng = true;
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
      var map = L.map('map').setView([48.85, 2.34], 12);

      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      var marker = L.marker([48.84765, 2.4359]).addTo(map);
      marker.bindPopup("<i class='material-icons'>work</i><b>Synaltic</b><br />24, rue de l'église.");

      var circle = L.circle([51.508, -0.11], 500, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5
      }).addTo(map);

      var maisons_alfort = L.polygon([
        [48.786638, 2.432911],
        [48.786978, 2.435830],
        [48.797778, 2.442610],
        [48.807332, 2.463639],
        [48.815754, 2.450507],
        [48.816036, 2.416174],
        [48.802527, 2.426388]
      ]).addTo(map);
      maisons_alfort.bindPopup("Network.");

      var network = L.polygon([
          [48.84911, 2.32671],
          [48.84011, 2.33671],
          [48.82035, 2.33864],
          [48.83061, 2.3191]
      ]).addTo(map);
      network.bindPopup("Network.");

      var popup = L.popup();
      function onMapClick(e) {
          popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
      }

      if (latlng == true)
        map.on('click', onMapClick);
      else
        console.log("foo");

    }
    Template.map.events({
      'click #close-settings': function() {
        if ($("#settings").css("right") == "30px")
          $("#settings").animate({right: "-260px"});
        else
          $("#settings").animate({right: "30px"});
      },
      'click #latlng': function() {
        latlng = !latlng;
        console.log($("#latlng > i"));
        console.log(latlng);
      }
    });
  });
}
