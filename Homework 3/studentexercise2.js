console.log("--- STUDENT EXERCISE #2 ---");
// Celsius to Fahrenheit

function fahrenheitToCelsius(celsius){
    let result = (celsius * 1.8) + 32;
    return result;
}

function celsiusToFahrenheit(fahrenheits){
    let result = (5/9) * (fahrenheits - 32);
    return result;
}

let userChoice = prompt("Enter F for fahrenheit and C for celsius");
let userInput = parseInt(prompt("Please enter a value:"));

if(userChoice === "F"){
    console.log(`${celsiusToFahrenheit(userInput)} C`);
} else if(userChoice === "C"){
    console.log(`${fahrenheitToCelsius(userInput)} F`);
} else {
    console.log("WRONG VALUE!");
}