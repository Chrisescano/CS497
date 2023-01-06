//https://www.w3schools.com/js/js_function_definition.asp

function handleClickNumber() {
    let value = document.getElementById("input").value;
    document.getElementById("btn1").innerText = value;
}

function handleCheckWeather() {
    let weather = document.getElementById("temp").value;
    let output = (weather<32) ? "Freezing Weather" : 
                 (weather<42) ? "Very Cold Weather" : 
                 (weather<52) ? "Cold Weather" : 
                 (weather<62) ? "Its a nice day" : "Its a warm today";
    document.getElementById("weather").innerText = output;
}