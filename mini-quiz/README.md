
# Mini-Quiz (JavaScript)

**[English version below](#english-version)**

Ein interaktives JavaScript-Quiz, bei dem Nutzer ihre Antworten auswählen und sofort Rückmeldung erhalten. Korrekte Antworten werden grün, falsche rot markiert. Bei vollständiger und fehlerfreier Beantwortung erscheint eine kurze Erfolgsmeldung.

---

## Funktionen

- Auswertung per Button-Click (`<form>` wird abgefangen)
- Visuelles Feedback für jede Frage (`correct`/`incorrect`)
- Unbeantwortete Fragen zählen als falsch
- Bonus: Erfolgs-Alert bei 100 % richtigen Antworten (3 Sekunden sichtbar)

---

## HTML-Struktur (Auszug)

```html
<form id="quiz-form">
  <div class="question-item">
    <label>
      <input class="answer" type="radio" name="q1" value="true"> Correct Answer
    </label>
    <label>
      <input class="answer" type="radio" name="q1" value="false"> Wrong Answer
    </label>
  </div>
  ...
  <button type="submit">Submit</button>
</form>

<div id="alert" class="alert">Great job!</div>
```

---

## CSS-Idee (optional)

```css
.correct {
  background-color: #c8e6c9;
}
.incorrect {
  background-color: #ffcdd2;
}
.alert {
  display: none;
}
.alert.active {
  display: block;
}
```

---

## JavaScript-Funktionen

- Antworten per `querySelectorAll(".answer")` abfragen
- Richtige Antworten prüfen (`value === "true"`)
- Klassenzuweisung via `classList.add/remove`
- Alert über `setTimeout` nach 3 Sekunden wieder ausblenden

---

## Lizenz

MIT – frei verwendbar.

---

## English Version

A small interactive **JavaScript quiz app** that evaluates selected answers and gives instant visual feedback. Correct answers highlight green, incorrect ones red. A bonus alert appears when all questions are answered correctly.

---

## Features

- Answer evaluation on form submit (without page reload)
- Highlights correct and incorrect answers
- Unanswered questions are marked as incorrect
- Bonus: Alert shown for perfect score (visible for 3 seconds)

---

## Sample HTML Structure

```html
<form id="quiz-form">
  <div class="question-item">
    <label>
      <input class="answer" type="radio" name="q1" value="true"> Correct Answer
    </label>
    <label>
      <input class="answer" type="radio" name="q1" value="false"> Wrong Answer
    </label>
  </div>
  ...
  <button type="submit">Submit</button>
</form>

<div id="alert" class="alert">Great job!</div>
```

---

## CSS Idea (optional)

```css
.correct {
  background-color: #c8e6c9;
}
.incorrect {
  background-color: #ffcdd2;
}
.alert {
  display: none;
}
.alert.active {
  display: block;
}
```

---

## Logic Summary

- Select all `.answer` elements
- Evaluate selected answers (`value === "true"`)
- Add classes to visually indicate correctness
- Show success alert if all answers are correct

---

## License

MIT – free to use and adapt.
