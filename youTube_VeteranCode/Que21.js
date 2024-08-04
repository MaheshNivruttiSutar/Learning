/**
 * Que.21 How to convert celsius to fahrenheit or fahrenheit to celsius in javascript?
 *
 *
 */



// //Method 1
// //Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// const celsius = 25;
// const fahrenheit = celsiusToFahrenheit(celsius);
// console.log(`${celsius}°C is ${fahrenheit}°F`);




//Method 1
//Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const fahrenheit = 77;
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is ${celsius}°C`);
