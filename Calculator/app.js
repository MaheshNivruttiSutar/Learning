// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Use eval to evaluate the expression
    } catch (e) {
        display.value = 'Error'; // Handle any errors (e.g., invalid input)
    }
}
