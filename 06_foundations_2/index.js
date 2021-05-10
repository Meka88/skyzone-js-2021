/** 
 * Number Methods
  */

// toString();
let num = 24;
console.log(num.toString()); //'24'
console.log(typeof num.toString()); //string
console.log((11+13).toString());

//toExponential();
let exp = 8;
console.log(exp.toExponential(2));
console.log(exp.toExponential(3));
console.log(exp.toExponential(6));

// toFixed();
let fxd = 9.656;
console.log(fxd.toFixed());
console.log(fxd.toFixed(2));
console.log(fxd.toFixed(3));

//toPrecision();
let pn = 9.656;
console.log(pn.toPrecision());
console.log(pn.toPrecision(2));
console.log(pn.toPrecision(3));

// Number()
let x = true;
console.log(Number(x));
x = false;
console.log(Number(x));
x = new Date();
console.log(typeof x);
console.log(Number(x));
x = "10";
console.log(Number(x));
x = "10 20";
console.log(Number(x));

//parseInt()
console.log(parseInt('10'));
console.log(parseInt('20 30 40'));
console.log(parseInt('34 56 27'));
console.log(parseInt('14 years'));
console.log(parseInt('years 10'));

// parseFloat()
console.log(parseFloat('10'));
console.log(parseFloat('10.44'));

// Number Properties

const a = Number.MAX_VALUE;
const b = Number.MIN_VALUE;
const d = Number.NEGATIVE_INFINITY;
const c = Number.POSITIVE_INFINITY;
const e = Number.NaN;

console.log('a', a);
console.log('b', b);
console.log('d', d);
console.log('c', c);
console.log('e', e);
console.log('e', isNaN(e));

// ACTIVITY
let foo = 4;
let bar = 4.46731;
let foobar = '4';
c1 = Number(foobar);
foo = foo.toString();
bar = bar.toFixed(1);

console.log(`foobar - ${c1}, foo - ${foo}, bar - ${bar}`);


/* *
  *Strings
  */

  const txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const msg = 'A msg';
  console.log(txt.length);
  console.log(msg.length);

  // indexOf()
  const sentence1 = 'Please locate where "locate" occurs!';
  const pos1 = sentence1.indexOf("locate");
  console.log(pos1);
  console.log(sentence1.indexOf('e'));
  console.log(sentence1.indexOf('p'));

  // lastIndexOf()
  const sentence2 = "Please locate where 'locate' occurs!";
  const pos2 = sentence2.lastIndexOf('locate');
  console.log(pos2);
  console.log(sentence2.lastIndexOf('e'));

 // search()
 const sentence3 = "Please locate where 'locate' occurs!";
 const pos3 = sentence2.lastIndexOf('0-9');
 console.log(pos3);

// replace()
const microsoft = 'Please visit Microsoft';
const copyOfMic = microsoft.replace('Microsoft', 'Google');
//console.log(copyofMic);
console.log(microsoft);

// toUpperCase() and toLowerCase()
let hello = 'Hello World!';
const toLower = hello.toLowerCase();
const toUpper = hello.toUpperCase();
console.log('toLower', toLower);
console.log('toUpper', toUpper);

// concat
const he = 'Hello';
const lo = 'world';
console.log(he + ' ' + lo);
console.log(`${he} ${lo}`);
console.log(he.concat(' ', lo));

//charAt()
const ctext = 'HELLO WORLD';
console.log(ctext.charAt(0));
console.log(ctext[0]);


// split()
const txt2 = 'hery | b, | c d esas';
console.log(txt2.split(' '));
console.log(txt2.split('|'));
console.log(txt2.split(','));


// endsWith() and startWith()
const final = 'I start with I and end with i';
console.log(final.startsWith('I')); // true
console.log(final.endsWith('i')); // true
console.log(final.startsWith('s')); // false
console.log(final.endsWith('w')); // false

// slice()
// you can use negative values (to start from backwards)
const str1 = 'Apple, Banana, Kiwi';
const banana = str1.slice(7, 13);
const rest = str1.slice(7);
console.log(banana);
console.log(rest);

// substring()
// it doens't take negative values
const banana2 = str1.substring(7, 13);
console.log(banana2);

// substr()
const banana3 = str1.substr(7, 6);
console.log(banana3);
console.log(str1.substr(7, 10));


// ACTIVITY
const sentence4 = 'I study at skyzone';
const indexOfSkyZone = sentence4.indexOf('skyzone');
console.log(indexOfSkyZone);
console.log(sentence4);

const sen2 = sentence4.replace('skyzone', 'SkyZone');
console.log(sen2);

const sen3 = ' the end';
const sen5 = sentence4.concat(sen3);
console.log(sen5);

const end = sentence4.slice('end');
console.log(end);

console.log(sen2.split('I'));
console.log(sen2.split('study'));
console.log(sen2.split('at'));
console.log(sen2.split('SkyZone'));

// Activity
//let sentence4 = 'Hey this is skyzone js basics';
//const idxOfSkyzone = sentence4.indexOf('skyzone');
//sentence4 = sentence4.replace('skyzone', 'SkyZone');
//sentence4 += ' almost the end'; // concat()
//sentence4 = sentence4.slice(0, sentence4.indexOf(' end'));
//const words = sentence4.split(' ');
// console.log(words);

/**
 * Array methods
 */

// isArray()
const cities = ['NY', 'LA'];
console.log(Array.isArray(cities));
console.log(typeof cities);

