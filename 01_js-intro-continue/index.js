//  If the user likes fish (confirmFish===  true), we run the following block of code.

var confirmFish = true; // change it to false to see difference
var fishtype = 'salmon';
var fishtype2 = 'carbs and telapias';

if (confirmFish === true) {
  console.log('You like ' + fishtype + ' !');
}
// confirmFish === true same as confirmFish !== false

if (confirmFish !== false) {
  console.log('You like ' + fishtype2 + ' !');
}

if (10 > 8) {
  console.log('10 is greater than 8');
}

// Activity If Statement & Co
var temperature = 80;
if (temperature > 60) {
  console.log('Its hot outside. Put on a short!');
}

// if/else statement
var num = 4;
if (num > 10) {
  console.log('big number');
} else {
  console.log('little number');
}
// if/elseif/else statement

var num2 = -3;
if (num2 > 10) {
  console.log('big number');
} else if (num2 > 0 && num2 < 10) {
  console.log('little number');
} else {
  console.log('negative numbers');
}

// logical operators
var age = 40;
var yearsAsCitizen = 40;

if (age >= 40 && yearsAsCitizen > 25) {
  console.log('You can run for President');
} else {
  console.log('You are not eligible to run for President');
}
var a = false;
if (!a) {
  console.log('a is not true');
}
if (age >= 60 || yearsAsCitizen >= 25) {
  console.log('You are still eligible');
}

// Activity if/else & LO
var tem = 40;
if (tem < 0) {
  console.log('Stay Inside');
} else if (tem > 60 && tem <= 80) {
  console.log('Wear a short');
} else if (tem > 80) {
  console.log('Wear a short and a hat');
} else {
  console.log('Wear whatever you like');
}

// Activity
// var eatSteak = prompt('Do you want to eat a steak?');
// if (eatSteak === 'yes') {
//   document.write("Here's a Steak San");
// } else if (eatSteak === 'no') {
//   document.write("Here's a Tofu");
// } else {
//   document.write('No response from user!');
// }

// LOOPS
// a. While Loop ----------------
// syntax
var age = 20;
while (age < 23) {
  console.log(age); // infinite loop
  age++; // increment
  // 1.loop => age 20
  // 2.loop => age 21
  // 3.loop => age 22
  // 4.loop => age 23 < 23 => stops on this loop
}
console.log(`------`);
var age2 = 20;
while (age2 > 18) {
  console.log(age2);
  age2--; // decrement
  // 1.loop => age 20
  // 2.loop => age 19
  // 3.loop => age 18 > 18 => stops here
}

// b. do While Loop ----------------
var val = 10;
do {
  // it gets executed at least once
  console.log('This is ten');
} while (val === 11);

// c. For Loop ----------------

for (var i = 0; i < 5; i++) {
  console.log(i);
  // 1.loop i = 0
  // 2.lop i = 1
  // 3.loop i = 2
  // 4. loop i = 3
  // 5. loop i = 4
  // 6. loop i = 5 => stop here
}

// use loops and if statements together
console.log(`------`);
for (var i = 0; i < 20; i++) {
  // body of your loop
  console.log(i);
  if (i === 4) {
    // body of your statement
    break; // break the loop and exit it!
  }
}
console.log(`------`);
for (var i = 0; i < 10; i++) {
  // body of your loop
  if (i === 4) {
    // body of your statement
    continue; // break the loop and exit it!
  }
  console.log(i);
}

console.log(`------`);
var day = 'sunday';
for (var i = 0; i < day.length; i++) {
  console.log(day[i]);
  if (day[i] === 's') {
    console.log('S is clicked');
  }
}

// string
// length = 6
// index 0 - 5
// s u n d a y
// 0 1 2 3 4 5
// console.log(day[0]);

// Activity

// 1.
for (var i = 11; i < 44; i += 3) {
  console.log('i: ', i);
}

// 2.
// 9*1=9
// 9*2=18 ...
// var startingNum = 9;
for (var i = 1; i <= 12; i++) {
  console.log(9 + '*' + i + '=' + 9 * i);
}

// SWITCH STATEMENT -------------
var day2 = 'onday';
switch (day2) {
  case 'monday': {
    console.log('its monday');
    break;
  }
  case 'tuesday': {
    console.log('its a sunday');
    break;
  }
  case 'sunday': {
    console.log('its a sunday');
    break;
  }
  default: {
    console.log('wrong day provided');
  }
}
var result;
const operator = prompt('Enter operator (either +,-,* or /): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch (operator) {
  case '+': {
    console.log(number1 + number2);
    break;
  }
  case '-': {
    console.log(number1 - number2);
    break;
  }
  case '*': {
    console.log(number1 * number2);
    break;
  }
  case '/': {
    console.log(number1 / number2);
    break;
  }
  default:
    console.log('invalid operator!');
    break;
}

// my exercise
// #1
var numKids = 4;
var partner = 'JD';
var geoLocation = 'Spain';
var jobTitle = 'doctor';

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' , and married to ' + partner + ' ' + ' with ' + numKids + ' kids. ';
console.log(future);

// #2
var birthYear = 1988;
var futureYear = 2029;
var age = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

// #3
var currentAge = 33;
var maxAge = 88;
var numPerDay = 3;
var totalNeed = (numPerDay * 365) * (maxAge - currentAge);
var message = 'You will need ' + totalNeed + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);

// #4
var celsius = 15;
var celsiusInF = (celsius * 9) / 5 + 32;
console.log(celsiusInF);

var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheitInC);