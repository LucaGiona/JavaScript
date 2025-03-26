
# Erweiterte ToDo-Liste  
<span style="color:rebeccapurple">Ein JavaScript-Projekt mit Template-Rendering und localStorage</span>  

###### [Zur englischen Version](#english-version)

## Übersicht  
Dieses Projekt ist eine erweiterte JavaScript-ToDo-Liste mit folgenden Funktionen:  
- Aufgaben erstellen, als erledigt markieren oder löschen  
- Persistenz über den `localStorage`  
- Nutzung von HTML-Templates zur dynamischen Anzeige  

Die Anwendung funktioniert vollständig clientseitig und benötigt keinen Server.

---

## Funktionen  
- Aufgaben hinzufügen durch ein Formular  
- Aufgaben als erledigt markieren (Checkbox)  
- Aufgaben löschen per Button  
- Daten werden automatisch im Browser gespeichert  
- Beim Laden der Seite werden bestehende Aufgaben wiederhergestellt  

---

## Projektstruktur

```
📁 advanced-todo-list/
├── index.html              # HTML-Struktur mit Template-Element
├── script.js               # JavaScript für alle Funktionen
└── style.css               # Optionales Styling
```

---

## Verwendung  
1. Öffne die `index.html` im Browser.  
2. Gib eine neue Aufgabe ein und klicke auf „Add Todo“.  
3. Markiere erledigte Aufgaben per Checkbox.  
4. Lösche Aufgaben mit dem „Delete“-Button.  
5. Alle Einträge bleiben erhalten, solange der lokale Speicher nicht gelöscht wird.  

---

## Hinweise  
- Die Aufgaben werden im `localStorage` unter dem Key `ADVANCED-TODO-LIST-todos` gespeichert.  
- Jedes ToDo hat eine eindeutige ID, die mit `Date().valueOf()` erzeugt wird.  
- Aufgaben werden beim Laden automatisch gerendert.  

---

## English Version

### Advanced ToDo List  
<span style="color:rebeccapurple">A JavaScript project using template rendering and localStorage</span>  

## Overview  
This project is an advanced JavaScript-based to-do list with the following features:  
- Add, complete, and delete tasks  
- Persistent storage using `localStorage`  
- Use of HTML templates for dynamic rendering  

The app runs entirely in the browser with no backend required.

---

## Features  
- Add new tasks through a form  
- Mark tasks as complete via checkbox  
- Delete tasks with a button  
- Tasks are saved automatically to `localStorage`  
- Tasks are reloaded when the page is reopened  

---

## Project Structure

```
📁 advanced-todo-list/
├── index.html              # HTML structure with template tag
├── script.js               # JavaScript logic
└── style.css               # Optional CSS styling
```

---

## How to Use  
1. Open `index.html` in your browser.  
2. Type a task into the input field and click "Add Todo".  
3. Check completed tasks with the checkbox.  
4. Remove tasks with the delete button.  
5. Tasks remain saved unless you clear the browser's local storage.  

---

## Notes  
- Tasks are stored in `localStorage` under the key `ADVANCED-TODO-LIST-todos`.  
- Each task is assigned a unique ID based on `Date().valueOf()`.  
- All tasks are automatically rendered on page load.  
