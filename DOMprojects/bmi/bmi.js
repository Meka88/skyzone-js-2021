const userHeight = document.querySelector('#height');
const userWeight = document.getElementById('weight');
const userResult = document.getElementById('results');
const btn = document.querySelector('#btn');

// Ways of getting elements
// querySelector('.height') , ('#height'), ('button')
// getElementById('elId')


btn.addEventListener('click', (event) => {
    event.preventDefault();
// converting to number    
    const height = Number(userHeight.value);
    const weight = Number(userWeight.value);
// calculate
    const bmi = Number(
        (weight / ((height * height) / 10000)).toFixed(2)
        );
// append
userResult.innerHTML = `<h1>${bmi}</h1>`;
});



