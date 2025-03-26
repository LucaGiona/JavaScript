//ausgangswert - initalisierung

let count=0;

//html Elemnt zuweisen
const counter = document.getElementById("counterValue");

// Hochzählen -increment
function incrementCounter (){
 count=Number(localStorage.getItem("count"));
 counter.innerText = count;
 //werte Speichern
 localStorage.setItem("count",count +1);
 //im localstorage werden nur strings gespeichert - also muss cast gemacht werden string zu number
}

//event listener
window.onload = incrementCounter;

// localStorage.clear();

//reset - bekommen Sammlung von Arrays zurück[] indexPosition
const reset=document.getElementsByTagName("button")[0];
reset.addEventListener("click",()=>{
 localStorage.setItem("count",0);
 incrementCounter();
} );