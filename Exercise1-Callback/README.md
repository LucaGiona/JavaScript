# 🔘 Button Click Alert

A very simple JavaScript demo that responds to a button click by showing an alert message. This is a great beginner example to understand DOM selection and event listeners in JavaScript.

Ein sehr einfaches JavaScript-Beispiel, das auf einen Button-Klick mit einem Alert reagiert. Ideal für Einsteiger zum Verständnis von DOM-Auswahl und Event-Handling.

---

## 💡 Features / Funktionen

- Selektiert ein Button-Element mit `querySelector`
- Fügt einen `click`-Eventlistener hinzu
- Zeigt eine Nachricht per `alert()`, wenn der Button geklickt wird

---

## 📄 Beispielcode

```html
<button>Klick mich!</button>

<script>
  const btn = document.querySelector("button");
  btn.addEventListener("click", function() {
    alert("Why did you click me???");
  });
</script>
