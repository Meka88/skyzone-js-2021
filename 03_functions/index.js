// global
var a = 1;

// 1. function declaration -----
function name() {
  // body of your function
  var b = 2;
  console.log(b);
}
// calling my function
// name();
// name();
// name();

// 2. function expression -----
var name2 = function () {
  var c = 3;
  console.log(c);
};

// name2();
// name2();
// name2();

// Activity
function getSum() {
  // console.log(8 + 10);
  var a = 8;
  var b = 10;
  var sum = a + b;
  console.log(sum);
}
// var getSum = function () {
//   console.log(8 + 10);
// };

// getSum();

// Arguments ----------

function moveRobot(dir, label) {
  console.log(arguments);

  console.log(`direction`, dir);
  console.log('label: ', label);
}
// var direction = 'left';
// moveRobot(direction);
// moveRobot('left', 'car direction');

// default arguments array --------------
function countNumbers(a, b) {
  console.log(arguments);
  // then you can loop and get sum of all arguments
  var sum = a + b; // 1+undefined = NaN
  // console.log(sum);
}
// countNumbers(1); // a=1, b=undefined
// countNumbers(1, 2);
// countNumbers(1, 2, 3, 4, 5, 6, 7);

// Activity
function getProduct(a, b, c, d) {
  // get the product of all four
  var product = a * b * c * d;
  console.log(product);
}

// getProduct(2, 2, 2, 2);
// getProduct(1, 1, 1, 1);
// getProduct(0, 1, 1, 3);
// var a = 1;
// var b = 1;
// var c = 2;
// var d = 2;
// getProduct(a, b, c, d);

// Returning values ---------------
function myName(firstName, middleName, lastName) {
  return middleName;
}
var fn = myName('Mary', 'Eliz', 'Smith');
console.log(fn);

// Activity
// 1.
function productOfFourNumbersReturn(a, b, c, d) {
  var sum = a * b * c * d;
  return sum;
}
// 2.
function alertTheUserFullName(name, lastName) {
  return 'Hello ' + name + ' ' + lastName;
  // console.log('hey');
}
// alert(alertTheUserFullName('Ulan', 'Rakymzhan'));

// Difference function declaration and function expression

// dec(); - works
function dec() {
  console.log('this is dec function');
}
// exp(); - error
var exp = function () {
  console.log('this is exp function');
};

// Scopes
// 1. Global

var theString = 'The current Year Is '; // global variable
var year = 2021; // global variable

function curretYear() {
  // function scope
  console.log(theString + year); // can access global vars
}
curretYear();

if (10 > 1) {
  // block scope
  console.log(year); // can access global vars
}

// 2. Local
function lastYearFun() {
  var str = 'The last Year Is '; // local variable
  var lastyear = 2020; // local variable
  console.log(str + lastyear); // can access local vars
}
lastYearFun();

// console.log(str);
// console.log(lastyear);

var g = 'global';
// global
function outer() {
  var o = 'outer';
  // g, o
  console.log(`g`, g);
  console.log(`o`, o);
  // console.log(`i`, i);
  function inner() {
    var i = 'inner';
    // g, o, i
    console.log(`g`, g);
    console.log(`o`, o);
    console.log(`i`, i);
  }
  inner();
}
outer();

// Activity
// 1. declaration
var worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
// 2. expression
var percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

var china = percentageOfWorld1(1441);
var england = percentageOfWorld1(350);
var mexico = percentageOfWorld1(1200);

console.log(`china percentage %`, china);
console.log(`england percentage %`, england);
console.log(`mexico percentage %`, mexico);

// IIFE - immediately invoked functions
(function (a) {
  console.log(`a`, a);
  console.log('IIFE');
})('hey');

// functions as object properties
var car = {
  color: 'black',
  type: 'sedan',
  drive: function (dir) {
    console.log('car is moving', dir);
  },
};
car.drive('right');

// functions as argument - callback
function callMe(myFun) {
  myFun();
}
function myFun() {
  console.log('Call Me');
}
callMe(myFun);

// Activity 
// 1
function tellFortune(jobTitle, geoLocation, partner, numKids) {
  var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
 partner + ' ' + ' with ' + numKids + ' kids.';
  console.log(future);
}

tellFortune('doctor', 'Spain', 'Tom Hardy', 3);
tellFortune('engineer', 'San Francisco', 'Brad Pitt', 5);
tellFortune('basketball player', 'Los Angeles', 'Kyle Kuzma', 2);

// 2
 function calculateDogAge(age) {
   var dogYears = 7*age;
   console.log('Your doggie is ' + dogYears + ' years old in dog years!')
 }
calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(5);


// 3
 function calculateSupply(age, amountPerDay) {
   var maxAge = 88;
   var totalNeeded = (amountPerDay * 365)*(maxAge-age);
   console.log('You will need ' + totalNeeded + ' to last you untill the ripe old age of ' + maxAge);
} 
calculateSupply(33, 25);
calculateSupply(44, 15);
calculateSupply(18, 35);

// 4
function celsiusToFahrenheit(celsius) {
  var celsiusInF = (celsius*9)/5 + 32;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
}
celsiusToFahrenheit(23);

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}
fahrenheitToCelsius(85);


// debounce
function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};