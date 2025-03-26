
# Formular 
---

```markdown
# Contact Form Validation (JavaScript)

This is a simple client-side form validation script written in vanilla JavaScript. It checks the input fields (name, email, message) for valid data before allowing submission and provides immediate feedback for incorrect input.

Dies ist ein einfaches JavaScript zur Validierung von Formularfeldern im Browser. Es überprüft die Eingabefelder (Name, E-Mail, Nachricht) auf gültige Inhalte und gibt bei Fehlern sofort Rückmeldung.

---

## Features / Funktionen

- Prevents form submission on invalid input
- Validates:
  - Name: at least 2 characters, only letters and spaces
  - Email: basic email format using regex
- Highlights invalid fields
- Displays error messages
- Resets form and errors after successful submission

---

## JavaScript Functionality Overview

| Function             | Description (EN)                                | Beschreibung (DE)                            |
|----------------------|--------------------------------------------------|-----------------------------------------------|
| `isValidName(name)`  | Checks if name is valid (min 2 letters)          | Prüft, ob der Name gültig ist (mind. 2 Zeichen) |
| `isValidEmail(email)`| Basic regex for email format                     | Einfache Regex zur E-Mail-Prüfung              |
| `resetErrors()`      | Clears error messages and input styling          | Setzt Fehlermeldungen und Stile zurück         |
| `displayError()`     | Displays error message for specific field        | Zeigt eine Fehlermeldung für ein Feld an       |
| `resetForm()`        | Resets form and clears error messages            | Setzt das Formular komplett zurück             |

---

## HTML Element IDs Used

| ID              | Purpose / Zweck                              |
|------------------|-----------------------------------------------|
| `contactForm`    | The form element                              |
| `name`, `email`, `message` | Input fields                      |
| `nameError`, `emailError`, `messageError` | Error display elements |

---

## How It Works / Funktionsweise

1. On form submission, `event.preventDefault()` stops the default action.
2. Values from the form fields are retrieved.
3. Validation runs:
   - If name or email is invalid → error message + red border
   - If both are valid → show success alert + reset form
4. All errors are cleared before every check.

---

## Validation Rules / Validierungsregeln

### Name

```js
/^[A-Za-z\s]{2,}$/
```

- Minimum 2 characters
- Only letters and spaces

### Email

```js
/\S+@\S+\.\S+/
```

- Simple structure: something@something.domain

---

## Styling (Optional)

You can use a `.error-input` class to visually highlight invalid fields. Example CSS:

```css
.error-input {
  border: 1px solid red;
  background-color: #ffe6e6;
}
```

---

## License

MIT – freely usable and extendable for learning or production use.
```

