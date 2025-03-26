
# Multi-Language Web Page  
<span style="color:rebeccapurple">Eine mehrsprachige Webseite mit dynamischem Sprachwechsel</span>  

###### -- taken from the youtube: [Programmieren mit Mario](https://www.youtube.com/@ProgrammierenMario)

######[Zur deutschen Version](#deutsche-version)
##### *English*

### Overview
This project is a multi-language webpage that dynamically loads content based on the selected language. It uses JSON files to store translations in different languages (German and English), making it easy to expand to additional languages in the future.

### Note
For best results, always run this project on a local server, as direct file access (`file://`) may block JSON loading due to browser security restrictions.

### Folder Structure
- **index.html**: The main HTML file with language toggle links.
- **script.js**: JavaScript file that loads JSON language files and updates content dynamically.
- **languages/**: Folder containing JSON files for translations.
  - `de.json`: German translations.
  - `en.json`: English translations.

### Usage
To view the webpage with full functionality:
1. Run the project on a local server to enable JSON file loading. You can use any tool, such as:
   - A browser extension that launches a local server (e.g., **Live Server** for Visual Studio Code).
   - A local server command with your preferred tool (such as Node.js):
     ```bash
     npx http-server
     ```
2. Open the local server link (e.g., `http://localhost:8080`) in your browser.

### How It Works
The `script.js` file dynamically loads the selected language JSON file (from the `languages/` folder) and updates the text content of the page based on `data-i18n` attributes in `index.html`.

---

## Deutsche Version

### Projektübersicht
Dieses Projekt ist eine mehrsprachige Webseite, die den Inhalt basierend auf der ausgewählten Sprache dynamisch lädt. JSON-Dateien speichern die Übersetzungen für verschiedene Sprachen (Deutsch und Englisch), wodurch die Webseite leicht um weitere Sprachen erweitert werden kann.

### Hinweis
Für beste Ergebnisse sollte das Projekt immer auf einem lokalen Server ausgeführt werden, da der direkte Dateizugriff (`file://`) das Laden von JSON-Dateien aufgrund von Browsersicherheitsbeschränkungen blockieren kann.

### Ordnerstruktur
- **index.html**: Die Haupt-HTML-Datei mit Links zum Sprachwechsel.
- **script.js**: JavaScript-Datei, die die JSON-Sprachdateien lädt und den Inhalt dynamisch aktualisiert.
- **languages/**: Ordner mit JSON-Dateien für Übersetzungen.
  - `de.json`: Deutsche Übersetzungen.
  - `en.json`: Englische Übersetzungen.

### Verwendung
Um die Seite mit voller Funktionalität zu nutzen:
1. Das Projekt auf einem lokalen Server ausführen, um das Laden der JSON-Dateien zu ermöglichen. Dafür kann jede Methode genutzt werden, z. B.:
   - Eine Browser-Erweiterung, die einen lokalen Server startet (z. B. **Live Server** in Visual Studio Code).
   - Ein Befehl für einen lokalen Server mit einem bevorzugten Tool (z. B. Node.js):
     ```bash
     npx http-server
     ```
2. Öffne den lokalen Server-Link (z. B. `http://localhost:8080`) im Browser.

### Funktionsweise
Die Datei `script.js` lädt die ausgewählte Sprachdatei (aus dem `languages/`-Ordner) und aktualisiert den Textinhalt der Seite basierend auf `data-i18n`-Attributen in `index.html`.

---
