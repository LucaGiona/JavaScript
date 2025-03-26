##Cash Machine / Geldautomat


---

```markdown
# Balance Tracker – Einnahmen & Ausgaben

A simple income/expense tracker built with vanilla JavaScript. Users can record deposits and withdrawals via prompt input. The app updates the balance, income, expenses, and displays a list of transactions.

Ein einfacher Einnahmen-/Ausgaben-Tracker mit JavaScript. Benutzer können Ein- und Auszahlungen über Eingabefelder (Prompt) hinzufügen. Die Anwendung aktualisiert den Kontostand, zeigt Summen und listet alle Buchungen auf.

---

## Features / Funktionen

- Add deposits and withdrawals through user prompts
- Automatically update:
  - Total balance
  - Income
  - Expenses
  - Transaction history
- Newest transactions appear at the top

---

## HTML Element IDs Used

| ID                 | Description (EN)                    | Beschreibung (DE)               |
|--------------------|-------------------------------------|----------------------------------|
| `balance`          | Displays current account balance    | Aktueller Kontostand             |
| `income`           | Displays total income               | Gesamte Einnahmen                |
| `expenses`         | Displays total expenses             | Gesamte Ausgaben                 |
| `transactionList`  | Container for transaction entries   | Liste der Buchungen              |
| `depositButton`    | Button to trigger deposit prompt    | Button für Einzahlung            |
| `withdrawButton`   | Button to trigger withdrawal prompt | Button für Auszahlung            |

---

## Function Overview / Funktionsübersicht

| Function                 | Purpose (EN)                                | Beschreibung (DE)                                 |
|--------------------------|---------------------------------------------|----------------------------------------------------|
| `updateUI(amount, isDeposit)`   | Updates all components after input   | Aktualisiert UI nach Ein-/Auszahlung              |
| `updateBalance(amount, isDeposit)` | Updates the account balance         | Aktualisiert den Kontostand                       |
| `updateIncome(amount)`   | Adds to total income                       | Erhöht die Einnahmen                              |
| `updateExpenses(amount)` | Adds to total expenses                     | Erhöht die Ausgaben                               |
| `updateSums(amount, isDeposit)`  | Determines whether to call income or expenses update | Entscheidet je nach Typ                           |
| `updateTransactions(amount, isDeposit)` | Creates and prepends a new transaction element | Erstellt eine neue Buchung und zeigt sie oben an  |

---

## How It Works / Funktionsweise

1. User clicks on "Deposit" or "Withdraw"
2. A `prompt` asks for the amount in EUR
3. The entered value is converted to a number
4. The app:
   - Updates the account balance
   - Updates either income or expenses
   - Creates a new transaction entry
5. Transactions are displayed chronologically (latest first)

---

## Example Transaction Element Structure

```html
<div class="transaction">
  <div class="column">
    <span class="type">Einzahlung</span>
  </div>
  <div class="column">
    <span class="amount">200</span>
  </div>
</div>
```

---

## Enhancements / Erweiterungsideen

- Validate that the prompt input is a valid number
- Use input fields instead of prompt dialogs
- Persist data using `localStorage`
- Add categories or descriptions to transactions
- Add date/time stamps for transactions
- Add currency formatting (e.g. EUR with decimal places)

---

## License

MIT – freely usable and extendable for learning or personal use.  
MIT – frei verwendbar und erweiterbar für Lernzwecke oder den Eigengebrauch.
```