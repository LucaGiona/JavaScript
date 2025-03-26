# E-Commerce App
---

```markdown
# 🛍️ E-Commerce App (Node.js + Express)

**ENGLISH BELOW ⬇️**

Dies ist eine serverseitig gerenderte E-Commerce-Webanwendung auf Basis von **Node.js**, **Express** und **Vanilla JavaScript**. Sie bietet Kernfunktionen wie Produktanzeige, Warenkorb mit Session-Verwaltung, Admin-Routen sowie einfache Templates zur Darstellung im Browser.

---

## 🚀 Features

- 🧾 Produktverwaltung (admin/products)
- 🛒 Warenkorb mit Session-Tracking (cart)
- 🔐 Authentifizierung (admin/auth)
- 🖼️ Serverseitiges HTML-Rendering mit Templates
- 🗂️ Statische Dateien (CSS, Bilder, etc.) via `public/`
- 🧠 Einfaches Repository-Pattern für Datenzugriff (z. B. JSON statt Datenbank)

---

## 📁 Projektstruktur (Kurzfassung)

```bash
.
├── index.js                     # Einstiegspunkt – startet Express-Server
├── /routes                      # Alle Express-Routen (admin, cart, products)
│   ├── admin/auth.js
│   ├── admin/products.js
│   ├── carts.js
│   └── products.js
├── /repositories               # Datenzugriff (z. B. cartsRepo, productsRepo)
├── /views                      # Templates für HTML-Rendering
│   └── carts/show.js
├── /public                     # Statische Dateien (CSS, Bilder, etc.)
├── package.json
```

---

## 🖥️ Starten der App

1. 📦 Abhängigkeiten installieren

```bash
npm install
```

2. ▶️ Server starten

```bash
node index.js
# oder mit nodemon:
npx nodemon index.js
```

3. 🌐 Im Browser öffnen

```url
http://localhost:3000/
```

Oder direkt z. B.:

- http://localhost:3000/cart
- http://localhost:3000/products

---

## 📦 Warenkorb-Funktion (Beispiel)

- Hinzufügen von Artikeln per `POST /cart/products`
- Anzeigen des Warenkorbs per `GET /cart`
- Löschen einzelner Artikel per `POST /cart/products/delete`
- Template: `/views/carts/show.js`

---

## 📚 Technologien

- **Node.js**
- **Express.js**
- **cookie-session** (Sessions im Browser)
- **body-parser / urlencoded**
- **Templating**: JavaScript-basierte Layouts
- **Modulare Routen**
- **axios** (für Frontend-APIs, falls später verwendet)

---

## 💡 Erweiterungsideen

- Benutzer-Accounts und Login-System
- Admin-Interface mit Produkt-Upload
- Datenbankanbindung (MongoDB, PostgreSQL)
- Bestellprozess und Checkout
- API-first Design für SPA oder Mobile-Apps

---

## 🪪 Lizenz

MIT – frei verwendbar für Lernzwecke und private Projekte.

---

# 🇬🇧 E-Commerce App (Node.js + Express)

This is a server-side rendered e-commerce application built with **Node.js**, **Express**, and simple JavaScript. It includes core features like product display, session-based cart, admin/product routes, and basic HTML templating.

---

## 🚀 Features

- 🧾 Product management (`admin/products`)
- 🛒 Session-based shopping cart (`cart`)
- 🔐 Admin authentication (`admin/auth`)
- 🖼️ Server-rendered HTML templates
- 🗂️ Static file handling via `public/`
- 🧠 JSON-based repositories for data logic

---

## 🗂️ Project Structure (Short Overview)

```bash
.
├── index.js                 # Entry point – starts Express server
├── /routes
│   ├── admin/auth.js
│   ├── admin/products.js
│   ├── carts.js
│   └── products.js
├── /repositories
├── /views
│   └── carts/show.js
├── /public
└── package.json
```

---

## 🛠️ How to Start

1. Install dependencies

```bash
npm install
```

2. Start the server

```bash
node index.js
# or with nodemon:
npx nodemon index.js
```

3. Open in browser

```
http://localhost:3000/
```

Try also:

- http://localhost:3000/cart
- http://localhost:3000/products

---

## 🛒 Cart Example Flow

- Add items: `POST /cart/products`
- View cart: `GET /cart`
- Remove items: `POST /cart/products/delete`
- Rendering: `/views/carts/show.js`

---

## 📚 Stack & Tools

- **Node.js**
- **Express**
- **cookie-session**
- **HTML templating** (custom JS-based)
- **Modular routing**
- **axios** (if used later for APIs)

---

## 💡 Possible Improvements

- User login and registration
- Admin panel with product upload
- Switch to database (e.g. MongoDB)
- Add checkout flow
- Convert to full REST API

---

## 🪪 License

MIT – Free to use and adapt for educational or personal projects.
```

