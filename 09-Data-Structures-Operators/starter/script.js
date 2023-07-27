

'use strict';

// Data needed for a later exercise


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `dupa` : ``} ${type.replaceAll(`_`, ` `)} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(`:`, `h`)})`.padStart(50);
  console.log(output);
}

// console.log(`legia+warszawa+to+najleszy+klub`.split(`+`));
// console.log(`Jakub Maricniak`.split(` `));

// const [firstName, lastName] = `Jakub Maricniak`.split(` `);

// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(` `);
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1))
//   }
//   console.log(namesUpper.join(` `));

// };
// capitalizeName(`tomek uszatek szofer gnypek`);

// const maskCreditCard = function (number) {
//   const str = number + ``;
//   const last = str.slice(-4);
//   return last.padStart(str.length, `*`);

// }

// console.log(maskCreditCard(12345678998764678));







// const airline = `LOT Polska linia lotnicza`;
// const plane = `A320`;

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`)
//     console.log(`No siedzisz w srodku`);
//   else console.log(`Fart`);
// }

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

// const email = `mroczny322@gmail.com`;
// const loginEmail = `           Mroczny322@Gmail.Com \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(trimmedEmail);

// const pricePL = `288,97zl`;
// const priceUS = pricePL.replace(`zl`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const planeA = `A320neo`;
// console.log(planeA.includes(`A320`));
// console.log(planeA.includes(`Polonia`));

// const question = new Map([
//   [`question`, `Legia czy polonia?`],
//   [1, `Legia`],
//   [2, `Polonia`],
//   [`correct`, 1],
//   [true, `Dobrze`],
//   [false, `W dziób`]
// ]);
// console.log(question);

// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Odpowiedz ${key}: ${value}`);
// }
// const answer = Number(prompt(`Twoja szansa`));
// console.log(answer);
// console.log(question.get(question.get(`correct`) === answer));


// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// rest.set(2, `Lisbon, Portugal`);

// rest.set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set(`open`, 11).set(`close`, 23).set(true, `we are open`).set(false, `We are closed`);

// const time = 21;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));




// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// restaurant.orderDeliver(1, 0, '12:30', 'Grochowska 56');

// const ingredients = [prompt(`Let make pasta! Ingredient 1?`), prompt(`Let make pasta! Ingredient 2?`), prompt(`Let make pasta! Ingredient 3?`)];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Zabka` };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Niebo w gębie`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
// add(2, 3)

// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza(`grzyby`, `ziolo`, `szklo`);

// console.log(restaurant.order(2, 0));

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const { fri: { open, close } } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);


// const newMenu = [...restaurant.mainMenu, `HotDog`];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const [players1, players2] = game.players;
// console.log(players1, players2)

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Peresic`];

// //5
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`)
// };

// printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log(`Lewandolish`);

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });
