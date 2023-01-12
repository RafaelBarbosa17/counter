
const spanMin = document.querySelector('.min')
const spanSec = document.querySelector('.sec')

const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const resetButton = document.querySelector('#reset-button');

let min = 0;
let sec = 0;

let pause = false;

const updateSec = () => {
    pause = false;
    const intervalId = setInterval(() => {
        if (!pause) {
            if (sec < 59) {
                sec++
            } else {
                sec = 0
                min++
            }
            console.log(sec)
            if (sec < 10) {
                spanSec.innerHTML = `0${sec}`;
            } else {
                spanSec.innerHTML = `${sec}`;
            }
            if (min < 10) {
                spanMin.innerHTML = `0${min}`;
            } else {
                spanMin.innerHTML = `${min}`;
            }
        }
        if (pause) {
            clearInterval(intervalId)
        }
    }, 1000)
    playButton.removeEventListener('click', updateSec);
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
    resetButton.style.display = 'inline';
}

const stopSec = () => {
    pause = true;
    
    playButton.addEventListener('click', updateSec);
    playButton.style.display = 'inline';
    resetButton.style.display = 'none';
    pauseButton.style.display = 'none';
}

const resetSec = () => {

    sec = 0;
    min = 0;
    spanMin.innerHTML = '00';
    spanSec.innerHTML = '00';

    playButton.style.display = 'inline';
    resetButton.style.display = 'none';
    pauseButton.style.display = 'none';
    stopSec()
}

playButton.addEventListener('click', updateSec);
pauseButton.addEventListener('click', stopSec);
resetButton.addEventListener('click', resetSec);

