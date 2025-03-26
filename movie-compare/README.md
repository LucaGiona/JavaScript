# Movie Fight

---

```markdown
# 🎬 Movie Fight – Filmvergleich mit OMDb API  
**Movie Fight – Compare Two Films Using the OMDb API**

**DEUTSCH** | **ENGLISH** — see below ⬇️

---

## 📚 Projektbeschreibung (DE)

**Movie Fight** ist eine Webanwendung, mit der du zwei Filme suchen und deren Werte vergleichen kannst. Die App verwendet eine eigene Autocomplete-Komponente, ruft Daten von der OMDb API ab und stellt die Ergebnisse visuell gegenüber. Nach Auswahl beider Filme werden Kategorien wie „Box Office“, „IMDB Rating“ oder „Auszeichnungen“ automatisch verglichen – mit optischem Highlighting des jeweils besseren Films.

---

## 🚀 Funktionen

- Autocomplete-Suchfeld für beide Seiten
- Filmvergleich auf Basis echter Daten
- Optische Auswertung je Kategorie
- Farbliche Hervorhebung von Siegern
- Responsive Design mit **Bulma CSS**
- Debounce zur Reduzierung der API-Anfragen
- Nutzung der **OMDb API** (Open Movie Database)

---

## 🔧 Technologien

- [OMDb API](https://www.omdbapi.com/)
- [axios](https://axios-http.com/)
- [Bulma](https://bulma.io/)
- [Font Awesome](https://fontawesome.com/)
- Plain JavaScript (Vanilla JS)

---

## 🗂️ Projektstruktur

```bash
├── index.html         # Hauptstruktur & Markup
├── index.js           # Logik für API, Vergleich, Anzeige
├── autocomplete.js    # Dynamische Vorschläge per API
├── utils.js           # Debounce-Funktion
├── style.css          # Eigenes CSS (optional)
```

---

## 🛠️ Setup

1. Stelle sicher, dass du mit einem lokalen Server arbeitest (`Live Server` empfohlen)
2. Öffne `index.html` im Browser
3. Suche links und rechts nach einem Film
4. Vergleiche!

> Du brauchst einen gültigen API-Key für die OMDb API (`apikey=...`). Der Key `d9835cc5` ist für Testzwecke enthalten, kann aber limitiert sein.

---

## 💡 Erweiterungsideen

- Trailer-Einbindung via YouTube API
- Favoritenliste / History
- Mehr Vergleichskategorien (z. B. Schauspieler, Laufzeit)
- Bewertungsdiagramme mit Chart.js
- Lokalisierung (Sprache auswählen)

---

## 🪪 Lizenz

MIT – frei verwendbar und erweiterbar für Lern- und Hobbyprojekte.

---

# 🇬🇧 Movie Fight – Compare Two Movies with OMDb API

**Movie Fight** is a web app that lets you search for two movies and compare them side-by-side. It uses a custom autocomplete component, fetches data from the OMDb API, and highlights the better movie in each category using colors and layout.

---

## 🚀 Features

- Autocomplete search input on both sides
- Real-time movie comparison (Box Office, IMDB, Awards, etc.)
- Visual highlighting of stronger stats
- Responsive UI powered by **Bulma CSS**
- API-efficient with **debounce**
- Fully based on the **OMDb API**

---

## 🔧 Technologies

- [OMDb API](https://www.omdbapi.com/)
- [axios](https://axios-http.com/)
- [Bulma](https://bulma.io/)
- [Font Awesome](https://fontawesome.com/)
- Plain Vanilla JavaScript

---

## 🗂️ Project Structure

```bash
├── index.html         # Main layout & containers
├── index.js           # Core logic: API calls, rendering, comparison
├── autocomplete.js    # Reusable autocomplete component
├── utils.js           # Debounce helper
├── style.css          # Custom styles (optional)
```

---

## 🛠️ Setup

1. Run the app via a local web server (e.g. Live Server)
2. Open `index.html` in your browser
3. Search for a movie on both the left and right side
4. See who wins!

> Note: You’ll need an API key for the OMDb API (`apikey=...`). The demo uses `d9835cc5`, which may be rate-limited.

---

## 💡 Ideas to Extend

- Integrate trailers (YouTube API)
- Add favorites / history feature
- Add more categories (actors, runtime, ratings breakdown)
- Use Chart.js for visual comparisons
- Add language support (i18n)

---

## 🪪 License

MIT – Free to use, learn from, and adapt for your own creative projects.
```
