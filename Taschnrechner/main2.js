// DOM - Elemente
const display =
  document.getElementById("display");
const numbers =
  document.querySelectorAll(
    ".number, .comma, .operator"
  );
const equals =
  document.querySelector(".equals");
const clear =
  document.querySelector(".clear");

// Datenstruktur zum Speichern des Ausdrucks
let expression = "";

// Flag, um zu überprüfen, ob auf eine Operation gewartet wird
let waitForOperation = false;

// Funktion zum Anzeigen der gedrückten Taste im Display
const updateDisplay = (buttonValue) => {
  expression += buttonValue;
  display.value = expression;
  waitForOperation = /^[0-9.]$/.test(
    buttonValue
  ); // Auf eine Operation warten, wenn die Taste eine Zahl oder ein Punkt ist
};

// Event-Listener für Klicks auf Zahlen, Operatoren und Komma
numbers.forEach((numberElement) => {
  numberElement.addEventListener(
    "click",
    () => {
      updateDisplay(
        numberElement.innerText
      );
    }
  );
});

// Funktion zum Berechnen des Ausdrucks im Display
const calculateExpression = () => {
  if (waitForOperation) {
    display.value = eval(expression);
    expression = display.value; // Ausdruck auf das Ergebnis aktualisieren
    waitForOperation = false; // Nicht mehr auf eine Operation warten
  }
};

// Event-Listener für Klicks auf Gleichheitszeichen
equals.addEventListener(
  "click",
  calculateExpression
);

// Funktion zum Löschen des Display-Inhalts
const clearDisplay = () => {
  expression = "";
  display.value = "";
  waitForOperation = false; // Zurücksetzen des Flags
};

// Event-Listener für Klick auf Clear-Button
clear.addEventListener(
  "click",
  clearDisplay
);

// Event-Listener für Tastatur
document.addEventListener(
  "keydown",
  (event) => {
    const key = event.key;
    if (key === "Enter") {
      calculateExpression();
    } else if (key === "Escape") {
      clearDisplay();
    } else if (
      /^[0-9.+\-*/]$/.test(key)
    ) {
      updateDisplay(key);
    }
  }
);

// TODO Zahlen Speichern wenn Operator gedrückt wird
// TODO regular Expressions nachschlagen
