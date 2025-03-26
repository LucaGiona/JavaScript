// // // function simpleFunction(){
// // //  console.log("Erste Anweisung")
// // //  console.log("Zweite Anweisung")
// // //  console.log("Dritte Anweisung")
// // // }

// // // simpleFunction();


// // function*  simpleGenerator() {
// //   console.log("Erste Anweisung");
// //   yield "Hallo Welt!";
// //   console.log("Zweite Anweisung");
// //   yield 2;
// //   console.log("Dritte Anweisung");
// //   return "geschafft"
// // }

// // const generator =  simpleGenerator();

// // console.log(generator.next())
// // console.log(generator.next())
// // console.log(generator.next())


// function* infiniteLooop(){
//  let i = 0;
//  while(true) {
//   yield i++
//  }
// }

// const generator = infiniteLooop();

// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)

function* typeWriter(text){
 for (let char of text){
  yield char;
 }
}
 const typer = typeWriter("Happy coding!")


function typeAnimation(elementID){
 let element = document.querySelector(elementID);

 const intervalId =setInterval(() => {
  let result = typer.next();
  if(result.done) {
   clearInterval(intervalId);
   return
  }
  element.innerHTML += result.value;
 
 }, 500);
}

typeAnimation("#result-element");