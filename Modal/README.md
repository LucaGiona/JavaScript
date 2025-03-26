
# Modal öffnen & schließen (Vanilla JS)

**[English version below](#english-version)**

Ein einfaches Modal-Fenster mit Overlay, das sich per Button öffnen und schließen lässt – inklusive sauberer Trennung der Logik in eine eigene Funktion.

---

## Funktionen

- Öffnet ein Modal-Fenster per Button (`#open-modal-btn`)
- Schließt das Modal über:
  - Schließen-Button (`#close-modal-btn`)
  - Klick auf den Overlay-Hintergrund (`#overlay`)
- Das Modal und der Overlay erhalten/entfernen jeweils die CSS-Klasse `.open`

---

## HTML-Voraussetzung

```html
<div id="modal" class="modal"> ... </div>
<div id="overlay" class="overlay"></div>
<button id="open-modal-btn">Open Modal</button>
<button id="close-modal-btn">Close</button>
```

---

## JavaScript

```js
const modal = document.querySelector("#modal");
const openButton = document.querySelector("#open-modal-btn");
const closeButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
```

---

## CSS-Idee

```css
.modal,
.overlay {
  display: none;
}

.modal.open,
.overlay.open {
  display: block;
}
```

---

## Lizenz

MIT – frei verwendbar.

---

## English Version

A simple modal window with an overlay background, using Vanilla JS. The modal can be opened and closed via buttons or by clicking the overlay.

---

## Features

- Opens modal via button (`#open-modal-btn`)
- Closes modal via:
  - Close button (`#close-modal-btn`)
  - Clicking the overlay (`#overlay`)
- Adds/removes the `.open` class to both modal and overlay

---

## Basic HTML Structure

```html
<div id="modal" class="modal"> ... </div>
<div id="overlay" class="overlay"></div>
<button id="open-modal-btn">Open Modal</button>
<button id="close-modal-btn">Close</button>
```

---

## JavaScript

```js
const modal = document.querySelector("#modal");
const openButton = document.querySelector("#open-modal-btn");
const closeButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
```

---

## Example CSS

```css
.modal,
.overlay {
  display: none;
}

.modal.open,
.overlay.open {
  display: block;
}
```

---

## License

MIT – free to use and adapt.
