//DOM - Elemente

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number, .comma, .operator");//verschieden Klassen verbinden mit querySelectorAll

const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

//Funktion zum Anzeigen der gedrückten Taste im Display

const updateDisplay = (buttonValue)=>{
 display.value += buttonValue; //+= sonst würde der wert einfach nur ersetzt werden
};

//Event-Listener für clicks auf Zahlen, Opratoren und Komma
numbers.forEach((numberElement)=>{
 numberElement.addEventListener("click", ()=>{
  updateDisplay(numberElement.innerText);
 });
});

// Funktion zum Berechnen des Asudrucks im Display
const calculateExpression = ()=>{
 display.value= eval(display.value);
 // eval nicht sicher sondern sollte über parseInt gemacht werden
}


// Event-Listener für Klicks auf Gleicheitszeichen

equals.addEventListener("click", calculateExpression);

// Funktion zum Löschen des Display-Inhalts

const clearDisplay = ()=>{
 display.value="";
}

// Event-Listener für Klick auf Clear-Button
clear.addEventListener("click", clearDisplay)

// Event-Listener für Tastatur
document.addEventListener("keydown", (event) =>{
 const key = event.key;
 if(key === "Enter"){
  calculateExpression();
 }else if(key === "Escape"){
  clearDisplay();
 }else if(/^[0-9+\-*/.]$/.test(key)){
  // regular Expressions
  updateDisplay(key);
 }
})

// TODO Zahlen Speichern wenn Operator gedrückt wird
// TODO regular Expressions nachschlagen