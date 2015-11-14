function init_map(){
  var myOptions = {
    zoom:15,center:new google.maps.LatLng(37.8000056,-122.41002409999999),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
  marker = new google.maps.Marker({
    map: map,position: new google.maps.LatLng(37.8000056, -122.41002409999999)
  });infowindow = new google.maps.InfoWindow({
    content:"BarNua<br/>561 Columbus Ave<br/>94133 san francisco" 
  });
  google.maps.event.addListener(marker, "click", function(){
    infowindow.open(map,marker);});infowindow.open(map,marker);
}google.maps.event.addDomListener(window, 'load', init_map);