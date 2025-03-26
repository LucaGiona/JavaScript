const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoibWFyYWx1YyIsImEiOiJjbHVsYjZnNXUwZXR5Mm9wN2V3MjRmbHA1In0.hps5O5rpRVMWZXlXFBdoEQ";


 // const map = new mapboxgl.Map({
 //   accessToken: MAPBOX_ACCESS_TOKEN,
 //   container: "map", // container ID
 //   style: "mapbox://styles/mapbox/streets-v12", // style URL
 //   // center: [-74.5, 40], // starting position [lng, lat]
 //   // zoom: 9, // starting zoom
 // });
 navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
 })

 function setupMap(centerPosition){
   const map = new mapboxgl.Map({
     accessToken: MAPBOX_ACCESS_TOKEN,
     container: "map", // container ID
     style: "mapbox://styles/mapbox/streets-v12", // style URL
     center: centerPosition,
     // center: [-74.5, 40], // starting position [lng, lat]
      zoom: 13, // starting zoom
   });
const navigationControl = new mapboxgl.NavigationControl()
map.addControl(navigationControl)
 }
 

 function successLocation(position){
  setupMap([position.coords.longitude, position.coords.latitude])

 }

 function errorLocation(error){
  console.log(error, "Fehler")
  setupMap([-2.24, 53.48])
 }