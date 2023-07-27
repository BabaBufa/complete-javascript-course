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

const lot = {
    airline: `LOT`,
    iataCode: `LOTPL`,
    bookings: [],
    book(flightNum, name){
        console.log(
            `${name} poleci sobie ${this.airline}
            lotem ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lot.book(2115, `Kuba`);
lot.book(2137, `Marek`);


const innylot = {
    airline: 'Hell',
    iataCode: `Piekło`,
    bookings: [],
};

const book = lot.book;

//to nie zadziała
// book(332, `Tomasz`);

//call metoda
book.call(innylot, 332, `Tomasz`);


book.call(lot, 767, `Uszaty`);
console.log(lot);

//apply metoda
const flightData = [854, `Jakub Marciniak`];
book.apply(innylot, flightData);
console.log(innylot);

//lepsza wersja co wyzej
book.call(innylot, ...flightData);

