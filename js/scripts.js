$('#alertButton').on('click', function() {
  alert('The Reform will take place Fall 2019');
});

mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVyb3NlbmJhdW0iLCJhIjoiY2p1a2hjYnN1MXZ5bDQzcGcyd3M2djkyNCJ9._8wwgcVBrEeXxMoTgrXRGg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eddierosenbaum/cjuklbw401zjh1fqueauiyv2y',
  center: [32.288818,48.814099],
  zoom: 4.0
});


var clinics= [
  {
    lng: 38.5137507,
    lat: 48.788572,
    name: 'Toshkivka'
  },
  {
    lng: 39.34227,
    lat: 48.46389,
    name: 'Stepove'
  }
  
];
console.log(clinics)
clinics.forEach(function(clinic) {


  new mapboxgl.Marker()
    .setLngLat([clinic.lng, clinic.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`MdM Clinic: ${clinic.name}`))
    .addTo(map);
})
