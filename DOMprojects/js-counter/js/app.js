// 2 buttons
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
// counter
const output = document.querySelector('#counter');

// 2 inputs
const lowerValue = document.querySelector('#lowerValue');
const upperValue = document.querySelector('#upperValue');
// errors
const error = document.querySelector('#errorOutput');

let count = 0;
let lowerVal = 0;
let upperVal = 0;

const setLowerValue = () => {
    lowerValue.addEventListener('change', (e) => {
      const lVal = Number.parseInt(e.target.value);
      if (Number.isNaN(lVal)) {
        error.textContent = 'Please provide correct type to this to work';
      }
      if (lVal > 0) {
        error.textContent =
          'Please provide lower than 0 in order this option to work';
      } else {
        lowerVal = lVal;
        error.textContent = '';
      }
    });
  };
  setLowerValue();
  
  const setUpperValue = () => {
    upperValue.addEventListener('change', (e) => {
      const uVal = Number.parseInt(e.target.value);
      if (Number.isNaN(uVal)) {
        error.textContent = 'Please provide correct type to this to work';
      }
      if (uVal < 0) {
        error.textContent =
          'Please provide bigger than 0 in order this option to work';
      } else {
        upperVal = uVal;
        error.textContent = '';
      }
    });
  };
  setUpperValue();



// solution 2

const trigger = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('prevBtn')) {
          count--;
          if (lowerVal < 0) {
            if (count < lowerVal) {
              count = lowerVal;
              return;
            }
          }
        }
  
        if (button.classList.contains('nextBtn')) {
          count++;
          if (upperVal > 0) {
            if (count > upperVal) {
              // 6 > 5
              // debugger;
              count = upperVal; // 5
              return;
            }
          }
        }
  
        // output the value
        output.textContent = count;
  
        // change color of output depending on value
        if (count < 0) {
          output.style.color = 'red';
        } else if (count > 0) {
          output.style.color = 'green';
        }
      });
    });
  };
  
  trigger();

//when i click nextBtn, increment the output value
//nextBtn.addEventListener('click', () => {
//    count ++;
//    output.textContent = count;
//});

// when i click prevBtn, descrement the output value
//prevBtn.addEventListener('click', () => {
//    let count = Number.parseInt(output.value);
//    console.log(count);
//   count--;
//  output.textContent = `${count}`;
//});