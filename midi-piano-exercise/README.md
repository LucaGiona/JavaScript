
# MIDI Piano – Keyboard Sound Synthesizer 🎹  
**[English version below](#english-version)**  

Ein Mini-Projekt zur Erzeugung von Tönen über die Computertastatur – komplett mit **Web Audio API**, Tastenzuordnung und visueller Rückmeldung. Jede Taste spielt eine Note, mehrere gleichzeitig sind möglich.

---

## Funktionen

- **Synthesizer** über `AudioContext` (Sinuswellen)
- Tastenzuordnung: Z, X, C, V, B, N, M usw. → Klaviatur
- Anzeige gedrückter Tasten per `.active`-Klasse im DOM
- Mehrstimmiges Spiel (Akkorde durch gedrückte Kombinationen)
- Visuelles Feedback durch Hervorhebung der aktiven Taste

---

## Tastenzuordnung (Beispiel)

| Note | Taste |
|------|-------|
| C    | Z     |
| D    | X     |
| E    | C     |
| F    | V     |
| G    | B     |
| A    | N     |
| B    | M     |
| + Halbtöne: S, D, G, H, J usw.

---

## Voraussetzungen

- HTML-Struktur mit Elementen wie:

```html
<div class="key" data-note="C"></div>
<div class="key sharp" data-note="Db"></div>
...
```

- CSS-Klasse `.active` für visuelle Hervorhebung
- JavaScript-Datei mit `AudioContext` und `Oscillator`

---

## Hinweise

- Das Projekt funktioniert **nur bei aktiver Nutzerinteraktion**, da moderne Browser Audio-Kontexte blockieren, bis ein Ereignis (z. B. Tastendruck) stattfindet.
- Für bessere Audioqualität können statt `"sine"` auch `"square"`, `"triangle"` oder `"sawtooth"` als `oscillator.type` getestet werden.

---

## English Version

A mini-project that turns your keyboard into a **basic MIDI synthesizer**, using the **Web Audio API**. Each key plays a musical note with sinusoidal sound and visual feedback.

---

## Features

- **Real-time audio synthesis** via `AudioContext`
- Key mapping: Z, X, C, V, B, N, M etc. → Musical notes
- Active note highlights via `.active` class
- Supports multiple key presses for chords
- Visual + audio interaction

---

## Key Mapping (Example)

| Note | Key |
|------|-----|
| C    | Z   |
| D    | X   |
| E    | C   |
| F    | V   |
| G    | B   |
| A    | N   |
| B    | M   |
| + Sharps: S, D, G, H, J etc.

---

## Requirements

- HTML with key elements like:

```html
<div class="key" data-note="C"></div>
<div class="key sharp" data-note="Db"></div>
...
```

- `.active` CSS class for key visual feedback
- JavaScript logic with `AudioContext`, `Oscillator`, `GainNode`

---

## Tips

- Works best after a user event (e.g., key press), as browsers restrict auto-play audio.
- You can tweak sound type using `oscillator.type = 'sine'`, `'square'`, `'triangle'`, or `'sawtooth'`.

---

## License

MIT – Free to use and adapt.
