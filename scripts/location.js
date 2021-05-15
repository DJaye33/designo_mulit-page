// Map for Canada Location
let mapCanada = L.map("canada").setView([43.64401, -79.39454], 13);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=L9083gsx1oQ7ZyL8aqDx",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(mapCanada);

L.marker([43.64401, -79.39454])
  .addTo(mapCanada)
  .bindPopup("Designo Central Office")
  .openPopup();

// Map for Australia Location
let mapAustralia = L.map("australia").setView([-30.32953, 149.78819], 13);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=L9083gsx1oQ7ZyL8aqDx",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(mapAustralia);

L.marker([-30.32953, 149.78819])
  .addTo(mapAustralia)
  .bindPopup("Designo AU Office")
  .openPopup();

// Map for UK Location
let mapUK = L.map("uk").setView([51.93936, -3.88149], 13);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=L9083gsx1oQ7ZyL8aqDx",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(mapUK);

L.marker([51.93936, -3.88149])
  .addTo(mapUK)
  .bindPopup("Designo UK Office")
  .openPopup();
