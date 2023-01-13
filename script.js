
// variáveis que armazenam os elementos html
const spanMin = document.querySelector('.min')
const spanSec = document.querySelector('.sec')

const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const resetButton = document.querySelector('#reset-button');

// variáveis que representam os minutos e segundos
let min = 0;
let sec = 0;

// variável que determina se o contador está pausado ou não
let pause = false;

// esta função atualiza o valor de sec a cada segundo e também atualiza no html por etapa:
const updateSec = () => {
    // primeiro garante que a variável pause seja igual a false
    pause = false;
    // intervalId aramazena o id do intervalo para limpar posteriormente
    const intervalId = setInterval(() => {
        // se pause for falso executa o código
        if (!pause) {
            // se sec for menor que 59 soma mais 1
            // senão min soma mais 1 e sec retorna a zero
            if (sec < 59) {
                sec++
            } else {
                sec = 0
                min++
            }
            //console.log(sec)
            // essa condição somente garante que o número na tela seja de dois digitos mesmo que seja menor que 10
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
        // se pause for verdadeiro limpa o intervalo da função setInterval
        if (pause) {
            clearInterval(intervalId)
        }
    }, 1000)
    // remove o evento do botão click assim que clicado.
    playButton.removeEventListener('click', updateSec);
    // esconde o botão play e mostra o pause e reset
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
    resetButton.style.display = 'inline';
}

// função que pausa o contador
const stopSec = () => {
    // a única tarefa dessa função é tornar pause variável verdadeiro e o resto é executado pelo setInterval
    pause = true;
    
    // adiciona novamente o ouvinte de eventos ao botão play
    playButton.addEventListener('click', updateSec);
    // torna o botão play novamente visível e torna os outros ocultos
    playButton.style.display = 'inline';
    resetButton.style.display = 'none';
    pauseButton.style.display = 'none';
}

// fução que reseta tudo ao estado inicial
const resetSec = () => {
    // torna sec e min como zero
    sec = 0;
    min = 0;
    // os elementos html também voltam ao estágio inicial
    spanMin.innerHTML = '00';
    spanSec.innerHTML = '00';

    playButton.style.display = 'inline';
    resetButton.style.display = 'none';
    pauseButton.style.display = 'none';
    // e chama a função de parar para que o código pare de ser executado
    stopSec()
}

// adiciona os ouvintes de evento pela primeira vez
playButton.addEventListener('click', updateSec);
pauseButton.addEventListener('click', stopSec);
resetButton.addEventListener('click', resetSec);

