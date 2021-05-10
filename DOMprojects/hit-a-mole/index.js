/*
const score = document.querySelector('#score');
const holes = document.querySelectorAll('.hole');
const playBtn = document.querySelector('.buttons .play');
const stopBtn = document.querySelector('.buttons .stop');

window.addEventListener('mousemove', (e) => {
    console.log(e);
});

playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';

    let hole;
    let score = 0;

    const startGame = setInterval(() => {
        const randomHoleIndex = Math.floor(Math.random() * holes.length);
        holes[randomHoleIndex].classList.toggle('mole');
        console.log(holes);
    }, 700);


    stopBtn.addEventListener('click', () => {
        clearInterval(startGame);
        stopBtn.style.display = 'none';
        playBtn.style.display = 'inline-block';
    });
});*/

let score = 0;
const scoreDisplay = document.getElementById('score');
const holes = document.getElementsByClassName('hole');
setInterval(function() {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle('mole');
}, 300);
const gameArea = document.getElementById('hit-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    scoreDisplay.innerText = score;
  }
});