// console log activity:
console.log (3+4);
// alert(3+4);
// document.write(3+4);


// statements
/*
console.log ("Hi there");  //statement 1
console.log ("Cat is beatiful"); //statement 2
console.log ("12"); //statement 3
*/

// Variables----------

var language = "My favorite is JavaScript";
console.log(language);
// reassigning a value
language = "my favorite language is Java";
console.log(language);

var sum=4+3;
console.log(sum);

// declaration and initialization
var box; //declare
box=2021; //initialize

console.log(box);

// Activity variables --------------------

var age = 20;
console.log(age);
var year = 2000;
console.log(year);
// alert(age, year);
//  document.write (age,year);
 

// DATA TYPES ----------------
// to check a type of any variables use: typeof
// a. NUMBERS
var a = 10;
// var a = new Number(10);
var b = 3;
var summy = a+b; //addition 
var subby = a-b; //substraction
var mully = a*b; //multiplication
var divvy = a/b; //division
var moddy = a%b; //modulus

 console.log(summy, subby, mully, divvy, moddy);

// console.log('addition', summy);
// console.log('substraction', subby);
// console.log('multiplication', mully);
// console.log('division', divvy);
// console.log('modulus', moddy);


// console.log(typeof a);
// console.log(typeof b);
/*
var inc = a++; //increment
var dec = b--; //decrement

console.log('a', a);
console.log('b', b);
*/
console.log('a', a++);
console.log('b', b--);

// b. String
// loosly typed languege

// var name = "Ulan"; //string
// var message = 'don\'t throw a trash';
// var message = "don't throw a trash";

var name = "Ulan";
var lastName = 'Doe';
var fullName = name + ' ' + lastName;
console.log(fullName);

//  Concatate Number and string

var num = 20;
var num2 = 10;
var text = 'text';

console.log(num + num2 + text); //20+10=30text
console.log(text + num + num2); //text2010


var num = 5;
var num2 = 20;
var text = 'Meka'
 console.log(num + text + num2);
 console.log(num + num2 + text);

//  c. Boolean
//  it only hold 2 values: true or false

var isClassStarted = true;
console.log(true);
// var isClassStarted = false;

//null--> nothing
var nothing = null;
//undefined -> declared but value is not defined
var something;


console.log('nothing', nothing);
console.log('something', something);

console.log('type', typeof nothing); //object
console.log('type', typeof something); //undefined

//compare null and undefined
console.log(null == undefined); //compare loosely
console.log(null == undefined); //object ===undefined

console.log(10 === '10'); // ==loosly comparing
