//Holen der Sprachdatei

async function fetchLanguageData(lang){
 const response = await fetch(`languages/${lang}.json`);
 return response.json()
}

//Funktion für click Event um die Sprache zu ändern
function changeLanguage(lang){
 localStorage.setItem("language", lang);

 const langData = fetchLanguageData(lang);
 updateContent(langData);

}

//Aktualisierung des Contents

function updateContent(langData){
 document.querySelectorAll("[data-i18n]").forEach((element) =>{
  const key = element.getAttribute("data-i18n");
  element.textContent = langData[key];
 });
}




window.addEventListener("DOMContentLoaded", async ()=>{
 const userPreferredLanguage = localStorage.getItem("language") || "de";
 const langData = await fetchLanguageData(userPreferredLanguage);
 updateContent(langData)
})