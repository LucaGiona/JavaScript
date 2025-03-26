const card = document.querySelectorAll(".expand-button")


card.forEach(button =>{
button.addEventListener("click", e =>{
 e.preventDefault();

 const cardBody = button.parentElement.nextElementSibling;
 cardBody.classList.toggle("show");
 button.textContent = cardBody.classList.contains("show") ? "Collapse" : "Expand";

 });
});


// const buttons = document.querySelectorAll(".expand-button");

// buttons.forEach(button => {
//   button.addEventListener("click", e => {
//     e.preventDefault();

//     const cardBody = button.parentElement.nextElementSibling;
//     cardBody.classList.toggle("show");
//     button.textContent = cardBody.classList.contains("show") ? "Collapse" : "Expand";
//   });
// });
