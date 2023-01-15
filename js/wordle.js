/*--Consts/DOM Elements--*/
const wordle = wordList[Math.floor(Math.random()*wordList.length)];
const wordleGrid = document.getElementsByClassName('box');
const wordleRows = document.getElementsByClassName('row');
const root = document.querySelector(':root');
const endOfRow = [4,9,14,19,24,29];

let index = 0;
let row = 0;
let win = false;
console.log(wordle);

/*--Functions--*/
function keyboardEvent(event) {
    let key = event.target.innerHTML;

    if(key=='Enter') { //enter logic
        if(index!=endOfRow[row]+1) {
            jitterNotify('Not Enough Letters!',row,800);
        } else {
            win = checkInput();
            if(index==30) {
                jitterNotify(`Game Over! Word was: ${wordle}`,1,2000);
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
    
    if(win) {
        jitterNotify(`Game Over! You Won!`,1,2000);
        gameOver()
    }
}

function checkInput() {
    const startOfRow = [0,5,10,15,20,25];
    let guess = '';
    let winCount = 0;

    for(let i=startOfRow[row]; i<=endOfRow[row]; i++)
        guess+=wordleGrid[i].innerHTML;

    if(wordList.includes(guess)) {
        for(let i=0; i<wordle.length; i++) {
            if(wordle.includes(guess[i])) {
                if(wordle[i]==guess[i]) {
                    boxState(wordleGrid[startOfRow[row]+i], '#6AAA64');
                    winCount++;
                } else {
                    boxState(wordleGrid[startOfRow[row]+i], '#C9B458');
                }
            } else { //grey
                boxState(wordleGrid[startOfRow[row]+i], '#7D7D7D');
            }
        }
        row++;
    } else {
        jitterNotify('Guess Not In Word List!',row,800);
    }
    return state = winCount==5 ? true : false;
}

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