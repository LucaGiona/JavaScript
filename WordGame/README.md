Hier ist die passende **zweisprachige `README.md`** für dein Wordle-ähnliches Projekt:

---

# Word Guessing Game  
<span style="color: rebeccapurple">Ein interaktives Wortspiel mit JavaScript, inspiriert von "Wordle"</span>  

[English version below](#english-version)

---

## Übersicht  
Dieses Projekt ist ein einfaches, browserbasiertes Wortspiel (ähnlich wie **Wordle**), bei dem der Nutzer ein 5-Buchstaben-Wort erraten muss. Die Anwendung verwendet die öffentliche API [`words.dev-apis.com`](https://words.dev-apis.com/) zur dynamischen Wortgenerierung.

---

## Features  
- Dynamisches Abrufen eines Zufallswortes von der API  
- Tastatureingabe zur Eingabe von Buchstaben  
- Rückmeldung mit Farben:
  - **Grün (correct):** Buchstabe richtig und an der richtigen Position
  - **Gelb (close):** Buchstabe im Wort, aber an falscher Position
  - **Grau (wrong):** Buchstabe nicht im Wort
- Begrenzung auf 6 Versuche  
- Ladeanzeige während API-Abruf

---

## Technologien  
- **JavaScript (DOM + Fetch API)**  
- HTML & CSS (nicht im Code enthalten, aber benötigt für Darstellung)  

---

## Hinweise  
- Der Teil zur **Wortvalidierung** per API ist bereits vorbereitet, aber aktuell auskommentiert.
- Das Spiel verwendet `keydown`-Events zur Steuerung.
- Die Lösung wird am Ende angezeigt, falls alle Versuche fehlschlagen.

---

## Beispielhafte Funktionen  
```js
function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function makeMap(array) {
  const map = {};
  array.forEach(letter => {
    map[letter] = (map[letter] || 0) + 1;
  });
  return map;
}
```

---

## English Version  

### Overview  
This project is a simple **Wordle-inspired** word guessing game built with JavaScript. It fetches a random 5-letter word from the API [`words.dev-apis.com`] and allows the user to guess the word in up to six attempts.

---

### Features  
- Fetches a word dynamically from the API  
- Input via keyboard (letter by letter)  
- Visual feedback:
  - **Green (correct):** Letter is in the correct place  
  - **Yellow (close):** Letter is in the word, but wrong position  
  - **Grey (wrong):** Letter not in the word  
- Six attempts to guess  
- Loading indicator during API call  

---

### Technologies Used  
- **JavaScript (DOM + Fetch API)**  
- HTML & CSS (not included in this snippet)

---

### Notes  
- API word validation is prepared but currently commented out.  
- Uses `keydown` events for interactivity.  
- Final word is revealed if the user runs out of guesses.

---

### Example Utility  
```js
function makeMap(array) {
  const obj = {};
  for (let letter of array) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  return obj;
}
```

---
