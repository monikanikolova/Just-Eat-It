function initMap() {
    // The location of Uluru
    var uluru = {lat: 35.215909, lng: -80.850111};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }