# MAZE Game
---

```markdown
# Maze Game mit Matter.js

A dynamic maze generator and interactive ball game built using JavaScript and the [Matter.js](https://brm.io/matter-js/) physics engine. The player navigates a ball through a randomly generated maze using the keyboard, aiming to reach the goal area.

Ein dynamischer Maze-Generator mit interaktivem Ballspiel, realisiert mit JavaScript und der [Matter.js](https://brm.io/matter-js/) Physik-Engine. Der Spieler steuert einen Ball mit der Tastatur durch ein zufällig generiertes Labyrinth bis zum Zielbereich.

---

## Features / Funktionen

- Zufällige Maze-Erstellung (DFS mit zufälliger Nachbarsortierung)
- Dynamische Wandplatzierung über `Matter.Bodies.rectangle`
- Steuerung des Balls mit den Pfeiltasten oder WASD
- Kollisionsprüfung zwischen Ball und Ziel
- Gewinner-Animation: Wände fallen nach unten
- Responsive Design: Maze passt sich Fenstergröße an

---

## Verwendete Library

### [Matter.js](https://brm.io/matter-js/)

Ein leichtgewichtiges 2D-Physik-Engine-Modul für die Webentwicklung. Hier verwendet für:

- Engine, Welt und Renderer (`Engine`, `World`, `Bodies`, `Render`)
- Kollisionserkennung (`Events.on`)
- Physikalische Eigenschaften (Masse, Gravitation, Dichte, Velocity)

---

## Aufbau des Spiels

| Komponente     | Beschreibung |
|----------------|--------------|
| `Maze Grid`    | 2D-Array für besuchte Felder, horizontale & vertikale Wände |
| `shuffle()`    | Zufallsfunktion zur Variation der DFS-Wegsuche              |
| `Bodies`       | Erzeugung von Wänden, Ball, Ziel mit Matter.js             |
| `collisionStart` | Event-Handler für Kollisionen (Ball trifft Ziel)        |

---

## Tastatursteuerung / Controls

| Taste      | Aktion / Action          |
|------------|---------------------------|
| `W` / `↑`  | Nach oben bewegen         |
| `S` / `↓`  | Nach unten bewegen        |
| `A` / `←`  | Nach links bewegen        |
| `D` / `→`  | Nach rechts bewegen       |

---

## Maze-Logik (Kurzfassung)

1. Erzeuge leeres Gitter (`grid`) für Zellen und zwei Arrays für Wände (`horizontals`, `verticals`)
2. Beginne an zufälliger Zelle mit `stepThroughCell()`
3. Besuche rekursiv Nachbarzellen in zufälliger Reihenfolge
4. Entferne Wände zwischen verbundenen Zellen
5. Zeichne Wände mit `Matter.Bodies.rectangle` abhängig von den Werten in `horizontals` und `verticals`

---

## Siegbedingung / Win Condition

- Wenn der Ball das Ziel (aqua-blauer Bereich) berührt:
  - Der Text `.winner` wird eingeblendet
  - Gravitation wird aktiviert (`gravity.y = 1`)
  - Alle Wände werden dynamisch und fallen herunter

---

## Erweiterungsideen

- Timer oder Highscore einbauen
- Schwierigkeitsgrad abhängig von Maze-Größe
- Level-System mit steigender Komplexität
- Soundeffekte bei Sieg oder Kollision
- Mobile Touchsteuerung
- „Reset“-Button oder neues Maze nach Sieg

---

## Voraussetzung / Requirements

- HTML + JavaScript
- [Matter.js](https://cdnjs.com/libraries/matter-js) (CDN oder lokal)
- Keine externen Frameworks notwendig

---

## Beispiel-Einbindung Matter.js (falls extern genutzt)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
```

---

## Lizenz / License

MIT – frei verwendbar und erweiterbar für Lern- und Spielzwecke.  
MIT – free to use and extend for educational or creative use.
```

