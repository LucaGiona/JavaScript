### counter - exercise
---

```markdown
# 🧮 LocalStorage Counter

A simple JavaScript-based counter that persists its value in the browser using `localStorage`. The counter increases by 1 each time the page is loaded and can be reset using a button.

Ein einfacher JavaScript-Zähler, der seinen Wert im `localStorage` des Browsers speichert. Bei jedem Laden der Seite erhöht sich der Zähler um 1. Ein Button setzt den Zähler zurück.

---

## 🚀 Features / Funktionen

- ✅ Increments on each page load / Zählt bei jedem Laden hoch  
- 💾 Uses `localStorage` to persist data / Speichert im Browser  
- 🔁 Reset button to start over / Zurücksetzen möglich

---

## 🧩 Technologies / Technologien

- HTML & JavaScript  
- `localStorage` API  

---

## 💡 Example Code (short version)

```js
let count = 0;
const counter = document.getElementById("counterValue");

function incrementCounter() {
  count = Number(localStorage.getItem("count"));
  counter.innerText = count;
  localStorage.setItem("count", count + 1);
}

window.onload = incrementCounter;

const reset = document.getElementsByTagName("button")[0];
reset.addEventListener("click", () => {
  localStorage.setItem("count", 0);
  incrementCounter();
});
```

---

## 📄 HTML Structure

```html
<div id="counterValue">0</div>
<button>Reset</button>
```

---

## 📦 Notes / Hinweise

- `localStorage` stores **only strings** → use `Number()` to convert.
- Optional: clear everything with `localStorage.clear();`
- Optional: `noStretch` attribute for natural height (if relevant)

---

## 🌐 For an English Example, see below:

👉 [View the full example in English here](#-english-example-html)

---

## 📁 English Example (HTML)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>LocalStorage Counter</title>
</head>
<body>
  <h1>Page Visit Counter</h1>
  <div id="counterValue">0</div>
  <button>Reset</button>

  <script>
    let count = 0;
    const counter = document.getElementById("counterValue");

    function incrementCounter() {
      count = Number(localStorage.getItem("count"));
      counter.innerText = count;
      localStorage.setItem("count", count + 1);
    }

    window.onload = incrementCounter;

    const reset = document.getElementsByTagName("button")[0];
    reset.addEventListener("click", () => {
      localStorage.setItem("count", 0);
      incrementCounter();
    });
  </script>
</body>
</html>
```

---

## 🪪 License

MIT – free to use and extend  
MIT – frei verwendbar und erweiterbar
```

