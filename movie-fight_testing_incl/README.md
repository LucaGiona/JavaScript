
# Movie Fight – Filmvergleich per API + Testing Folder

**[English version below](#english-version)**

Ein visuelles Tool zum Vergleichen von zwei Filmen anhand von Daten aus der **OMDb API**. Nutzer können auf beiden Seiten Filme suchen und vergleichen – basierend auf Bewertungen, Auszeichnungen, Einnahmen uvm.

---

## Funktionen

- Live-Suche mit Autocomplete (über OMDb API)
- Vergleich von zwei Filmen in Spaltenansicht
- Automatisches Hervorheben der besseren Werte
- Bewertungsmetriken: IMDb-Rating, Box Office, Auszeichnungen, Metascore, Votes
- Debounce-Mechanismus zur API-Optimierung

---

## Technologien

- HTML, CSS (Bulma), JavaScript (Vanilla)
- [OMDb API](https://www.omdbapi.com/)
- `axios` für API-Requests
- `debounce` zur Performance-Optimierung
- Modulares Setup: `utils.js`, `autocomplete.js`, `index.js`
- Ein separater `tests/`-Ordner enthält **Mocha/Chai-Tests** für die Autocomplete-Komponente

---

## Installation

1. Projektordner lokal öffnen oder klonen
2. Einen gültigen API-Key von [omdbapi.com](https://www.omdbapi.com/apikey.aspx) besorgen
3. In `index.js` den Platzhalter durch deinen API-Key ersetzen:
   ```js
   apikey: 'DEIN_API_KEY'
   ```
4. `index.html` im Browser öffnen

---

## Dateistruktur

```bash
.
├── index.html             # Einstiegspunkt
├── index.js               # Vergleichslogik & Seitensteuerung
├── autocomplete.js        # Autocomplete-Komponente
├── utils.js               # debounce-Funktion
├── style.css              # (Optionales) Styling
├── tests/                 # Unit-Tests für Autocomplete (Mocha + Chai)
│   └── autocomplete.test.js
```

---

## Beispiel

- Titel eingeben (z. B. „Inception“) → Dropdown erscheint automatisch
- Links und rechts jeweils einen Film auswählen
- Die beiden Filme werden nebeneinander verglichen
- Die besseren Werte werden farblich hervorgehoben (per CSS-Klasse)

---

## Tests

Im Ordner `tests/` befinden sich Unit-Tests für die Autocomplete-Komponente. Diese sind mit **Mocha** und **Chai** geschrieben und prüfen unter anderem:

- Initialzustand des Dropdowns
- Aktivierung nach Eingabe
- Korrekte Anzeige der Ergebnisanzahl

Zum Ausführen im Browser kannst du z. B. Mocha über ein CDN einbinden oder ein Setup mit `jsdom` in Node nutzen.

---

## Lizenz

MIT – frei zur Nutzung, Anpassung und Weiterentwicklung.

---

## English Version

A visual side-by-side movie comparison tool using the **OMDb API**. Users can search for two different movies and compare them across various metrics such as ratings, awards, box office earnings, and more.

---

## Features

- Live search with autocomplete (OMDb API)
- Compare two movies side by side
- Highlights the better values visually
- Comparison metrics: IMDb Rating, Box Office, Awards, Metascore, IMDb Votes
- Debounce mechanism to reduce API calls

---

## Technologies

- HTML, CSS (Bulma), JavaScript (Vanilla)
- [OMDb API](https://www.omdbapi.com/)
- `axios` for data fetching
- `debounce()` utility
- Modular file structure (`utils.js`, `autocomplete.js`, `index.js`)
- A `tests/` folder contains **Mocha/Chai tests** for the autocomplete functionality

---

## Setup

1. Download or clone the repository
2. Get your free API key from [omdbapi.com](https://www.omdbapi.com/apikey.aspx)
3. Replace the placeholder in `index.js`:
   ```js
   apikey: 'YOUR_API_KEY'
   ```
4. Open `index.html` in your browser

---

## Folder Structure

```bash
.
├── index.html
├── index.js
├── autocomplete.js
├── utils.js
├── style.css
├── tests/
│   └── autocomplete.test.js
```

---

## Testing

The `tests/` folder includes unit tests using **Mocha** and **Chai**. They cover:

- Initial closed state of the dropdown
- Activation on user input
- Rendering of result items

You can run the tests either in-browser (with Mocha/Chai CDNs) or using a Node-based test runner with `jsdom`.

---

## License

MIT – free to use, modify, and distribute.
