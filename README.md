
# Projektübersicht: Web- und JavaScript-Projekte  
*[See English version below](#project-overview-web--javascript-projects)*

Dies ist eine Sammlung von Mini-Projekten rund um HTML, CSS, JavaScript, Node.js und moderne Webtechnologien.  
Jedes Unterverzeichnis enthält ein eigenes Projekt mit einer `README.md`-Datei, die Funktionsweise, Besonderheiten und Nutzung beschreibt.

Die Sammlung dient sowohl als Lernportfolio als auch als Inspiration für eigene Webanwendungen. Viele Projekte basieren auf YouTube-Tutorials (*Programmieren mit Mario*, *Web Dev Simplified*, *The Net Ninja*, u. a.) und wurden erweitert oder angepasst.

---

## Projektübersicht (nach Namen sortiert)

| Projektname           | Beschreibung                                      | Technologien / Konzepte            |
|-----------------------|--------------------------------------------------|------------------------------------|
| **2048**              | Spiel "2048" mit Scoreanzeige                    | JS, Arrays, DOM, Game Logic        |
| **advanced-todo**     | Todo-Liste mit Template + localStorage           | JS, DOM, Templates, localStorage   |
| **autocomplete**      | Autovervollständigung mit eigener Logik          | JS, DOM, fetch, debounce           |
| **autocomplete-test** | Mocha/Chai Tests für Autocomplete-Logik          | Mocha, Chai, Testing DOM           |
| **basic-todo**        | Einfache Todo-Liste mit Check- & Delete-Option   | JS, Events, DOM                    |
| **ecommerce-app**     | Node.js-basierter Shop mit Express + Templates   | Express, Routing, Templates, Cookies |
| **expandable-cards**  | Akkordeonartige Infokarten mit "Expand"-Funktion | JS, DOM, Events                    |
| **generators**        | Schreibmaschinen-Effekt mit Generatorfunktionen  | JS, Generatoren, DOM               |
| **link-sharing**      | Verschlüsselter Link mit `btoa/atob`             | JS, DOM, Encoding                  |
| **mapbox-location**   | Mapbox-Karte mit Geolocation API                 | JS, Mapbox, Geolocation API        |
| **midi-piano**        | MIDI-Piano mit Tastensteuerung und Tonausgabe    | JS, Audio API, Keyboard Events     |
| **mini-quiz**         | Quiz mit Auswertung und Feedback                 | JS, Events, Formulare              |
| **modal**             | Modal-Fenster mit Overlay                        | JS, Klassensteuerung               |
| **movie-fight**       | Vergleich von Filmen mit OMDb API                | JS, Axios, API, Bulma              |
| **multi-language**    | Mehrsprachige Website (de/en)                    | JS, JSON, DOM                      |
| **styled-todo**       | Gestylte Todo-App mit localStorage               | HTML, CSS, JS                      |
| **terminal-lister**   | Tool zur Dateiauflistung im Terminal             | Node.js, fs, util, chalk           |
| **todomvc**           | Standardisierte TodoMVC-App                      | HTML, CSS, JS                      |
| **typewriter**        | Schreibmaschineneffekt mit Generatorfunktion     | JS, Generator, DOM                 |
| **word-game**         | Wordle-ähnliches Spiel mit Farblogik & API       | JS, API, Spielmechanik             |

---

## Hinweise

- Alle Projekte sind für Lernzwecke gedacht und können als Grundlage für eigene Erweiterungen dienen.
- Die meisten Browserprojekte lassen sich mit einem lokalen Server starten:
  ```bash
  npx http-server
  ```
  oder mit einer Erweiterung wie **Live Server** in VS Code.
- Node.js-Projekte benötigen:
  ```bash
  npm install
  npm start
  ```
- Manche Projekte nutzen externe APIs (OMDb, Mapbox etc.). API-Keys ggf. separat eintragen.

---

## Project Overview: Web & JavaScript Projects

This is a collection of mini-projects focused on HTML, CSS, JavaScript, Node.js, and other web technologies.  
Each subfolder contains a standalone project with its own `README.md` explaining its functionality and usage.

This collection serves as both a learning portfolio and an inspiration source for future web applications. Most projects are based on YouTube tutorials (*Web Dev Simplified*, *The Net Ninja*, *Programmieren mit Mario*) and were adapted or extended.

---

### Project Index (Sorted Alphabetically)

| Project Name          | Description                                     | Technologies / Concepts            |
|-----------------------|------------------------------------------------|------------------------------------|
| **2048**              | A playable 2048 game with scoring               | JS, Arrays, DOM, Game Logic        |
| **advanced-todo**     | Todo list using templates and localStorage      | JS, DOM, Templates, localStorage   |
| **autocomplete**      | Autocomplete search component                   | JS, DOM, fetch, debounce           |
| **autocomplete-test** | Mocha/Chai tests for autocomplete functionality | Mocha, Chai, Testing DOM           |
| **basic-todo**        | Basic todo list with check & delete             | JS, Events, DOM                    |
| **ecommerce-app**     | Express-based shop with cart + templates        | Express, Routing, Templates, Cookies |
| **expandable-cards**  | Accordion-style cards with expand/collapse      | JS, DOM, Events                    |
| **generators**        | Typewriter animation using generator functions  | JS, Generators, DOM                |
| **link-sharing**      | Encrypted message link sharing using btoa/atob  | JS, DOM, Encoding                  |
| **mapbox-location**   | Mapbox map centered on user location            | JS, Mapbox, Geolocation API        |
| **midi-piano**        | MIDI-style keyboard with sound playback         | JS, Audio API, Keyboard Events     |
| **mini-quiz**         | Quiz with score and visual feedback             | JS, Events, Forms                  |
| **modal**             | Modal dialog with overlay toggle                | JS, Class toggling                 |
| **movie-fight**       | Movie comparison using OMDb API                 | JS, Axios, API, Bulma              |
| **multi-language**    | Multilingual site using dynamic JSON loading    | JS, JSON, DOM                      |
| **styled-todo**       | CSS-styled todo app with localStorage           | HTML, CSS, JS                      |
| **terminal-lister**   | Terminal tool to list files with formatting     | Node.js, fs, util, chalk           |
| **todomvc**           | Standardized TodoMVC template implementation    | HTML, CSS, JS                      |
| **typewriter**        | Typewriter effect using generator functions     | JS, Generator, DOM                 |
| **word-game**         | Wordle-like guessing game using colors & API    | JS, Fetch API, Game Logic          |

---

### Notes

- These projects are educational and serve as learning or starter templates.
- Most browser-based apps should be run via a local server:
  ```bash
  npx http-server
  ```
  or use a tool like **Live Server** in VS Code.
- For Node.js-based projects:
  ```bash
  npm install
  npm start
  ```
- Some projects use third-party APIs (OMDb, Mapbox, etc.). API keys may be required.

