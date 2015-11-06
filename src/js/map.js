function initMap() {
  var mapOptions = {
    zoom: 16,
    disableDefaultUI:true,
    center: new google.maps.LatLng(59.936352,30.321097)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var imageMarker = "img/map-marker.svg";
  var myLatLng = new google.maps.LatLng(59.936352,30.321097);
  var pinkMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: imageMarker
  });
}