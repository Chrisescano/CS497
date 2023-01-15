/*--Consts/DOM Elements--*/
const wordle = wordList[Math.floor(Math.random()*wordList.length)];
const wordleGrid = document.getElementsByClassName('box');
const wordleRows = document.getElementsByClassName('row');
const root = document.querySelector(':root');
const endOfRow = [4,9,14,19,24,29];

let index = 0;
let row = 0;

/*--Game Functions--*/
function keyboardEvent(event) {
    let key = event.target.innerHTML;

    if(key=='Enter') { //enter logic
        if(index!=endOfRow[row]+1) {
            jitterNotify('Not Enough Letters!',row,800);
        } else {
            const correctLetters = checkInput();
            if(correctLetters<0) {
                jitterNotify("Guess Not in Wordle List!",row,800);
            } else if(correctLetters<10 && row==6) {
                notify(`Game Over! Correct Word was: ${wordle}`,1);
                gameOver();
            } else if(correctLetters==10) {
                notify('Game Over! You Won!',1);
                gameOver();
            }
        }
    } else if(key=='Del') { //del logic
        if((row>0&&index>endOfRow[row-1]+1) || (row==0&&index>0)) {
            index--;
            wordleGrid[index].innerHTML = '';
        }
    } else { //other key logic
        if(index<=endOfRow[row]) {
            wordleGrid[index].innerHTML = key;
            index++
        }
    }
}

function checkInput() {
    const startOfRow = [0,5,10,15,20,25];
    let guess = '';
    let correctLetters = 0;

    for(let i=startOfRow[row]; i<=endOfRow[row]; i++)
        guess+=wordleGrid[i].innerHTML;

    if(wordList.includes(guess)) {
        for(let i=0; i<wordle.length; i++) {
            if(wordle.includes(guess[i])) {
                if(wordle[i]==guess[i]) {
                    boxState(wordleGrid[startOfRow[row]+i], '#6AAA64');
                    correctLetters+=2;
                } else {
                    boxState(wordleGrid[startOfRow[row]+i], '#C9B458');
                    correctLetters++;
                }
            } else { //grey
                boxState(wordleGrid[startOfRow[row]+i], '#7D7D7D');
            }
        }
        row++;
    } else {
        correctLetters--;
    }

    return correctLetters;
}

/*--Helper Functions--*/
function gameOver() {
    let btns = document.getElementsByTagName('button');
    for(let i=0; i<btns.length; i++) {
        btns[i].disabled = true;
    }
}

function boxState(element, color) {
    element.style = `border: 2px solid ${color}`;
    element.style.backgroundColor = color;
    element.style.color = 'white';
}

function jitterNotify(msg, row, timeout) {
    const wordleRow = document.getElementsByClassName('row')[row];

    root.style.setProperty('--scale', 1);
    wordleRow.dataset.tooltip = msg;
    wordleRow.classList.toggle('tooltip');
    wordleRow.classList.toggle('jitter-animate');

    window.setTimeout(function() {
        root.style.setProperty('--scale', 0);
        wordleRow.classList.toggle('tooltip');
        wordleRow.classList.toggle('jitter-animate');
    }, timeout);
}

function notify(msg,row) {
    const wordleRow = document.getElementsByClassName('row')[row];
    root.style.setProperty('--scale', 1);
    wordleRow.dataset.tooltip = msg;
    wordleRow.classList.toggle('tooltip');
}