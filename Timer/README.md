## code is not finished yet -
---

```markdown
# Countdown Timer – JavaScript

A dynamic countdown timer built with vanilla JavaScript. It includes features like start/pause toggle, restart, and adjustable time duration (in minutes). The display shows remaining days, hours, minutes, and seconds. The code is still a work in progress.

Ein dynamischer Countdown-Timer mit JavaScript. Er unterstützt Start/Pause, Zurücksetzen und das Anpassen der Dauer (in Minuten). Die Anzeige zeigt verbleibende Tage, Stunden, Minuten und Sekunden. Der Code befindet sich noch in Entwicklung.

---

## Features / Funktionen

- Toggle between play and pause
- Adjustable duration using "increase" and "decrease" buttons
- Restart button resets the timer to its original state
- Time is visually updated and color-coded depending on state
- Supports fine-tuning of total time in minutes
- Dynamic display of days, hours, minutes, and seconds

---

## Core Elements / Wichtige Elemente

| Element-ID          | Beschreibung (DE)                     | Description (EN)                          |
|---------------------|----------------------------------------|--------------------------------------------|
| `display` (intern)  | Anzeigecontainer für die Zeit         | Display container for timer values         |
| `days`, `hours`, `minutes`, `seconds` | Einzelne Zeiteinheiten   | Individual time unit displays              |
| `playPauseButton`   | Startet/stoppt den Countdown          | Toggles countdown start/stop               |
| `restartButton`     | Setzt den Timer auf Ursprungswert     | Resets timer to original duration          |
| `increaseBtn`       | Erhöht die Zeit um 1 Minute           | Adds 1 minute to the duration              |
| `decreaseBtn`       | Verringert Zeit um 1 Minute (min. 2m) | Decreases time by 1 min (minimum: 2 min)   |

---

## JavaScript Function Overview

| Funktion                  | Beschreibung (DE)                                  | Description (EN)                             |
|---------------------------|-----------------------------------------------------|-----------------------------------------------|
| `updateTimerDisplay()`    | Aktualisiert die Anzeige der Zeitwerte             | Updates visual display for time units         |
| `togglePlayPause()`       | Wechselt zwischen Play/Pause                       | Toggles play/pause state and icon             |
| `startCountdown()`        | Startet Countdown und aktualisiert die Anzeige    | Starts interval countdown                     |
| `resetTimerStyles()`      | Setzt Styles der Anzeige und Buttons zurück       | Resets CSS classes to clean state             |
| `increaseBtn`, `decreaseBtn` | Verändert Dauer in Minuten                   | Modifies duration in 60-second increments      |

---

## Time Conversion Logic

The time is calculated from total seconds (`duration`) into:

```js
days = Math.floor(duration / (60 * 60 * 24));
hours = Math.floor((duration % (60*60*24)) / (60*60));
minutes = Math.floor((duration % (60*60)) / 60);
seconds = duration % 60;
```

Each value is padded to two digits using `String(...).padStart(2, "0")`.

---

## Current Issues / Bekannte Probleme

- Timer kann bei wiederholtem Start unvorhersehbares Verhalten zeigen
- Kein akustisches oder visuelles Signal am Ende
- `originalDuration` wird überschrieben und nicht immer korrekt zurückgesetzt
- Kein persistenter Zustand bei Seitenreload

---

## Possible Enhancements / Erweiterungsideen

- Add audio alert when time reaches zero
- Disable buttons during active countdown
- Save remaining time in `localStorage`
- Allow custom input for total duration
- Mobile-friendly UI with better layout

---

## License

MIT – freely usable and modifiable for learning or personal use.  
MIT – frei verwendbar und anpassbar für Lern- oder Eigenzwecke.
```
