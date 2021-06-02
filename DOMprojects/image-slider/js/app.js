const pictures = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4',
  ];
  const carNames = [
    'Mercedes AMG',
    'Mercedes E Class',
    'BMW',
    'AUDI',
    'Dodge Challenger',
  ];
const carName = document.querySelector('.car-name');
carName.textContent = carNames[0];

const btnLeft = document.querySelector('#icon-left');
const bntRight = document.querySelector('#icon-right');
const imgContainer = document.querySelector('.img-container');

let count = 0;

// left button
const imgSlide = (index) =>{
  btnLeft.addEventListener('click', () => {
    index--;
    if (index < 0) {
      index = pictures.length - 1;
    };
    imgContainer.style.background = `url('./img/${pictures[index]}.jpeg')`;
    carName.textContent = carNames[index];
  });
// right button
  bntRight.addEventListener('click', () => {
    index++;
    if (index === pictures.length) {
      index = 0;
    };
    imgContainer.style.background = `url('./img/${pictures[index]}.jpeg')`; 
    carName.textContent = carNames[index]; 
  });
};
imgSlide(count);

function click() {
  bntRight.click()
 }
 for (let index = 0; index < 3; index++) {
   setTimeout(() => {
    click();
   }, 800)
 }

const playBtn = document.querySelector('playBtn');
const stopBtn = document.querySelector('stopBtn');
const allIntervals = [];
 // 1. click right arrow with interval
 // 2. addeventlistener to play button to start 1.
 // 3. addeventlistener to stop button to stop click in.
 // 4. ask Ulan how to collect intervals 
 const playFunc = function(){
  const timer = setInterval(() => {
      rightArrow.click();
  }, 900);
  allIntervals.push(timer);
};
 playBtn.addEventListener('click', playFunc);

 stopBtn.addEventListener('click', () => {
     allIntervals.forEach(clearInterval);
 });


 