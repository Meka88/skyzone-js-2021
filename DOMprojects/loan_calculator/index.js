// 1. capture all inputs
// 2. calculation logic
// 3. output result

/*
const amount = document.querySelector('#amount');
const rate = document.querySelector('#rate');
const months = document.querySelector('#months');
const total = document.querySelector('.total');
/*
// Monthly payment = (amount*rate)/ month
function Calculate () {
    console.log(amount.value);
    console.log(rate.value);
    console.log(months.value);

    if(months == '0') {
        // say month can't be zero
    } else {
        // calculate and show
    }
    const totalAmount = (amount.value * rate.value)/ months.value;
    total.textContent = `You monthly total: ${totalAmount}`
}*/

//amount.addEventListener('change', Calculate);
//rate.addEventListener('change', Calculate);
// months.addEventListener('change', Calculate);


//const confirmBtn = document.createElement('Button');
//confirmBtn.textContent = 'Calculate';
//document.querySelector('.container').append(confirmBtn);

// add event listener to button

// make button disabled
// check if all values present
// then make button active

// check all values
// if any value is empty '', 
// make button disabled
/*
confirmBtn.addEventListener('click', (calculate) =>{
    const amount = Number(amount);
    const rate = Number(rate.value);
    const months = Number(months.value);
    const interest = (amount * (rate * 0.01)) / months;
    const total = ((amount / months) + interest).toFixed(2);
    document.querySelector(".total")
        total.innerHTML = "EMI : ($)" + total;
});*/

const amountInput = document.getElementById('amount');
const rateInput = document.getElementById('amount');
const monthsInput = document.getElementById('months');
const total = document.getElementById('total');

const calculateMonthlyPayment = () => {
    return (amountInput.value * (rateInput.value / 100)) / monthsInput.value;
};

const confirmBtn = document.createElement('Button');
confirmBtn.textContent = 'Calculate';
document.querySelector('main').append(confirmBtn);

confirmBtn.addEventListener('click', (event) => {
    if (amountInput.value === '' || rateInput.value === '' || monthsInput.value === '') {
        alert('You need to provide all input values!');
    } else {
        if (isNaN(amountInput.value) || isNaN(rateInput.value) || Number.isNaN(monthsInput.value)) {
            alert('Inputs should be numeric values!');
        } else {
            const monthlyPayment = (amountInput.value * (rateInput.value / 100)) / monthsInput.value;
            total.textContent += ` ${monthlyPayment}`;
            console.log(monthlyPayment);
        }
    }
});
