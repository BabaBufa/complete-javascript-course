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

