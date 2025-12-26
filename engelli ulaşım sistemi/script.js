function animateBus(bus) {
  let index = 0;
  const marker = L.marker(bus.coords[0], {
    icon: L.icon({
      iconUrl:'https://maps.google.com/mapfiles/ms/icons/bus.png',
      iconSize:[32,32]
    })
  }).addTo(map).bindPopup(bus.name + " hattı");

  function move() {
    index++;
    if(index < bus.coords.length){
      marker.setLatLng(bus.coords[index]);
      setTimeout(move, 1000); // her 1 saniye hareket eder
    }
  }
  move();
  
}
const qrData = `Ad: ${name}
Engel Durumu: ${disability}
Başlangıç: ${start}
Hedef: ${end}
Koltuk: ${seat}
Bilet Ücreti: ${price}`;

new QRCode(document.getElementById("qrCode"), {
    text: qrData,
    width: 150,
    height: 150
});


// Örnek: uygun otobüsleri animasyonla göster
availableBuses.forEach(bus => animateBus(bus));