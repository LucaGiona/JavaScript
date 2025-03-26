Basic JS --- Businesscard

---

```markdown
# Personal Information Output (JavaScript Basics)

This is a beginner-friendly JavaScript snippet that demonstrates how to declare variables, use template literals, and print formatted text to the console.

Dies ist ein einfaches JavaScript-Beispiel für Einsteiger. Es zeigt, wie man Variablen deklariert, Template Strings verwendet und formatierten Text in die Konsole ausgibt.

---

## Features / Funktionen

- Uses `const` to declare constant variables
- Combines multiple strings using **template literals** (`` `${...}` ``)
- Outputs a formatted block of personal information
- Clean and readable multiline format

---

## Code Overview / Code-Übersicht

```js
const firstName = "Max";
const lastName = "Mustermann";

const job = "Webentwickler";
const tele = "+49 0145 667 880 44";
const mail = "max.mustermann@gmail.com";

const person = `${firstName} ${lastName}
${job}
Tel: ${tele}
Mail: ${mail}`;

console.log(person);
```

---

## Console Output / Konsolenausgabe

```
Max Mustermann
Webentwickler
Tel: +49 0145 667 880 44
Mail: max.mustermann@gmail.com
```

---

## Topics Covered / Verwendete Konzepte

- `const` keyword (constant values)
- Template literals with backticks (`` `...` ``)
- Multi-line string formatting
- `console.log()` for output

---

## Use Case / Anwendungsbeispiel

This kind of code is often used in:

- Learning basic JavaScript syntax
- Practicing string formatting
- Building personal or contact card components
- Generating dynamic text blocks for web applications

---

## License

MIT – freely usable and extendable for educational purposes.  
MIT – frei verwendbar und erweiterbar für Lern- oder Übungszwecke.
```

