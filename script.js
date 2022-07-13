const number = document.getElementById('number');
const increase = document.getElementById('in');
const reset = document.getElementById('re');
const decrease = document.getElementById('de');

let num = 0;

number.innerHTML = num;

increase.addEventListener('click', () => {
    num += 1;
    number.innerHTML = num;
    if (num > 0) {
        number.style.color = '#0f0';
    }
})

reset.addEventListener('click', () => {
    num = 0;
    number.innerHTML = num;
    number.style.color = '#fff'
})

decrease.addEventListener('click', () => {
    num -= 1;
    number.innerHTML = num;
    if (num < 0) {
        number.style.color = '#f00'
    }
})