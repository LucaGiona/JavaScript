
# AutoComplete Component – Unit Tests

**[English version below](#english-version)**

Diese Datei enthält Unit-Tests für eine AutoComplete-Komponente, die mit JavaScript erstellt wurde. Die Tests prüfen das Verhalten der Dropdown-Liste bei Benutzereingaben.

---

## Inhalt & Funktionen

- Testet, ob das Dropdown beim Start geschlossen ist
- Simuliert Benutzereingaben (`input.dispatchEvent`)
- Verwendet ein Mock-Datenset (`fetchData`)
- Nutzt `waitFor()` als Utility, um auf DOM-Änderungen zu warten
- Testet, ob die Dropdown-Ergebnisse korrekt angezeigt werden

---

## Wichtige Funktionen

- `waitFor(selector)` – Polling-Funktion, die auf ein bestimmtes DOM-Element wartet (max. 2 Sekunden)
- `beforeEach()` – Bereitet vor jedem Test eine neue Instanz von `createAutoComplete()` vor

---

## Beispielhafter Testablauf

1. Input-Feld wird mit `"snoopy"` befüllt
2. `input`-Event wird simuliert
3. Dropdown öffnet sich automatisch
4. Es erscheinen 3 Ergebnisse

---

## English version

This file contains unit tests for a JavaScript-based AutoComplete component. The tests validate how the dropdown behaves when users type input.

---

## Contents & Features

- Checks if the dropdown is initially closed
- Simulates user typing with `dispatchEvent`
- Uses mocked data via `fetchData`
- `waitFor()` utility waits for DOM updates
- Verifies that results are displayed correctly

---

## Key Functions

- `waitFor(selector)` – Utility function that waits up to 2 seconds for a specific element to appear in the DOM
- `beforeEach()` – Re-initializes the component before each test

---

## Test Flow Example

1. Input receives `"snoopy"`
2. Simulated input event is fired
3. Dropdown becomes active
4. Three results appear in the UI

---

## Tools & Requirements

- JavaScript (Vanilla)
- Testing Framework (e.g., Mocha + Chai or similar)
- DOM environment (e.g., jsdom if run outside browser)

---

MIT License – for educational use and UI component testing.
