const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");
const ANSWER_LENGTH = 5;
const API_URL = "https://words.dev-apis.com/word-of-the-day";
const ROUNDS = 6;

async function init() {
  let currentGuess = "";
  let currentRow = 0;
  let isLoading = true;
  let done = false;

  const res = await fetch(API_URL);
  const resObj = await res.json();
  const word = resObj.word.toUpperCase();
  const wordParts = word.split(""); //correct word

  setLoading(isLoading);
  isLoading = false;

  console.log(word);

  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      //add letter to the end
      currentGuess += letter;
    } else {
      //replace last letter
      currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    //Answer length * currentRow = row we are writting in
    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
  }

  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      // do nothing
      return;
    }

    // //TODO validate the word
    // isLoading = true;
    // setLoading(isLoading);
    // const res = await fetch("https://words.dev-apis.com/validate-word", {
    //   method: "POST",
    //   body: JSON.stringify({ word: currentGuess }),
      
    // });

    // const resObj = await res.json();
    // const validWord = resObj.validWord;
    // //const { validWord } = resobj;

    // isLoading = false;
    // setLoading(isLoading);

    // if (!validWord) {
    //   markInvalidWord();
    //   return;
    // }



    // TODO do all the marking as "correct" "close""wrong"
    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts);

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      //mark as correct
      if (guessParts[i] === wordParts[i]) {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
      }
    }

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        //to do nothing we already did it
      } else if (/* TODO make this more accurate */ wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0) {
        //mark it as close
        letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
      } else {
        letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong");
      }
    }

    //TODO win or lose?
    currentRow++;
    currentGuess = "";
    //win
    if (currentGuess === word) {
      done = true;
      alert("you win");
      return;
    }
    //loose
    if (currentRow === ROUNDS) {
      alert(`you loose ---
        solution:
         ${word}`);
      done = true;
    }
    
  }

  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
  }

  // function markInvalidWord(){
  //  // alert("not a valid word");

  //  for ( let i = 0; i < ANSWER_LENGTH; i++){
  //   letters[currentRow * ANSWER_LENGTH +i].classList.add("invalid");

  //   setTimeout(function (){
  //      letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");
  //   }, 300)
  //  }
  // }

  document.addEventListener("keydown", function handleKeyPress(event) {
    if (done || isLoading) {
      return;
    }
    const action = event.key;

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
    }
  });
}

function isLetter(letter) {
  return /^[a-zA-z]$/.test(letter);
}

function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}
init();
