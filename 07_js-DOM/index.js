// Intro

// console.log(document);
// console.log(document.documentElement); // html
// console.log(document.body); // body
// console.log(document.head); // head
// console.log(document.title); // title of the document

// Accessing a DOM

// 1. getElementById()
const contentTitle = document.getElementById('title');
console.log(`contentTitle`, contentTitle);

// 2. getElementByClassName()
const des = document.getElementsByClassName('description');
console.log('description', des[0]);

// ex2:
const fruitsListItems = document.getElementsByClassName('fruit');
// console.log('fruits', fruitsListItems);
// for (let i = 0; i < fruitsListItems.length; i++) {
//   console.log(fruitsListItems[i]);
// }

// 3. getElementsByTagName()
const fruitsListItems2 = document.getElementsByTagName('li');
console.log('fruits2', fruitsListItems2);
// for (let i = 0; i < fruitsListItems2.length; i++) {
//   console.log(fruitsListItems2[i]);
// }

// 4. querySelector()
// will return the first met element
const fruitsListItems3 = document.querySelector('li');
console.log('fruits3', fruitsListItems3);

const googleDivClass = document.querySelector('.box');
const googleDivId = document.querySelector('#box2');
// const googleDivTag = document.querySelector('div');

console.log(`googleDivClass`, googleDivClass);
console.log(`googleDivId`, googleDivId);
// console.log(`googleDivTag`, googleDivTag);

// Hierarchical
const anchorTag = document.querySelector('.box a');
console.log(`anchorTag`, anchorTag);

// Combined
const googleCombined = document.querySelector('div.box');
console.log(`googleCombined`, googleCombined);

// 4.1 querySelectorAll()
const fruitsListItems4 = document.querySelectorAll('li');
console.log('fruits4', fruitsListItems4);
// for (let i = 0; i < fruitsListItems4.length; i++) {
//   console.log(fruitsListItems4[i]);
// }

// Activity: Accessing a DOM
// Create 5 HTML elements of choice.
// 1. getElementById
// 2. getElementByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

/**
 * Change DOM Nodes
 */
// Dot notation
const appleEl = document.querySelector('#appleImg');

console.log(`appleEl.src`, appleEl.src);
console.log(`appleEl.id`, appleEl.id);
console.log(`appleEl.alt`, appleEl.alt);

appleEl.src =
  'https://images.heb.com/is/image/HEBGrocery/000320625-1?$article%2D235%2Dsquare$';

appleEl.alt = '3 apples';

console.log(`appleEl.src`, appleEl.src);
console.log(`appleEl.alt`, appleEl.alt);

// getAttribute and setAttribute
console.log(`source`, appleEl.getAttribute('src'));
console.log(`alt`, appleEl.getAttribute('alt'));

appleEl.setAttribute(
  'src',
  'https://www.friedas.com/wp-content/uploads/2012/05/Friedas-Crab-Apples.jpg'
);
appleEl.setAttribute('alt', '4 apples');

console.log(`source`, appleEl.getAttribute('src'));
console.log(`alt`, appleEl.getAttribute('alt'));

// Styling of DOM elements

const theBody = document.getElementsByTagName('body')[0];
theBody.style.backgroundColor = 'lightgray';
theBody.style.fontSize = '80%';

appleEl.style.width = '200px';
appleEl.style.height = 'auto';

appleEl.style.border = '2px solid gray';
appleEl.style.marginTop = '20px';
appleEl.style.marginLeft = '20px';

// className vs classList
console.log(appleEl.className);
console.log(appleEl.classList);

appleEl.className = 'newAppleClassName';

console.log(appleEl.className);
console.log(appleEl.classList);

appleEl.classList.add('red');

console.log(appleEl.className);
console.log(appleEl.classList);
console.log(appleEl.classList[0]);
console.log(appleEl.classList[1]);

appleEl.classList.remove('newAppleClassName');

console.log(appleEl.className);
console.log(appleEl.classList);

console.log(appleEl.classList.contains('red'));
console.log(appleEl.classList.contains('green'));

appleEl.classList.replace('red', 'green');

console.log(appleEl.className);
console.log(appleEl.classList);

// toggle ex: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dropdown
appleEl.classList.toggle('green'); // removed

console.log(appleEl.className);
console.log(appleEl.classList);

appleEl.classList.toggle('green'); // brought back

console.log(appleEl.className);
console.log(appleEl.classList);

// innerHTML
const greetingBox = document.querySelector('.greeting');
greetingBox.innerHTML = '<h1>Hello World</h1>'; // simlple
greetingBox.innerHTML += '<p>This is hello world</p>'; // do not override

// textContent
const greetingBox2 = document.querySelector('.greeting2');
greetingBox2.textContent = 'Hello World';

// innerText
greetingBox2.innerText = 'Hello World 2';

/**
 * Creating a New Node
 */

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
// const text = document.createTextNode('Do not copy!');
// copyright.appendChild(text);

// appendChild()
copyright.textContent = 'Do not copy!!!';
footer.appendChild(copyright);

// append()
const address = document.createElement('p');
address.textContent = 'Mars';
address.append(' Pluton'); // DOMString ( simply text )
footer.append(address);

// Activity
const theBody2 = document.getElementsByTagName('body')[0];
const div123 = document.createElement('div');
const newH1 = document.createElement('h1');
newH1.textContent = 'hey this is H1';
theBody2.appendChild(div123.appendChild(newH1));

// Events
//addEventListener{}

const btnPrimary = document.getElementById('btn-primary');
const btnSecondary = document.getElementById('btn-primary');

// btnPrimary.addEventListener('click', () => {
//   console.log('button is getting clicked!');
// });

const handleClick = () => {
  console.log('event is activated!');
};
btnPrimary.addEventListener('click', handleClick);

btnSecondary.removeEventListener('click', handleClick);