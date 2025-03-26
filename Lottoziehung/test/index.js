// Aufgabe 1

const myElement =
  document.getElementById("myElement");
myElement.textContent = "Hallo, Welt!";

// Aufgabe 2
const articleElement =
  document.getElementById("article");
articleElement.classList.remove(
  "available"
);
articleElement.classList.add("sold");

// Aufgabe 3
const newElement =
  document.createElement("div");
newElement.textContent =
  "Ich bin ein neues Element!";

const parentElement = document.getElementById("parentElement"
  );
parentElement.appendChild(newElement);

// Aufgabe 4

const myButton =
  document.createElement("button");
myButton.id = "myButton";
myButton.textContent = "Klick mich!";

function handleClick() {
  console.log("Button wurde geklickt!");
}

myButton.addEventListener(
  "click",
  handleClick
);

const layouts =
  document.getElementsByClassName(
    "buttonLayout"
  );
const buttonLayout = layouts[0];
buttonLayout.appendChild(myButton);

myButton.click();
