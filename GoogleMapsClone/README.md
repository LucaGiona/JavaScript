
# Mapbox Geolocation Viewer  
**[English version below](#english-version)**  

Ein kleines Projekt mit Mapbox GL JS, das die aktuelle Position des Nutzers ermittelt und eine Karte anzeigt. Wird keine Position freigegeben, zeigt es einen Fallback-Standort an.

---

## Funktionen

- Fragt beim Nutzer nach Standortfreigabe via `navigator.geolocation`
- Zeigt eine interaktive Mapbox-Karte mit aktueller Position an
- Falls Geolocation blockiert wird → Anzeige eines Standardorts
- Mapbox Navigations-Controls sind aktiviert

---

## Voraussetzungen

1. Eine HTML-Datei mit einem `<div id="map"></div>`  
2. Ein eigener [Mapbox Access Token](https://account.mapbox.com/access-tokens/)  
3. Mapbox GL JS und CSS im Projekt einbinden:

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css" rel="stylesheet" />
```

---

## Beispielcode (JavaScript)

```js
const MAPBOX_ACCESS_TOKEN = "dein-token-hier";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]); // Fallback: Manchester
}

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: centerPosition,
    zoom: 13,
  });

  const navigationControl = new mapboxgl.NavigationControl();
  map.addControl(navigationControl);
}
```

---

## Lizenz

MIT – frei verwendbar mit eigenem Token.

---

## English Version

A small Mapbox project using geolocation. It displays an interactive map centered on the user's current location (if permission is granted). Otherwise, it falls back to a default location.

---

## Features

- Uses `navigator.geolocation` to get the user's current coordinates
- Displays a Mapbox map centered on user position
- Fallback to default location if permission is denied or fails
- Adds Mapbox's navigation controls to the map

---

## Requirements

1. A container element like `<div id="map"></div>` in your HTML  
2. A valid [Mapbox Access Token](https://account.mapbox.com/access-tokens/)  
3. Include Mapbox GL JS + CSS in your HTML:

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css" rel="stylesheet" />
```

---

## Example (JavaScript)

```js
const MAPBOX_ACCESS_TOKEN = "your-token-here";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]); // fallback location
}

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: centerPosition,
    zoom: 13,
  });

  const navigationControl = new mapboxgl.NavigationControl();
  map.addControl(navigationControl);
}
```

---

## License

MIT – free to use with your own Mapbox token.
