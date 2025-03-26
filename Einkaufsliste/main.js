// Wähle Dom -Elemente aus

const addInput =
  document.getElementById( "addItemInput");
const addButton =
  document.getElementById(
    "addItemButton"
  );
const addItems =
  document.getElementById("itemList");

// Funktion zum Hinzufügen eines Artikels zur Liste

function addItem(){
 // Erstelle ein neues Listenelement
 const li = document.createElement("li");

 // Füge den Text des Inputs-Feld als Inhalt des Listenelements hinzu
li.innerText= addInput.value;

// Füge einen Löschen Button zum Listenelement hinzu

const deleteButton = document.createElement("button");
deleteButton.id = "deleteItemButton";
deleteButton.addEventListener("click",()=>{
 li.remove();//remove ist eine Methode
} );
// Delete - Icon
const deleteButtonIcon = document.createElement("i");
deleteButton.className =
  "material-symbols-outlined";
deleteButton.textContent="delete"; //name der Tonne via google materials icon
// icon hinzufügen
deleteButton.appendChild(deleteButtonIcon);

// Löschen-Button hinzufügen
li.appendChild(deleteButton);

// Füge das Listenelement zur Liste
addItems.appendChild(li);

// Setze das Eingabefeld zurück
addInput.value="";//Wert wird gelöscht

}

// Füge einen Eventlistner zum hinzufügen von Artikeln hinzu

addButton.addEventListener("click", ()=>{
 addItem();
});

// Füge einen Eventlistener zum Hinzufügen wenn wir Enter drücken

addInput.addEventListener("keydown", (event)=>{
 if(event.key === "Enter"){
  addItem()
 }
})
