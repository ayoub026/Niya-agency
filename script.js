document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        alert('Bedankt voor je interesse! We nemen snel contact met je op.');
    });
})
document.addEventListener("DOMContentLoaded", function () {
    // Initialiseer Leaflet-kaart
    var map = L.map('map').setView([51.950637202844966, 5.897669917177035], 16);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    var marker = L.marker([51.950637202844966, 5.897669917177035]).addTo(map);
    marker.bindPopup("<b>Niya Agency</b><br>Groningsingel 1191").openPopup();
