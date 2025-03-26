// Variblen - start


// Komponenten

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");

const transactionListElement = document.getElementById("transactionList");

//Buttons
const depositButton =
  document.getElementById(
    "depositButton"
  );

 const withdrawButton =
   document.getElementById(
     "withdrawButton"
   ); 

//VARIABLEN ENDE

//Event-Listener - START
//einzahlen Button
depositButton.addEventListener("click", function(){
 const amount = prompt("Welcher Betrag (in EUR) soll eingezahlt werden?", "0");
 updateUI(amount, true);
});

//Auzahlen Button 

withdrawButton.addEventListener("click", function(){
 const amount = prompt("Welcher Betrag (in EUR) soll abgehoben werden?", "0");
 updateUI(amount, false);
})

//Event-Listener - ENDE

// Funktionen Start
// Update UI
function updateUI(amount, isDeposit){
 const convertedAmount = Number(amount);//die prompt Übergabe ist ein String
 updateBalance(convertedAmount, isDeposit);
 updateSums(convertedAmount, isDeposit);
 updateTransactions(convertedAmount, isDeposit);
}
// Update - Kontostand --is Deposit Abfrage ob true or false alos Einzahlung oder Auszahlung
function updateBalance(amount, isDeposit){
 const currentBalance = Number(balanceElement.textContent);
 const newBalance = isDeposit ? currentBalance + amount : currentBalance - amount;
 balanceElement.textContent = newBalance;
}

//Upadte Einnahmen

function updateIncome(amount){
 const currentIncome = Number(incomeElement.textContent);
 const newIncome = currentIncome + amount;
 incomeElement.textContent = newIncome;
}

// Update Ausgaben

function updateExpenses(amount){
 const currentExpenses = Number(expensesElement.textContent);
 const newExpenses = currentExpenses + amount;
 expensesElement.textContent = newExpenses;
}

//Update -- Summen (Einnahmen/Summen)

function updateSums(amount, isDeposit){
 if (isDeposit){
  updateIncome(amount);
 }else{
  updateExpenses(amount)
 }
}
// Update Buchungen
function updateTransactions(amount, isDeposit){
  const transactionElement = document.createElement("div");
  transactionElement.classList.add("transaction");

  const columnType = document.createElement("div");
  columnType.classList.add("column");

  const typeElement = document.createElement("span");
  typeElement.classList.add("type");
  typeElement.textContent = isDeposit ? "Einzahlung" : "Auszahlung";

  const columnAmount = document.createElement("div");
  columnAmount.classList.add("column");

  const amountElement = document.createElement("span");
  amountElement.classList.add("amount");

  amountElement.textContent = amount;

  columnType.appendChild(typeElement);
  columnAmount.appendChild(amountElement);
  transactionElement.append(columnType, columnAmount);
  transactionListElement.prepend(transactionElement);//kommt ganz oben in die Buchungsliste

}

// scrollbar sichtbar machen


// Funktionen Ende