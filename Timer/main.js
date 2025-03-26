let originalDuration = 60*30*15*5; //Ursprüngleiche Dauer 1tag / 13 Stunden / 30 Minuten

let duration = originalDuration; //Aktuelle Dauer in Sekunden

let isPaused = true;//Gibt an ob der Timer pausiert
let countdownInterval; //Speichert die Intervall-Referenz(id) für den Counter

//Funktion zur Aktualisierung der Timer-Anzeige

function updateTimerDisplay(){
 //zeitwerte in Tagen, Stunden, Minuten Sekunden aufteilen

  //Tage in Sekunden
const days =Math.floor(duration / (60*60*24));
const hours = Math.floor((duration %(60*60*24))/(60*60));
const minutes= Math.floor((duration %(60*60))/(60));
const seconds = duration%60;

//Aktualisieren der Timer-Anzeige 
//Punkt time hier beim querySelector
document.getElementById("days").querySelector(".time").textContent= String(days).padStart(2, "0");
document.getElementById("hours").querySelector(".time").textContent= String(hours).padStart(2, "0");
document.getElementById("minutes").querySelector(".time").textContent= String(minutes).padStart(2, "0");
document.getElementById("seconds").querySelector(".time").textContent= String(seconds).padStart(2, "0");

//Ändern der Klassen, um den Pause - und Abspielwert anzuzeigen

document.querySelectorAll(".time").forEach((timeElement)=> {
 timeElement.classList.toggle("playing", !isPaused);
 timeElement.classList.toggle("paused", isPaused);
});

}

//Fnktion zum Umschalten von Play/Pause Zustand
function togglePlayPause(){
 
 isPaused = !isPaused; //funktion wirkt wie ein Lichtschalter an und aus

 const playPauseButton =
   document.getElementById("playPauseButton");
   playPauseButton.innerHTML = isPaused 
   ? "<span>&#9658</span>" 
   : "<span>&#10074;&#10074</span>";
   playPauseButton.classList.toggle("playing", !isPaused);
   playPauseButton.classList.toggle("paused", isPaused);
}
//Funktion zum Starten des Countdowns

function startCountdown(){
 togglePlayPause();
 updateTimerDisplay();

 //Timer beenden bei 0
 countdownInterval = setInterval(()=>{
  duration--;
  if(duration < 0){
   clearInterval(countdownInterval);
   duration = 0;
   togglePlayPause();
  }
  updateTimerDisplay();
 }, 1000); //wert in ms zu setInterval
}

//Reset Timer

function resetTimerStyles(){
 //Reset Play/ Pause Button
 const playPauseButton =
   document.getElementById("playPauseButton");
   playPauseButton.innerHTML = "<span>&#9658;</span>";
   playPauseButton.classList.toggle("playing", true);
   playPauseButton.classList.toggle("paused", false);

 //Reset timeslots 
 document
   .querySelectorAll(".time")
   .forEach((timeElement) => {
     timeElement.classList.toggle(
       "playing",
       true
     );
     timeElement.classList.toggle(
       "paused",
       false
     );
   });
}

//Events
document.addEventListener("DOMContentLoaded", function(){
  //Buttons
  const playPauseButton =
    document.getElementById(
      "playPauseButton"
    );
  const restartButton =
    document.getElementById(
      "restartButton"
    );
  const increaseButton =
    document.getElementById(
      "increaseBtn"
    );

  const decreaseButton =
    document.getElementById(
      "decreaseBtn"
    );

  //Eventhandler
  //Play-Pause
  playPauseButton.addEventListener(
    "click",
    function () {
      if (isPaused) {
        startCountdown();
      } else {
        clearInterval(
          countdownInterval
        );
        togglePlayPause(); //Button umschalten
      }
    }
  );
  //Restart
  restartButton.addEventListener(
    "click",
    function () {
      clearInterval(countdownInterval);
      isPaused = true;
      duration = originalDuration;
      updateTimerDisplay();
      resetTimerStyles();
    }
  );
  //Increase Button Eventhandler
  increaseButton.addEventListener(
    "click",
    function () {
      duration += 60;
      originalDuration =
        Math.ceil(duration / 60) * 60; //aufrunden auf ganze Minuten
      updateTimerDisplay();
    }
  );
  //Decrease Button Eventhandler
  decreaseButton.addEventListener(
    "click",
    function () {
      //Barriere fürs verringern
      if (duration >= 120) {
        duration -= 60;
        originalDuration =
          Math.ceil(duration / 60) * 60;
        updateTimerDisplay();
      }
    }
  );
  //initilalisierung Timer

  updateTimerDisplay();
  resetTimerStyles();
});


