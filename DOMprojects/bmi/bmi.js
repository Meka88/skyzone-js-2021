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



/*
function Calculate() {
  
    // Extracting value in the amount 
    // section in the variable
    const amount = document.querySelector("#amount").value;
  
    // Extracting value in the interest
    // rate section in the variable
    const rate = document.querySelector("#rate").value;
  
    // Extracting value in the months 
    // section in the variable
    const months = document.querySelector("#months").value;
  
    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
      
    // Calculating total payment
    const total = ((amount / months) + interest).toFixed(2);
  
    document.querySelector("#total")
        .innerHTML = "EMI : ($)" + total;
}  */