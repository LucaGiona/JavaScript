/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

const modal = document.querySelector("#modal");
const openButton = document.querySelector("#open-modal-btn");
const closeButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

// closeButton.addEventListener("click", () => {
//   // modal.classList.remove("open");
//   // overlay.classList.remove("open");
//   closeModal()
// });

// overlay.addEventListener("click", () => {
//   // modal.classList.remove("open");
//   // overlay.classList.remove("open");
//   closeModal()
// });
//oder noch einfacher:

closeButton.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

// weil wir uns da wiedrholen: macht eine function Sinn:

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
