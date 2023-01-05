let college = 'York College';
const myName = 'Jane Doe';

console.log(college);
console.log(myName);

const favoriteSubject = 'Math';
//Console.log the text "My name is: " follows by myName variable.
console.log("My name is:", myName, ", I go to ", college);
console.log("My name is:" + myName);

//Console.log the text "My college is: " follows by college variable.
console.log("My college is:",college);

//Reassign the value stored in favoriteSubject to the string "Coding", is it possible?
//favoriteSubject = "Coding"; //no not possible

//can you console.log(number1) here?
//console.log(number1); //no since it is assigned later

//Declare a new variable named 'number1' and give it the value of 10.
let number1 = 10;
//Declare a new variable named 'number2' and give it the value of 15.
let number2 = 15;

//console.log the summation of number1 and number2 in the following format
//Expected output: The sum is 25
console.log("Expected output: The sum is",number1 + number2);

//console.log the product of number1 and number2 in the following format
//Expected output: The product is 150
console.log("Expected output: The sum is",number1 * number2);

//Declare a new variable named 'check' and give it the value of true (Boolean).
//console.log check and see the value, try also with false.
let check = true;
console.log(check);

document.getElementById("demo").innerText = "Test";