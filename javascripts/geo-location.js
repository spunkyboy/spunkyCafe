 /* global google */
let map;

    function initMap() {
      const loading = document.getElementById('loading');
      loading.style.display = 'block';

      const defaultLocation = { lat: 53.8008, lng: -1.5491 }; // Leeds
          map = new google.maps.Map(document.getElementById('map'), {
            center: defaultLocation,
            zoom: 12
      });

      const MarkerClass = google.maps.marker?.AdvancedMarkerElement || google.maps.Marker;

      new MarkerClass({ position: defaultLocation, map: map, title: 'Frankie Cafe' });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => {
            const userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            map.setCenter(userLocation);
            map.setZoom(15);

            new MarkerClass({ position: userLocation, map: map, title: 'You are here' });

            loading.style.display = 'none';
          },
          () => {
            alert('Geolocation failed.');
            loading.style.display = 'none';
          }
        );
      } else {
        alert("Your browser doesn't support geolocation.");
        loading.style.display = 'none';
      }
    }

    /* eslint-disable no-unused-vars */
    function handleLocationError(browserHasGeolocation) {
      const errorMessage = browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : "Error: Your browser doesn't support geolocation.";
      alert(errorMessage);
    }

    window.initMap = initMap;

