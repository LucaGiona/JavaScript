

```markdown
# Node CLI Tool – Directory Lister with Chalk

**DEUTSCH | ENGLISH BELOW**

Ein einfaches Node.js-Skript, das alle Dateien und Ordner im aktuellen Verzeichnis auflistet. Ordner werden fett hervorgehoben, um sie visuell zu unterscheiden. Das Skript demonstriert die Arbeit mit `fs`, Promises und dem Modul `chalk`.

## Funktionen

- Listet alle Inhalte des aktuellen Arbeitsverzeichnisses (`process.cwd()`)
- Nutzt `fs.promises.lstat()` für asynchrone Dateiprüfung
- Hebt Ordner mit `chalk.bold()` hervor
- Beinhaltet verschiedene Methoden zur asynchronen Verarbeitung (kommentiert im Code)

## Ausführen

```bash
node index.js
```

Oder ausführbar machen (wenn `#!/usr/bin/env node` im Header steht):

```bash
chmod +x index.js
./index.js
```

## Abhängigkeiten

- [chalk](https://www.npmjs.com/package/chalk)

```bash
npm install chalk
```

---

## Node CLI Tool – Terminal Directory Lister

A minimal Node.js script that lists all files and folders in the current working directory. It uses `chalk` to highlight folders in bold, making them easier to spot. The code demonstrates working with `fs`, Promises, and basic CLI output styling.

## Features

- Lists contents of the current directory using `process.cwd()`
- Uses `fs.promises.lstat()` for async file type checking
- Highlights folders using `chalk.bold()`
- Includes examples of different async techniques (commented in the code)

## Run

```bash
node index.js
```

Or make it executable:

```bash
chmod +x index.js
./index.js
```

## Dependency

- [chalk](https://www.npmjs.com/package/chalk)

```bash
npm install chalk
```

---

MIT License – for learning and experimentation with terminal tools.
```

