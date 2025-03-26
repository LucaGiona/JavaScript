# Lotto (numbers - Zahlen)

---

```markdown
# Lotto Number Picker (JavaScript)

This simple lottery simulator generates 6 random numbers between 1 and 49, ensures they are unique, and displays them sorted in ascending order.

Ein einfacher Lotto-Ziehungssimulator, der 6 eindeutige Zufallszahlen zwischen 1 und 49 generiert, sie aufsteigend sortiert und im HTML anzeigt.

---

## Features / Funktionen

- Generates 6 random numbers from 1 to 49
- Ensures no duplicate numbers
- Automatically sorts the results
- Displays the numbers in predefined HTML tiles
- Triggered by a button click

---

## How It Works / Funktionsweise

1. An array `numbers` is filled with values from 1 to 49
2. On button click (`startButton`), the function `runLottery()` is triggered
3. The function randomly selects 6 **unique** numbers
4. The numbers are sorted in ascending order
5. The numbers are displayed inside HTML elements with the class `.lotto-tile`

---

## Function Breakdown / Funktionsübersicht

| Function            | Description (EN)                               | Beschreibung (DE)                                |
|---------------------|------------------------------------------------|---------------------------------------------------|
| `runLottery()`      | Main function to generate and display numbers  | Hauptfunktion zur Ziehung und Anzeige der Zahlen |
| `Math.floor(Math.random() * numbers.length)` | Selects a random index   | Wählt einen zufälligen Index im Array            |
| `.includes()`       | Prevents duplicate numbers                     | Verhindert doppelte Zahlen                        |
| `.sort((a,b)=>a-b)` | Sorts numbers in ascending order               | Sortiert die Gewinnzahlen aufsteigend             |

---

## Required HTML Structure / HTML-Struktur

You must include **6 elements** with the class `lotto-tile`, e.g.:

```html
<div class="lotto-tile"></div>
<div class="lotto-tile"></div>
<div class="lotto-tile"></div>
<div class="lotto-tile"></div>
<div class="lotto-tile"></div>
<div class="lotto-tile"></div>

<button id="start-button">Start Lottery</button>
```

---

## Customization Ideas / Erweiterungsideen

- Display animation for number drawing
- Add reset or "play again" button
- Allow user to select their own numbers
- Highlight matching numbers if comparing with user input
- Store draw history with timestamps

---

## License

MIT – freely usable and extendable for learning or personal use.  
MIT – frei verwendbar und erweiterbar für Lern- oder Eigenzwecke.
```

