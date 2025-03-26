##DOM Manipulation

---

```markdown
# JavaScript DOM Manipulation Demo

This project demonstrates a wide range of JavaScript DOM manipulation techniques in a single HTML file. It is meant for learning, experimenting, and understanding how JavaScript interacts with the Document Object Model (DOM).

Dieses Projekt zeigt eine Vielzahl von JavaScript-DOM-Manipulationstechniken in einer einzigen HTML-Datei. Es dient dem Lernen, Ausprobieren und Verstehen, wie JavaScript mit dem DOM arbeitet.

---

## Features / Funktionen

- Zugriff auf Elemente per ID, Class, Tag, Name
- Lesen und Setzen von Attributen
- Dynamisches Erstellen und Entfernen von HTML-Elementen
- Arbeiten mit Formularfeldern, Checkboxes und Buttons
- Bilder bewegen mit `setInterval()`
- Auslesen von Links, Bildern, Domain, URL, Dateiname
- Dynamische Listen, Texte und Bilder erstellen
- Dynamisches Anwenden und Entfernen von CSS-Klassen und Inline-Styles
- Nutzung eines Range-Sliders zur Anzeige von Werten

---

## Inhaltsübersicht / Feature Overview

| Bereich / Section            | Beschreibung (DE)                                          | Description (EN)                                      |
|------------------------------|-------------------------------------------------------------|--------------------------------------------------------|
| URL / Domain / Filename      | Ausgabe aktueller Adresse oder Dateiname                    | Show URL, domain or file name                          |
| Bild-Info & Links            | Auslesen von Bildpfaden und Links                           | Read image sources and link info                       |
| Name-Felder lesen            | Vor- und Nachname werden kombiniert angezeigt               | Read input fields and combine names                    |
| Checkbox-Gruppen             | Alle Checkboxen auf einmal aktivieren oder deaktivieren     | Check or uncheck all checkboxes at once                |
| Zugriff auf Klassen          | Inhalte aller `.divClass` Elemente auslesen                 | Read inner content of all `.divClass` elements         |
| Attribute auslesen           | Benutzerdefinierte Attribute via `getAttribute()`           | Read custom attributes from a div                      |
| Bild bewegen                 | Position eines Bildes animieren                             | Move an image across the screen                        |
| Neue Elemente erzeugen       | Text, Listen, Bilder dynamisch erzeugen                     | Create text, lists and images dynamically              |
| Elemente entfernen           | Entfernen von Bildern über ID                               | Remove images from DOM by ID                           |
| CSS-Klassen & Styles         | CSS hinzufügen/entfernen oder per Style direkt anwenden     | Add/remove CSS classes and inline styles               |

---

## Wichtige IDs & Klassen / Important IDs & Classes

| Name             | Verwendung / Purpose                                 |
|------------------|------------------------------------------------------|
| `ausgabenID`     | Zentrale Ausgabetextbox für viele Funktionen         |
| `fname`, `lname` | Textfelder für Vor- und Nachnamen                    |
| `checkboxId`, `checkboxId2` | Buttons zur Checkbox-Steuerung          |
| `divClass`       | Mehrere Divs zur Ausgabe oder Demonstration          |
| `entcheImgID`, `arrowImgID` | Bilder zum Entfernen und Bewegen       |
| `imageId`, `listDivId`, `newElementsID`, `targetID` | Zielcontainer     |
| `divCSSID`       | Div zur Demonstration von CSS-Anpassungen            |

---

## JavaScript Highlights

- **`querySelector`, `getElementById`, `getElementsByClassName`, `getElementsByName`** – für gezielten Zugriff auf DOM-Elemente
- **`createElement`, `appendChild`, `innerText`, `innerHTML`** – für dynamische Inhalte
- **`setAttribute`, `getAttribute`** – für das Arbeiten mit HTML-Attributen
- **`classList.add/remove/toggle`** – für CSS-Änderungen
- **`setInterval`, `clearInterval`** – für einfache Animationen

---

## Erweiterungsideen / Enhancement Ideas

- Eingabefelder durch EventHandler validieren
- Verwendung von `localStorage` zur Zwischenspeicherung von Zuständen
- Responsive Layout für mobile Geräte
- GUI-Optimierung (bessere Struktur, visuelle Hierarchie)
- Bessere Fehlerbehandlung und Konsolenausgaben

---

## Lizenz / License

MIT – frei verwendbar und erweiterbar für Lernzwecke.  
MIT – freely usable and extendable for educational purposes.
```

