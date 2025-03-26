## Secret Messanger


# URL Message Encoder & Decoder

[English version below](#english-version)

Ein kleines Webtool, das eine eingegebene Nachricht per `btoa()` (Base64) kodiert und sie als Teil der URL (Hash) bereitstellt. Wird die URL später geöffnet, wird die Nachricht automatisch wieder entschlüsselt (`atob()`) und angezeigt.

---

## Funktionen

- Nachricht wird Base64-kodiert und als Hash an die URL gehängt
- Die entschlüsselte Nachricht wird beim Seitenaufruf direkt angezeigt
- Kein Server notwendig – alles geschieht im Browser
- Ideal zum Teilen kurzer Textnachrichten per Link

---

## Beispiel

```url
https://deine-seite.de/#SGFsbG8gd2VsdA==
```

→ Beim Öffnen erscheint: **Hallo welt**

---

## Technologien

- JavaScript (`btoa`, `atob`)
- DOM-Manipulation
- HTML-Formulare
- Kein externes Framework notwendig

---

## English version

A minimal client-side tool to encode a message in Base64 and append it as a hash (`#`) to the current URL. When the URL is visited, the message is automatically decoded and displayed on the page.

---

## Features

- Encodes message with `btoa()` and adds it to the URL
- Decodes message on page load using `atob()`
- No backend – everything happens in the browser
- Great for sharing short secret notes via link

---

## Example

```url
https://your-site.com/#U2VjcmV0IE1lc3NhZ2U=
```

→ Displays: **Secret Message**

---

## License

MIT – free to use, share and modify.

