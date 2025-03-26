# Schere Stein Papi Game

---

```markdown
# Rock Paper Scissors – JavaScript Game

A simple implementation of the classic "Rock, Paper, Scissors" game using vanilla JavaScript. The user selects an option, the computer randomly chooses its own, and the result is displayed with dynamic styling and score tracking.

Eine einfache Umsetzung des Spiels „Stein, Papier, Schere“ mit reinem JavaScript. Der Spieler trifft eine Auswahl, der Computer wählt zufällig, und das Ergebnis wird mit Styling und Punktevergabe angezeigt.



## Features / Funktionen

- Select between Rock, Paper, or Scissors
- Computer randomly chooses one of the three options
- Displays both choices and the result
- Highlights selected buttons briefly
- Color-coded result display (win, lose, draw)
- Tracks player and computer points

---

## Game Logic / Spielregeln

| Player vs Computer | Result                |
|--------------------|------------------------|
| Same choice         | Draw / Unentschieden   |
| Rock beats Scissors | Player wins            |
| Paper beats Rock    | Player wins            |
| Scissors beats Paper| Player wins            |
| Otherwise           | Computer wins          |

---

## JavaScript Function Overview

| Function                | Description (EN)                                  | Beschreibung (DE)                                 |
|-------------------------|---------------------------------------------------|----------------------------------------------------|
| `computerChoice()`      | Randomly selects computer’s move                  | Wählt zufällig die Auswahl des Computers           |
| `checkResult()`         | Compares player and computer choices              | Vergleicht Spieler- und Computerauswahl            |
| `updateResult()`        | Updates result message and styling                | Zeigt Ergebnis an und passt Styles an              |
| `updatePoints()`        | Adds point to the winner                          | Erhöht Punktestand des Gewinners                   |
| `playerAction()`        | Core game logic handler for a player move         | Hauptfunktion, wenn der Spieler eine Auswahl trifft|

---

## Required HTML Structure (Minimal)

Make sure the following element IDs exist in your HTML:

```html
<!-- Buttons -->
<button id="rock">Stein</button>
<button id="paper">Papier</button>
<button id="scissors">Schere</button>

<!-- Display Areas -->
<p>Spieler: <span id="player-choice"></span></p>
<p>Computer: <span id="computer-choice"></span></p>
<p id="result"></p>

<!-- Scoreboard -->
<p>Punkte Spieler: <span id="player-points">0</span></p>
<p>Punkte Computer: <span id="computer-points">0</span></p>
```

---

## Styling Classes (Optional)

| Class Name         | Purpose                         |
|--------------------|----------------------------------|
| `selected`         | Temporarily highlights button    |
| `win`              | Styles result text on player win |
| `lost`             | Styles result text on loss       |
| `draw`             | Styles result text on draw       |

You can style these classes via CSS as you wish, for example:

```css
.win { color: green; }
.lost { color: red; }
.draw { color: gray; }
.selected { border: 2px solid black; }
```

---

## Extension Ideas / Erweiterungsideen

- Add round counter or reset button
- Play against another human instead of computer
- Add animation or sound effects
- Use emojis or icons for better visuals
- Store match history or scores using `localStorage`

---

## License

MIT – freely usable and extendable for educational or personal use.  
MIT – frei verwendbar und erweiterbar für Lern- oder Eigenzwecke.
```
