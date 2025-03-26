
# Expand/Collapse Cards – Vanilla JS

**[English version below](#english-version)**

Ein minimalistisches UI-Feature: Beim Klicken auf den "Expand"-Button wird ein Bereich sichtbar gemacht. Der Buttontext ändert sich dynamisch zu "Collapse", um den Bereich wieder zu schließen.

---

## Funktionen

- Alle Buttons mit der Klasse `.expand-button` werden automatisch erkannt
- Jeder Button schaltet den Inhalt der angrenzenden Card (`.nextElementSibling`) um
- Dynamisches Umschalten des Buttontextes ("Expand" / "Collapse")

---

## Nutzung

1. HTML-Elemente vorbereiten:
   ```html
   <div class="card">
     <div class="card-header">
       <button class="expand-button">Expand</button>
     </div>
     <div class="card-body">
       <p>Inhalt...</p>
     </div>
   </div>
   ```

2. Die `.card-body` wird z. B. via CSS initial versteckt:
   ```css
   .card-body {
     display: none;
   }
   .card-body.show {
     display: block;
   }
   ```

3. Das JS-Skript sorgt für die Logik:
   ```js
   const buttons = document.querySelectorAll(".expand-button");

   buttons.forEach(button => {
     button.addEventListener("click", e => {
       e.preventDefault();
       const cardBody = button.parentElement.nextElementSibling;
       cardBody.classList.toggle("show");
       button.textContent = cardBody.classList.contains("show") ? "Collapse" : "Expand";
     });
   });
   ```

---

## Lizenz

MIT – frei verwendbar.

---

## English Version

A minimal UI interaction to toggle visibility of a section using buttons. When "Expand" is clicked, the corresponding content becomes visible and the button text changes to "Collapse".

---

## Features

- Targets all elements with the `.expand-button` class
- Toggles the visibility of the next sibling element
- Dynamically updates button label ("Expand" / "Collapse")

---

## Usage

1. HTML structure:
   ```html
   <div class="card">
     <div class="card-header">
       <button class="expand-button">Expand</button>
     </div>
     <div class="card-body">
       <p>Some content here...</p>
     </div>
   </div>
   ```

2. Initial CSS:
   ```css
   .card-body {
     display: none;
   }
   .card-body.show {
     display: block;
   }
   ```

3. JavaScript logic:
   ```js
   const buttons = document.querySelectorAll(".expand-button");

   buttons.forEach(button => {
     button.addEventListener("click", e => {
       e.preventDefault();
       const cardBody = button.parentElement.nextElementSibling;
       cardBody.classList.toggle("show");
       button.textContent = cardBody.classList.contains("show") ? "Collapse" : "Expand";
     });
   });
   ```

---

## License

MIT – free to use and modify.
