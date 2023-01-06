//branches and conditionals
// let x = document.getElementById('input').value;
// let y = prompt("enter a number: ");
// console.log(x);
// console.log(y);
// console.log(typeof(x));
// console.log(typeof(y));

// let show = (x == 5) ? "YES" : "NO";
// console.log(show);


//Task1. Write a JavaScript code that will check a variable age. Prompt the age from the user. 
//If itâ€™s greater than 18 output to the console â€œOld Enoughâ€, otherwise output â€œToo Young!â€. 
//Use console.log() for this question.

let age = prompt("Enter your age: ");
let valid = isNaN(age) ? "Not a number!" : (age > 18) ? "Old Enough" : "Too Young";
console.log(valid);

//Task2. Write a JavaScript code that will check the variable temperature. 

// Temperature range    |	Text
// Temp < 32	        | Freezing weather
// Between 32 and 41	| Very Cold weather
// Between 42 and 51	| Cold weather
// Between 52 and 61	| Itâ€™s nice today!
// Above 61	            | Itâ€™s warm today!

let weather = document.getElementById("temp").value;
let output = (weather<32) ? "Freezing Weather" : 
             (weather<42) ? "Very Cold Weather" : 
             (weather<52) ? "Cold Weather" : 
             (weather<62) ? "Its a nice day" : "Its a warm today";
document.getElementById("weather").innerText = output;