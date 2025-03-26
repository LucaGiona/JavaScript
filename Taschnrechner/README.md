# Calculator
---

```markdown
# JavaScript Calculator (Basic)

A simple on-screen calculator built with vanilla JavaScript. It supports basic arithmetic operations, keyboard input, and displays the result using the built-in `eval()` function.

Ein einfacher Taschenrechner mit JavaScript. Er unterstützt grundlegende Rechenoperationen, Eingabe über die Tastatur und zeigt das Ergebnis mit der `eval()`-Funktion an.

---

## Features / Funktionen

- Input via mouse (buttons) or keyboard
- Handles numbers, operators, and decimal point
- Evaluates expressions using `eval()`
- Clears the input with one click or key
- Basic error handling using browser-native evaluation

---

## JavaScript Function Overview

| Function               | Description (EN)                                | Beschreibung (DE)                                |
|------------------------|--------------------------------------------------|---------------------------------------------------|
| `updateDisplay()`      | Appends clicked character to the display        | Fügt die gedrückte Taste zum Display hinzu         |
| `calculateExpression()`| Evaluates the current expression using `eval()` | Berechnet den Ausdruck im Display (Achtung: `eval`) |
| `clearDisplay()`       | Clears the entire display                       | Löscht das komplette Display                      |

---

## HTML Requirements

You need the following elements and class structure in your HTML:

```html
<input type="text" id="display" disabled />

<!-- Example buttons -->
<button class="number">1</button>
<button class="operator">+</button>
<button class="comma">.</button>
<button class="equals">=</button>
<button class="clear">C</button>
```

Class groups used:
- `.number` – digits (0–9)
- `.operator` – arithmetic operators (+, -, *, /)
- `.comma` – decimal point
- `.equals` – trigger result
- `.clear` – reset display

---

## Keyboard Support

| Key          | Action                     |
|--------------|----------------------------|
| `Enter`      | Calculate result           |
| `Escape`     | Clear display              |
| `0–9`, `+`, `-`, `*`, `/`, `.` | Add to expression |

---

## Important Notes / Hinweise

- **Security Warning:** This calculator uses JavaScript’s built-in `eval()` function. While sufficient for simple exercises, `eval()` can be dangerous if used with uncontrolled input.
- For real applications, you should replace `eval()` with a proper expression parser.


## License

MIT – freely usable and extendable for learning or personal use.  
MIT – frei verwendbar und erweiterbar für Lern- oder Eigenzwecke.
```

