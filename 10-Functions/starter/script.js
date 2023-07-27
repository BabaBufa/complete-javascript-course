'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking(`LC16`, 165, 78);

// const flight = `LC16`;
// const kuba = {
//     name: `Jakub Marciniak`,
//     passport: 41337221150
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = `VER1`;
//     passenger.name = `Mr. ` + passenger.name;
//     if (passenger.passport === 41337221150) {
//         alert(`Lecisz`)
//     } else {
//         alert(`Nie lecisz`)
//     }
// }

// checkIn(flight, kuba);
// console.log(flight);
// console.log(kuba);


// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(kuba);
// checkIn(flight, kuba);
// console.log(kuba);

// const oneWord = function(str) {
//     return str.replace(/ /g, ``).toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others]= str.split(` `);
//     return [first.toUpperCase(),...others].join(` `);
// }

// // Higher-order function
// const transformer = function(str,fn) {
// console.log(`Orginalny string: ${str}`);
// console.log(`Przerobiony string: ${fn(str)}`);
// console.log(`Przerobione przez funkcję: ${fn.name}`);
// }

// transformer(`Legia Warszawa potęga!`, upperFirstWord);
// transformer(`Marzy mi się leżeć na plaży`, oneWord);

// const high5 = function() {
//     console.log(`Chodz piąteczkę przybijesz`);
// }

// document.body.addEventListener(`click`, high5); //klikanie na stronie wywołuje komunikat na stronie

// [`Kuba`, `Tomek`, `Maurycy`].forEach(high5);


// const lewak = function(str) {
//     if (str === `lewak` || str === `lgbt`){
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(lewak(`asdasd`))

// const trans = function(str, fn) {
//     if(fn(str)){
//         console.log(`Brawo no brawo ${str}`);
//     } else {
//         console.log(`Dumny jesteś wykorzystany przez ${fn.name}`);

//     }
       
// }

// trans(`prawak`, lewak); //xdd działa

// const greet = function(greeting) {
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// const pozdrowienia = greet(`Strzała`);
// pozdrowienia(`Kuba`);

// //Challenge
// const pozdrowieniaArr = greeting => name => console.log(`${greeting} ${name}`);
// pozdrowieniaArr(1)(2); //zwracam jakby dwa argumenty podane w dwoch funkcjach ktore sa wyzej zapisane w console.log w tym przypadku do fukncji greeting 1 a name 2

// const lot = {
//     airline: `LOT`,
//     iataCode: `LOTPL`,
//     bookings: [],
//     book(flightNum, name){
//         console.log(
//             `${name} poleci sobie ${this.airline}
//             lotem ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     },
// };

// lot.book(2115, `Kuba`);
// lot.book(2137, `Marek`);


// const innylot = {
//     airline: 'Hell',
//     iataCode: `Piekło`,
//     bookings: [],
// };

// const book = lot.book;

// //to nie zadziała
// // book(332, `Tomasz`);

// //call metoda
// book.call(innylot, 332, `Tomasz`);


// book.call(lot, 767, `Uszaty`);
// console.log(lot);

// //apply metoda
// const flightData = [854, `Jakub Marciniak`];
// book.apply(innylot, flightData);
// console.log(innylot);

// //lepsza wersja co wyzej
// book.call(innylot, ...flightData);

// const bookInnyLOT = book.bind(innylot);
// const bookLOT = book.bind(lot);

// bookInnyLOT(888, `Marcin Marciniak`);

// const bookInnyLOT999 = book.bind(innylot, 999);
// bookInnyLOT999(`Maciek Wieszak`);
// bookInnyLOT999(`Maciek Malutki`);

// lot.planes = 300;
// lot.buyPlane = function(){
//     this.planes++;
//     console.log(this.planes);
// };
// document.querySelector(`.buy`).addEventListener(`click`, lot.buyPlane.bind(lot)); //po nacisnieciu dodajemy samolocik

// // Partial aplication
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// //chalenge zrobilem sam wynik wyszedl taki jak mial wyjsc ale chyba nie w ten sposob chyba mialem zrobic
// const addVAT1 = addTax.call(null, 0.23, 100);
// console.log(addVAT1);


///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     question: 'Jaki jest twój ulubiony język programowania?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(
//             prompt(`${this.question}\n ${this.options.join(`\n`)}\n(Napisz numer odpowiadający opcji)`)
//         )
//         if (answer > 3){
//             console.log(`Zła odpowiedź popraw klikając na przycisk`)
//         }
//         // if (answer > 3) {
//         //     console.log(`Zła liczba popraw klikając na przycisk`);
//         // } else if(answer === 0){
//         //     console.log(`Twoja odpowiedź ${this.options[0]}`)
//         // } else if (answer === 1) {
//         //     console.log(`Twoja odpowiedź ${this.options[1]}`)
//         // } else if (answer === 2) {
//         //     console.log(`Twoja odpowiedź ${this.options[2]}`)
//         // } else {
//         //     console.log(`Twoja odpowiedź ${this.options[3]}`)
//         // } NO FAJNIE DZIAŁA ALE NIE O TO CHODZIŁO 
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        
//         this.displayResults();
//         this.displayResults(`string`);
//     },
//     displayResults(type = 'array') {
//         if (type === 'array') {
//           console.log(this.answers);
//         } else if (type === 'string') {
//           console.log(`Wyniki to ${this.answers.join(', ')}`);
//         }
//       },
// };

// poll.registerNewAnswer();
// document.querySelector(`.poll`).addEventListener(`click`, poll.registerNewAnswer.bind(poll));

// // BONUS chyba latwiejsze
// poll.displayResults.call({answers: [5, 2, 3]}, `string`)

// Immediately Invoked Function Expressions (IIFE)
// const odpalRaz = function () {
//     console.log('Raz sie tylko odpali');
//   };
//   odpalRaz();
  
//   // IIFE
//   (function () {
//     console.log('To się odpali naprawde tylko raz');
//     const isPrivate = 23;
//   })();
  
// //   console.log(isPrivate);

//   (() => console.log('to tez sie odpali raz'))();

//   {
//     const pyk = 23;
//     var pyknieprywatne = 23;
//   }
//   console.log(pyknieprywatne);
// //   console.log(pyk);