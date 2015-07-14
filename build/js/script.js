function initialize() {
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

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
    '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
