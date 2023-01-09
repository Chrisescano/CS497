const btn1 = document.getElementById("btnOne");
const btn2 = document.getElementById("btnTwo");
const btn3 = document.getElementById("btnThree");
const btn4 = document.getElementById("btnFour");
const input1 = document.getElementById("input");

btn1.onclick = () => {document.getElementById("paraOne").innerHTML++;};

btn2.onclick = () => {document.getElementById("paraTwo").style.color = "#" + Math.floor(Math.random()*16777215).toString(16);};

btn3.onclick = () => {document.getElementById("divBG").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);};

btn4.onclick = () => {
    let a = Number(document.getElementById("numberOne").value);
    let b = Number(document.getElementById("numberTwo").value);
    document.getElementById("paraThree").innerHTML = a * b;
};

input1.oninput = () => {document.getElementById("paraFour").innerHTML = input1.value};