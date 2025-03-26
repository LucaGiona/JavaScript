## Small Movie List App


```markdown
# 🎬 Interactive Movie List App

An interactive movie list built with vanilla JavaScript. Users can add new movies, mark favorites, search by title or genre, and delete movies from the list.

Eine interaktive Filmliste mit reinem JavaScript. Benutzer können Filme hinzufügen, Favoriten markieren, nach Titel oder Genre suchen und Filme aus der Liste löschen.

---

## 🚀 Features / Funktionen

- ✅ Add new movies with title and genre / Neue Filme mit Titel und Genre hinzufügen
- ⭐ Mark movies as favorites / Filme als Favoriten markieren
- 🔎 Search by title, genre or keyword `"favoriten"` / Suche nach Titel, Genre oder dem Keyword `"favoriten"`
- 🗑️ Delete individual movies / Einzelne Filme löschen
- 📋 Live display of sorted movie list / Live-Anzeige der sortierten Filmliste

---

## 📁 Dummy Data (Initial Movie List)

```js
let dummyFilmList = [
  { title: "Titanic", genre: "Drama", favorite: false },
  { title: "Herr der Ringe", genre: "Action", favorite: false },
  { title: "Castaway", genre: "Drama", favorite: true },
  { title: "American Pie", genre: "Komödie", favorite: false },
];
```

---

## 🧩 Main Components / Hauptbestandteile

- **Add Movie Form** – Input fields for title & genre
- **Movie List** – Displays each movie as a list item with:
  - Title & Genre
  - ⭐ Favorite toggle icon (Font Awesome)
  - 🗑️ Delete button
- **Search Bar** – Real-time filtering by keyword or genre
- **Clear Search** – Button to reset the search field

---

## 📄 HTML Element IDs Used

| ID                   | Purpose                        |
|----------------------|--------------------------------|
| `addFilmLayout`      | Container for input fields     |
| `addFilmButton`      | Show/hide the input form       |
| `confirmAddFilmButton` | Confirm adding a new film    |
| `filmTitle`          | Input field for movie title    |
| `filmGenre`          | Input field for genre          |
| `filmList`           | `<ul>` container for list items|
| `searchInput`        | Input field for searching      |
| `searchIcon`         | Icon shown during idle search  |
| `clearSearchButton`  | Button to clear the search     |

---

## 💡 Logic Overview / Funktionsübersicht

- `addFilm()` → Adds a movie object to the array and updates the UI  
- `displayFilms()` → Sorts and renders movies in the DOM  
- `toggleFavorite(index)` → Toggles the `favorite` status of a film  
- `deleteFilm(index)` → Removes a film from the array  
- `searchFilms()` → Filters the list by input (supports `"favoriten"` keyword)  
- `toggleSearchElements()` → Shows/hides search icons/buttons  
- `clearSearch()` → Resets the search field and re-displays all films

---

## 🎨 Styling & Icons

- Font Awesome is used for star and delete icons:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

> Make sure this is included in your HTML `<head>` section.

---

## 🧪 Possible Improvements / Mögliche Erweiterungen

- ✅ Persist data with `localStorage`
- 📝 Edit movie entries
- 📱 Mobile-friendly responsive layout
- 🎨 Improve visual design with CSS or frameworks

---

## 🪪 License

MIT – Free to use, learn from, and extend.  
MIT – Frei verwendbar, lernbar und erweiterbar.
```