// length
console.log(cities.length);

// toString()
console.log(cities.toString());

// join()
console.log(cities.join());
console.log(cities.join('*'));
console.log(cities.join('/'));

// pop()
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.pop(); // remove the last element
const mango = fruits.pop(); // remove and store
console.log(`fruits`, fruits);
console.log(`mango`, mango);

// push()
const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits2.push('Kiwi'); // adds kiwi to the end
console.log(fruits2);
const y = fruits2.push('Kiwi');
console.log(y); // length of new array
console.log(fruits2);

// shift()
const fruits3 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits3.shift();
console.log(fruits3);

// unshift
const fruits4 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits4.unshift('Lemon');
console.log(fruits4);

// splice()
// array.splice(at index, how many to be removed, element to be inserted)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// concat()
const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const arr3 = ['Robin', 'Morgan'];
const myChildren = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3
// const myChildrenES6 = [...arr1, ...arr2, ...arr3];

// slice()
var fruits9 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Orange'];
var citrus = fruits9.slice(1);
var citrus2 = fruits9.slice(1, 3);

// indexOf && lastIndexOf - similar to string methods
console.log(fruits9.indexOf('Orange'));
console.log(fruits9.lastIndexOf('Orange'));

// Iteration Methods

// forEach()
fruits9.forEach((fruit) => {
  console.log(fruit);
});

// reverse();
console.log(fruits9.reverse());

// some()
// returns boolean
const arrayy = [9, 8, 1, 2, 3, 4, 5];

const even = (num) => num % 2 === 0;
const isDivByTwo = arrayy.some(even);
// const isDivByTwo = arrayy.some((num) => num % 2 === 0);
console.log(isDivByTwo);

// sort()
// depends on data type and is more complex
console.log(fruits9.sort());
console.log(arrayy.sort((a, b) => a - b));

// map()
const array1 = [1, 4, 9, 16];
const array1Double = array1.map((num) => num * 2);
console.log(array1Double);

// filter()
const words2 = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'badword',
];

const biggerWords = words2.filter((word) => word.length > 6);
console.log(biggerWords);

const goodWords = words2.filter((word) => word !== 'badword');
console.log(goodWords);

// reduce()
const prices = [1.95, 3, 50.5, 19];

// froEach
let sum = 0;
prices.forEach((price) => {
  sum += price;
});
console.log(sum);

// reduce
const totalSum = prices.reduce((sum, price) => {
  return (sum += price);
  //
}, 0);
console.log(totalSum);

// Example2:
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob'];
let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames); //  { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Example3
var trash = [1, 'bag', 'bottle', 'paper', true];

trash.pop();
trash.push(true);

console.log(trash);

var filteredTrash = trash.filter(function (elem) {
  if (elem == 'bag' || elem == 'bottle') {
    return elem;
  }
});
console.log('filteredTrash:', filteredTrash);
var totallyTrash = trash.concat(filteredTrash);
console.log('totallyTrash:', totallyTrash);
totallyTrash.map(function (elem) {
  // console.log(elem);
});

/**
 * Object methods
 */

// Object.create()

const myCar = {
  model: 'chevy',
  type: 'sport',
  isAvailable: true,
  showDetails() {
    console.log(`My car model is ${this.model}, type is ${this.type}`);
  },
};
console.log(myCar.showDetails());

const yourCar = Object.create(myCar);

console.log(`yourCar`, yourCar);
console.log(`yourCar model`, yourCar.model);
console.log(`yourCar type`, yourCar.type);

yourCar.model = 'some nicer model';
console.log(`yourCar`, yourCar);
yourCar.showDetails();

// hasOwnProperty()

console.log(yourCar.hasOwnProperty('model')); // true
console.log(yourCar.hasOwnProperty('type')); // false
console.log(yourCar.hasOwnProperty('isAvailable')); // false

// Object.keys()
// will return an array

const employees = {
  boss: 'Michael',
  secretary: 'Pam',
  sales: 'Jim',
  engineer: 'Me',
};

const employeesKeys = Object.keys(employees);
console.log(`employeesKeys`, employeesKeys);

// for (let key of Object.keys(employees)) {
//   console.log(key);
// }

// Object.values()
// will return an array

const employeesValues = Object.values(employees);
console.log(`employeesValues`, employeesValues);
// for (let value of Object.values(employees)) {
//   console.log(value);
// }

// Object.entries()
const employeesEntries = Object.entries(employees);
console.log(`employeesEntries`, employeesEntries);

// for (let [key, value] of Object.entries(employees)) {
//   console.log(`key: ${key}, value: ${value}`);
// }

// for (let entries of Object.entries(employees)) {
//   console.log(`key: ${entries[0]}, value: ${entries[1]}`);
// }

// Object.asign()
const name = {
  firstName: 'Ulan',
  lastName: 'Rakymzhanov',
};

const details = {
  job: 'instructor',
  employer: 'worldwide',
};

// const name2 = Object.assign({}, name);
// const name2 = Object.assign({ hobby: 'running' }, name);
const name2 = Object.assign(details, name);
console.log(name2);

// Object.freeze()
const user = {
  username: 'AzureDiamond',
  password: 'hunter2',
};
Object.freeze(user);
user.password = 'updated password';
user.active = true;
console.log(user);

// Object.isFrozen()
console.log(Object.isFrozen(user)); // true
console.log(Object.isFrozen(details)); // false

