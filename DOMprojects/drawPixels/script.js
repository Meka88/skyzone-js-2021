// 1. create new elements(tr, td)
// 2. make rows
// 3. add color classes
// 4. event delegation to table element. 
// Write a function called colorize and attach it as the click handler for the parent element. 
// For now, simply log out the string "clicked!"
// 5. event target
// 6. switching colors: change event, choosing color

const table = document.getElementsByTagName('table')[0];
const addRowBtn = document.getElementById('add-row');
const select = document.getElementsByTagName('select')[0];
let chosenColor = 'red';
const makeRow = () => {
    const row = document.createElement('tr');
    for (let idx = 0; idx < 20; idx++) {
        const td = document.createElement('td');
        row.appendChild(td);
    }
    table.appendChild(row);
}
const colorize = (event) => {
    const target = event.target;
    if(target.tagName !== 'TD') {
        return;
    }
    if(target.className === chosenColor) {
        target.className = '';
    } else {
        target.className = chosenColor;
    }
}
const pickColor = (event) => {
    chosenColor = event.target.value;
}
const addMouseOver = () => {
    table.addEventListener('mouseover', colorize)
}
const removeMouseOver = () => {
    table.removeEventListener('mouseover', colorize);
}
addRowBtn.addEventListener('click', makeRow);
table.addEventListener('click', colorize);
select.addEventListener('change', pickColor);
table.addEventListener('mousedown', addMouseOver);
table.addEventListener('mouseup', removeMouseOver);


