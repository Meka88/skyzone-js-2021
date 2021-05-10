// childNodes vs children

console.log('child Nodes', document.childNodes);
console.log('children', document.children);
const childNodes = document.childNodes;
const children = document.children;

// for (let i = 0; i < childNodes.length; i++) {
//   const node = childNodes[i];
//   console.log('node', node);
// }

// for (let i = 0; i < children.length; i++) {
//   const node = children[i];
//   console.log('node', node);
// }

// childNodes.forEach((node) => {
//   console.log('node', node);
// });
// children.forEach((node) => {
//   console.log('node', node);
// }); // error

// FROM NOW ON ---------------------------------------------------------------------------------
// just an example from: https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom

const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];
const ul = document.getElementsByTagName('ul')[0];

/**
 * parentNode	=> Parent Node
 * parentElement	=> Parent Element Node
 */

console.log(p.parentNode);
console.log(p.parentNode.parentNode);

// Assign html object to html variable
const html = document.documentElement;
console.log(html.parentNode); // > #document
console.log(html.parentElement); // > null

/**
 * childNodes	=> Child Nodes
 * firstChild	=> First Child Node
 * lastChild	=> Last Child Node
 * children	=> Element Child Nodes
 * firstElementChild	=> First Child Element Node
 * lastElementChild	=> Last Child Element Node
 */

console.log(ul.childNodes);
// ul.firstElementChild.style.background = 'yellow';
for (let element of ul.children) {
  element.style.background = 'yellow';
}

/**
 * previousSibling	=> Previous Sibling Node
 * nextSibling	=> Next Sibling Node
 * previousElementSibling	=> Previous Sibling Element Node
 * nextElementSibling	=> Next Sibling Element Node
 */

const tiger = ul.children[1];
tiger.nextElementSibling.style.background = 'coral';
tiger.previousElementSibling.style.background = 'aquamarine';