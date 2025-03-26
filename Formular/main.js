//Element des Formulars und Fehlermeldung

const contactForm = document.getElementById("contactForm");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

//Evetlistener für das Formularabsenden hinzufügen

contactForm.addEventListener("submit",function(event){
 //Verhindern das normale Absenden des Formulars
  event.preventDefault();

  //Werte der Fromularfelder abrufen
  const name = nameField.value;
  const email = emailField.value;
  const message = messageField.value;

  //Fehlermeldungen zurücksetzen
  resetErrors();

  //Validierung für den Namen
  if(!isValidName(name)){
   displayError(nameError, "Bitte geben Sie einen gültigen Namen ein.");

   //Hervorheben fehlerhaften Feldes
   nameField.classList.add("error-input");
   return;//wichtig Programm beenden sonst geht es eben weiter
  }

  //Validierung für die Email Adresse
  if(!isValidEmail(email)){
   displayError(emailError, "Ungültige E-Mail-Adresse")
  ;
  //Hervorheben des fehlerhaften Feldes
  emailField.classList.add("error-input");
  return;
 }
  //Erfolgsmeldung anzeigen und Formular zurücksetzen
  alert("Vielen Dank für Ihre Nachricht!");
  contactForm.reset();
});

//Funktion zum Zurücksetzen der Fehlermeldungen und der roten Rahmen
function resetErrors(){
 nameError.textContent="";
 emailError.textContent="";
 messageError.textContent="";

 //für den Style
 nameField.classList.remove("error-input");
 emailField.classList.remove("error-input");
 messageField.classList.remove("error-input");
}

//Funktion zum Anzeigen der Fehlermeldung
function displayError(errorElement, errorMessage){
 errorElement.textContent = errorMessage;

}
//Funktion zur Validierung des Namens
function isValidName(name){
  return /^[A-Za-z\s]{2,}$/.test(name);
}

//Funktion zur Überprüfung der MailAdresse

function isValidEmail(email){
 return /\S+@\S+\.\S+/.test(email);
}

// Funktion zum Rücksetzen des Formulars

function resetForm(){
 contactForm.reset();
 resetErrors();
}