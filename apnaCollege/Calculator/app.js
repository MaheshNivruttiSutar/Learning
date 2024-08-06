// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteDigit() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;

    if (currentValue.length === 1) {
        displayElement.value = '';
    } else {
        displayElement.value = currentValue.slice(0, -1);
    }
}


function calculateResult() {
    const display = document.getElementById('display');

    if (display.value.trim() === '') {
        return; // Do nothing if the display is empty
    }

    try {
        display.value = eval(display.value); // Use eval to evaluate the expression
    } catch (e) {
        display.value = 'Error'; // Handle any errors (e.g., invalid input)
    }
}
