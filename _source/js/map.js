var myLatLng = {lat: 55.2282837, lng: 61.3754891};
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
  });
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Toyota'
  });
}