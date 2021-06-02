// CLASS JS-INTRO

console.log (2+3);
console.log('hello world!');
console.log(20-(5*3));

var name = 'My name is Meka';
console.log(name);

var div=25/5;
console.log(div);
//alert(div);
//document.write(div);

var x=15;
var y=12;
var summy = x+y;
var subby = x-y;
var mully = x*y;
var divvy = x/y;
var moddy = x%y;
console.log(summy, subby, mully, divvy, moddy);
console.log(typeof x);

var lastName = 'Dame';
var name = 'Norma';
console.log(name, lastName);

console.log(name + summy);
console.log(x + y + lastName);

var isNumberConfirmed = true;
console.log(true);
console.log(false);
var price;
console.log(price);
console.log('type', typeof price);
var nana = null;
console.log(nana);
console.log('type', typeof nana);

// INTRO-CONTINUE
var confirmMeat = false;
var meatKind = 'beef';
var meatKind2 = 'lamb';

if(confirmMeat === false) {
    console.log('You like ' + meatKind + '!');
} 
if(confirmMeat !== true) {
     console.log('You like ' + meatKind2 + '!');
 }

var num = 6;
if(num < 3) {
    console.log('big number');
} else {
    console.log('little number');
}

var num3 = 27;
if (num3 > 35) {
    console.log('big number');
} else if (num3 > 8 && num3 < 54) {
    console.log('little number');
} else {
    console.log('negative number');
}

