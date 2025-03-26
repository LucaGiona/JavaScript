

# TypeWriter Animation  
###### -- taken from [Programmieren mit Mario](https://www.youtube.com/@ProgrammierenMario)

###### [Zur deutschen Version](#deutsche-version)
##### *English*

### Overview
This project demonstrates the use of JavaScript generator functions to create a simple typewriter effect. The `typeWriter` generator iterates through each character of a given text, and the `typeAnimation` function uses `setInterval` to display each character on the webpage one by one, simulating a typewriter effect.

### How It Works
1. **`typeWriter(text)`**: A generator function that yields each character in the input `text`.
2. **`typeAnimation(elementID)`**: A function that selects an HTML element by its ID, then gradually updates its content with characters from the `typeWriter` generator.

### Usage
1. Add an HTML element with the specified ID (e.g., `<div id="result-element"></div>`).
2. Call `typeAnimation("#result-element")` to start the effect.
3. Modify the `typeWriter` text or `setInterval` speed for different animations.

### Example
```html
<div id="result-element"></div>
<script src="script.js"></script>
```

In `script.js`:
```javascript
typeAnimation("#result-element");
```

This code will display the text `"Happy coding!"` with a typewriter animation at an interval of 500 milliseconds.

---

## Deutsche Version

### Projektübersicht
Dieses Projekt zeigt, wie man mit JavaScript-Generatorfunktionen einen einfachen Schreibmaschinen-Effekt erstellt. Der Generator `typeWriter` iteriert durch jeden Buchstaben eines Textes, und die Funktion `typeAnimation` zeigt jeden Buchstaben nacheinander in einem HTML-Element an, wodurch ein Schreibmaschineneffekt entsteht.

### Funktionsweise
1. **`typeWriter(text)`**: Eine Generatorfunktion, die jeden Buchstaben des Eingabetexts `text` ausgibt.
2. **`typeAnimation(elementID)`**: Eine Funktion, die ein HTML-Element per ID auswählt und dann dessen Inhalt schrittweise mit den Zeichen aus dem `typeWriter`-Generator aktualisiert.

### Verwendung
1. Füge ein HTML-Element mit der angegebenen ID hinzu (z. B. `<div id="result-element"></div>`).
2. Rufe `typeAnimation("#result-element")` auf, um den Effekt zu starten.
3. Passe den Text des `typeWriter`-Generators oder die Geschwindigkeit des `setInterval`-Timers an, um verschiedene Animationen zu erzeugen.

### Beispiel
```html
<div id="result-element"></div>
<script src="script.js"></script>
```

In `script.js`:
```javascript
typeAnimation("#result-element");
```

Dieser Code zeigt den Text `"Happy coding!"` mit einem Schreibmaschineneffekt an, wobei die Zeichen in Abständen von 500 Millisekunden angezeigt werden.

---
