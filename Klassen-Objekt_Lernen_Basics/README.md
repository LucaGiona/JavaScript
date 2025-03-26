##  JavaScript-Klassen- und Objekt-orientiertes Lernprojekt:

---

```markdown
# JavaScript – Klassen, Objekte, Vererbung & Prototypen

This project demonstrates core concepts of object-oriented JavaScript (OOP), including constructor functions, ES6 classes, inheritance, getters/setters, static methods, and prototype extensions. It combines practical examples from beginner to intermediate level in a single script.

Dieses Projekt zeigt zentrale Konzepte der objektorientierten Programmierung in JavaScript – darunter Konstruktorfunktionen, ES6-Klassen, Vererbung, Getter/Setter, statische Methoden und Prototyp-Erweiterungen. Die Beispiele sind gesammelt in einem Skript für Lern- und Übungszwecke.

---

## Features / Inhalte

- Objekte mit Methoden und Eigenschaften (`person1`)
- Klassen mit Konstruktoren und Methoden (`Mensch`, `Addieren`, etc.)
- Getter/Setter zum Kapseln von Daten
- Vererbung mit `extends` und `super`
- Statische Methoden (`static`)
- Private/geschützte Methoden über Konvention (`_methodenname`)
- Konstruktorfunktionen mit Prototypen
- Operatorisches Arbeiten mit Arrays als Argumente
- Vergleichslogik und einfache Arithmetik
- Prototype-basierte Vererbung mit `call()` und `prototype`

---

## JavaScript-Konzepte im Überblick

| Thema                    | Beschreibung                                           |
|--------------------------|--------------------------------------------------------|
| `object.method()`        | Eigene Methoden in Objekten definieren und nutzen     |
| `class`                  | Einführung von Klassenstruktur ab ES6                 |
| `constructor`            | Initialisierung von Objekten beim Erstellen           |
| `extends`, `super()`     | Vererbung und Zugriff auf übergeordnete Klassen       |
| `get`, `set`             | Kontrollierter Zugriff auf Eigenschaften              |
| `static`                 | Klassenmethoden, die nicht instanziert werden müssen  |
| `prototype`              | Dynamisches Hinzufügen von Methoden zu Konstruktoren  |
| Methodenverkettung       | Nutzung von Rückgaben aus Methoden zur Weiterverarbeitung |

---

## Klassen-Beispiele

```js
class Mensch {
  constructor(vor, nach) {
    this.Vorname = vor;
    this.Nachname = nach;
  }
}
```

```js
class Addieren {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  addiere() {
    return this.a + this.b;
  }
}
```

```js
class Addition extends Zahlen {
  _berechneAddition() {
    return this.a + this.b;
  }
  get getResult2() {
    return this._berechneAddition();
  }
}
```

---

## Objekt-Prototyp-Erweiterung (z. B. Konstruktorfunktionen)

```js
function Mensch2(vor, nach) {
  this.Vorname = vor;
  this.Nachname = nach;
}
Mensch2.prototype.gruessen = function () {
  return `${this.Vorname} sagt Hallo`;
};
```

---

## Themen mit Beispielklassen

| Klasse            | Zweck / Funktion                                          |
|-------------------|------------------------------------------------------------|
| `Mensch`          | Basis für eine Person mit Vor- und Nachnamen              |
| `Addieren`, `Addieren2` | Mathematische Rechenlogik mit verschiedenen Techniken |
| `Vergleiche`      | Statische Methode zum Vergleich zweier Objekte             |
| `Zahlen`, `Addition`, `Subtraktion` | Vererbung und Berechnungsmethoden           |
| `GroesenVergleich`, `Zahlen3` | Überschreiben von Methoden mit `super`           |
| `Magic`           | Konstruktorfunktion mit Vererbung via `call()`            |

---

## Hinweise / Notes

- **Private Methoden** wurden hier konventionell mit `_methodenname` gekennzeichnet, sind aber nicht wirklich geschützt.
- `static`-Methoden können ohne Instanz aufgerufen werden:  
  `Vergleiche.werIstGroesser(objA, objB)`
- Klassen und Objekte werden über `console.log` im Verlauf getestet.

---

## Erweiterungsideen / Possible Extensions

- Implementierung von Fehlerbehandlung in Setter/Methoden
- Methoden für JSON-Export von Objekten
- Einsatz von `#private`-Felder in ES2022+
- DOM-Anbindung oder GUI für interaktive Ausgabe
- Vergleich mit modernen Utility-Libraries wie Lodash oder Ramda

---

## Lizenz / License

MIT – frei verwendbar, änderbar und erweiterbar für Lern- und Privatprojekte.  
MIT – free to use, modify and extend for learning or personal projects.
```

