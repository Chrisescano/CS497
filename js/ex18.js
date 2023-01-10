// https://www.w3schools.com/js/js_arrays.asp
//https://www.w3schools.com/jsref/jsref_filter.asp
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_push.asp
const sentenceInput = document.getElementById("sentence");
const wordInput = document.getElementById("word");
const alert = document.getElementById("alert");

const btnAdd = document.getElementById("btnAdd");
const wordList = document.getElementById("wordList");

//word search
sentenceInput.oninput = search;
wordInput.oninput = search;

function search() {
    if(sentenceInput.value.includes(wordInput.value) && wordInput.value.length != 0) {
        alert.innerHTML = "Found";
        alert.setAttribute("class", "alert alert-primary");
    } else {
        alert.innerHTML = "Not Found";
        alert.setAttribute("class", "alert alert-warning");
    }
}

//word list
let wordArray = [];
btnAdd.onclick = () => {
    let word = document.getElementById("word2");

    if(word.value.length != 0) {
        wordArray.push(word.value);
        wordList.innerHTML = wordArray;
        word.value = "";
    }
}