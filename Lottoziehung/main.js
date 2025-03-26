//Array für alle Zahlen 1-49
const numbers=[];

//Zahlen von 1-49 zufügen

for (let i=1; i<=49; i++){
 numbers.push(i);
}

//Funktion für Lottziehung

function runLottery(){
//Array für Zufallszahlen

const winningNumbers = [];

//zufälloge Zahlen generieren und dem Array hinzufügen

while (winningNumbers.length <6){
 // zufälliger Index  auswählen
 //math random spuckt Zahl zw. 0-1 raus
const randomIndex = Math.floor(Math.random()*numbers.length);
//zufällige Zahl anhand des Index aus numbers-Array auswählen
const randomNumber = numbers[randomIndex];

//prüfen ob Zufallszahl bereits im winnigNumbers-Array enthalten ist
//auf Doppelung prüfen
if(!winningNumbers.includes(randomNumber)){


//zufällige Zahl im winningNumbers - Array hinzufügen
    winningNumbers.push(randomNumber);

}
}
//Gewinnzahlen sortieren (vonlinks nach rechts mit der Kleinsten startend)

winningNumbers.sort((a,b)=>a-b);

//Gewinnzahlen im Html anzeigen
//Lottokacheln auswählen

const tiles = document.querySelectorAll(".lotto-tile");

//Gewinnzahlen in die Kacheln einfügen
for(let i= 0;i<tiles.length;i++){
 tiles[i].textContent = winningNumbers[i];
}

}

//start button auswählen und click-listener hinzufügen
const startButton =
  document.getElementById("start-button");
  startButton.addEventListener("click", runLottery);

